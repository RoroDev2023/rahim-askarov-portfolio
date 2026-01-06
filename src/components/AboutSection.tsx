import { GraduationCap, Brain, Rocket, Code } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'CS + Economics',
      description: 'Double major at a top university, graduating 2026',
    },
    {
      icon: Brain,
      title: 'AI/ML Focus',
      description: 'Time-series forecasting, optimization, deep learning',
    },
    {
      icon: Code,
      title: 'Systems Thinker',
      description: 'Distributed systems, backend architecture, cloud infrastructure',
    },
    {
      icon: Rocket,
      title: 'Builder Mindset',
      description: 'Startup experience, product thinking, shipping fast',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Bio */}
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I'm a senior studying <span className="text-foreground font-medium">Computer Science and Economics</span>, 
              passionate about building intelligent systems that solve real problems. My work spans 
              <span className="text-primary font-medium"> machine learning research</span>, 
              <span className="text-primary font-medium"> production AI systems</span>, and 
              <span className="text-primary font-medium"> entrepreneurial ventures</span>. 
              I believe in rigorous research combined with fast, iterative product development.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group gradient-border p-6 rounded-xl bg-card hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
