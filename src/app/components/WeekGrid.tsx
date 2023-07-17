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
        {week.map((day) => {
          const urlIcon = showCorrectIcon(days, day.date)
          return (
            <div key={name + day.date}>
              <span>{day.dayWeek}</span>
              <button
              onClick={() => updateHabit(name, day.date)}
              type="button"
            >
              <Image
                src={urlIcon}
                width={urlIcon === "/ball.svg"? 8: 15}
                height={urlIcon === "/ball.svg"? 8: 15}
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
