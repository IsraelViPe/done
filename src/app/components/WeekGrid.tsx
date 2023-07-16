"use client";

import Image from "next/image";
import findSevenLastDays from "../utils/findSevenLastDays";
import showCorrectIcon from "../utils/showCorrectIcon";
import Link from "next/link";
import { day } from "../services/kv_db_endpoints";
import { deleteHabit, updateHabit } from "../actions/actions";

type habitProps = {
  name: string;
  days: day;
};

export default function WeekGrid({ name, days }: habitProps) {
    
  const currDay = new Date();
  const week = findSevenLastDays(currDay);

  return (
    <div>
      <div>
        <Link href={`/calendar/${name}`}>{name}</Link>
        <button onClick={() => deleteHabit(name)} type="button">
          <Image
            src={"/trash.svg"}
            width={20}
            height={20}
            alt="ícone lixeira"
          />
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {week.map((day) => (
              <th key={name + day.date}>{day.dayWeek}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {week.map((day) => (
              <td key={name + day.date}>
                <button
                  onClick={() => updateHabit(name, day.date)}
                  type="button"
                >
                  <Image
                    src={showCorrectIcon(days, day.date)}
                    width={8}
                    height={8}
                    alt=""
                  />
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
