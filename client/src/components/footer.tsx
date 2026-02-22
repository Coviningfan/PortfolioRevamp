import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "wouter";
import dsxLogo from "@assets/DSX_EDGE_LOGO_1771724948531.png";

export default function Footer() {
  const serviceLinks = [
    { label: "DSX Voice", href: "/dsx-voice" },
    { label: "DSX Live", href: "/dsx-live" },
    { label: "DSX Data", href: "/dsx-data" },
  ];

  const companyLinks = [
    { label: "About", href: "/about" },
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
                alt="DSX Edge Logo"
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Your trusted partner for unified communication and data solutions. Above the Cloud.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Facebook, label: "Facebook" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    data-testid={`link-social-${label.toLowerCase()}`}
                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
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
              &copy; 2026 DSX Edge. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs">
              Powered by J.A.B.V Labs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
