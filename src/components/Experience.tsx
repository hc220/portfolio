import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, TrendingUp, Users, Zap } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

const experiences = [
  {
    company: "Valens DataLabs Pvt Ltd",
    role: "Jr. Software Scientist Intern",
    type: "Internship",
    timeline: "Jan 2026 - Present",
    location: "Ahmedabad, Gujarat",
    description:
      "Working on full-stack web applications, frontend development, UI implementation, feature optimization, and collaborating with development teams on real-world enterprise products.",
    highlights: [
      "Developed responsive user interfaces using React.js",
      "Worked on real-world enterprise applications",
      "Collaborated with cross-functional development teams",
      "Implemented feature enhancements and optimizations",
      "Designed end-to-end workflows with customization and filtering"
    ]
  },
  {
    company: "Microsoft Corporation (India) Pvt Ltd",
    role: "Microsoft Data & AI Skills Internship",
    type: "Internship",
    timeline: "15 Days",
    location: "Remote",
    description:
      "Completed Microsoft Data & AI internship focused on Azure AI, NLP, Generative AI, Machine Learning, and Power BI technologies.",
    highlights: [
      "Azure AI Fundamentals (AI-900)",
      "Natural Language Processing with Azure AI",
      "Generative AI using Azure Machine Learning",
      "Microsoft Power BI Data Analysis (PL-300)"
    ]
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: { duration: 1 }
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-32" ref={ref}>
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
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hands-on internship experience working with cutting-edge technologies 
              and contributing to real-world software development projects.
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              variants={timelineVariants}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full origin-top"
            />

            {/* Experience Card */}
            <motion.div
              variants={itemVariants}
              className="relative mb-12"
            >
              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-glow z-10"
              />

             <div className="space-y-12">
  {experiences.map((exp, index) => (
    <motion.div
      key={exp.company}
      variants={itemVariants}
      className="relative"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="glass-card p-8 rounded-3xl"
        >
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
            {exp.type}
          </span>

          <h3 className="text-2xl font-bold mt-4">
            {exp.role}
          </h3>

          <h4 className="text-lg text-primary mt-2">
            {exp.company}
          </h4>

          <div className="flex flex-col gap-2 mt-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {exp.timeline}
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {exp.location}
            </div>
          </div>

          <p className="mt-4 text-muted-foreground">
            {exp.description}
          </p>
        </motion.div>

        {/* Right Side */}
        <div className="space-y-4">
          {exp.highlights.map((item) => (
            <div
              key={item}
              className="glass-card p-5 rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary" />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  ))}
</div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;