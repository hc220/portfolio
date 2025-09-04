import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Rocket, Shield, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "FireNoc",
      subtitle: "SSIP Hackathon",
      description: "Built a responsive FireNOC web app featuring chatbot assistance, Firebase backend, and real-time status tracking for certificate applications.",
      icon: Rocket,
      color: "from-blue-500 to-purple-600",
      technologies: ["React", "Firebase", "Tailwind", "Framer"],
      achievements: [
        "Eassy to handel Process",
        "Real Time Tracking",
        "Chatbot",
      ],
      type: "Hackathon Project",
      status: "Complete",
      github: "https://github.com/hc220/NOC",
      live: "https://noc-rose.vercel.app/"
    },
    {
      title: "TrustDoc",
      subtitle: "Generative AI for Legal Documents",
      description: "Revolutionary document analysis platform leveraging GPT models to extract insights, generate summaries, and ensure legal compliance for enterprises.",
      icon: Shield,
      color: "from-green-500 to-teal-600",
      technologies: ["Next.js", "OpenAI API", "PostgreSQL", "Prisma", "Supabase"],
      achievements: [
        "95% accuracy in document analysis",
        "Enterprise-grade security",
        "Multi-language support",
        "Automated compliance checking"
      ],
      type: "AI Innovation",
      status: "Production",
    },
      {
      title: "LeetLogBook",
      subtitle: "Track your progress. Level up your coding.",
      description: "LeetLogBook makes coding practice smarter by letting you log problems, track progress, and revisit solutions easily. Stay organized, stay consistent, and level up your coding journey.",
      icon: Shield,
      color: "from-green-500 to-teal-600",
      technologies: ["React Js", "Tailwind", "Supabase"],
      achievements: [
        "Built and deployed a live coding log platform.",
        "Added progress tracking by topic & difficulty.",
        "Designed a clean, user-friendly interface.",
      ],
      type: "React Based Project",
      status: "Complete",
      github: "https://github.com/hc220/leet-logbook.git",
      live: "https://leet-logbook-f5kv.vercel.app/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-32" ref={ref}>
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hackathon victories and innovative solutions that showcase technical excellence 
              and problem-solving capabilities.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image/Visual */}
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  >
                    <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative glass-card p-12 rounded-3xl aspect-video flex items-center justify-center overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                      <project.icon className="h-24 w-24 text-primary relative z-10" />
                      
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Winner' 
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                            : 'bg-green-500/20 text-green-400 border border-green-500/30'
                        }`}>
                          {project.status}
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4">
                        <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium border border-primary/30">
                          {project.type}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Content */}
                  <motion.div
                    variants={itemVariants}
                    className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  >
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-accent" />
                        <span className="text-accent font-medium">{project.subtitle}</span>
                      </div>
                      <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-full border border-border hover:border-primary/30 hover:text-primary transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-foreground">Key Achievements</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {project.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`} />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      {project.live && project.live.length > 0 && (
                        <Button asChild className="bg-gradient-primary hover:opacity-90 transition-opacity" size="lg">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit Website
                        </a>
                      </Button>
                      )}
                      {project.github && project.github.length > 0 && (
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                          asChild
                        >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <div className="glass-card p-8 rounded-3xl inline-block">
              <h4 className="text-xl font-bold mb-4">
                More Projects <span className="gradient-text">Coming Soon</span>
              </h4>
              <p className="text-muted-foreground mb-6 max-w-md">
                Continuously building and shipping new projects. 
                Check out my GitHub for the latest updates.
              </p>
              <Button
                variant="outline"
                className="border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
              >
                <Github className="mr-2 h-4 w-4" />
                <a href="https://github.com/hc220">
                View All Projects
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
