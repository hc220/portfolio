
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Lightbulb, Zap, Users, Target } from "lucide-react";

interface Philosophy {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const philosophies: Philosophy[] = [
  {
    icon: <Lightbulb className="w-6 h-6 text-soft-teal" />,
    title: "Problem-First Approach",
    description: "I believe in thoroughly understanding the problem before diving into solutions. This ensures that the end product actually solves real user needs rather than assumptions."
  },
  {
    icon: <Users className="w-6 h-6 text-electric-blue" />,
    title: "User-Centered Design",
    description: "Every decision I make is centered around the user experience. I strive to create intuitive interfaces that feel natural and effortless to navigate."
  },
  {
    icon: <Zap className="w-6 h-6 text-neon-pink" />,
    title: "Continuous Innovation",
    description: "Technology evolves rapidly, and so do I. I'm committed to continuous learning and experimenting with new tools and techniques to deliver cutting-edge solutions."
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Purposeful Minimalism",
    description: "I embrace minimalism not for aesthetic reasons alone, but because it focuses attention on what truly matters. Every element should serve a purpose."
  }
];

const Philosophy = () => {
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
    <section id="philosophy" className="section-padding py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-electric-blue/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-soft-teal/5 blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>

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
            <p className="text-sm font-medium">My Approach</p>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Design Philosophy</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rather than focusing on who I am, I prefer to highlight how I think and approach problems.
          </p>
        </motion.div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-xl p-8 transition-all-300 hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center glass mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          variants={itemVariants}
          className="mt-16 md:mt-24 text-center max-w-4xl mx-auto glass p-10 rounded-xl"
        >
          <blockquote className="text-xl md:text-2xl italic font-medium">
            "Design is not just what it looks like and feels like. Design is how it works."
          </blockquote>
          <p className="mt-4 text-muted-foreground">— Steve Jobs</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Philosophy;
