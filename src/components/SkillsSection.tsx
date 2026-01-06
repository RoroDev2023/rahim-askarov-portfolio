const skillCategories = [
  {
    title: 'Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Transformers', 'Time-Series', 'RL', 'Computer Vision'],
    color: 'primary',
  },
  {
    title: 'Systems & Backend',
    skills: ['Node.js', 'Express', 'FastAPI', 'WebSockets', 'PostgreSQL', 'Redis'],
    color: 'accent',
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'React Native', 'Tailwind CSS'],
    color: 'primary',
  },
  {
    title: 'Data & Analytics',
    skills: ['SQL', 'Pandas', 'NumPy', 'Spark', 'dbt', 'Jupyter'],
    color: 'accent',
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Azure', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'],
    color: 'primary',
  },
  {
    title: 'Research Tools',
    skills: ['Git', 'LaTeX', 'Weights & Biases', 'MLflow', 'DVC'],
    color: 'accent',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="gradient-border p-6 rounded-xl bg-card hover:bg-card/80 transition-all duration-300 group"
            >
              <h3 className={`text-lg font-bold mb-4 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      category.color === 'primary'
                        ? 'bg-primary/10 text-primary hover:bg-primary/20'
                        : 'bg-accent/10 text-accent hover:bg-accent/20'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
