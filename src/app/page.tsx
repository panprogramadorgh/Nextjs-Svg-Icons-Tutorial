import styles from "./page.module.css";
import HomeIcon from "@/svgs/home.svg";
import PersonIcon from "@/svgs/person.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Home page</h1>
        <HomeIcon />
        <PersonIcon />
      </div>
    </main>
  );
}
