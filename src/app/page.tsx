"use client";
import styles from "./home.module.scss";
import { useEffect } from "react";
import Link from "next/link";
import { createOrUpdateHabit } from "./services/kv_db_endpoints";
import WeekGrid from "./components/WeekGrid";
import { useGlobalContext } from "./context/store";

export default function Home() {
  
  const { habitList, setHabitList } = useGlobalContext();

  function deleteHabit(nameHabit: string) {
    const updatedHabitList = habitList.filter(({name}) => name !== nameHabit  );
    setHabitList(updatedHabitList);
  }

  useEffect(() => {
    const updateData = async () => {
      await createOrUpdateHabit(habitList);
    }
    updateData();
  }, [habitList]);

  function updateHabit(nameHabit: string, dateString: string) {
    const habitIndex = habitList.findIndex(({name}) => name === nameHabit);
    const updatedHabitsList = [...habitList];

    if (habitIndex !== -1) {
      let updatedHabit = updatedHabitsList[habitIndex];

      if (!Object.keys(updatedHabit.days).includes(dateString)) {
        updatedHabit.days[dateString] = true;
        setHabitList (updatedHabitsList)
      } else {
        updatedHabit.days[dateString] = !updatedHabit.days[dateString];
        setHabitList (updatedHabitsList)
      } 
    }
  }

  return (
    <section className={styles.container}>
      {!habitList.length ? (
        <p>você não tem hábitos cadastrados</p>
      ) : (
        <div>
          {habitList.map((habit) => (
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
