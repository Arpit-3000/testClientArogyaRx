import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import logo from "../../assets/logo-Photoroom.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', to: '/' },
        { name: 'Medicines', to: '/medicines' },
        { name: 'Lab Tests', to: '/labtest' },
        { name: 'Contact Us', to: '/contact' },
        { name: 'Developer Details', to: '/devl' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQs', to: '/faq' },
        { name: 'Privacy Policy', to: '/privacy' },
        { name: 'Terms of Service', to: '/terms' },
        { name: 'Shipping Policy', to: '/shipping' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { 
          name: 'support@arogyarx.com', 
          to: 'mailto:support@arogyarx.com',
          icon: <Mail className="w-4 h-4 mr-2 inline-block" />,
          isExternal: true
        },
        { 
          name: '+91 98765 43210', 
          to: 'tel:+919876543210',
          icon: <Phone className="w-4 h-4 mr-2 inline-block" />,
          isExternal: true
        },
        { 
          name: '123 Health Street, Mumbai, MH 400001', 
          to: 'https://maps.google.com',
          icon: <MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />,
          isExternal: true,
          className: 'flex items-start'
        },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, to: 'https://facebook.com' },
    { icon: <Twitter className="w-5 h-5" />, to: 'https://twitter.com' },
    { icon: <Instagram className="w-5 h-5" />, to: 'https://instagram.com' },
    { icon: <Linkedin className="w-5 h-5" />, to: 'https://linkedin.com' },
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
              <img src={logo} alt="ArogyaRx" className="h-10 w-auto" />
              <span className="ml-2 text-2xl font-bold text-primary">ArogyaRx</span>
            </div>
            <p className="text-muted-foreground">
              Your trusted online pharmacy for genuine medicines and healthcare products.
              Fast delivery and 24/7 customer support.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Follow us on ${social.to.split('//')[1]?.split('.')[0]}`}
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
            &copy; {currentYear} ArogyaRx. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
