import styles from "../styles/DemoCard.module.css";

const DemoCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardTitle}>
        <img
          className={styles.cardIcon}
          src="/card-icon.png"
          alt="spark logo dark"
        />
        <h4>Maintenance Advisor</h4>
      </div>
      <div className={styles.cardMenuWrapper}>
        <img className={styles.cardMenu} src="/three-dots.png" alt="menu dots" />
      </div>
      <div className={styles.description}>
        Prevent unplanned downtime and improve efficiency with artificial
        intelligence (AI)-powered anomaly detection and predictive maintenance.
      </div>
      <button className={styles.cardButton}>Open Demo</button>
    </div>
  );
};

export default DemoCard;
