import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
    impact: 'ML forecasting, RL-inspired scheduling, real-time optimization for sustainable energy distribution',
    techStack: ['PyTorch', 'Time-Series', 'RL', 'Python', 'FastAPI'],
  },
  {
    title: 'Vinoria – AI Wine Store',
    description: 'AI-driven wine recommendation and retail automation platform',
    impact: 'Personalized recommendations using collaborative filtering and NLP-based taste profiling',
    techStack: ['React', 'Node.js', 'ML', 'PostgreSQL', 'Azure'],
  },
  {
    title: 'Voice AI Assistant',
    description: 'Real-time speech-to-speech conversational AI system',
    impact: 'Sub-200ms latency voice interactions using Azure Speech Services and GPT-4',
    techStack: ['Azure', 'GPT-4', 'WebSockets', 'TypeScript', 'Express'],
  },
  {
    title: 'ML Healthcare Imaging',
    description: 'Clinical ML pipelines for dermatology diagnostics',
    impact: 'Deep learning models for skin condition classification, deployed in production at Rightance Healthcare',
    techStack: ['PyTorch', 'Computer Vision', 'Docker', 'AWS', 'FastAPI'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected work showcasing ML research, systems engineering, and product development
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group gradient-border p-8 rounded-2xl bg-card hover:bg-card/80 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Project number */}
              <div className="text-6xl font-bold text-muted/20 mb-4">
                0{index + 1}
              </div>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
