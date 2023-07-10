import Image from "next/image";
import findSevenLastDays from "../utils/FindSevenLastDays";

type habitProps = {
  name: string;
  status: string;
  deleteHabit: (name: string) => void;
  updateHabit: (name: string, dateString: string) => void;
};

export default function WeekGrid({ name, status, deleteHabit, updateHabit }: habitProps) {
  const currDay = new Date();
    
  const week = findSevenLastDays(currDay);

  return (
    <div>
      <div>
        <span>{name}</span>
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
          <tr >
      {
        week.map((day) => (
                <th key={day.date + 'th'}>{day.dayWeek}</th>
        ))}
            </tr>
            <tr>
                {week.map((day) => (
                <td key={day.date}>
                    <button
                    onClick={ () => updateHabit( name , day.date)}
                    type="button">
                        <Image
                        src={"/check.svg"}
                        width={20}
                        height={20}
                        alt=""/>
                    </button>
                </td>

                ))}
            </tr>
      </table>
    </div>
  );
}
