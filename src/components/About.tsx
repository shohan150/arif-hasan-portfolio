import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Personal Statement
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg"
          >
            <div className="flex justify-center mb-8">
              <Heart className="w-12 h-12 text-blue-400" />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              As a passionate storyteller with over 8 years of experience in video editing, I've dedicated my career to crafting compelling visual narratives that captivate and inspire audiences. My journey in post-production has been driven by a relentless pursuit of excellence and innovation.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I believe that every frame tells a story, and every cut is an opportunity to evoke emotion. My approach combines technical precision with creative intuition, allowing me to transform raw footage into powerful, engaging content that resonates with viewers.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Whether it's a brand campaign, documentary, or music video, I bring the same level of dedication and artistic vision to every project. I'm constantly exploring new techniques and staying ahead of industry trends to deliver cutting-edge content that exceeds expectations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}