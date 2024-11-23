import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Brand Campaign - Urban Lifestyle",
    category: "Commercial",
    thumbnail:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=2000",
    youtubeUrl: "https://www.youtube.com/embed/_GP1zyZZcCE",
  },
  {
    title: "Nature Documentary Series",
    category: "Documentary",
    thumbnail:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000",
    youtubeUrl: "https://www.youtube.com/embed/ksrervXMEwc",
  },
  {
    title: "Music Video - 'Ethereal Dreams'",
    category: "Music Video",
    thumbnail:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=2000",
    youtubeUrl: "https://www.youtube.com/embed/ksrervXMEwc",
  },
  {
    title: "Corporate Event Highlights",
    category: "Event",
    thumbnail:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000",
    youtubeUrl: "https://www.youtube.com/embed/ksrervXMEwc",
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section id="work" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            ref={ref}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Featured Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <p className="text-blue-400 text-sm mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-white text-xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
                      <Play className="w-4 h-4" /> Watch Project
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src={selectedProject.youtubeUrl}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
