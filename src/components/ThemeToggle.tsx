
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center glass transition-all-300 hover:scale-110"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-deep-purple" />
      ) : (
        <Sun className="h-5 w-5 text-soft-teal" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
