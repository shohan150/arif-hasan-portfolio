import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: "Master of Arts in Film and Media Production",
    school: "New York Film Academy",
    period: "2013 - 2015",
    achievements: [
      "Specialized in Post-Production",
      "Best Thesis Film Award",
      "Student Film Festival Winner"
    ]
  },
  {
    degree: "Bachelor of Fine Arts in Digital Media",
    school: "University of Creative Arts",
    period: "2009 - 2013",
    achievements: [
      "Dean's List all semesters",
      "Advanced Video Editing Certificate",
      "Digital Arts Excellence Award"
    ]
  }
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.school}</p>
                  <p className="text-blue-400 text-sm">{edu.period}</p>
                </div>
              </div>

              <div className="space-y-3">
                {edu.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}