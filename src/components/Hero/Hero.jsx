import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero} id="restaurant">
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          <span className={styles.titleBold}>QENTE&nbsp;</span>
          <span className={styles.titleLight}>MIKHUY</span>
        </h1>
        <p className={styles.subtitle}>COCINA&nbsp;DE&nbsp;CAMPO</p>
      </div>
    </header>
  );
}
