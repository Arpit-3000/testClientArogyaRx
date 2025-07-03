import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from "../../assets/logo-Photoroom.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  const footerLinks = [
    {
      title: t('footer.quickLinks.title'),
      links: [
        { name: t('footer.quickLinks.home'), to: '/' },
        { name: t('footer.quickLinks.medicines'), to: '/medicines' },
        { name: t('footer.quickLinks.labTests'), to: '/labtest' },
        { name: t('footer.quickLinks.contact'), to: '/contact' },
        { name: t('footer.quickLinks.developer'), to: '/devl' },
      ],
    },
    {
      title: t('footer.support.title'),
      links: [
        { name: t('footer.support.faq'), to: '/faq' },
        { name: t('footer.support.privacy'), to: '/privacy' },
        { name: t('footer.support.terms'), to: '/terms' },
        { name: t('footer.support.shipping'), to: '/shipping' },
      ],
    },
    {
      title: t('footer.contact.title'),
      links: [
        { 
          name: t('footer.contact.email'), 
          to: 'mailto:support@arogyarx.com',
          icon: <Mail className="w-4 h-4 mr-2 inline-block" />,
          isExternal: true
        },
        { 
          name: t('footer.contact.phone'), 
          to: 'tel:+919876543210',
          icon: <Phone className="w-4 h-4 mr-2 inline-block" />,
          isExternal: true
        },
        { 
          name: t('footer.contact.address'), 
          to: 'https://maps.google.com',
          icon: <MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />,
          isExternal: true,
          className: 'flex items-start'
        },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, to: 'https://facebook.com', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, to: 'https://twitter.com', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, to: 'https://instagram.com', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, to: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  const renderLink = (link) => {
    const linkContent = (
      <>
        {link.icon}
        <span>{link.name}</span>
      </>
    );

    if (link.isExternal) {
      return (
        <a
          href={link.to}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-muted-foreground hover:text-primary transition-colors ${link.className || ''}`}
        >
          {linkContent}
        </a>
      );
    }

    return (
      <Link to={link.to} className="text-muted-foreground hover:text-primary transition-colors">
        {linkContent}
      </Link>
    );
  };

  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt={t('footer.logoAlt')} className="h-10 w-auto" />
              <span className="ml-2 text-2xl font-bold text-primary">ArogyaRx</span>
            </div>
            <p className="text-muted-foreground">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={t('footer.socialFollow', { platform: social.label })}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.support.privacy')}
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.support.terms')}
            </Link>
            <Link to="/shipping" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.support.shipping')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;