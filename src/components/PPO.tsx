import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, TrendingUp, Users, Zap, Award } from "lucide-react";

const PPO = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ppo = {
    company: "Valens DataLabs",
    role: "Jr. Software Scientist",
    type: "Pre-Placement Offer",
    timeline: "PPO Secured: July 2025",
    location: "On-campus Achievement",
    description: "Secured Pre-Placement Offer through exceptional performance during campus placement process",
   
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

  return (
    <section id="ppo" className="py-20 lg:py-32" ref={ref}>
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
              On-Campus <span className="gradient-text">Achievement</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Secured Pre-Placement Offer through exceptional performance during campus 
              placement process, demonstrating technical excellence and leadership qualities.
            </p>
          </motion.div>

          {/* PPO Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-card p-8 rounded-3xl shadow-glow mb-12"
          >
            <div className="text-center mb-8">
              {/* PPO Badge */}
              <div className="inline-flex items-center gap-3 p-4 bg-gradient-primary/20 rounded-2xl border border-primary/30 mb-6">
                <Award className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <h3 className="text-xl font-bold gradient-text">
                    {ppo.type}
                  </h3>
                  <p className="text-sm text-muted-foreground">{ppo.company}</p>
                </div>
              </div>

              {/* Role & Details */}
              <h4 className="text-2xl font-bold text-foreground mb-4">
                {ppo.role}
              </h4>
              
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

              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                {ppo.description}
              </p>

              {/* Success Badge */}
              <div className="inline-flex items-center gap-2 p-3 bg-gradient-accent/10 rounded-xl border border-accent/20">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="text-accent font-medium">Campus Placement Success</span>
              </div>
            </div>
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  );
};

export default PPO;