import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageId = 
  | 'home' 
  | 'categories' 
  | 'gallery' 
  | 'about'
  | 'craft' 
  | 'export' 
  | 'certifications' 
  | 'contact'
  | 'enquiry'
  | 'admin';

interface NavigationContextType {
  currentPage: PageId;
  navigateTo: (page: PageId, options?: { categoryFilter?: string; scrollToId?: string }) => void;
  selectedCategoryFilter: string | null;
  setSelectedCategoryFilter: (category: string | null) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
    if (['home', 'categories', 'gallery', 'about', 'craft', 'export', 'certifications', 'contact', 'enquiry', 'admin'].includes(hash)) {
      return hash as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId, options?: { categoryFilter?: string; scrollToId?: string }) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    
    if (options?.categoryFilter !== undefined) {
      setSelectedCategoryFilter(options.categoryFilter);
    }

    if (options?.scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(options.scrollToId!);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        navigateTo,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
