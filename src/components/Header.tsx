import { motion } from "framer-motion";
import { Film, Mail, Menu } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-transparent backdrop-blur-sm"></div>
      <nav className="relative max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-white"
        >
          <Film className="w-6 h-6 text-blue-400" />
          <span className="text-xl font-bold">Arif Hasan</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#work" className="hover:text-blue-400 transition-colors">
            Work
          </a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-blue-400 transition-colors"
          >
            Experience
          </a>
          <a
            href="#education"
            className="hover:text-blue-400 transition-colors"
          >
            Education
          </a>
          <a href="#about" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact
          </motion.button>
        </div>

        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </motion.header>
  );
}
