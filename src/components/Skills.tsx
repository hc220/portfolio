
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { 
  Code, CodepenIcon, Palette, Activity, BarChart2, FileCode, Globe, 
  Framer, Database, TrendingUp
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: "design" | "development" | "data";
}

const skills: Skill[] = [
  { name: "Wireframe", level: 90, icon: <Framer />, category: "design" },
  { name: "UI/UX Design", level: 75, icon: <Palette />, category: "design" },
  { name: "Visual Appearance", level: 75, icon: <Activity />, category: "design" },
  { name: "Java", level: 85, icon: <Code />, category: "development" },
  { name: "JavaScript/TypeScript", level: 80, icon: <FileCode />, category: "development" },
  { name: "DSA", level: 70, icon: <CodepenIcon />, category: "development" },
  { name: "Python", level: 75, icon: <FileCode />, category: "development" },
  { name: "Web Development", level: 80, icon: <Globe />, category: "development" },
  { name: "Data Analysis", level: 85, icon: <BarChart2 />, category: "data" },
  { name: "Data Visualization", level: 80, icon: <TrendingUp />, category: "data" },
  { name: "SQL/Databases", level: 70, icon: <Database />, category: "data" },
];

const skillCategories = [
  { id: "design", name: "Design" },
  { id: "development", name: "Development" },
  { id: "data", name: "Data" },
];

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-padding py-24 md:py-32">
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-24"
          variants={itemVariants}
        >
          <motion.div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <p className="text-sm font-medium">Expertise</p>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My toolkit spans design, development, and data analysis, enabling me to create comprehensive solutions.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="glass rounded-xl p-8 text-center transition-all-300 hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 flex justify-center">
                {category.id === "design" && (
                  <Palette className="w-12 h-12 text-soft-teal" />
                )}
                {category.id === "development" && (
                  <Code className="w-12 h-12 text-electric-blue" />
                )}
                {category.id === "data" && (
                  <BarChart2 className="w-12 h-12 text-neon-pink" />
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-muted-foreground text-sm">
                {category.id === "design" && "Creating intuitive and beautiful user interfaces with a focus on user experience."}
                {category.id === "development" && "Building responsive web applications with modern frameworks and libraries."}
                {category.id === "data" && "Analyzing and visualizing data to extract meaningful insights."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-xl p-6 transition-all-300 hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center glass mr-4">
                  {skill.icon}
                </div>
                <h3 className="font-medium">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary rounded-full h-2 mb-1 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${
                    skill.category === "design" 
                      ? "bg-soft-teal" 
                      : skill.category === "development"
                      ? "bg-electric-blue"
                      : "bg-neon-pink"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Beginner</span>
                <span>Advanced</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
