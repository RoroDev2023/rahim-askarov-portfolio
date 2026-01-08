import { Rocket, TrendingUp, DollarSign, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface Startup {
  name: string;
  country: string;
  flag: string;
  description: string;
  status: string;
  highlight: string;
  role: string;
}

const startups: Startup[] = [
  {
    name: 'Healthcare Technology',
    country: 'United States',
    flag: '🇺🇸',
    description: 'AI-powered healthcare solutions for clinical imaging and diagnostics',
    status: 'Developing & Funding',
    highlight: 'Secured $100K funding',
    role: 'Machine Learning Engineer',
  },
  {
    name: 'Retail Import/Export Venture',
    country: 'Switzerland',
    flag: '🇨🇭',
    description: 'Retail and import/export platform connecting European markets',
    status: 'Developing & Funding',
    highlight: 'Secured investment',
    role: 'Co-Founder & Developer',
  },
  {
    name: 'Custom Software Agency',
    country: 'Azerbaijan',
    flag: '🇦🇿',
    description: 'Delivering custom software solutions for local businesses across industries',
    status: 'Operating',
    highlight: '6-figures ARR',
    role: 'Founder & Lead Engineer',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const StartupsSection = () => {
  return (
    <section id="startups" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm mb-4">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Entrepreneurship</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Startups</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building ventures across continents, from software solutions to retail innovation
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Startup cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {startups.map((startup, index) => (
            <motion.div
              key={startup.name}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 30px 60px -20px hsl(var(--primary) / 0.2)"
              }}
              className="relative group"
            >
              <div className="gradient-border p-6 rounded-2xl bg-card h-full transition-all duration-300">
                {/* Flag & Country */}
                <div className="flex items-center justify-between mb-4">
                  <motion.span 
                    className="text-5xl"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {startup.flag}
                  </motion.span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    startup.status === 'Developing & Funding' 
                      ? 'bg-green-500/10 text-green-600 border border-green-500/20' 
                      : startup.status === 'Operating'
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'bg-accent/10 text-accent border border-accent/20'
                  }`}>
                    {startup.status}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {startup.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="w-3 h-3" />
                  <span>{startup.country}</span>
                </div>

                {/* Role */}
                <p className="text-xs text-primary font-medium mb-3">{startup.role}</p>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {startup.description}
                </p>

                {/* Highlight */}
                <motion.div 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
                  whileHover={{ scale: 1.02 }}
                >
                  {startup.highlight.includes('$') ? (
                    <DollarSign className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingUp className="w-4 h-4 text-primary" />
                  )}
                  <span className="text-sm font-semibold text-foreground">
                    {startup.highlight}
                  </span>
                </motion.div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StartupsSection;
