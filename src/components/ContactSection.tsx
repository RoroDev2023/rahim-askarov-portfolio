import { Mail, Linkedin, Github, ArrowUpRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rahim.askarov.2004@gmail.com',
      href: 'mailto:rahim.askarov.2004@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/rahimaskarov',
      href: 'https://linkedin.com/in/rahimaskarov/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@RoroDev2023',
      href: 'https://github.com/RoroDev2023',
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
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
              Interested in research, engineering, or building ambitious systems together? I'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.3)"
                }}
                className="gradient-border p-6 rounded-xl bg-card transition-colors duration-300 group flex flex-col items-center"
              >
                <motion.div 
                  className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <contact.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {contact.label}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  {contact.value}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button variant="gradient" size="lg" asChild>
              <a href="mailto:rahim.askarov.2004@gmail.com">
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-24 pt-8 border-t border-border"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Rahim Askarov. All rights reserved.</p>
            <p>Built with passion and precision.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;