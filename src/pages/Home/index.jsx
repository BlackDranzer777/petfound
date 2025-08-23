import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.heading}>Find. Report. Reunite.</h1>
        <p className={styles.subheading}>
          Help lost pets get back home faster. Report a lost or found animal today.
        </p>
        <div className={styles.actions}>
          <Link to="/report-lost" className={`${styles.card} ${styles.cardOrange}`}>
            <h2>Lost a Pet?</h2>
            <p>Report your lost pet and alert the community.</p>
          </Link>
          <Link to="/report-found" className={`${styles.card} ${styles.cardYellow}`}>
            <h2>Found a Pet?</h2>
            <p>Post details and help reconnect them with their owner.</p>
          </Link>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>12</span>
          <span className={styles.statLabel}>Pets reported today</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>8</span>
          <span className={styles.statLabel}>Successfully reunited</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>5</span>
          <span className={styles.statLabel}>New posts this hour</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
