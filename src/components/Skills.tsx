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
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-purple-500 to-violet-500",
    skills: [
      "MySQL",
      "MongoDB",
      "Firebase",
      "Supabase",
    ],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    color: "from-orange-500 to-yellow-500",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "User Research",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-gray-500 to-slate-500",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Netlify",
    ],
  },
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
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {skillCategories.map((category) => (
    <motion.div
      key={category.title}
      whileHover={{ y: -8 }}
      className="
        relative overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-6
        transition-all duration-300
        hover:border-primary/30
        hover:shadow-2xl
      "
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-[0.05]`}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-2xl bg-gradient-to-br ${category.color}`}
          >
            <category.icon className="w-6 h-6 text-white" />
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-primary">
              Expertise
            </span>

            <h3 className="text-xl font-bold mt-1">
              {category.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="
                px-4 py-2
                rounded-xl
                bg-white/5
                border border-white/10
                text-sm
                font-medium
                hover:border-primary/40
                hover:bg-primary/10
                transition-all duration-300
              "
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  ))}
</div>
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
                {["Frontend", "Frame Work", "Cloud Computing"].map((tech) => (
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