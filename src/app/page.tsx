"use client";
import styles from "./home.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getHabitsList, IHabit } from "./services/kv_db_endpoints";
import WeekGrid from "./components/WeekGrid";

export default function Home() {
  const [habistList, setHabitsList] = useState<IHabit[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getHabitsList();
      setHabitsList(response ?? []);
      console.log(response);
    };
    fetchData();
  }, []);

  // function deleteHabit(name: string) {}

  // function updateHabit(name: string, dateString: string) {}

  return (
    <section className={styles.container}>
      <div>
        {habistList.map((habit) => (
          <WeekGrid
            key={habit.name}
            name={habit.name}
            status={"boll"}
            // deleteHabit={deleteHabit}
            // updateHabit={updateHabit}
          />
        ))}
      </div>
      <Link href="/submit_habit" className={styles.link}>
        novo hábito
      </Link>
    </section>
  );
}
