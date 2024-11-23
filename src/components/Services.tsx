import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Film, Music, Camera, Video } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: "Commercial Editing",
    description: "High-impact commercial videos that capture attention and drive results",
  },
  {
    icon: Music,
    title: "Music Videos",
    description: "Creative music video editing that brings your vision to life",
  },
  {
    icon: Camera,
    title: "Documentary",
    description: "Compelling storytelling for documentaries and long-form content",
  },
  {
    icon: Video,
    title: "Event Coverage",
    description: "Professional editing for events, weddings, and special occasions",
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-lg"
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}