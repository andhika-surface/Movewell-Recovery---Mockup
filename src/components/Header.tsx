import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  onBookingClick?: () => void;
}

export default function Header({ currentPage = "home", onNavigate, onBookingClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", value: "home" },
    { label: "Services", value: "services" },
    { label: "Promo", value: "promo" },
    { label: "About", value: "about" },
    { label: "Testimonials", value: "testimonials" },
    { label: "Articles", value: "articles" },
    { label: "FAQ", value: "faq" },
    { label: "Contact", value: "contact" }
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNavClick("home")} className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-900 rounded">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10L7 6L11 10L7 14L3 10Z" fill="white"/>
                <path d="M9 10L13 6L17 10L13 14L9 10Z" fill="white"/>
              </svg>
            </div>
            <span className="text-gray-900">MoveWell</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <button 
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`${currentPage === item.value ? "text-gray-900" : "text-gray-600"} hover:text-gray-900 transition-colors`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button 
            onClick={onBookingClick}
            className="hidden lg:block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Book Your Session
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button 
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`${currentPage === item.value ? "text-gray-900" : "text-gray-600"} hover:text-gray-900 transition-colors text-left py-2`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  onBookingClick?.();
                  setMobileMenuOpen(false);
                }}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center mt-2"
              >
                Book Your Session
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
