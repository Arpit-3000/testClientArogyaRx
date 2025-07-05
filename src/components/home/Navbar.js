import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, LogOut, Menu, X, User, Package, Stethoscope, Home, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cartContext';
import { ThemeToggle } from '../theme-toggle';
import { cn } from '../../lib/utils';
import logo from "../../assets/logo-Photoroom.png";
import SignupPopup from './SignupPopup';
import LanguageSelector from '../common/LanguageSelector';
import { useTranslation } from 'react-i18next';

// Custom hook to handle click outside
const useClickOutside = (ref, handler) => {
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
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { t } = useTranslation();
  
  // State management
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userName, setUserName] = useState(null);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  
  // Refs
  const mobileMenuRef = useRef(null);
  const userMenuRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  // Memoized navigation link classes
  const linkClasses = useCallback((path) => {
    const isActive = location.pathname === path;
    return cn(
      'px-3 py-2 rounded-md text-sm font-medium transition-all duration-150',
      'whitespace-nowrap flex items-center gap-2',
      'focus:outline-none focus:ring-2 focus:ring-primary/50',
      isActive 
        ? 'text-primary font-semibold' 
        : 'text-foreground/90 hover:text-primary hover:bg-accent/20'
    );
  }, [location.pathname]);

  // Memoized mobile link classes
  const mobileLinkClasses = useCallback((path) => {
    const isActive = location.pathname === path;
    return cn(
      'w-full px-4 py-3 rounded-lg text-base font-medium transition-colors',
      'flex items-center gap-3',
      'focus:outline-none focus:ring-2 focus:ring-primary/50',
      isActive 
        ? 'bg-primary/10 text-primary' 
        : 'text-foreground hover:bg-accent/20'
    );
  }, [location.pathname]);

  // Handle auth modal open
  const handleAuthModalOpen = useCallback((mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
    setMobileMenuOpen(false);
  }, []);

  // Handle cart click
  const handleCartClick = useCallback(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      handleAuthModalOpen('login');
      return;
    }
    navigate("/cart");
  }, [navigate, handleAuthModalOpen]);

  // Handle logout
  const handleLogout = useCallback(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    // Dispatch a storage event to update other tabs/windows
    window.dispatchEvent(new Event('storage'));
    setUserName(null);
    setIsUserDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate('/');
  }, [navigate]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolled(window.scrollY > 10);
        scrollTimeoutRef.current = null;
      }, 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check user login status and listen for storage changes
  useEffect(() => {
    const updateUserName = () => {
      const name = localStorage.getItem('userName');
      setUserName(name);
    };

    // Initial load
    updateUserName();

    // Listen for storage events to update name when changed in other tabs/windows
    const handleStorageChange = (e) => {
      if (e.key === 'userName') {
        updateUserName();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Body overflow control for mobile menu
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close handlers
  useClickOutside(mobileMenuRef, () => setMobileMenuOpen(false));
  useClickOutside(userMenuRef, () => setIsUserDropdownOpen(false));

  // Navigation items data
  const navItems = [
    { path: '/', icon: Home, label: t('navigation.home') },
    { path: '/medicines', icon: Package, label: t('navigation.medicines') },
    { path: '/labtest', icon: Stethoscope, label: t('navigation.labTests') },
    { path: '/contact', icon: Phone, label: t('navigation.contact') },
  ];

  // User dropdown items
  const userDropdownItems = userName ? [
    { path: '/profilesection', label: t('user.profile') },
    { path: '/orders', label: t('user.orders') },
    { action: handleLogout, label: t('auth.logout'), destructive: true },
  ] : [
    { action: () => handleAuthModalOpen('login'), label: t('auth.login') },
    { action: () => handleAuthModalOpen('signup'), label: t('auth.signup') },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-sm py-2' 
          : 'bg-background/80 backdrop-blur-sm border-b border-transparent py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src={logo} 
                  alt={t('app.title')}
                  className="h-14 w-auto object-contain"  
                />
                <span className="ml-2 text-primary text-xl font-bold hidden sm:inline">
                  {t('app.title')}
                </span>
              </Link>
            </div>

            {/* Center - Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className={linkClasses(item.path)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center space-x-3 md:space-x-4">
              {/* Language Selector */}
              <LanguageSelector className="hidden sm:block" />
              
              {/* Theme Toggle */}
              <ThemeToggle className="h-9 w-9 text-foreground/80 hover:text-foreground" />
              
              {/* Cart */}
              <button
                onClick={handleCartClick}
                className="relative p-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-accent/20 transition-colors"
                aria-label={t('cart.label', { count: cartItems.length })}
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
                  aria-label={userName ? t('user.menu') : t('auth.accountMenu')}
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
                          <div className="px-4 py-2 border-b border-border/50">
                            <p className="font-medium truncate">{t('user.greeting', { name: userName })}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              {localStorage.getItem('userEmail')}
                            </p>
                          </div>
                        ) : null}
                        
                        {userDropdownItems.map((item, index) => (
                          item.path ? (
                            <Link
                              key={index}
                              to={item.path}
                              className={`block px-4 py-2 text-sm hover:bg-accent/20 ${item.destructive ? 'text-destructive' : ''}`}
                              onClick={() => setIsUserDropdownOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <button
                              key={index}
                              onClick={() => {
                                item.action();
                                setIsUserDropdownOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2 text-sm hover:bg-accent/20 ${item.destructive ? 'text-destructive' : ''}`}
                            >
                              {item.label}
                            </button>
                          )
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(false);
                }}
                className={`md:hidden ml-2 inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-accent/20 focus:outline-none ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                aria-label={t('common.closeMenu')}
              >
                <X className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(true);
                }}
                className={`md:hidden ml-2 inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-accent/20 focus:outline-none ${!isMobileMenuOpen ? 'block' : 'hidden'}`}
                aria-label={t('common.openMenu')}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden bg-background/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden relative top-5 ${
          isMobileMenuOpen ? 'max-h-screen border-t border-border' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={mobileLinkClasses(item.path)}
              onClick={() => setMobileMenuOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}

          <div className="border-t border-border my-2"></div>

          {userName ? (
            <>
              <Link
                to="/profilesection"
                className={mobileLinkClasses('/profilesection')}
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="w-5 h-5" />
                <span>{t('user.profile')}</span>
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-sm font-medium text-destructive hover:bg-accent/20 rounded-lg flex items-center gap-3"
              >
                <LogOut className="w-5 h-5" />
                <span>{t('auth.logout')}</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleAuthModalOpen('login')}
                className={mobileLinkClasses('#')}
              >
                <User className="w-5 h-5" />
                <span>{t('auth.login')}</span>
              </button>
              <button
                onClick={() => handleAuthModalOpen('signup')}
                className={mobileLinkClasses('#')}
              >
                <User className="w-5 h-5" />
                <span>{t('auth.signup')}</span>
              </button>
            </>
          )}
        </div>
      </div>
      
      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50">
          <SignupPopup
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            initialMode={authMode}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;