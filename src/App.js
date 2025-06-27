// App.js
import React, { Suspense, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
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

// Wrapper component to handle layout and authentication
const AppRoutes = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('accessToken'));

  // Update auth state when location changes
  React.useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsAuthenticated(!!token);
  }, [location]);

  // Handle sign in/up click
  const handleAuthClick = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      // Redirect to login/signup page or open auth modal
      window.location.href = '/login';
    }
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/labtest" element={<Labtest />} />
        <Route 
          path="/cart" 
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          } 
        />
        <Route 
          path="/profilesection" 
          element={
            <RequireAuth>
              <Profilesection />
            </RequireAuth>
          } 
        />
        <Route 
          path="/checkout" 
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          } 
        />
        <Route 
          path="/order-confirmation" 
          element={
            <RequireAuth>
              <OrderConfirmation />
            </RequireAuth>
          } 
        />
        <Route path="/devl" element={<Developer />} />
        <Route 
          path="/orders" 
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          } 
        />
        <Route 
          path="/adress" 
          element={
            <RequireAuth>
              <Adress />
            </RequireAuth>
          } 
        />
        {/* Add a catch-all 404 route */}
        <Route path="*" element={
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
        } />
      </Routes>
    </Layout>
  );
};

// Higher-order component for protected routes
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('accessToken');

  if (!token) {
    // Redirect to login page with the return URL
    window.location.href = `/login?redirect=${encodeURIComponent(location.pathname)}`;
    return null;
  }

  return children;
};

// Main App component
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <Toaster 
            position="top-center"
            containerStyle={{
              position: 'fixed',
              top: '1rem',
              left: 0,
              right: 0,
              zIndex: 2147483647, // Higher than your modal's z-index
              pointerEvents: 'none' // Allows clicks to pass through to elements below
            }}
            toastOptions={{
              style: {
                pointerEvents: 'auto', // Makes the toast itself clickable
                zIndex: 2147483647, // Ensures toast stays on top
                marginTop: '20px' // Additional spacing from top
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
          <Router>
            <AppRoutes />
          </Router>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;