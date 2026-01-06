import { FileText, BookOpen, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Research {
  title: string;
  status: string;
  description: string;
  topics: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const research: Research[] = [
  {
    title: 'AI-Driven Energy Systems Optimization',
    status: 'In Progress',
    description: 'Applying reinforcement learning and time-series forecasting to optimize smart grid operations and renewable energy integration.',
    topics: ['Reinforcement Learning', 'Time-Series', 'Energy Systems'],
    icon: Lightbulb,
  },
  {
    title: 'Economics Meets Machine Learning',
    status: 'Working Paper',
    description: 'Exploring causal inference methods and their applications in economic policy analysis using modern ML techniques.',
    topics: ['Causal Inference', 'Econometrics', 'Policy Analysis'],
    icon: BookOpen,
  },
  {
    title: 'Efficient Transformers for Time-Series',
    status: 'Research Collaboration',
    description: 'Investigating attention mechanisms and architectural improvements for long-horizon forecasting in resource-constrained environments.',
    topics: ['Transformers', 'Efficiency', 'Forecasting'],
    icon: FileText,
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 relative bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Publications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic work at the intersection of AI, systems, and economics
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Research cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {research.map((item, index) => (
            <div
              key={index}
              className="gradient-border p-8 rounded-2xl bg-card hover:bg-card/80 transition-all duration-500 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="p-3 rounded-lg bg-accent/10 w-fit mb-6 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>

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
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          More publications and preprints coming soon. Stay tuned.
        </p>
      </div>
    </section>
  );
};

export default ResearchSection;
