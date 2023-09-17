"use client";

import Image from "next/image";
import findSevenLastDays from "../utils/findSevenLastDays";
import showCorrectIcon from "../utils/showCorrectIcon";
import Link from "next/link";
import { day } from "../services/kv_db_endpoints";
import { deleteHabit, updateHabit } from "../actions/actions";
import styles from "./weekgrid.module.scss";

type habitProps = {
  name: string;
  days: day;
};

export default function WeekGrid({ name, days }: habitProps) {
  const currDay = new Date();
  const week = findSevenLastDays(currDay);

  const findStreak = (days: day) => {
    let countMaxStreak = 0;
    let auxCount = 0
    let firstDayStreak = '';
    let lastDayStreak = '';

    for (let [key, value] of Object.entries(days)) {
      if(value) {
        if (auxCount === 0) {
          firstDayStreak = key
        }
        auxCount += 1
        lastDayStreak = key
      } else {
        if(auxCount > countMaxStreak) {
          countMaxStreak = auxCount
          lastDayStreak = key
        }
        auxCount = 0
      }
    }

    if (auxCount > countMaxStreak) {
      countMaxStreak = auxCount;
    }

    return {
      countMaxStreak,
      firstDayStreak,
      lastDayStreak
    }
  }
  console.log(days);
  console.log(findStreak(days));

  return (
    <div className={styles.card_container}>
      <div className={styles.card_header}>
        <Link href={`/calendar/habit/?habitName=${name}`}>{name}</Link>
        <button onClick={() => deleteHabit(name)} type="button">
          <Image
            src={"/trash.svg"}
            width={20}
            height={20}
            alt="ícone lixeira"
          />
        </button>
      </div>
      <div className={styles.card_body}>
        {week.map((day, i) => {
          const urlIcon = showCorrectIcon(days, day.date)
          return (
            <div key={name + day.date}>
              <span className={i === 6 ? styles.curr_days: styles.days_week} >{day.dayWeek}</span>
              <button
              onClick={() => updateHabit(name, day.date)}
              type="button"
            >
              <Image
                src={urlIcon}
                width={15}
                height={15}
                alt="status ícone"
              />
            </button>
            </div>
          )
        } )}
      </div>
    </div>
  );
}
