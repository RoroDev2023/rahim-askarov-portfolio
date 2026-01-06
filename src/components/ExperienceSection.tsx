import { Building2, Calendar } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    title: 'AI Engineer / Data Science Intern',
    company: 'Kapital Bank',
    period: '2024',
    description: 'Leading AI initiatives for the largest bank in the region',
    highlights: [
      'Built predictive models for credit risk assessment',
      'Developed NLP pipelines for document processing',
      'Optimized data infrastructure for ML workflows',
    ],
  },
  {
    title: 'Machine Learning Engineer Intern',
    company: 'Rightance Healthcare',
    period: '2023 – 2024',
    description: 'Clinical ML systems for dermatology diagnostics',
    highlights: [
      'Deployed deep learning models for skin condition classification',
      'Built end-to-end ML pipelines from data ingestion to inference',
      'Achieved 94% accuracy on internal validation sets',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'AZZA CJSC',
    period: '2022 – 2023',
    description: 'Full-stack development and system architecture',
    highlights: [
      'Designed and built scalable backend services',
      'Led frontend development using React and TypeScript',
      'Implemented CI/CD pipelines and DevOps best practices',
    ],
  },
  {
    title: 'Research Collaborator',
    company: 'University Research Labs',
    period: '2023 – Present',
    description: 'Academic research in AI and economics',
    highlights: [
      'Co-authoring papers on ML applications in energy systems',
      'Exploring intersection of economics and machine learning',
      'Contributing to open-source research tools',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building impactful systems across industry and academia
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-8 md:pl-0`}>
                  <div className="gradient-border p-6 rounded-xl bg-card hover:bg-card/80 transition-all duration-300 group">
                    {/* Header */}
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className={`flex items-center gap-2 text-primary mb-3 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <ul className={`space-y-2 text-sm ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-muted-foreground">
                          <span className="text-primary mr-2">→</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
