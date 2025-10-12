import React, { useState } from 'react';

// --- Inline SVG Icons (Replacing lucide-react) ---

const IconWrapper = ({ children, size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const PhoneIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.86-6.86 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.74 17.6 17.6 0 0 0 .46 2.05A2 2 0 0 1 8 8.16a20.2 20.2 0 0 0-4.49 4.49 20.2 20.2 0 0 0 4.49 4.49 2 2 0 0 1 .49 2.05 17.6 17.6 0 0 0 2.05.46A2 2 0 0 1 15 20.92v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2 20.1 20.1 0 0 1 3.07-8.63 20.1 20.1 0 0 1 8.63-3.07 2 2 0 0 1 2 1.74v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2 19.79 19.79 0 0 0-3.07-8.63 19.79 19.79 0 0 0-8.63-3.07Z"/>
  </IconWrapper>
);

const MailIcon = (props) => (
  <IconWrapper {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </IconWrapper>
);

const MapPinIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </IconWrapper>
);

const FacebookIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </IconWrapper>
);

const InstagramIcon = (props) => (
  <IconWrapper {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
  </IconWrapper>
);

const TwitterIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2 1.1-1.2 1.9-2.6 2.2-4.3-.2 0-.4 0-.6 0-3.5 0-6.6-2.3-7.6-5.4 1-.2 2.7.2 4.1 1.2-1.3-4.3-6.2-5.4-8-3.4-.2.1-.4.2-.6.3 1.2-1.4 3.7-2.1 6.1-1.8z" />
  </IconWrapper>
);

const YoutubeIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M2.5 17.5c-1.3 0-2.5-1.1-2.5-2.5V9c0-1.4 1.2-2.5 2.5-2.5h19c1.3 0 2.5 1.1 2.5 2.5v6c0 1.4-1.2 2.5-2.5 2.5H2.5z" />
    <path d="m10 14 5-3-5-3v6z" />
  </IconWrapper>
);


const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Data structure for the quick links
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'All Products', href: '#' },
        { name: 'Sneakers', href: '#' },
        { name: 'Boots', href: '#' },
        { name: 'Sandals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
    },
    {
      title: 'Customer Service',
      links: [
        { name: 'Contact Us', href: '#' },
        { name: 'Size Guide', href: '#' },
        { name: 'Shipping Info', href: '#' },
        { name: 'Returns & Exchanges', href: '#' },
        { name: 'FAQ', href: '#' },
      ],
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this 'email' to a server endpoint.
      console.log('Subscribing:', email);
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  // Updated contactInfo to use the new inline SVG components
  const contactInfo = [
    { icon: PhoneIcon, text: '+1 (555) 123-4567' },
    { icon: MailIcon, text: 'support@stepforward.com' },
    { icon: MapPinIcon, text: '123 Fashion St, NY 10001' },
  ];

  return (
    // Main footer container with dark background matching the image
    <footer className="bg-gray-900 text-gray-300 font-inter border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Top Section: Grid for all columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">

          {/* Column 1: Brand Info */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Stepforward</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Your premium destination for quality footwear. We believe every step
              should be comfortable and stylish.
            </p>
            {/* Social Icons - Using new inline SVGs */}
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" aria-label="Youtube" className="hover:text-white transition-colors">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>

          {/* Columns 2 & 3: Links (Responsive) */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Get in Touch & Newsletter */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            {/* Contact Info - Using new inline SVGs */}
            <ul className="space-y-3 text-sm">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <item.icon size={18} className="text-gray-500" />
                  <span className="hover:text-white transition-colors cursor-pointer">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-3">Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 text-sm text-white bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium p-3 text-sm rounded-r-lg transition-colors flex-shrink-0"
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
              {isSubscribed && (
                <p className="mt-2 text-sm text-green-400 animate-fadeIn">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section: Copyright and Policies */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-2 md:mb-0">
            © 2024 Stepforward. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Export the component for use in your application
export default Footer;
