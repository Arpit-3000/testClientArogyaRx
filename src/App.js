// App.js
import React, { Suspense, useState, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider-simple';
import './styles/globals.css';
import './styles/custom.css';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Profilesection = React.lazy(() => import('./pages/Profilesection'));
const Medicines = React.lazy(() => import('./pages/Medicines'));
const Labtest = React.lazy(() => import('./pages/Labtest'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Checkout = React.lazy(() => import('./components/cart/Checkout'));
const OrderConfirmation = React.lazy(() => import('./components/cart/OrderConfirmation'));
const Developer = React.lazy(() => import('./pages/Developer'));
const Orders = React.lazy(() => import('./pages/Orders'));
const Adress = React.lazy(() => import('./pages/Adress'));

// Simple loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Higher-order component for protected routes
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

// Wrapper component to handle layout and authentication
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/medicines" element={<Layout><Medicines /></Layout>} />
      <Route path="/labtest" element={<Layout><Labtest /></Layout>} />
      <Route 
        path="/cart" 
        element={
          <RequireAuth>
            <Layout><Cart /></Layout>
          </RequireAuth>
        } 
      />
      <Route 
        path="/profilesection" 
        element={
          <RequireAuth>
            <Layout><Profilesection /></Layout>
          </RequireAuth>
        } 
      />
      <Route 
        path="/checkout" 
        element={
          <RequireAuth>
            <Layout><Checkout /></Layout>
          </RequireAuth>
        } 
      />
      <Route 
        path="/order-confirmation" 
        element={
          <RequireAuth>
            <Layout><OrderConfirmation /></Layout>
          </RequireAuth>
        } 
      />
      <Route path="/devl" element={<Layout><Developer /></Layout>} />
      <Route 
        path="/orders" 
        element={
          <RequireAuth>
            <Layout><Orders /></Layout>
          </RequireAuth>
        } 
      />
      <Route 
        path="/address" 
        element={
          <RequireAuth>
            <Layout><Adress /></Layout>
          </RequireAuth>
        } 
      />
      <Route path="*" element={
        <Layout>
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-6">Page not found</p>
            <Link 
              to="/" 
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Go back home
            </Link>
          </div>
        </Layout>
      } />
    </Routes>
  );
};

// Language initializer component
const LanguageInitializer = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleLanguageChanged = (lng) => {
      document.documentElement.lang = lng;
    };
    
    i18n.on('languageChanged', handleLanguageChanged);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  if (!mounted) return <LoadingSpinner />;
  
  return children;
};

// Main App component
function App() {
  useEffect(() => {
    const lang = localStorage.getItem('i18nextLng') || 'en';
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <I18nextProvider i18n={i18n}>
          <LanguageInitializer>
            <Router>
              <Suspense fallback={<LoadingSpinner />}>
                <Toaster 
                  position="top-center"
                  containerStyle={{
                    position: 'fixed',
                    top: '1rem',
                    left: 0,
                    right: 0,
                    zIndex: 2147483647,
                    pointerEvents: 'none'
                  }}
                  toastOptions={{
                    style: {
                      pointerEvents: 'auto',
                      zIndex: 2147483647,
                      marginTop: '20px'
                    },
                    className: 'bg-background text-foreground border border-border',
                    success: {
                      className: '!bg-success/10 !text-success-foreground border-success/20',
                      iconTheme: {
                        primary: 'hsl(var(--success))',
                        secondary: 'hsl(var(--success-foreground))',
                      },
                    },
                    error: {
                      className: '!bg-destructive/10 !text-destructive-foreground border-destructive/20',
                      iconTheme: {
                        primary: 'hsl(var(--destructive))',
                        secondary: 'hsl(var(--destructive-foreground))',
                      },
                    },
                    loading: {
                      className: '!bg-muted !text-muted-foreground border-border',
                    },
                    duration: 3000,
                  }}
                />
                <AppRoutes />
              </Suspense>
            </Router>
          </LanguageInitializer>
        </I18nextProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;