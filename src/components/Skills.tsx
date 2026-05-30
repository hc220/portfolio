import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Server, 
  Radio, 
  Wrench,
  Palette,
  Database
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "Flutter", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Java", "Python"]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-500 to-violet-500",
      skills: ["Firebase", "Supabase", "SQL"]
    },
    {
      title: "Data Science",
      icon: Radio,
      color: "from-red-500 to-pink-500",
      skills: ["Pandas", "Numpy", "Data Cleaning", "Data mining"]
    },
    {
      title: "Design",
      icon: Palette,
      color: "from-orange-500 to-yellow-500",
      skills: ["Figma", "UI/UX Design", "Design Systems", "Prototyping", "User Research"]
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "from-gray-500 to-slate-500",
      skills: ["Git", "Vercel", "VS Code", "Windsurf"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit spanning the full development spectrum, 
              from pixel-perfect frontends to scalable backend architectures.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-8 rounded-3xl group hover:shadow-glow transition-all duration-500 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <motion.div className="space-y-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-3 group/skill"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover/skill:scale-125 transition-transform duration-200`} />
                      <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors duration-200">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass-card p-8 rounded-3xl inline-block">
              <p className="text-muted-foreground mb-4">
                Always learning and exploring new technologies
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["LLM", "AI/ML", "Cloud Computing"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gradient-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;