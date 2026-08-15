import styles from "@/styles/StudentCard.module.css";

export default function StudentCard({ name, age, grade }) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>{name.charAt(0)}</div>
      <p className={styles.name}>{name}</p>
      <p className={styles.info}>Age: {age}</p>
      <span className={styles.badge}>Grade: {grade}</span>
    </div>
  );
}
