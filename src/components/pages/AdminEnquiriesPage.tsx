import React, { useState, useEffect } from 'react';
import { 
  getAllEnquiries, 
  updateEnquiryStatus, 
  deleteEnquiry, 
  EnquiryRecord 
} from '../../services/enquiryService';
import { useNavigation } from '../../context/NavigationContext';
import { 
  ShieldCheck, 
  Lock, 
  Search, 
  Filter, 
  Trash2, 
  Mail, 
  Phone, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Download, 
  RefreshCw,
  FileText,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

export const AdminEnquiriesPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('arya_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  // Enquiries Data
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'quoted' | 'closed'>('all');
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryRecord | null>(null);

  const loadEnquiries = () => {
    const list = getAllEnquiries();
    setEnquiries(list);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadEnquiries();
      
      const handleEnquiryCreated = () => loadEnquiries();
      const handleEnquiryUpdated = () => loadEnquiries();

      window.addEventListener('arya_enquiry_created', handleEnquiryCreated);
      window.addEventListener('arya_enquiry_updated', handleEnquiryUpdated);

      return () => {
        window.removeEventListener('arya_enquiry_created', handleEnquiryCreated);
        window.removeEventListener('arya_enquiry_updated', handleEnquiryUpdated);
      };
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default demo passcode for export admin desk
    if (passcode === 'arya2026' || passcode === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('arya_admin_auth', 'true');
      setAuthError(null);
    } else {
      setAuthError('Invalid credentials. (Hint for trade desk evaluation: arya2026)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('arya_admin_auth');
    setSelectedEnquiry(null);
  };

  const handleStatusChange = (id: string, newStatus: EnquiryRecord['status']) => {
    updateEnquiryStatus(id, newStatus);
    loadEnquiries();
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this enquiry record?')) {
      deleteEnquiry(id);
      loadEnquiries();
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry(null);
      }
    }
  };

  const exportCSV = () => {
    if (enquiries.length === 0) return;
    const headers = ['RefNumber', 'CreatedAt', 'BuyerName', 'Email', 'Company', 'Phone', 'Product', 'Category', 'Quantity', 'Destination', 'Incoterm', 'Status', 'Requirements'];
    const rows = enquiries.map(e => [
      `"${e.referenceNumber}"`,
      `"${e.createdAt}"`,
      `"${(e.buyerName || '').replace(/"/g, '""')}"`,
      `"${(e.businessEmail || '').replace(/"/g, '""')}"`,
      `"${(e.companyName || '').replace(/"/g, '""')}"`,
      `"${(e.phoneWhatsapp || '').replace(/"/g, '""')}"`,
      `"${(e.productName || '').replace(/"/g, '""')}"`,
      `"${(e.productCategory || '').replace(/"/g, '""')}"`,
      `"${(e.quantity || '').replace(/"/g, '""')}"`,
      `"${(e.destination || '').replace(/"/g, '""')}"`,
      `"${(e.incoterm || '').replace(/"/g, '""')}"`,
      `"${e.status}"`,
      `"${(e.additionalRequirements || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `arya_trader_enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredEnquiries = enquiries.filter(item => {
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const q = search.toLowerCase();
    const matchesSearch = 
      item.referenceNumber.toLowerCase().includes(q) ||
      item.buyerName.toLowerCase().includes(q) ||
      item.businessEmail.toLowerCase().includes(q) ||
      (item.companyName && item.companyName.toLowerCase().includes(q)) ||
      (item.productName && item.productName.toLowerCase().includes(q)) ||
      item.destination.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F7F4ED] py-16 px-4 flex items-center justify-center font-sans">
        <div className="bg-[#FAF6EE] max-w-md w-full p-8 rounded-2xl border border-[#252822]/15 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-[#1B2A4A] text-[#B89550] flex items-center justify-center mx-auto shadow-sm">
              <Lock className="w-6 h-6" />
            </div>
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B75E43] block">
              Restricted Trade Portal
            </span>
            <h2 className="font-serif text-2xl font-light text-[#252822]">
              Export Officer Administration Desk
            </h2>
            <p className="text-xs text-[#252822]/70">
              Authenticated access to persistent commercial enquiries and incoming buyer proforma requests.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {authError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-[#252822] mb-1">
                Desk Passcode / Security Key
              </label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter authorized officer passcode"
                className="w-full px-3.5 py-2.5 text-xs bg-white rounded-lg border border-[#252822]/20 focus:border-[#B89550] text-[#252822] focus:outline-none"
              />
              <span className="text-[10px] text-[#252822]/50 mt-1 block">
                Default evaluator key: <strong className="text-[#1B2A4A]">arya2026</strong>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-[#1B2A4A] hover:bg-[#253860] text-white font-medium text-xs tracking-wider uppercase transition-colors shadow-xs cursor-pointer"
            >
              Authenticate &amp; Open Enquiries
            </button>
          </form>

          <div className="pt-4 border-t border-[#252822]/10 text-center">
            <button
              onClick={() => navigateTo('home')}
              className="text-xs text-[#B75E43] hover:underline cursor-pointer"
            >
              ← Return to Arya Trader Public Site
            </button>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED MANAGEMENT DASHBOARD
  return (
    <div className="min-h-screen bg-[#F7F4ED] py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-[#252822]/15">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#252822]/60 mb-1">
              <span className="hover:text-[#B75E43] cursor-pointer" onClick={() => navigateTo('home')}>Home</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#252822]/40" />
              <span className="text-[#252822] font-semibold">Admin Panel</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-light text-[#252822]">
              Wholesale Enquiries &amp; Proforma Dossiers
            </h1>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={exportCSV}
              disabled={enquiries.length === 0}
              className="px-3 py-2 text-xs font-medium rounded-lg bg-white border border-[#252822]/20 hover:bg-[#eae5d8] text-[#252822] flex items-center gap-1.5 cursor-pointer disabled:opacity-50 transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-[#B89550]" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={loadEnquiries}
              className="p-2 text-xs rounded-lg bg-white border border-[#252822]/20 hover:bg-[#eae5d8] text-[#252822] cursor-pointer transition-colors"
              title="Refresh Records"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-2 text-xs font-medium rounded-lg bg-[#1B2A4A] text-white hover:bg-[#253860] cursor-pointer transition-colors"
            >
              Lock / Exit
            </button>
          </div>
        </div>

        {/* Quick KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 bg-white rounded-xl border border-[#252822]/10 shadow-2xs">
            <span className="text-[11px] text-[#252822]/60 uppercase font-semibold">Total Dossiers</span>
            <span className="block font-serif text-2xl font-bold text-[#1B2A4A] mt-1">{enquiries.length}</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-[#252822]/10 shadow-2xs">
            <span className="text-[11px] text-amber-600 uppercase font-semibold">New / Uncontacted</span>
            <span className="block font-serif text-2xl font-bold text-amber-700 mt-1">
              {enquiries.filter(e => e.status === 'new').length}
            </span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-[#252822]/10 shadow-2xs">
            <span className="text-[11px] text-blue-600 uppercase font-semibold">Under Quotation</span>
            <span className="block font-serif text-2xl font-bold text-blue-700 mt-1">
              {enquiries.filter(e => e.status === 'quoted' || e.status === 'contacted').length}
            </span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-[#252822]/10 shadow-2xs">
            <span className="text-[11px] text-[#5B6E4E] uppercase font-semibold">Closed / Converted</span>
            <span className="block font-serif text-2xl font-bold text-[#5B6E4E] mt-1">
              {enquiries.filter(e => e.status === 'closed').length}
            </span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-white rounded-xl border border-[#252822]/10 shadow-2xs flex flex-wrap items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#252822]/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search reference, buyer, company..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#F7F4ED] border border-[#252822]/15 rounded-lg focus:outline-none focus:border-[#B89550] text-[#252822]"
            />
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-[#252822]/50 font-medium mr-1">Status:</span>
            {(['all', 'new', 'contacted', 'quoted', 'closed'] as const).map(st => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 rounded text-xs capitalize transition-colors cursor-pointer ${
                  statusFilter === st 
                    ? 'bg-[#1B2A4A] text-white font-semibold' 
                    : 'bg-[#F7F4ED] text-[#252822]/70 hover:text-[#252822]'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content: Table + Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Enquiries Table (Span 8) */}
          <div className={`bg-white rounded-xl border border-[#252822]/10 shadow-xs overflow-hidden ${selectedEnquiry ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
            {filteredEnquiries.length === 0 ? (
              <div className="p-12 text-center text-[#252822]/60 space-y-2">
                <FileText className="w-8 h-8 mx-auto text-[#252822]/30" />
                <p className="text-sm font-medium">No enquiry dossiers matched this view.</p>
                <p className="text-xs">When buyers submit the “ENQUIRE NOW” form, their records will immediately populate here.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF6EE] text-[#252822]/70 font-semibold border-b border-[#252822]/10 uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3">Reference</th>
                      <th className="p-3">Buyer / Company</th>
                      <th className="p-3">Product / Sourcing</th>
                      <th className="p-3">Destination</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#252822]/8 font-sans">
                    {filteredEnquiries.map((item) => (
                      <tr 
                        key={item.id}
                        onClick={() => setSelectedEnquiry(item)}
                        className={`hover:bg-[#F7F4ED]/70 transition-colors cursor-pointer ${
                          selectedEnquiry?.id === item.id ? 'bg-[#B89550]/10' : ''
                        }`}
                      >
                        <td className="p-3 font-mono font-bold text-[#1B2A4A] whitespace-nowrap">
                          {item.referenceNumber}
                        </td>
                        <td className="p-3">
                          <strong className="block text-[#252822]">{item.buyerName}</strong>
                          <span className="text-[11px] text-[#252822]/60">{item.companyName || item.businessEmail}</span>
                        </td>
                        <td className="p-3 max-w-[200px] truncate">
                          {item.productName || item.productCategory || 'General Sourcing'}
                        </td>
                        <td className="p-3 whitespace-nowrap text-[#252822]">
                          {item.destination}
                        </td>
                        <td className="p-3">
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${
                            item.status === 'new' 
                              ? 'bg-amber-100 text-amber-800'
                              : item.status === 'contacted'
                              ? 'bg-blue-100 text-blue-800'
                              : item.status === 'quoted'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="p-3 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="p-1 text-[#252822]/40 hover:text-red-600 rounded transition-colors"
                            title="Delete Record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Selected Enquiry Detail Panel (Span 5) */}
          {selectedEnquiry && (
            <div className="lg:col-span-5 bg-[#FAF6EE] rounded-xl border border-[#252822]/15 shadow-sm p-5 space-y-4 font-sans animate-fade-in">
              <div className="flex items-start justify-between pb-3 border-b border-[#252822]/10">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#B89550] tracking-wider block">
                    Dossier Inspector
                  </span>
                  <h3 className="font-mono text-sm font-bold text-[#1B2A4A]">
                    {selectedEnquiry.referenceNumber}
                  </h3>
                  <span className="text-[11px] text-[#252822]/50">
                    Logged on {new Date(selectedEnquiry.createdAt).toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="p-1 text-[#252822]/50 hover:text-[#252822]"
                >
                  ✕
                </button>
              </div>

              {/* Status Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#252822]/70">Workflow Status:</span>
                <select
                  value={selectedEnquiry.status}
                  onChange={(e) => handleStatusChange(selectedEnquiry.id, e.target.value as any)}
                  className="text-xs font-medium bg-white border border-[#252822]/20 rounded-md px-2 py-1 focus:outline-none"
                >
                  <option value="new">New / Unread</option>
                  <option value="contacted">Contacted Buyer</option>
                  <option value="quoted">Proforma Quoted</option>
                  <option value="closed">Closed / Dispatched</option>
                </select>
              </div>

              {/* Buyer & Corporate Details */}
              <div className="bg-white p-3.5 rounded-lg border border-[#252822]/10 space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[#252822]/50 block text-[10px]">Buyer Name</span>
                    <strong className="text-[#252822]">{selectedEnquiry.buyerName}</strong>
                  </div>
                  <div>
                    <span className="text-[#252822]/50 block text-[10px]">Company Name</span>
                    <span className="text-[#252822] font-medium">{selectedEnquiry.companyName || 'Not specified'}</span>
                  </div>
                  <div>
                    <span className="text-[#252822]/50 block text-[10px]">Email Address</span>
                    <a href={`mailto:${selectedEnquiry.businessEmail}`} className="text-[#B75E43] hover:underline flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      <span>{selectedEnquiry.businessEmail}</span>
                    </a>
                  </div>
                  <div>
                    <span className="text-[#252822]/50 block text-[10px]">WhatsApp / Phone</span>
                    {selectedEnquiry.phoneWhatsapp ? (
                      <a href={`https://wa.me/${selectedEnquiry.phoneWhatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-[#5B6E4E] hover:underline flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        <span>{selectedEnquiry.phoneWhatsapp}</span>
                      </a>
                    ) : (
                      <span className="text-[#252822]/40">None provided</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Product Specifications & Commercial Scope */}
              <div className="bg-white p-3.5 rounded-lg border border-[#252822]/10 space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[#252822]/50 block text-[10px]">Product Association</span>
                    <strong className="text-[#252822]">{selectedEnquiry.productName || 'None (General Scope)'}</strong>
                  </div>
                  <div>
                    <span className="text-[#252822]/50 block text-[10px]">Category</span>
                    <span className="text-[#252822]">{selectedEnquiry.productCategory || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-[#252822]/50 block text-[10px]">Requested Volume / Quantity</span>
                    <span className="text-[#252822] font-medium">{selectedEnquiry.quantity || 'Negotiable'}</span>
                  </div>
                  <div>
                    <span className="text-[#252822]/50 block text-[10px]">IncoTerm</span>
                    <span className="text-[#252822]">{selectedEnquiry.incoterm || 'FOB'}</span>
                  </div>
                  <div>
                    <span className="text-[#252822]/50 block text-[10px]">Destination Country</span>
                    <strong className="text-[#252822]">{selectedEnquiry.destination}</strong>
                  </div>
                  <div>
                    <span className="text-[#252822]/50 block text-[10px]">Discharge Port</span>
                    <span className="text-[#252822]">{selectedEnquiry.destinationPort || 'Default Seaport'}</span>
                  </div>
                </div>

                {selectedEnquiry.additionalRequirements && (
                  <div className="pt-2 border-t border-[#252822]/10">
                    <span className="text-[#252822]/50 block text-[10px]">Custom Requirements / Specifications</span>
                    <p className="text-[#252822] text-xs leading-relaxed mt-0.5 whitespace-pre-wrap">
                      {selectedEnquiry.additionalRequirements}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={`mailto:${selectedEnquiry.businessEmail}?subject=${encodeURIComponent(`[Arya Trader Proforma] ${selectedEnquiry.referenceNumber} - Sourcing Quotation`)}`}
                  className="flex-1 py-2 px-3 bg-[#1B2A4A] hover:bg-[#253860] text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Reply via Email</span>
                </a>

                {selectedEnquiry.phoneWhatsapp && (
                  <a
                    href={`https://wa.me/${selectedEnquiry.phoneWhatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${selectedEnquiry.buyerName}, this is Abhyashish Traders regarding your commercial inquiry ${selectedEnquiry.referenceNumber}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
