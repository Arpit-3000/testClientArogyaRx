import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, LogOut, Menu, X, User, Package, Stethoscope, Home, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cartContext';
import { ThemeToggle } from '../theme-toggle';
import { cn } from '../../lib/utils';
import logo from "../../assets/logo-Photoroom.png";
import SignupPopup from './SignupPopup';

// Custom hook to handle click outside
function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userName, setUserName] = useState(null);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  
  // Handle auth modal open with proper mobile menu handling
  const handleAuthModalOpen = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
    setMobileMenuOpen(false);
  };

  const { cartItems } = useCart();
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null);
  const userMenuRef = useRef(null);
  
  useClickOutside(mobileMenuRef, () => setMobileMenuOpen(false));
  useClickOutside(userMenuRef, () => setIsUserDropdownOpen(false));
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleCartClick = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setAuthMode('login');
      setShowAuthModal(true);
      return;
    }
    navigate("/cart");
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    setUserName(null);
    setIsUserDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate('/');
  };

  const linkClasses = (path) => {
    const isActive = location.pathname === path;
    return cn(
      'px-3 py-2 rounded-md text-sm font-medium transition-all duration-150',
      'whitespace-nowrap flex items-center gap-2',
      'focus:outline-none focus:ring-2 focus:ring-primary/50',
      isActive 
        ? 'text-primary font-semibold' 
        : 'text-foreground/90 hover:text-primary hover:bg-accent/20'
    );
  };
  
  const mobileLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return cn(
      'w-full px-4 py-3 rounded-lg text-base font-medium transition-colors',
      'flex items-center gap-3',
      'focus:outline-none focus:ring-2 focus:ring-primary/50',
      isActive 
        ? 'bg-primary/10 text-primary' 
        : 'text-foreground hover:bg-accent/20'
    );
  };

  useEffect(() => {
    let timeoutId = null;
    
    const handleScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          setIsScrolled(window.scrollY > 10);
          timeoutId = null;
        }, 10);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-sm' 
          : 'bg-background/80 backdrop-blur-sm border-b border-transparent'
      }`}
      ref={mobileMenuRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Desktop Navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <Link 
  to="/" 
  className="flex-shrink-0 flex items-center mr-10"
  aria-label="Home"
>
  <img 
    className="h-20 md:h-24 lg:h-28 w-auto transition-transform duration-300 hover:scale-105"
    src={logo} 
    alt="Arogya RX"
    loading="eager"
    style={{
      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
      willChange: 'transform',
    }}
  />
</Link>


            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                <Link to="/" className={linkClasses('/')} aria-current={location.pathname === '/' ? 'page' : undefined}>
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
                <Link to="/medicines" className={linkClasses('/medicines')} aria-current={location.pathname === '/medicines' ? 'page' : undefined}>
                  <Package className="w-4 h-4" />
                  <span>Medicines</span>
                </Link>
                <Link to="/labtest" className={linkClasses('/labtest')} aria-current={location.pathname === '/labtest' ? 'page' : undefined}>
                  <Stethoscope className="w-4 h-4" />
                  <span>Lab Tests</span>
                </Link>
                <Link to="/contact" className={linkClasses('/contact')} aria-current={location.pathname === '/contact' ? 'page' : undefined}>
                  <Phone className="w-4 h-4" />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle className="h-9 w-9 text-foreground/80 hover:text-foreground" />
            
            {/* Cart */}
            <button
              onClick={handleCartClick}
              className="relative p-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-accent/20 transition-colors"
              aria-label={`Shopping Cart ${cartItems.length > 0 ? `(${cartItems.length} items)` : ''}`}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length > 9 ? '9+' : cartItems.length}
                </span>
              )}
            </button>

            {/* User menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center justify-center p-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-accent/20 transition-colors"
                aria-expanded={isUserDropdownOpen}
                aria-haspopup="true"
                aria-label={userName ? 'User menu' : 'Account menu'}
              >
                <User className="h-5 w-5" />
              </button>

              {isUserDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsUserDropdownOpen(false)}
                    aria-hidden="true"
                  />
                  <div 
                    className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-popover text-popover-foreground border border-border z-50 overflow-hidden"
                    role="menu"
                  >
                    <div className="py-1">
                      {userName ? (
                        <>
                          <div className="px-4 py-2 text-sm border-b border-border">
                            <p className="font-medium truncate">Hi, {userName}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              {localStorage.getItem('userEmail')}
                            </p>
                          </div>
                          <Link
                            to="/profilesection"
                            className="block px-4 py-2 text-sm hover:bg-accent/20"
                            onClick={() => setIsUserDropdownOpen(false)}
                          >
                            Your Profile
                          </Link>
                          <Link
                            to="/orders"
                            className="block px-4 py-2 text-sm hover:bg-accent/20"
                            onClick={() => setIsUserDropdownOpen(false)}
                          >
                            Your Orders
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-accent/20 text-destructive"
                          >
                            Sign out
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => {
                              setAuthMode('login');
                              setShowAuthModal(true);
                              setIsUserDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-accent/20"
                          >
                            Sign in
                          </button>
                          <button
                            onClick={() => {
                              setAuthMode('signup');
                              setShowAuthModal(true);
                              setIsUserDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-accent/20"
                          >
                            Create account
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-accent/20 focus:outline-none"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">
                  {isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                </span>
                {isMobileMenuOpen ? (
                  <X className="block h-5 w-5" />
                ) : (
                  <Menu className="block h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-background/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen border-t border-border' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1">
          <Link
            to="/"
            className={mobileLinkClasses('/')}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/medicines"
            className={mobileLinkClasses('/medicines')}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Package className="w-5 h-5" />
            <span>Medicines</span>
          </Link>
          <Link
            to="/labtest"
            className={mobileLinkClasses('/labtest')}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Stethoscope className="w-5 h-5" />
            <span>Lab Tests</span>
          </Link>
          <Link
            to="/contact"
            className={mobileLinkClasses('/contact')}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Phone className="w-5 h-5" />
            <span>Contact</span>
          </Link>

          <div className="border-t border-border my-2"></div>

          {userName ? (
            <>
              <Link
                to="/profilesection"
                className={mobileLinkClasses('/profilesection')}
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="w-5 h-5" />
                <span>Your Profile</span>
              </Link>
              <Link
                to="/orders"
                className={mobileLinkClasses('/orders')}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Package className="w-5 h-5" />
                <span>Your Orders</span>
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 text-base font-medium text-destructive hover:bg-accent/20 rounded-lg flex items-center gap-3"
              >
                <LogOut className="w-5 h-5" />
                <span>Sign out</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleAuthModalOpen('login')}
                className={mobileLinkClasses('#')}
              >
                <User className="w-5 h-5" />
                <span>Sign in</span>
              </button>
              <button
                onClick={() => handleAuthModalOpen('signup')}
                className={mobileLinkClasses('#')}
              >
                <User className="w-5 h-5" />
                <span>Create account</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Auth Modal - Using React Portal to ensure proper stacking context */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50">
          <SignupPopup 
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            initialMode={authMode}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;