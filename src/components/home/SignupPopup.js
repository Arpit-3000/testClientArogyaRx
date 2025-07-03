import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';
import API from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SignupPopup = ({ isOpen, onClose, initialMode = 'login' }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isSignup, setIsSignup] = useState(initialMode === 'signup');
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
    age: "",
    gender: "",
    contact: "",
  });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setIsSignup(initialMode === 'signup');
    }
  }, [isOpen, initialMode]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleAuthMode = () => {
    setIsSignup(prev => !prev);
  };

  const showErrorToast = (message) => {
    toast.error(message, {
      style: {
        background: '#fef2f2',
        color: '#b91c1c',
        border: '1px solid #fecaca'
      },
      iconTheme: {
        primary: '#dc2626',
        secondary: '#fef2f2',
      },
      duration: 4000
    });
  };

  const showSuccessToast = (message) => {
    toast.success(message, {
      style: {
        background: '#ecfdf5',
        color: '#065f46',
        border: '1px solid #a7f3d0'
      },
      iconTheme: {
        primary: '#10b981',
        secondary: '#ecfdf5',
      }
    });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (!formData.email || !formData.password) {
      showErrorToast(t('auth.errors.requiredFields'));
      setLoading(false);
      return;
    }

    try {
      let response;
      let endpoint = isSignup ? '/auth/register' : '/auth/login';
      
      const requestData = isSignup 
        ? {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: formData.role || 'patient',
            ...(formData.age && { age: formData.age }),
            ...(formData.gender && { gender: formData.gender }),
            ...(formData.contact && { contact: formData.contact })
          }
        : {
            email: formData.email,
            password: formData.password
          };
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      try {
        response = await API.post(endpoint, requestData, {
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        clearTimeout(timeoutId);
        
        if (response.data?.token) {
          localStorage.setItem("accessToken", response.data.token);
          
          if (response.data.user) {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("userName", response.data.user.name || '');
            if (response.data.user.email) {
              localStorage.setItem("userEmail", response.data.user.email);
            }
          }
          
          showSuccessToast(t(isSignup ? 'auth.success.signup' : 'auth.success.login'));
          onClose();
          navigate("/", { replace: true });
          setTimeout(() => window.location.reload(), 100);
        } else {
          throw new Error(t('auth.errors.invalidResponse'));
        }
      } catch (apiError) {
        clearTimeout(timeoutId);
        throw apiError;
      }
      
    } catch (err) {
      console.error('Auth error:', err);
      
      if (err.name === 'AbortError') {
        showErrorToast(t('auth.errors.timeout'));
      } else if (err.response) {
        if (err.response.status === 401) {
          showErrorToast(t('auth.errors.invalidCredentials'));
        } else if (err.response.status === 400) {
          showErrorToast(t('auth.errors.invalidRequest'));
        } else if (err.response.status === 409) {
          showErrorToast(t('auth.errors.userExists'));
        } else if (err.response.status >= 500) {
          showErrorToast(t('auth.errors.serverError'));
        } else {
          showErrorToast(err.response.data?.message || t('auth.errors.generic'));
        }
      } else if (err.request) {
        showErrorToast(t('auth.errors.noResponse'));
      } else {
        showErrorToast(err.message || t('auth.errors.generic'));
      }
    } finally {
      setLoading(false);
    }
  };

  const [portalContainer, setPortalContainer] = React.useState(null);

  useEffect(() => {
    const portal = document.createElement('div');
    portal.id = 'modal-portal';
    document.body.appendChild(portal);
    setPortalContainer(portal);

    return () => {
      if (document.body.contains(portal)) {
        document.body.removeChild(portal);
      }
    };
  }, []);

  if (!isOpen || !portalContainer) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm z-[2147483646]"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 mx-auto overflow-y-auto border border-gray-200 dark:border-gray-700"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors p-1 -mr-1"
          aria-label={t('common.close')}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-semibold text-center text-teal-600 dark:text-teal-400 mb-4">
          {t(isSignup ? 'auth.signup' : 'auth.login')}
        </h2>

        <form onSubmit={handleAuth} className="space-y-4">
          {isSignup && (
            <>
              <input
                type="text"
                name="name"
                placeholder={t('auth.form.name')}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                required
              />

              <input
                type="number"
                name="age"
                placeholder={t('auth.form.age')}
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                required
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                required
              >
                <option value="">{t('auth.form.selectGender')}</option>
                <option value="Male">{t('auth.form.gender.male')}</option>
                <option value="Female">{t('auth.form.gender.female')}</option>
                <option value="Other">{t('auth.form.gender.other')}</option>
              </select>

              <input
                type="text"
                name="contact"
                placeholder={t('auth.form.contact')}
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                required
              />

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              >
                <option value="patient">{t('auth.form.role.patient')}</option>
                <option value="doctor">{t('auth.form.role.doctor')}</option>
              </select>
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder={t('auth.form.email')}
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            required
          />

          <input
            type="password"
            name="password"
            placeholder={t('auth.form.password')}
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 dark:bg-teal-700 text-white py-2 rounded-md hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors duration-200 flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t(isSignup ? 'auth.signingUp' : 'auth.signingIn')}
              </>
            ) : t(isSignup ? 'auth.signup' : 'auth.login')}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
          {t(isSignup ? 'auth.haveAccount' : 'auth.noAccount')}{" "}
          <button
            onClick={toggleAuthMode}
            className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
            type="button"
          >
            {t(isSignup ? 'auth.login' : 'auth.signup')}
          </button>
        </p>
      </div>
    </div>,
    portalContainer
  );
};

export default SignupPopup;