import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className="display-4">Qente Mikhuy</h1>
        <p className="lead">Cocina de campo</p>
      </div>
    </header>
  );
}
