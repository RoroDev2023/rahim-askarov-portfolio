import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  impact: string;
  techStack: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: 'RizzTheGrid',
    description: 'AI-powered smart-grid copilot for energy optimization',
    impact: 'Predicts hourly carbon intensity using PyTorch time-series models. RL-inspired scheduling reduces fossil-fuel reliance by 4%.',
    techStack: ['Python', 'Flask', 'PyTorch', 'Next.js', 'Azure', 'D3.js'],
  },
  {
    title: 'AZZA Mobile App',
    description: 'Mobile app for wine browsing and purchasing',
    impact: 'Lead Developer for React Native app with Firebase Firestore, reducing data delays by 40% for thousands of users.',
    techStack: ['React Native', 'Java', 'Redux', 'Firebase'],
  },
  {
    title: 'Voice AI Assistant',
    description: 'Real-time speech-to-speech conversational AI system',
    impact: 'Built for Kapital Bank with Azure Cognitive Services and GPT-4, reducing customer service response time by 20%.',
    techStack: ['Azure', 'GPT-4', 'STT/TTS', 'Python', 'WebSockets'],
  },
  {
    title: 'ML Healthcare Imaging',
    description: 'Clinical ML pipelines for healthcare applications',
    impact: 'Contributing to AI models for healthcare and clinical imaging at Rightance Healthcare Inc.',
    techStack: ['Pandas', 'Transformers', 'Scikit-learn', 'NLP', 'Python'],
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
    <section id="projects" className="py-24 relative bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
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
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.25)"
              }}
              className="group gradient-border p-8 rounded-2xl bg-card transition-colors duration-300"
            >
              {/* Project number */}
              <motion.div 
                className="text-6xl font-bold text-muted/20 mb-4"
                whileHover={{ scale: 1.1, color: "hsl(var(--primary) / 0.3)" }}
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
                  <Badge key={tech} variant="tech">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="opacity-70 hover:opacity-100">
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </Button>
                <Button variant="ghost" size="sm" className="opacity-70 hover:opacity-100">
                  <Github className="w-4 h-4" />
                  Source
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;