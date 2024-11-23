import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    period: "2020 - Present",
    role: "Senior Video Editor",
    company: "Creative Minds Studio",
    description: "Lead editor for major brand campaigns and documentary projects. Managed a team of junior editors and established post-production workflows.",
    achievements: [
      "Edited award-winning documentary series 'Nature's Whispers'",
      "Increased studio's commercial client base by 40%",
      "Implemented new color grading pipeline"
    ]
  },
  {
    period: "2017 - 2020",
    role: "Video Editor",
    company: "Digital Arts Agency",
    description: "Specialized in music videos and commercial content. Collaborated with international artists and brands.",
    achievements: [
      "Edited 50+ music videos with 1M+ views",
      "Developed innovative transition techniques",
      "Trained junior editors in advanced editing techniques"
    ]
  },
  {
    period: "2015 - 2017",
    role: "Junior Editor",
    company: "MediaCraft Productions",
    description: "Started as assistant editor and quickly promoted to independent project handling.",
    achievements: [
      "Managed post-production for corporate clients",
      "Specialized in event highlight videos",
      "Learned advanced color grading techniques"
    ]
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Professional Journey
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-blue-500"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
              
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-gray-400 mb-4">{exp.company}</h4>
                
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}