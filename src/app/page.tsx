import styles from "./home.module.scss";
import { getHabitsList } from "./services/kv_db_endpoints";
import Link from "next/link";
import WeekGrid from "./components/WeekGrid";


export default async function Home() {
  const habitList = await getHabitsList();

  return (
    <section className={styles.container}>
      {!habitList?.length ? (
        <p>você não tem hábitos cadastrados</p>
      ) : (
        <div>
          {habitList?.map((habit, i) => (
            <WeekGrid key={habit.name} name={habit.name} days={habit.days} />
          ))}
        </div>
      )}
      <Link href="/submit_habit" className={styles.link}>
        novo hábito
      </Link>
    </section>
  );
}
