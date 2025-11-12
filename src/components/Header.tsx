import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "figma:asset/b87c00d318429c172c816f212b2203a440420c1e.png";

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
        <div className="flex items-center justify-between h-28 sm:h-36 md:h-48 lg:h-[220px]">
          {/* Logo */}
          <button onClick={() => handleNavClick("home")} className="flex items-center">
            <img 
              src={logoImage} 
              alt="Movewell Recovery" 
              className="h-24 sm:h-32 md:h-44 lg:h-[200px] w-auto"
            />
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
            className="hidden lg:block bg-[#1B5F8F] text-white px-6 py-3 rounded-lg hover:bg-[#154A72] transition-colors"
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
                className="bg-[#1B5F8F] text-white px-6 py-3 rounded-lg hover:bg-[#154A72] transition-colors text-center mt-2"
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
