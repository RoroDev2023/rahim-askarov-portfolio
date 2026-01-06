import { GraduationCap, Brain, Rocket, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'CS + Economics @ UMass',
      description: 'Double major at University of Massachusetts Amherst, graduating May 2026',
    },
    {
      icon: Brain,
      title: 'AI/ML Focus',
      description: 'Neural Networks, Transformers, Time-series forecasting, Reinforcement Learning',
    },
    {
      icon: Code,
      title: 'Full-Stack Engineer',
      description: 'React, Spring Boot, Node.js, Azure, Docker, Kubernetes',
    },
    {
      icon: Rocket,
      title: 'Builder Mindset',
      description: 'Startup experience, product thinking, shipping production systems',
    },
  ];

  const containerVariants = {
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
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          {/* Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I'm a senior studying <span className="text-foreground font-medium">Computer Science and Economics</span> at UMass Amherst, 
              passionate about building intelligent systems that solve real problems. My work spans 
              <span className="text-primary font-medium"> machine learning research</span>, 
              <span className="text-primary font-medium"> production AI systems</span>, and 
              <span className="text-primary font-medium"> full-stack development</span>. 
              I believe in rigorous research combined with fast, iterative product development.
            </p>
          </motion.div>

          {/* Highlights grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.2)"
                }}
                className="group gradient-border p-6 rounded-xl bg-card transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 5 }}
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;