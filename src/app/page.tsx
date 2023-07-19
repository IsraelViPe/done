import styles from "./home.module.scss";
import { getHabitsList } from "./services/kv_db_endpoints";
import Link from "next/link";
import WeekGrid from "./components/WeekGrid";

export default async function Home() {
  const habitList = await getHabitsList();

  return (
    <section className={styles.container}>
      {!habitList?.length ? (
        <p className={styles.no_habit}>
          você ainda não tem <br />{" "}
          <span style={{ color: "#45EDAD" }}>hábitos</span> cadastrados
        </p>
      ) : (
        <div className={styles.habits_list}>
          {habitList?.map((habit) => (
            <WeekGrid key={habit.name} name={habit.name} days={habit.days} />
          ))}
        </div>
      )}
      <Link className={styles.link_button} href="/submit_habit">
        <button className={styles.primary_button}>novo hábito</button>
      </Link>
    </section>
  );
}
