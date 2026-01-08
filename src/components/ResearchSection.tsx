import { FileText, BookOpen, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface Research {
  title: string;
  status: string;
  description: string;
  topics: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const research: Research[] = [
  {
    title: 'IMF Political Economy Research',
    status: 'Ongoing Research',
    description: 'Research under Prof. Lawrence King at UMass Amherst. Assessing how IMF involvement and conditionality affects inequality. Employing ML methods including clustering condition bundles and embeddings for conditionality analysis.',
    topics: ['Political Economy', 'Machine Learning', 'Causal Inference'],
    icon: Lightbulb,
  },
  {
    title: 'Time-Series Forecasting for Smart Grids',
    status: 'Applied Research',
    description: 'Developing PyTorch-based models for predicting carbon intensity and renewable energy availability across U.S. regions.',
    topics: ['Time-Series', 'PyTorch', 'Sustainability'],
    icon: BookOpen,
  },
  {
    title: 'RL-Inspired Energy Scheduling',
    status: 'Implementation',
    description: 'Building reinforcement learning-inspired scheduling engines for optimal EV charging and grid usage, reducing fossil-fuel reliance.',
    topics: ['Reinforcement Learning', 'Optimization', 'Sustainability'],
    icon: FileText,
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
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 relative bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Publications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic work at the intersection of AI, systems, and economics
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Research cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {research.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px -12px hsl(var(--accent) / 0.2)"
              }}
              className="gradient-border p-8 rounded-2xl bg-card transition-colors duration-300 group"
            >
              {/* Icon */}
              <motion.div 
                className="p-3 rounded-lg bg-accent/10 w-fit mb-6 group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <item.icon className="w-6 h-6 text-accent" />
              </motion.div>

              {/* Status */}
              <Badge variant="accent" className="mb-4">
                {item.status}
              </Badge>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2">
                {item.topics.map((topic) => (
                  <Badge key={topic} variant="muted" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          More publications and preprints coming soon. Stay tuned.
        </motion.p>
      </div>
    </section>
  );
};

export default ResearchSection;