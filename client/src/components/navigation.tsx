import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import dsxLogo from "@assets/DSX_EDGE_LOGO_1771724948531.png";

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
    if (location !== '/') {
      setLocation('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", id: "services" },
    { label: "About", href: "/about" },
    { label: "Data Center", href: "/data-center" },
  ];

  const isHome = location === "/";
  const showDark = isHome && !isScrolled;

  return (
    <nav
      data-testid="navigation-bar"
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-slate-200/50"
          : isHome
            ? "bg-transparent"
            : "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-slate-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                data-testid="img-logo"
                src={dsxLogo}
                alt="DSX Edge Logo"
                className={`h-10 w-auto cursor-pointer transition-all duration-300 ${
                  showDark ? "brightness-0 invert" : ""
                }`}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) =>
              item.href ? (
                <Link key={index} href={item.href}>
                  <button
                    data-testid={`link-nav-${item.label.toLowerCase().replace(' ', '-')}`}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group ${
                      showDark
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    } ${location === item.href ? (showDark ? "text-white bg-white/10" : "text-blue-600 bg-blue-50") : ""}`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 group-hover:w-3/4 transition-all duration-300`} />
                  </button>
                </Link>
              ) : (
                <button
                  key={index}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                  onClick={() => scrollToSection(item.id!)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group ${
                    showDark
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 group-hover:w-3/4 transition-all duration-300" />
                </button>
              )
            )}
            <div className="ml-3 pl-3 border-l border-slate-200/50">
              <Link href="/contact">
                <Button
                  data-testid="button-contact-nav"
                  className="bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-lg px-5"
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  data-testid="button-mobile-menu"
                  variant="ghost"
                  size="icon"
                  className={showDark ? "text-white hover:bg-white/10" : ""}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-80">
                <div className="flex flex-col mt-8">
                  <img src={dsxLogo} alt="DSX Edge Logo" className="h-8 w-auto mb-8" />
                  <div className="space-y-1">
                    {navItems.map((item, index) =>
                      item.href ? (
                        <Link key={index} href={item.href}>
                          <button
                            data-testid={`link-mobile-${item.label.toLowerCase().replace(' ', '-')}`}
                            className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                              location === item.href
                                ? "text-blue-600 bg-blue-50"
                                : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                            }`}
                          >
                            {item.label}
                          </button>
                        </Link>
                      ) : (
                        <button
                          key={index}
                          data-testid={`link-mobile-${item.label.toLowerCase()}`}
                          onClick={() => scrollToSection(item.id!)}
                          className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200"
                        >
                          {item.label}
                        </button>
                      )
                    )}
                  </div>
                  <div className="mt-6 px-4">
                    <Link href="/contact">
                      <Button
                        data-testid="button-mobile-contact"
                        className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg py-3"
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
