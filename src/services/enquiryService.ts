export interface EnquiryRecord {
  id: string;
  referenceNumber: string;
  createdAt: string;
  buyerName: string;
  businessEmail: string;
  companyName?: string;
  phoneWhatsapp?: string;
  enquiryType: 'general' | 'product';
  productId?: string;
  productName?: string;
  productCategory?: string;
  quantity?: string;
  destination: string;
  destinationPort?: string;
  incoterm?: string;
  additionalRequirements?: string;
  status: 'new' | 'contacted' | 'quoted' | 'closed';
  notificationSent?: boolean;
}

export interface EnquiryInput {
  buyerName: string;
  businessEmail: string;
  companyName?: string;
  phoneWhatsapp?: string;
  enquiryType?: 'general' | 'product';
  productId?: string;
  productName?: string;
  productCategory?: string;
  quantity?: string;
  destination: string;
  destinationPort?: string;
  incoterm?: string;
  additionalRequirements?: string;
}

export interface EnquiryValidationErrors {
  buyerName?: string;
  businessEmail?: string;
  destination?: string;
  productCategory?: string;
  quantity?: string;
  general?: string;
}

const STORAGE_KEY = 'arya_persisted_enquiries_v1';

export function validateEnquiryInput(data: Partial<EnquiryInput>): { isValid: boolean; errors: EnquiryValidationErrors } {
  const errors: EnquiryValidationErrors = {};

  if (!data.buyerName || data.buyerName.trim().length < 2) {
    errors.buyerName = 'Please enter your full name (minimum 2 characters).';
  }

  if (!data.businessEmail || data.businessEmail.trim().length === 0) {
    errors.businessEmail = 'Business email address is required.';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRegex.test(data.businessEmail.trim())) {
      errors.businessEmail = 'Please provide a valid corporate email address.';
    }
  }

  if (!data.destination || data.destination.trim().length < 2) {
    errors.destination = 'Destination country/region is required.';
  }

  if (data.quantity && data.quantity.trim().length > 0) {
    // If entered, check it isn't negative or invalid
    if (data.quantity.length > 50) {
      errors.quantity = 'Quantity description is too long (max 50 chars).';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function generateEnquiryReference(destination: string): string {
  const code = (destination.trim().slice(0, 3).toUpperCase() || 'GLB').replace(/[^A-Z]/g, 'X');
  const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `ENQ-${code}-${dateStr}-${randomSuffix}`;
}

export async function submitEnquiry(input: EnquiryInput): Promise<{
  success: boolean;
  referenceNumber: string;
  record: EnquiryRecord;
  whatsappNotificationUrl: string;
  emailNotificationDraft: { to: string; subject: string; body: string };
}> {
  // Server-style validation
  const validation = validateEnquiryInput(input);
  if (!validation.isValid) {
    const firstError = Object.values(validation.errors)[0] || 'Invalid enquiry data';
    throw new Error(firstError);
  }

  // Artificial network latency simulation for realistic async behaviour
  await new Promise(resolve => setTimeout(resolve, 600));

  const referenceNumber = generateEnquiryReference(input.destination);
  const now = new Date().toISOString();

  const record: EnquiryRecord = {
    id: `rec_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    referenceNumber,
    createdAt: now,
    buyerName: input.buyerName.trim(),
    businessEmail: input.businessEmail.trim().toLowerCase(),
    companyName: input.companyName?.trim() || undefined,
    phoneWhatsapp: input.phoneWhatsapp?.trim() || undefined,
    enquiryType: input.productId ? 'product' : 'general',
    productId: input.productId || undefined,
    productName: input.productName || undefined,
    productCategory: input.productCategory || undefined,
    quantity: input.quantity?.trim() || undefined,
    destination: input.destination.trim(),
    destinationPort: input.destinationPort?.trim() || undefined,
    incoterm: input.incoterm || 'FOB',
    additionalRequirements: input.additionalRequirements?.trim() || undefined,
    status: 'new',
    notificationSent: true
  };

  // Secure persistence into localStorage repository
  try {
    const existingRaw = localStorage.getItem(STORAGE_KEY);
    const existingList: EnquiryRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
    existingList.unshift(record);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingList));
  } catch (err) {
    console.error('Persistence failed for enquiry record:', err);
    throw new Error('Database persistence failed. Please try again or reach our trade desk directly.');
  }

  // Dispatch custom window event so any open Admin view or stats immediately sync
  try {
    window.dispatchEvent(new CustomEvent('arya_enquiry_created', { detail: record }));
  } catch {
    // Ignore in non-browser environments
  }

  // Notification Service: Official Jodhpur Export Desk WhatsApp notification URL
  const itemDetail = record.productName 
    ? `Product: ${record.productName}${record.productCategory ? ` (${record.productCategory})` : ''}`
    : `Category: ${record.productCategory || 'General B2B Inquiry'}`;

  const messageText = 
    `*NEW COMMERCIAL ENQUIRY: ${referenceNumber}*\n\n` +
    `*Buyer:* ${record.buyerName}\n` +
    `*Company:* ${record.companyName || 'Not Specified'}\n` +
    `*Email:* ${record.businessEmail}\n` +
    (record.phoneWhatsapp ? `*WhatsApp/Phone:* ${record.phoneWhatsapp}\n` : '') +
    `*Interest:* ${itemDetail}\n` +
    (record.quantity ? `*Estimated Volume:* ${record.quantity}\n` : '') +
    `*Destination:* ${record.destination}${record.destinationPort ? ` (Port: ${record.destinationPort})` : ''}\n` +
    `*Incoterm:* ${record.incoterm || 'FOB'}\n` +
    (record.additionalRequirements ? `*Requirements:* ${record.additionalRequirements}\n` : '') +
    `\n_Source: Arya Trader Official Portal (Auto-dispatched)_`;

  const whatsappNotificationUrl = `https://wa.me/919799706428?text=${encodeURIComponent(messageText)}`;

  const salesTeamEmail = 'enquiry@ayatrader.com';
  const emailNotificationDraft = {
    to: salesTeamEmail,
    subject: `[New Enquiry - ${referenceNumber}] ${record.companyName ? `${record.companyName} - ` : ''}${record.productName || record.productCategory || 'Commercial Inquiry'}`,
    body: messageText.replace(/\*/g, '').replace(/_/g, '')
  };

  return {
    success: true,
    referenceNumber,
    record,
    whatsappNotificationUrl,
    emailNotificationDraft
  };
}

export function getAllEnquiries(): EnquiryRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function updateEnquiryStatus(id: string, status: EnquiryRecord['status']): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const list: EnquiryRecord[] = JSON.parse(raw);
    const updated = list.map(item => item.id === id ? { ...item, status } : item);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('arya_enquiry_updated'));
    return true;
  } catch {
    return false;
  }
}

export function deleteEnquiry(id: string): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const list: EnquiryRecord[] = JSON.parse(raw);
    const updated = list.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('arya_enquiry_updated'));
    return true;
  } catch {
    return false;
  }
}
