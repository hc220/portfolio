import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, TrendingUp, Users, Zap, Award } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const internship = {
    company: "Microsoft Corporation (India) Pvt Ltd",
    role: "Summer Interns - Microsoft Data & AI Skills Internship Program",
    type: "Internship",
    timeline: "15 Day",
    location: "Remote",
    description: "Responsible for learning and applying Microsoft Data & AI technologies, including Azure AI, NLP, Generative AI, and Power BI, through instructor-led training and practical assessments.",
    highlights: [
      {
        icon: TrendingUp,
        title: "Azure AI Fundamentals (AI-900)",
        
      },
      {
        icon: Users,
        title: "Build a natural language processing (NLP) solution with Azure AI Language",
      },
      {
        icon: Zap,
        title: "Generative artificial intelligence (AI) models in Azure Machine Learning",
      },
       {
        icon: Zap,
        title: "Microsoft Power BI Data Analysis (PL-300)",
      }
    ]
  };

  const ppo = {
    company: "Valens DataLabs",
    role: "Jr. Software Scientist",
    type: "Pre-Placement Offer",
    timeline: "PPO Secured: July 2025",
    location: "On-campus Achievement",
    description:
      "Secured Pre-Placement Offer through exceptional performance during campus placement process, demonstrating technical excellence and leadership qualities.",
  };

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

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Main Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-8 rounded-3xl shadow-glow"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-2">
                        {internship.role}
                      </h3>
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {internship.company}
                      </h4>
                      <div className="inline-block px-3 py-1 bg-gradient-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">
                        {internship.type}
                      </div>
                    </div>

                    {/* Timeline & Location */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{internship.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{internship.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {internship.description}
                    </p>

                    {/* Achievement Badge */}
                    <div className="inline-flex items-center gap-2 p-3 bg-gradient-accent/10 rounded-xl border border-accent/20">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      <span className="text-accent font-medium">Internship Completed Successfully</span>
                    </div>
                  </div>
                </motion.div>

                {/* Highlights */}
                <div className="space-y-6 lg:mt-16">
                  {internship.highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.title}
                      variants={itemVariants}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="glass-card p-6 rounded-2xl group hover:shadow-glow transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-xl bg-gradient-primary/20 group-hover:bg-gradient-primary/30 transition-colors">
                          <highlight.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                            {highlight.title}
                          </h5>
                       
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* PPO / Achievement Card */}
            <motion.div
              variants={itemVariants}
              className="relative mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-glow z-10"
              />

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-8 rounded-3xl shadow-glow"
                >
                  <div className="space-y-6 text-center">
                    <div className="inline-flex items-center gap-3 p-4 bg-gradient-primary/20 rounded-2xl border border-primary/30 mb-2 justify-center">
                      <Award className="h-8 w-8 text-primary" />
                      <div className="text-left">
                        <h3 className="text-xl font-bold gradient-text">{ppo.type}</h3>
                        <p className="text-sm text-muted-foreground">{ppo.company}</p>
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-foreground">{ppo.role}</h4>

                    <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{ppo.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{ppo.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                      {ppo.description}
                    </p>

                    <div className="inline-flex items-center gap-2 p-3 bg-gradient-accent/10 rounded-xl border border-accent/20 mx-auto">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      <span className="text-accent font-medium">Campus Placement Success</span>
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-6 lg:mt-16">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="glass-card p-6 rounded-2xl group hover:shadow-glow transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-xl bg-gradient-primary/20">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Pre-Placement Offer</h5>
                        <p className="text-sm text-muted-foreground">Recognized for technical skill, collaboration, and strong problem-solving during the campus hiring process.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;