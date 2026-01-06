import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'Java', 'C/C++', 'SQL', 'R', 'Swift'],
    color: 'primary',
  },
  {
    title: 'Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Transformers', 'Scikit-learn', 'Keras', 'CNNs/RNNs'],
    color: 'accent',
  },
  {
    title: 'Backend & Systems',
    skills: ['Spring Boot', 'Node.js', 'Flask', 'Django', 'Kafka', 'Microservices'],
    color: 'primary',
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'React Native', 'Redux', 'Tailwind CSS', 'D3.js'],
    color: 'accent',
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Firebase'],
    color: 'primary',
  },
  {
    title: 'Data & Tools',
    skills: ['Pandas', 'NumPy', 'MongoDB', 'PostgreSQL', 'Git', 'Postman'],
    color: 'accent',
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skills grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.2)"
              }}
              className="gradient-border p-6 rounded-xl bg-card transition-colors duration-300 group"
            >
              <h3 className={`text-lg font-bold mb-4 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-300 cursor-default ${
                      category.color === 'primary'
                        ? 'bg-primary/10 text-primary hover:bg-primary/20'
                        : 'bg-accent/10 text-accent hover:bg-accent/20'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;