import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Landing.module.css";

import hero from '../../assets/hero.png'; 
// import problem_1 from '../../assets/problem-1.png';
// import problem_2 from '../../assets/problem-2.png';
// import problem_3 from '../../assets/problem-3.png';

import problemBg from '../../assets/problem-bg.png';



// const problemImages = [problem_1, problem_2, problem_3];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


export default function Landing() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
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
      content: [
        {
          title: "Posters get ignored",
          description: "Traditional missing pet posters often go unnoticed in busy neighborhoods."
        },
        {
          title: "Social media posts vanish in noise",
          description: "Your urgent posts get buried in endless social media feeds."
        },
        {
          title: "No single trusted place for help",
          description: "Pet owners struggle to find reliable resources when they need them most."
        }
      ],
      type: "problem"
    },
    {
      id: "solution", 
      title: "One platform. Endless hope.",
      content: [
        {
          title: "Real-time reporting and search",
          description: "Instantly notify your community when a pet goes missing."
        },
        {
          title: "Verified network of helpers",
          description: "Connect with trusted NGOs, shelters, and volunteers."
        },
        {
          title: "Simple, secure, and trustworthy",
          description: "Easy-to-use platform designed with privacy and safety in mind."
        }
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
    
    e.preventDefault();
    const delta = e.deltaY;
    const newSection = delta > 0 
      ? Math.min(currentSection + 1, sections.length - 1)
      : Math.max(currentSection - 1, 0);
      
    if (newSection !== currentSection) {
      setIsScrolling(true);
      setCurrentSection(newSection);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    if (isScrolling) return;

    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > 50;
    const isDownSwipe = distance < -50;

    if (isUpSwipe) {
      const newSection = Math.min(currentSection + 1, sections.length - 1);
      if (newSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(newSection);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    }
    
    if (isDownSwipe) {
      const newSection = Math.max(currentSection - 1, 0);
      if (newSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(newSection);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchmove', handleTouchMove, { passive: true });
      container.addEventListener('touchend', handleTouchEnd, { passive: true });
      
      return () => {
        container.removeEventListener('wheel', handleScroll);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [currentSection, isScrolling, touchStart, touchEnd]);

  const getSectionStyle = (index) => {
    const isCurrent = index === currentSection;
    const isPast = index < currentSection;
    const isFuture = index > currentSection;

    // Define transition directions for each section
    let transform = '';
    
    if (index <= 2) {
      // First 3 sections (hero, problem, solution) - horizontal scroll
      if (isCurrent) {
        transform = 'translateX(0)';
      } else if (isPast) {
        transform = 'translateX(-100vw)';
      } else {
        transform = 'translateX(100vw)';
      }
    } else {
      // Last 2 sections (brand, cta) - vertical scroll
      if (isCurrent) {
        transform = 'translateY(0)';
      } else if (isPast) {
        transform = 'translateY(-100vh)';
      } else {
        transform = 'translateY(100vh)';
      }
    }

    return {
      transform,
      opacity: isCurrent ? 1 : 0,
      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <div className={styles.landingContainer} ref={containerRef}>
      {/* Background decoration */}
      {/* <div className={styles.backgroundDecor}>
        <div className={`${styles.bgShape} ${styles.bgShape1}`}></div>
        <div className={`${styles.bgShape} ${styles.bgShape2}`}></div>
        <div className={`${styles.bgShape} ${styles.bgShape3}`}></div>
      </div> */}

      {/* Sections */}
      {sections.map((section, index) => (
        <div 
          key={section.id} 
          className={`${styles.section} ${styles[section.type + 'Section']}`}
          style={getSectionStyle(index)}
        >
          <div className={styles.container}>
            <motion.div
              initial="hidden"
              animate={currentSection === index ? "show" : "hidden"}
              variants={sectionVariants}
              className={styles.sectionContent}
            >
              {/* Hero Section */}
              {section.type === "hero" && (
                <div className={styles.heroLayout}>
                  <div className={styles.heroText}>
                    <motion.h1 
                      variants={itemVariants}
                      className={styles.heroHeading}
                    >
                      {section.title}
                    </motion.h1>
                    <motion.p 
                      variants={itemVariants}
                      className={styles.heroSubtitle}
                    >
                      {section.subtitle}
                    </motion.p>
                    <motion.div 
                      variants={itemVariants}
                      className={styles.heroButtons}
                    >
                      <button className={styles.primaryButton}>
                        Get Started
                      </button>
                      <button className={styles.secondaryButton}>
                        Learn More
                      </button>
                    </motion.div>
                  </div>
                  {/* <motion.div 
                    variants={itemVariants}
                    className={styles.heroImageContainer}
                  >
                    <img 
                      src="/path-to-your-images/image1.png" 
                      alt="Person reaching toward dog"
                      className={styles.heroImage}
                    />
                  </motion.div> */}
                  <motion.div 
                    variants={itemVariants} 
                    className={styles.heroImageContainer}
                  >
                    <div className={styles.poster}>
                      <img 
                        src={hero} 
                        alt="Hero dog illustration" 
                        className={styles.heroImage} 
                      />
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Problem Section */}
              {section.type === "problem" && (
                <div className={styles.problemSection}>
                  
                  {/* fixed background image */}
                  <img src={problemBg} alt="" className={styles.problemBgImage} />

                  <div className={styles.problemLayout}>
                    <motion.h2 
                      variants={itemVariants}
                      className={styles.sectionHeading}
                    >
                      {section.title}
                    </motion.h2>

                    <div className={styles.contentGrid}>
                      {section.content.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          variants={itemVariants}
                          className={styles.problemCard}
                        >
                          <div className={styles.problemBody}>
                            <h3 className={styles.problemTitle}>{item.title}</h3>
                            <p className={styles.problemText}>{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}



              {/* Solution Section */}
              {section.type === "solution" && (
                <div className={styles.solutionLayout}>
                  <motion.h2 
                    variants={itemVariants}
                    className={styles.sectionHeading}
                  >
                    {section.title}
                  </motion.h2>
                  <div className={styles.contentGrid}>
                    {section.content.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        variants={itemVariants}
                        className={styles.solutionCard}
                      >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                  {/* <motion.div 
                    variants={itemVariants}
                    className={styles.sectionImages}
                  >
                    <img 
                      src="/path-to-your-images/image6.png" 
                      alt="Person walking with dog"
                      className={styles.decorativeImage}
                    />
                    <img 
                      src="/path-to-your-images/image7.png" 
                      alt="Person running with dog"
                      className={styles.decorativeImage}
                    />
                  </motion.div> */}
                </div>
              )}

              {/* Brand Section */}
              {section.type === "brand" && (
                <div className={styles.brandLayout}>
                  <motion.div 
                    variants={itemVariants}
                    className={styles.brandContent}
                  >
                    <h2 className={styles.brandHeading}>{section.title}</h2>
                    <p className={styles.brandSubtitle}>{section.subtitle}</p>
                  </motion.div>
                  {/* <motion.div 
                    variants={itemVariants}
                    className={styles.brandImageContainer}
                  >
                    <img 
                      src="/path-to-your-images/image2.png" 
                      alt="Person hugging dog - reunion"
                      className={styles.brandImage}
                    />
                  </motion.div> */}
                </div>
              )}

              {/* CTA Section */}
              {section.type === "cta" && (
                <div className={styles.ctaLayout}>
                  <motion.h2 
                    variants={itemVariants}
                    className={styles.ctaHeading}
                  >
                    {section.title}
                  </motion.h2>
                  <motion.p 
                    variants={itemVariants}
                    className={styles.ctaSubtitle}
                  >
                    {section.subtitle}
                  </motion.p>
                  <motion.div 
                    variants={itemVariants}
                    className={styles.ctaButtons}
                  >
                    <button className={styles.joinButton}>
                      Join Us
                    </button>
                  </motion.div>
                  {/* <motion.div 
                    variants={itemVariants}
                    className={styles.ctaImageContainer}
                  >
                    <img 
                      src="/path-to-your-images/image5.png" 
                      alt="Person walking with dog"
                      className={styles.ctaImage}
                    />
                  </motion.div> */}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}