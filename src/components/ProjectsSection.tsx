import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Import project images
import rizzthegridImg from '@/assets/project-rizzthegrid.jpg';
import azzaImg from '@/assets/project-azza.jpg';
import voiceaiImg from '@/assets/project-voiceai.jpg';
import healthcareImg from '@/assets/project-healthcare.jpg';

interface Project {
  title: string;
  description: string;
  impact: string;
  techStack: string[];
  image: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: 'RizzTheGrid',
    description: 'AI-powered smart-grid copilot for energy optimization',
    impact: 'Predicts hourly carbon intensity using PyTorch time-series models. RL-inspired scheduling reduces fossil-fuel reliance by 4%.',
    techStack: ['Python', 'Flask', 'PyTorch', 'Next.js', 'Azure', 'D3.js'],
    image: rizzthegridImg,
  },
  {
    title: 'AZZA Mobile App',
    description: 'Mobile app for wine browsing and purchasing',
    impact: 'Lead Developer for React Native app with Firebase Firestore, reducing data delays by 40% for thousands of users.',
    techStack: ['React Native', 'Java', 'Redux', 'Firebase'],
    image: azzaImg,
  },
  {
    title: 'Voice AI Assistant',
    description: 'Real-time speech-to-speech conversational AI system',
    impact: 'Built for Kapital Bank with Azure Cognitive Services and GPT-4, reducing customer service response time by 20%.',
    techStack: ['Azure', 'GPT-4', 'STT/TTS', 'Python', 'WebSockets'],
    image: voiceaiImg,
  },
  {
    title: 'ML Healthcare Imaging',
    description: 'Clinical ML pipelines for healthcare applications',
    impact: 'Contributing to AI models for healthcare and clinical imaging at Rightance Healthcare Inc.',
    techStack: ['Pandas', 'Transformers', 'Scikit-learn', 'NLP', 'Python'],
    image: healthcareImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected work showcasing ML research, systems engineering, and product development
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg"
            >
              {/* Background image with overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/95 to-card/70" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Project number */}
                <motion.div 
                  className="text-6xl font-bold text-primary/20 mb-4 transition-colors duration-300 group-hover:text-primary/40"
                  whileHover={{ scale: 1.1 }}
                >
                  0{index + 1}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-lg text-foreground mb-2">{project.description}</p>
                <p className="text-muted-foreground text-sm mb-6">{project.impact}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="tech" className="backdrop-blur-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links - More prominent buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="default" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="default" 
                    className="border-2 border-foreground/20 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source
                  </Button>
                </div>
              </div>

              {/* Hover glow effect */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 100%, hsl(var(--primary) / 0.15) 0%, transparent 70%)'
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
