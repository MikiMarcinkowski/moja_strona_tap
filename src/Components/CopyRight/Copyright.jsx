
import styles from "./Copyright.module.css"; // Import CSS Module

const Copyright = () => {
  return (
    <footer className={styles.copyright}>
      © {new Date().getFullYear()} MARVI
    </footer>
  );
};

export default Copyright;
