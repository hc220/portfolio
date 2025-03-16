import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Dribbble, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  dribbbleLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "KisanBazaar",
    description: "A marketplace connecting farmers directly to consumers, eliminating middlemen and ensuring fair prices.",
    tags: ["Figma","Wireframes","UI/UX Design","Mobile App Design"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    liveLink: "https://www.figma.com/proto/bH3pvqUGNi2dENrcFUM8xz/Crop-Rate?node-id=18-542&p=f&t=AlblkjyzaZ09oFHB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=18%3A542&show-proto-sidebar=1",
    dribbbleLink: "https://dribbble.com/shots/25770692-KisanBazaar?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=hc2202&utm_content=KisanBazaar&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=hc2202&utm_content=KisanBazaar&utm_medium=Social_Share", // Added Dribbble link
  },
  {
    id: 2,
    title: "QuickMeet UI",
    description: "A modern, intuitive video conferencing interface with focus on accessibility and ease of use.",
    tags: ["Figma", "UI/UX Design", "Web Design", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    liveLink: "https://quickmeet.w3spaces.com/index.html",
    githubLink: "https://github.com/hc220/QuickMeett.git",
  },
  {
    id: 3,
    title: "Netflix Data Visualization",
    description: "Analyzing Netflix data with visualizations! I recently worked on a Netflix Data Analysis Project, exploring content trends, popular categories, and key contributors",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    
    githubLink: "https://github.com/hc220/-Netflix-Data-Visualization-A-Mini-Project-.git",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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
    <section id="projects" className="section-padding py-24 md:py-32">
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
            <p className="text-sm font-medium">Recent Work</p>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent projects spanning UI/UX design, web development, and data analysis.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="rounded-xl overflow-hidden glass hover:shadow-xl transition-all-300"
              onHoverStart={() => setActiveProject(project.id)}
              onHoverEnd={() => setActiveProject(null)}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all-500 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Links - Only show on hover */}
                <motion.div 
                  className="absolute top-4 right-4 flex space-x-2"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeProject === project.id ? 1 : 0,
                    y: activeProject === project.id ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.dribbbleLink && (
                    <a 
                      href={project.dribbbleLink}
                      className="w-9 h-9 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all-200"
                      aria-label={`Dribbble profile for ${project.title}`}
                    >
                      <Dribbble size={18} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      className="w-9 h-9 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all-200"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/80 backdrop-blur-sm text-white hover:bg-primary transition-all-200"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
