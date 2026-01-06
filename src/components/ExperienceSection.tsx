import { Building2, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  tech?: string;
}

const experiences: Experience[] = [
  {
    title: 'Machine Learning Engineer Intern',
    company: 'Rightance Healthcare Inc.',
    location: 'Boston, MA',
    period: 'Jan 2026 – Present',
    description: 'Contributing to AI models for healthcare and clinical imaging applications',
    tech: 'Pandas, Transformers, Scikit-learn, NLP',
    highlights: [
      'Developing and evaluating AI models for healthcare and clinical imaging applications',
      'Preprocessing and cleaning large-scale medical datasets for model training',
      'Implementing and comparing ML algorithms for healthcare applications',
    ],
  },
  {
    title: 'AI Engineer / Data Science Intern',
    company: 'Kapital Bank',
    location: 'Baku, Azerbaijan',
    period: 'May 2025 – Sep 2025',
    description: 'Developed AI-powered voice banking services for 100K+ users',
    tech: 'Azure Cognitive Services, OpenAI GPT-4, Python',
    highlights: [
      'Developed AI-powered STT/TTS services enhancing voice banking accessibility for 100K+ users',
      'Built end-to-end ML pipelines for audio data collection, preprocessing, and annotation',
      'Created real-time voice assistant with GPT-4, reducing customer service response time by 20%',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Kapital Bank',
    location: 'Baku, Azerbaijan',
    period: 'May 2024 – Sep 2024',
    description: 'Engineered and optimized microservices supporting 1M+ active users',
    tech: 'Spring Boot, JWT, Swagger UI, CI/CD',
    highlights: [
      'Engineered 15+ Spring Boot microservices improving system response times by 30%',
      'Refactored SQL schemas improving data retrieval latency and transaction throughput',
      'Implemented JWT authentication and enhanced CI/CD pipelines, fixing 50+ code issues',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'AZZA CJSC',
    location: 'Baku, Azerbaijan',
    period: 'May 2023 – Sep 2023',
    description: 'Full-stack development and security implementation',
    tech: 'React, Node.js, Firebase',
    highlights: [
      'Designed and deployed a secure full-stack platform boosting user engagement by 60%',
      'Implemented firewall rules, network segmentation, and intrusion detection',
      'Mitigated 100+ security threats daily through robust security measures',
    ],
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'Khwarizmi Lab, UMass Amherst',
    location: 'Amherst, MA',
    period: 'Sep 2025 – Present',
    description: 'Research in AI and wireless systems under Prof. Taqi Raza',
    highlights: [
      'Researching AI applications in wireless and energy systems',
      'Exploring intersection of economics and machine learning',
      'Contributing to academic publications and research tools',
    ],
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building impactful systems across industry and academia
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-8 md:pl-0`}>
                  <motion.div 
                    className="gradient-border p-6 rounded-xl bg-card transition-all duration-300 group"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.3)"
                    }}
                  >
                    {/* Header */}
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className={`flex items-center gap-2 text-primary mb-1 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-3 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>

                    {exp.tech && (
                      <p className="text-xs text-accent mb-3 font-mono">{exp.tech}</p>
                    )}

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
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;