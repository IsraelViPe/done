import Image from "next/image";
import findSevenLastDays from "../utils/findSevenLastDays";
import showCorrectIcon from "../utils/showCorrectIcon";
import Link from "next/link";

export type day = {
  [key: string]: boolean
}

type habitProps = {
  name: string;
  days: day[];
  deleteHabit: (name: string) => void;
  updateHabit: (name: string, dateString: string) => void;
};

export default function WeekGrid({ name, days, deleteHabit, updateHabit }: habitProps) {
  const currDay = new Date();
  const week = findSevenLastDays(currDay);

  return (
    <div>
      <div>
        <Link href={`/calendar/${name}`}>{name}</Link>
        <button
        onClick={() => deleteHabit(name)} 
        type="button">
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
              <th key={day.date + "th"}>{day.dayWeek}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {week.map((day) => (
              <td key={day.date}>
                <button
                onClick={() => updateHabit(name, day.dayWeek)}  
                type="button">
                  <Image src={ showCorrectIcon(days, day.date) } width={8} height={8} alt="" />
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
