import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.navMenu}>
          <img
            className={styles.menuIcon}
            src="/menu-icon.png"
            alt="menu icon"
          />
          <div className={styles.navContent}>
            <p className={styles.blah}>hello!</p>
          </div>
        </div>
        <img
          className={`${styles.img}`}
          src="/spark-logo.png"
          alt="spark logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
