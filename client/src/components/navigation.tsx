import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin } from "lucide-react";
import { Link, useLocation } from "wouter";
import dsxLogo from "@assets/DSX EDGE LOGO.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    if (location === "/") {
      // Already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home page
      setLocation("/");
    }
  };

  const handleNavigationClick = (item: any) => {
    if (item.href) {
      // External navigation
      if (location === item.href) {
        // Already on the page, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setLocation(item.href);
      }
    } else if (item.id) {
      // Section navigation - only works on home page
      if (location !== "/") {
        // Navigate to home first, then scroll
        setLocation("/");
        setTimeout(() => scrollToSection(item.id), 100);
      } else {
        scrollToSection(item.id);
      }
    }
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", id: "services" },
    { label: "About", href: "/about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img 
              src={dsxLogo} 
              alt="DSX Edge Logo" 
              className="h-10 w-auto cursor-pointer"
              onClick={handleHomeClick}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={`${item.label}-${index}`}
                  onClick={() => handleNavigationClick(item)}
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-blue-50 rounded-md relative group"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
              <Button
                onClick={() => {
                  if (location !== "/") {
                    setLocation("/");
                    setTimeout(() => scrollToSection("contact"), 100);
                  } else {
                    scrollToSection("contact");
                  }
                }}
                className="gradient-dsx-orange text-white hover:shadow-lg transition-all duration-200 hover:scale-105"
                aria-label="Contact us for a consultation"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item, index) => (
                    <button
                      key={`mobile-nav-${index}-${item.label}`}
                      onClick={() => handleNavigationClick(item)}
                      className="text-slate-700 hover:text-blue-600 text-left py-2 text-base font-medium transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => {
                      if (location !== "/") {
                        setLocation("/");
                        setTimeout(() => scrollToSection("contact"), 100);
                      } else {
                        scrollToSection("contact");
                      }
                    }}
                    className="gradient-dsx-orange text-white mt-4"
                  >
                    Contact Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}