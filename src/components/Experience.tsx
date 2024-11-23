import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    period: "11/2021 - 05/2024",
    role: "Senior Cine Editor",
    company: "Dream Weaver",
    description:
      "Shoot in a variety of styles in different lighting and locations following client shot list requests. Think creatively. Collaborate with our in-house creative team to perform any additional creative filming to enhance their story.",
    achievements: [
      "Developing storyboards based on the script",
      "Enhancing animation with special effects at post-production stage",
      "The ability to listen to and understand information and ideas required by our clients",
      "Take artistic criticism from our in-house creative team",
    ],
  },
  {
    period: "02/2021 – 11/2021",
    role: "Chief Video Editor",
    company: "Dterms Ltd",
    description:
      "Creating promotional videos by assembling recorded footage into a finished project that matches director’s vision and is suitable for publishing. Creating 2D/3D animation movements for websites, facebook and advertisements",
    achievements: [
      "Developing storyboards based on the script",
      "Enhancing animation with special effects at post-production stage",
      "Making videos that promote a company’s products, services, and/or business",
      "Interviewing people and creating a film clip via editing raw footage",
    ],
  },
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

                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-gray-400 mb-4">{exp.company}</h4>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-gray-400 flex items-start gap-2"
                    >
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
