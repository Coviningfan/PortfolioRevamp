import { Link } from "wouter";
import dsxLogo from "@assets/DSX_EDGE_LOGO-removebg-preview_1779695521508.webp";
import jabvLogo from "@assets/JABVLABS_LOGO_HD-removebg-preview_1771726977207.png";

export default function Footer() {
  const serviceLinks = [
    { label: "Modernize the Phone System", href: "/#services" },
    { label: "Map the Communication Flow", href: "/#services" },
    { label: "Add the AI Layer (Optional)", href: "/#ai-future" },
    { label: "Data Center", href: "/data-center" },
  ];

  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "What is DSX Edge?", href: "/ai" },
    { label: "Data Center", href: "/data-center" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <img
                src={dsxLogo}
                alt="DSX Edge — Above the Cloud. Into the Business."
                width={735}
                height={339}
                loading="lazy"
                decoding="async"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                We start with your phone system. Then we make it intelligent. 12+ years of
                business communications. Now with an AI layer when you want it.
              </p>
              <p className="text-orange-400/80 text-sm font-medium italic">
                Above the Cloud. Into the Business.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">How It Works</h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span data-testid={`link-footer-${link.label.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span data-testid={`link-footer-${link.label.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>(555) 123-4567</li>
                <li>contact@dsxedge.com</li>
                <li>24/7 Support Available</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm" data-testid="text-copyright">
              &copy; 2026 DSX Edge. All rights reserved. 3CX Platinum Partner.
            </p>
            <div className="flex items-center gap-2 text-slate-600 text-xs">
              <span>Powered by</span>
              <img
                src={jabvLogo}
                alt="JABV Labs"
                width={613}
                height={135}
                loading="lazy"
                decoding="async"
                className="h-4 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
