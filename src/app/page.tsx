import styles from "./home.module.scss";
import { IHabit, getHabitsList } from './services/kv_db_endpoints';
import Link from "next/link";
import WeekGrid from "./components/WeekGrid";

export default async function Home() {
  const habitList: IHabit[] | undefined = await getHabitsList();

  return (
    <section className={styles.container}>
      {!habitList?.length ? (
        <p className={styles.no_habit}>
          você ainda não tem <br />{" "}
          <span style={{ color: "#45EDAD" }}>hábitos</span> cadastrados
        </p>
      ) : (
        <div className={styles.habits_list_cont}>
          <span>últimos 7 dias</span>
          <div className={styles.habits_list}>
            {habitList?.map(([habit, days]) => (
              <WeekGrid key={habit} name={habit} days={days} />
            ))}
          </div>
        </div>
      )}
      <Link className={styles.link_button} href="/submit_habit">
        <button>novo hábito</button>
      </Link>
    </section>
  );
}
