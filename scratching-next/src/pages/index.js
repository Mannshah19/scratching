import Link from "next/link";
import StudentCard from "@/components/StudentCard";
import styles from "@/styles/Home.module.css";

const students = [
  { id: 1, name: "Alice Johnson", age: 20, grade: "A" },
  { id: 2, name: "Bob Smith", age: 22, grade: "B" },
  { id: 3, name: "Carol White", age: 21, grade: "A" },
  { id: 4, name: "David Lee", age: 23, grade: "B" },
  { id: 5, name: "Eva Martinez", age: 20, grade: "A" },
  { id: 6, name: "Frank Brown", age: 22, grade: "C" },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Student Directory</h1>
        <Link href="/about" className={styles.navLink}>About</Link>
      </div>
      <p className={styles.sectionTitle}>All Students ({students.length})</p>
      <div className={styles.grid}>
        {students.map((student) => (
          <StudentCard key={student.id} name={student.name} age={student.age} grade={student.grade} />
        ))}
      </div>
    </div>
  );
}
