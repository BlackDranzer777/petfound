import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Landing.module.css";

const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.1, 0.25, 1],
      type: "spring",
      damping: 20
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const FloatingElement = ({ children, className = "" }) => {
  return (
    <motion.div 
      className={className}
      animate={{
        y: [-10, 10, -10],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedIcon = ({ children, type = "bounce" }) => {
  const animation = type === "rotate" 
    ? {
        scale: [1, 1.1, 1],
        rotate: [0, 5, 0],
      }
    : {
        y: [0, -5, 0],
      };
    
  return (
    <motion.span 
      style={{ display: "inline-block" }}
      animate={animation}
      transition={{
        duration: type === "rotate" ? 2 : 1,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.span>
  );
};

export default function Landing() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef();
  
  const sections = [
    {
      id: "hero",
      title: "Every lost pet deserves to be found.",
      subtitle: "A community-driven platform to reunite lost pets with their families.",
      type: "hero"
    },
    {
      id: "problem",
      title: "Losing a pet is heartbreaking.",
      lines: [
        { icon: "📋", text: "Posters get ignored." },
        { icon: "📱", text: "Social media posts vanish in the noise." },
        { icon: "❌", text: "No single trusted place to find help." }
      ],
      type: "problem"
    },
    {
      id: "solution", 
      title: "One platform. Endless hope.",
      lines: [
        { icon: "⚡", text: "Report and search lost pets in real-time." },
        { icon: "✅", text: "Verified NGOs, shelters, and volunteers." },
        { icon: "🔒", text: "Simple, secure, and built for trust." }
      ],
      type: "solution"
    },
    {
      id: "brand",
      title: "Petfound",
      subtitle: "Bringing families back together",
      type: "brand"
    },
    {
      id: "cta",
      title: "Ready to make a difference?",
      subtitle: "Join our community and help reunite lost pets with their families.",
      type: "cta"
    }
  ];

  const handleScroll = (e) => {
    if (isScrolling) return;
    
    const delta = e.deltaY;
    const newSection = delta > 0 
      ? Math.min(currentSection + 1, sections.length - 1)
      : Math.max(currentSection - 1, 0);
      
    if (newSection !== currentSection) {
      setIsScrolling(true);
      setCurrentSection(newSection);
      setTimeout(() => setIsScrolling(false), 800);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
      return () => container.removeEventListener('wheel', handleScroll);
    }
  }, [currentSection, isScrolling]);

  const getSectionClass = (type) => {
    switch(type) {
      case "hero": return `${styles.section} ${styles.heroSection}`;
      case "problem": return `${styles.section} ${styles.problemSection}`;
      case "solution": return `${styles.section} ${styles.solutionSection}`;
      case "brand": return `${styles.section} ${styles.brandSection}`;
      case "cta": return `${styles.section} ${styles.ctaSection}`;
      default: return styles.section;
    }
  };

  const getHeadingClass = (type) => {
    switch(type) {
      case "hero": return `${styles.heading} ${styles.heroHeading}`;
      case "problem": return `${styles.heading} ${styles.problemHeading}`;
      case "solution": return `${styles.heading} ${styles.solutionHeading}`;
      case "brand": return `${styles.heading} ${styles.brandHeading}`;
      case "cta": return `${styles.heading} ${styles.ctaHeading}`;
      default: return styles.heading;
    }
  };

  const getSectionStyle = (index, type) => {
    let transform = '';
    let opacity = index === currentSection ? 1 : 0;

    if (type === 'brand') {
      // Brand section moves vertically
      transform = `translateY(${index === currentSection ? '0' : index > currentSection ? '-100vh' : '100vh'})`;
    } else {
      // Other sections move horizontally
      if (index < currentSection) {
        transform = 'translateX(-100vw)';
      } else if (index > currentSection) {
        transform = 'translateX(100vw)';
      } else {
        transform = 'translateX(0)';
      }
    }

    return {
      transform,
      opacity,
    };
  };

  return (
    <div className={styles.landingContainer} ref={containerRef}>
      {/* Background decoration */}
      <div className={styles.backgroundDecor}>
        <div className={`${styles.bgShape} ${styles.bgShape1}`}></div>
        <div className={`${styles.bgShape} ${styles.bgShape2}`}></div>
        <div className={`${styles.bgShape} ${styles.bgShape3}`}></div>
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <div 
          key={section.id} 
          className={getSectionClass(section.type)}
          style={getSectionStyle(index, section.type)}
        >
          <div className={styles.contentWrap}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={sectionVariants}
            >
              <FloatingElement>
                <motion.h1 
                  variants={headingVariants}
                  className={getHeadingClass(section.type)}
                >
                  {section.title}
                </motion.h1>
              </FloatingElement>
              
              {section.type === "hero" && (
                <>
                  <motion.p variants={lineVariants} className={styles.subtitle}>
                    {section.subtitle}
                  </motion.p>
                  <motion.div variants={lineVariants} className={styles.ctaContainer}>
                    <button className={styles.ctaButton}>
                      Get Started
                      <AnimatedIcon>🐾</AnimatedIcon>
                    </button>
                  </motion.div>
                </>
              )}

              {section.type === "brand" && (
                <>
                  <motion.p variants={lineVariants} className={styles.subtitle}>
                    {section.subtitle}
                  </motion.p>
                  <div className={styles.brandPattern}>
                    <div className={styles.pawIcon}>🐾</div>
                    <div className={styles.pawIcon}>🐾</div>
                    <div className={styles.pawIcon}>🐾</div>
                  </div>
                </>
              )}

              {section.type === "cta" && (
                <>
                  <motion.p variants={lineVariants} className={styles.subtitle}>
                    {section.subtitle}
                  </motion.p>
                  <motion.div variants={lineVariants} className={styles.ctaContainer}>
                    <button className={styles.joinUsButton}>
                      Join Us
                      <AnimatedIcon type="bounce">🚀</AnimatedIcon>
                    </button>
                  </motion.div>
                </>
              )}
              
              {section.lines && (
                <div className={styles.linesContainer}>
                  {section.lines.map((line, lineIndex) => (
                    <motion.div
                      key={lineIndex}
                      variants={lineVariants}
                      className={`${styles.line} ${section.type === 'problem' ? styles.problemLine : styles.solutionLine}`}
                    >
                      <span className={styles.lineIcon}>{line.icon}</span>
                      <span>{line.text}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}