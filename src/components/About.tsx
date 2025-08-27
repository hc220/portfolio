import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Zap, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Brain,
      title: "Product Thinking",
      description: "Bridging the gap between user needs and technical solutions with strategic product thinking"
    },
    {
      icon: Zap,
      title: "Realtime Focus",
      description: "Specializing in live, interactive applications that deliver instant user experiences"
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Crafting intuitive interfaces that prioritize accessibility and seamless user journeys"
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

  return (
    <section id="about" className="py-20 lg:py-32" ref={ref}>
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer who thrives at the intersection of design and code. 
              With a focus on creating exceptional user experiences, I combine technical expertise 
              with product thinking to build applications that make a real impact.
            </p>
          </motion.div>

         

          {/* Personal Story */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Building the <span className="gradient-text">Future</span>
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                   I’m a passionate developer and enthusiast of UI/UX and AI/ML, who loves building intuitive, responsive, and impactful 
                   digital experiences—from real-time collaboration tools to clean, user-friendly interfaces. Beyond coding, 
                   I stay curious about design trends, contribute to projects, and explore innovative ideas that make technology simple
                   and delightful.
                  </p>
                 
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20" />
                <div className="relative glass-card p-8 rounded-3xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold gradient-text">10+</div>
                      <div className="text-sm text-muted-foreground">Projects Built</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold gradient-text">5+</div>
                      <div className="text-sm text-muted-foreground">Technologies</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold gradient-text">100%</div>
                      <div className="text-sm text-muted-foreground">Passion Driven</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;