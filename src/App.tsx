import React from 'react';
import { RFQProvider } from './context/RFQContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { CategoriesPage } from './components/pages/CategoriesPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { AboutPage } from './components/pages/AboutPage';
import { CraftPage } from './components/pages/CraftPage';
import { ExportPage } from './components/pages/ExportPage';
import { CertificationsPage } from './components/pages/CertificationsPage';
import { ContactPage } from './components/pages/ContactPage';
import { EnquiryPage } from './components/pages/EnquiryPage';
import { AdminEnquiriesPage } from './components/pages/AdminEnquiriesPage';
import { RFQDrawer } from './components/RFQDrawer';
import { GatedCatalogModal } from './components/GatedCatalogModal';
import { SampleRequestModal } from './components/SampleRequestModal';
import { EnquiryModal } from './components/EnquiryModal';
import { AnimatedSection } from './components/AnimatedSection';

const MainContent: React.FC = () => {
  const { currentPage } = useNavigation();

  const renderActivePage = () => {
    switch (currentPage) {
      case 'categories':
        return <CategoriesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'about':
        return <AboutPage />;
      case 'craft':
        return <CraftPage />;
      case 'export':
        return <ExportPage />;
      case 'certifications':
        return <CertificationsPage />;
      case 'contact':
        return <ContactPage />;
      case 'enquiry':
        return <EnquiryPage />;
      case 'admin':
        return <AdminEnquiriesPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <main className="flex-1">
      <AnimatedSection key={currentPage}>
        {renderActivePage()}
      </AnimatedSection>
    </main>
  );
};

export default function App() {
  return (
    <RFQProvider>
      <NavigationProvider>
        <div 
          className="min-h-screen flex flex-col bg-[#F7F4ED] text-[#252822] font-sans selection:bg-[#B89550]/25 selection:text-[#1B2A4A]"
        >
          {/* Integrated Navigation Header with Official Brand Logo */}
          <Header />

          {/* Active Functional Page Views (Home, Categories, Gallery, Craft, Export, Certifications, Contact Us) */}
          <MainContent />

          {/* Global Footer with Compliance Notices and Verified Contact */}
          <Footer />

          {/* Global Interactive Modals & Slide-over Drawers */}
          <RFQDrawer />
          <GatedCatalogModal />
          <SampleRequestModal />
          <EnquiryModal />
        </div>
      </NavigationProvider>
    </RFQProvider>
  );
}
