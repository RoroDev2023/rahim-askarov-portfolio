import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rahim@example.com',
      href: 'mailto:rahim@example.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/rahimaskarov',
      href: 'https://linkedin.com/in/rahimaskarov',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@rahimaskarov',
      href: 'https://github.com/rahimaskarov',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            Interested in research, engineering, or building ambitious systems together? I'd love to hear from you.
          </p>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="gradient-border p-6 rounded-xl bg-card hover:bg-card/80 transition-all duration-300 group flex flex-col items-center"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {contact.label}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  {contact.value}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <Button variant="gradient" size="lg">
            <Mail className="w-4 h-4" />
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Rahim Askarov. All rights reserved.</p>
            <p>Built with passion and precision.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
