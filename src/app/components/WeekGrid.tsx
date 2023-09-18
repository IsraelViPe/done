import findSevenLastDays from "../utils/findSevenLastDays";
import showCorrectIcon from "../utils/showCorrectIcon";
import Link from "next/link";
import { day } from "../services/kv_db_endpoints";
import styles from "./weekgrid.module.scss";
import DeleteButton from "./DeleteButton";
import ToggleButton from "./ToggleButton";

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
        <DeleteButton name={name} />
      </div>
      <div className={styles.card_body}>
        {week.map((day, i) => {
          const urlIcon = showCorrectIcon(days, day.date)
          return (
            <div key={name + day.date}>
              <span className={i === 6 ? styles.curr_days: styles.days_week} >{day.dayWeek}</span>
              <ToggleButton name={name} date={day.date} dayslist={days} urlIcon={urlIcon} />
            </div>
          )
        } )}
      </div>
    </div>
  );
}
