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
    };
    fetchData();
  }, []);

  function deleteHabit(name: string) {
    console.log("função delete Habit");
  }

  function updateHabit(name: string, dateString: string) {
    console.log("função update habit");
  }

  return (
    <section className={styles.container}>
      {!habistList.length ? (
        <p>você não tem hábitos cadastrados</p>
      ) : (
        <div>
          {habistList.map((habit) => (
            <WeekGrid
              key={habit.name}
              name={habit.name}
              days={habit.days}
              deleteHabit={deleteHabit}
              updateHabit={updateHabit}
            />
          ))}
        </div>
      )}
      <Link href="/submit_habit" className={styles.link}>
        novo hábito
      </Link>
    </section>
  );
}
