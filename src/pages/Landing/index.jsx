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
  const containerRef = useRef();
  
  const sections = [
    {
      id: "hero",
      title: "Every lost pet deserves to come home.",
      subtitle: "Join the community that reunites lost pets with their families through the power of collective care.",
      type: "hero"
    },
    {
      id: "problem",
      title: "When pets go missing, every second counts.",
      content: [
        {
          title: "Traditional methods fall short",
          description: "Paper posters get weathered and ignored. Social media posts disappear in endless feeds. Precious time is lost when it matters most."
        },
        {
          title: "Fragmented search efforts",
          description: "Pet owners struggle across multiple platforms, shelters, and groups with no centralized way to coordinate rescue efforts."
        },
        {
          title: "Limited community reach",
          description: "Without a trusted network, your search is confined to whoever happens to see your desperate pleas for help."
        }
      ],
      type: "problem"
    },
    {
      id: "solution", 
      title: "One platform. Infinite possibilities.",
      content: [
        {
          title: "Instant community alerts",
          description: "Report your lost pet and instantly notify thousands of caring neighbors, volunteers, and animal organizations in your area."
        },
        {
          title: "Smart matching system",
          description: "Our platform connects lost pet reports with found pet sightings using location, timing, and physical descriptions."
        },
        {
          title: "Verified helper network",
          description: "Connect with trusted NGOs, shelters, veterinarians, and trained volunteers who know how to safely help lost animals."
        },
        {
          title: "Reward & recognition system",
          description: "Motivate your community with reward offerings and celebrate the heroes who help bring families back together."
        }
      ],
      type: "solution"
    },
    {
      id: "features",
      title: "Built for pet parents, powered by community.",
      content: [
        {
          title: "Report a lost pet",
          description: "Upload photos, set location alerts, add descriptions, and offer rewards to mobilize your neighborhood instantly."
        },
        {
          title: "Browse found pets",
          description: "Search through reported found pets and sightings. Help identify and reunite pets even if they're not yours."
        },
        {
          title: "Safe communication",
          description: "Connect with finders and helpers through our secure messaging system that protects your privacy."
        },
        {
          title: "Real-time updates",
          description: "Get instant notifications about potential matches, sightings, and updates from your community network."
        },
        {
          title: "NGO partnerships",
          description: "Animal rescue organizations and shelters actively participate to expand search efforts and provide expert guidance."
        },
        {
          title: "Community spotlight",
          description: "Celebrate successful reunions and recognize the everyday heroes who make happy endings possible."
        }
      ],
      type: "features"
    },
    {
      id: "brand",
      title: "PetFound",
      subtitle: "Where lost becomes found, where hope becomes reunion",
      type: "brand"
    },
    {
      id: "cta",
      title: "Ready to bring them home?",
      subtitle: "Join thousands of pet lovers creating happy endings every day. Because together, we never stop searching.",
      type: "cta"
    }
  ];

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
        >
          <div className={styles.container}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
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
                        Report Lost Pet
                      </button>
                      <button className={styles.secondaryButton}>
                        Browse Found Pets
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
                        alt="Happy reunion between pet and owner" 
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
                  {/* <img src={problemBg} alt="" className={styles.problemBgImage} /> */}

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
                  <div className={styles.solutionGrid}>
                    {section.content.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        variants={itemVariants}
                        className={styles.solutionCard}
                      >
                        <div className={styles.cardNumber}>{String(itemIndex + 1).padStart(2, '0')}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features Section */}
              {section.type === "features" && (
                <div className={styles.featuresLayout}>
                  <motion.h2 
                    variants={itemVariants}
                    className={styles.sectionHeading}
                  >
                    {section.title}
                  </motion.h2>
                  <div className={styles.featuresContainer}>
                    <div className={styles.featuresLeft}>
                      {section.content.slice(0, 3).map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          variants={itemVariants}
                          className={styles.featureItem}
                        >
                          <div className={styles.featureIcon}>
                            {itemIndex === 0 ? "📝" : itemIndex === 1 ? "🔍" : "💬"}
                          </div>
                          <div className={styles.featureContent}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className={styles.featuresRight}>
                      {section.content.slice(3, 6).map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex + 3}
                          variants={itemVariants}
                          className={styles.featureItem}
                        >
                          <div className={styles.featureIcon}>
                            {itemIndex === 0 ? "🔔" : itemIndex === 1 ? "🏢" : "🏆"}
                          </div>
                          <div className={styles.featureContent}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
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
                      Join PetFound Today
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