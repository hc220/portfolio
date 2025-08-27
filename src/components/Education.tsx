import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer  Engineering",
      institution: "Government Engineering College Dahod",
      location: "Dahod, Gujarat",
      duration: "2023 - 2026",
      grade: "CPI: 7.3/10",
      highlights: [
        "Learning Python and its libraries for data science",
        "Learning data mining",
        "AI/ML",
        "Actively participating in hackathons"
      ],
      status: "Current"
    },
    {
      degree: "Diploma in Engineering",
      field: "Computer Engineering",
      institution: "Shri K J Polytechnic",
      location: "Bharuch, Gujarat", 
      duration: "2020 - 2023",
      grade: "CPI: 8.56/10",
      highlights: [
        "Learn DSA with C",
        "Explore new programming ",
        "Learn .net and androind framework",
        "Learn CN DBMS & OS"
      ],
      status: "Completed"
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
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Educational <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building a strong foundation in computer science with hands-on experience 
              in modern web technologies and design thinking.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                className="group"
              >
                <div className="glass-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon & Status */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-primary/20 flex items-center justify-center border border-primary/20">
                          <GraduationCap className="h-8 w-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Current' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          }`}>
                            {edu.status}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-accent font-medium">
                          {edu.field}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <GraduationCap className="h-4 w-4" />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Grade */}
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-accent" />
                        <span className="font-medium text-accent">{edu.grade}</span>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground">Key Highlights</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {edu.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;