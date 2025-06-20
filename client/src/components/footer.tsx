import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import dsxLogo from "../assets/DSX EDGE LOGO.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6">
            <img 
              src={dsxLogo} 
              alt="DSX Edge Logo" 
              className="h-12 w-auto mx-auto mb-4 brightness-0 invert"
            />
            <p className="text-slate-300 text-lg">Above The Cloud</p>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">© 2024 DSX Edge. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Powered by section */}
      <div className="bg-slate-950 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2">
            <img 
              src={dsxLogo} 
              alt="DSX Edge Logo" 
              className="h-6 w-auto brightness-0 invert"
            />
            <p className="text-slate-400 text-sm">
              Powered by J.A.B.V Labs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
