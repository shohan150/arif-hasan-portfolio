import { motion } from "framer-motion";
import { Music, Palette, Scissors, Wand2 } from "lucide-react";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    category: "Video Editing",
    items: [
      { name: "Adobe Premiere Pro", level: 97 },
      { name: "Da Vinci Resolve", level: 80 },
      { name: "Final Cut Pro X", level: 75 },
    ],
    icon: Scissors,
  },
  {
    category: "Visual Effects",
    items: [
      { name: "Adobe After Effects", level: 95 },
      { name: "Adobe Animator", level: 80 },
      { name: "Cinema 4D", level: 70 },
    ],
    icon: Wand2,
  },
  {
    category: "Color Grading",
    items: [
      { name: "Adobe Prenier Pro", level: 95 },
      { name: "DaVinci Resolve Color", level: 80 },
    ],
    icon: Palette,
  },
  {
    category: "Sound Design",
    items: [
      { name: "Adobe Audition", level: 90 },
      { name: "Fl Studio", level: 85 },
    ],
    icon: Music,
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Technical Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: groupIndex * 0.2 }}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <skillGroup.icon className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: groupIndex * 0.2 + index * 0.1,
                        }}
                        className="h-full bg-blue-500 rounded-full"
                      />
                    </div>
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
