import Link from "next/link";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>About</h1>
        <Link href="/" className={styles.navLink}>Home</Link>
      </div>
      <div className={styles.card}>
        <p>
          This is a student directory app built with Next.js. It displays a list
          of students using a reusable StudentCard component that receives student
          data through props.
        </p>
      </div>
    </div>
  );
}
