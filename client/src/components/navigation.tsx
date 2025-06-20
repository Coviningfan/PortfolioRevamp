import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "wouter";
import dsxLogo from "@assets/DSX EDGE LOGO.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  const handleContactNavClick = () => {
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      window.location.href = '/#contact';
      return;
    }
    
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", id: "services" },
    { label: "About", href: "/about" },
    { label: "Data Center", href: "/data-center" },
    { label: "Contact", id: "contact", onClick: handleContactNavClick },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <img 
                src={dsxLogo} 
                alt="DSX Edge Logo" 
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                item.href ? (
                  <Link key={index} href={item.href}>
                    <button className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                      {item.label}
                    </button>
                  </Link>
                ) : (
                  <button
                    key={index}
                    onClick={() => {
                      if (item.onClick) {
                        item.onClick();
                      } else if (item.id) {
                        scrollToSection(item.id);
                      }
                    }}
                    className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                )
              ))}
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
                    item.href ? (
                      <Link key={index} href={item.href}>
                        <button className="text-slate-700 hover:text-blue-600 text-left py-2 text-base font-medium transition-colors duration-200">
                          {item.label}
                        </button>
                      </Link>
                    ) : (
                      <button
                        key={index}
                        onClick={() => {
                          if (item.onClick) {
                            item.onClick();
                          } else if (item.id) {
                            scrollToSection(item.id);
                          }
                        }}
                        className="text-slate-700 hover:text-blue-600 text-left py-2 text-base font-medium transition-colors duration-200"
                      >
                        {item.label}
                      </button>
                    )
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}