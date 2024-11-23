import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useInView } from "react-intersection-observer";
import me from "../assets/my-pic.png";

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

        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-900/50 rounded-lg">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            className="relative overflow-hidden rounded-tl-lg rounded-bl-lg"
          >
            <img
              src={me}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            className=" backdrop-blur-sm p-8 rounded-lg"
          >
            <div className="flex justify-center mb-8">
              <Heart className="w-12 h-12 text-blue-400" />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              As a passionate storyteller with over 3 years of experience in
              video editing, I’ve dedicated my career to creating visual stories
              that engage and inspire audiences. I excel at turning ideas into
              impactful content through creativity, technical precision, and
              attention to detail.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I believe every frame tells a story, and every edit is an
              opportunity to connect emotionally with viewers. My approach
              combines creative thinking with technical skills, ensuring each
              project resonates with its audience.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              One of my greatest strengths is my ability to work effectively
              under pressure. Whether meeting tight deadlines or managing
              last-minute changes, I stay focused and deliver high-quality
              results. Additionally, I thrive in team environments,
              collaborating closely with others to bring ideas to life and
              ensure every project exceeds expectations.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              From brand campaigns to documentaries or music videos, I approach
              every project with the same dedication and passion. I also stay
              updated on the latest trends and tools to create fresh,
              cutting-edge content that stands out.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
