import { ArrowDown, Download, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GridBackground from './GridBackground';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import profileImage from '@/assets/rahim-profile.png';
import { useRef } from 'react';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Mouse tracking for interactive image effect
  const imageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      <GridBackground />
      
      {/* Animated blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/10 blob blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-accent/10 blob blur-3xl" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
      
      <div className="relative z-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Status badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm mb-6 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm text-muted-foreground">Open to opportunities • Class of 2026</span>
              </motion.div>

              {/* Name */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
              >
                <span className="text-foreground">Rahim</span>
                <br />
                <span className="gradient-text">Askarov</span>
              </motion.h1>

              {/* Headline */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6"
              >
                {['AI/ML Engineer', 'FullStack Developer', 'Product Builder'].map((title, i) => (
                  <motion.span
                    key={title}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-foreground font-medium text-sm md:text-base border border-primary/20"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.3)" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Sparkles className="w-4 h-4 inline mr-1 text-primary" />
                    {title}
                  </motion.span>
                ))}
              </motion.div>

              {/* Subheadline */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
              >
                Building intelligent systems at the intersection of machine learning, economics, and real-world impact.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button variant="hero" size="lg" onClick={scrollToProjects} className="group">
                  View Projects
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.span>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="/resume.pdf" download>
                    Download Resume
                    <Download className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div 
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                {/* Decorative rings */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ scale: 1.15 }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-accent/20 border-dashed"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  style={{ scale: 1.25 }}
                />
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary/30"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-xl">🤖</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-accent/30"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="text-xl">💻</span>
                </motion.div>
                <motion.div
                  className="absolute top-1/2 -right-8 w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-green-500/30"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <span className="text-lg">📊</span>
                </motion.div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl opacity-60" />
                
                {/* Main image with 3D effect */}
                <motion.div
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                  className="relative"
                >
                  <img 
                    src={profileImage} 
                    alt="Rahim Askarov" 
                    className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-card shadow-2xl"
                    style={{ transform: "translateZ(50px)" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;