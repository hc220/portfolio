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
      skills: [
        { name: "React", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Framer Motion", level: 80 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Java", level: 70 },
        { name: "Python", level: 72 }
      ]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "Firebase", level: 82 },
        { name: "Supabase", level: 70 },
        { name: "SQL", level: 78 }
      ]
    },
    {
      title: "Data Science",
      icon: Radio,
      color: "from-red-500 to-pink-500",
      skills: [
        { name: "Pandas", level: 68 },
        { name: "Numpy", level: 66 },
        { name: "Data Cleaning", level: 70 }
      ]
    },
    {
      title: "Design",
      icon: Palette,
      color: "from-orange-500 to-yellow-500",
      skills: [
        { name: "Figma", level: 84 },
        { name: "UI/UX Design", level: 82 },
        { name: "Prototyping", level: 78 }
      ]
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "from-gray-500 to-slate-500",
      skills: [
        { name: "Git", level: 92 },
        { name: "Vercel", level: 76 },
        { name: "VS Code", level: 95 }
      ]
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
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card p-6 rounded-2xl group hover:shadow-glow transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-6 transition-opacity duration-500`} />

                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}> 
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-700`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
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