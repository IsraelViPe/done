"use client";
import styles from "./home.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createOrUpdateHabit, getHabitsList, IHabit } from "./services/kv_db_endpoints";
import WeekGrid from "./components/WeekGrid";

export default function Home() {
  const [habitsList, setHabitsList] = useState<IHabit[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getHabitsList();
      if (response) {
        setHabitsList(response);
      }
    };
    fetchData();
  }, []);

  function deleteHabit(nameHabit: string) {
    const updatedHabitList = habitsList.filter(({name}) => name !== nameHabit  );
    setHabitsList(updatedHabitList);
  }

  useEffect(() => {
    const updateData = async () => {
      await createOrUpdateHabit(habitsList);

    }
    updateData();
  }, [habitsList]);

  function updateHabit(nameHabit: string, dateString: string) {
    const habitIndex = habitsList.findIndex(({name}) => name === nameHabit);
    const updatedHabitsList = [...habitsList];

    if (habitIndex !== -1) {
      let updatedHabit = updatedHabitsList[habitIndex];

      if (!Object.keys(updatedHabit.days).includes(dateString)) {
        updatedHabit.days[dateString] = true;
        setHabitsList(updatedHabitsList)
      } else {
        updatedHabit.days[dateString] = !updatedHabit.days[dateString];
        setHabitsList(updatedHabitsList)
      } 
    }
  }

  return (
    <section className={styles.container}>
      {!habitsList.length ? (
        <p>você não tem hábitos cadastrados</p>
      ) : (
        <div>
          {habitsList.map((habit) => (
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
