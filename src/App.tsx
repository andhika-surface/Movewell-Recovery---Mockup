import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutPage from "./components/AboutPage";
import TeamPage from "./components/TeamPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import TestimonialsPage from "./components/TestimonialsPage";
import FAQPage from "./components/FAQPage";
import PromoPage from "./components/PromoPage";
import ArticlesPage from "./components/ArticlesPage";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero onBookingClick={handleBookingClick} />
            <Services />
          </>
        );
      case "services":
        return <ServicesPage onBookingClick={handleBookingClick} />;
      case "promo":
        return <PromoPage onBookingClick={handleBookingClick} />;
      case "about":
        // Show both About and Team on the same page
        return (
          <>
            <AboutPage onBookingClick={handleBookingClick} />
            <TeamPage onBookingClick={handleBookingClick} />
          </>
        );
      case "testimonials":
        return <TestimonialsPage onBookingClick={handleBookingClick} />;
      case "articles":
        return <ArticlesPage onBookingClick={handleBookingClick} />;
      case "faq":
        return <FAQPage onBookingClick={handleBookingClick} />;
      case "contact":
        return <ContactPage />;
      default:
        return (
          <>
            <Hero onBookingClick={handleBookingClick} />
            <Services />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigation}
        onBookingClick={handleBookingClick}
      />
      {renderPage()}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}
