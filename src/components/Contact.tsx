import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Github, Linkedin, Send, Check, Dribbble } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Send email to harshil220205@gmail.com
      const emailData = {
        to: "harshil220205@gmail.com",
        subject: "New Contact Form Submission",
        body: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      };

      // Simulate email sending
      console.log("Sending email:", emailData);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/hc220/",
      color: "hover:bg-gray-800 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/patel-harshilbhai-chandrakant-071951209/",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "Dribbble",
      icon: <Dribbble className="w-5 h-5" />,
      url: "https://dribbble.com/hc2202",
      color: "hover:bg-pink-500 hover:text-white",
    },
  ];

  return (
    <section id="contact" className="section-padding py-24 md:py-32">
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
            <p className="text-sm font-medium">Get In Touch</p>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to know more about my work? Drop me a message and I'll get back to you soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all-200 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg ${
                    isSubmitting ? "bg-soft-teal" : "bg-primary"
                  } text-primary-foreground font-medium transition-all-200 hover:shadow-lg`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <Check className="w-5 h-5 mr-2" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-8">
            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Connect with Me</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg glass ${link.color} transition-all-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Available For</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-soft-teal/20 mr-4 mt-1">
                    <Check className="w-4 h-4 text-soft-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium">Freelance Projects</h4>
                    <p className="text-sm text-muted-foreground">Available for UI/UX design and web development projects.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-electric-blue/20 mr-4 mt-1">
                    <Check className="w-4 h-4 text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Collaboration</h4>
                    <p className="text-sm text-muted-foreground">Interested in collaborating on innovative projects.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-neon-pink/20 mr-4 mt-1">
                    <Check className="w-4 h-4 text-neon-pink" />
                  </div>
                  <div>
                    <h4 className="font-medium">Internship Opportunities</h4>
                    <p className="text-sm text-muted-foreground">Looking for internships in UX design and development.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
