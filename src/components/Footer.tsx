import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold gradient-text"
              >
                Harshil Patel
              </motion.div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                React & UI/UX Developer passionate about creating exceptional 
                digital experiences and realtime applications.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>and lots of ☕</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left w-fit"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Get in Touch</h3>
              <div className="space-y-2">
                <a
                  href="mailto:harshil.patel@example.com"
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  harshil.patel@example.com
                </a>
                <p className="text-muted-foreground text-sm">
                  Available for freelance projects and collaborations
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Harshil Patel. All rights reserved.
            </div>

            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm group"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:translate-y-[-2px] transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;