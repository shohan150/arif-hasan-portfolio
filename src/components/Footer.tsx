import { motion } from "framer-motion";
import { Film, Linkedin, Mail, Video } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/arifhasanutsho/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:arif.hasan.utsho@gmail.com", label: "Email" },
    {
      icon: Video,
      href: "https://www.behance.net/arifhasan449",
      label: "Behance",
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <Film className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold text-white">Arif Hasan</h3>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-8"
          >
            Video Editor & Post-Production Specialist
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm text-center"
          >
            © {new Date().getFullYear()} Arif Hasan. All rights reserved.
            <br />
            {/* Based in New York City, Available Worldwide */}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
