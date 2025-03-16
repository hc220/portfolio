
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Philosophy />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved by Harshil Patel.</p>
      </footer>
    </motion.div>
  );
};

export default Index;
