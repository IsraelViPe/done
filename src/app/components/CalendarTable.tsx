import Image from "next/image";
import { useState } from "react";
import showCorrectIcon from "../utils/showCorrectIcon";
import { day } from "./WeekGrid";

type habitProps = {
  name: string;
  days: day;
  updateHabit: (name: string, dateString: string) => void;
};

export default function CalendarTable({ name, days, updateHabit }: habitProps) {

  const [currDay, _setCurrDay] = useState(new Date());
  const [currMonth, setCurrMonth] = useState(currDay.getMonth());
  const [currYear, setCurrYear] = useState(currDay.getFullYear());

  const months = {
    0: "janeiro",
    1: "fevereiro",
    2: "março",
    3: "abril",
    4: "maio",
    5: "junho",
    6: "julho",
    7: "agosto",
    8: "setembro",
    9: "outubro",
    10: "novembro",
    11: "dezembro",
  };

  let firstDayMonth = new Date(currYear, currMonth, 1);
  const blankDays = firstDayMonth.getDay() === 0 ? [] : Array(firstDayMonth.getDay()).fill("blank");

  const daysInCurrMonth = [...blankDays];
  
  while(firstDayMonth.getMonth() === currMonth) {
    daysInCurrMonth.push(firstDayMonth.toLocaleDateString());
    firstDayMonth.setDate(firstDayMonth.getDate() + 1)
  }
  
  const nextPreviousMonth = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === "left") {
      if (currMonth === 0) {
        setCurrMonth(11);
        setCurrYear(currYear - 1);
      } else {
        setCurrMonth(currMonth - 1);
      }
    } else {
      if (currMonth === 11) {
        setCurrMonth(0);
        setCurrYear(currYear + 1);
      } else {
        setCurrMonth(currMonth + 1);
      }
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <td>
            {" "}
            <button
              id="left"
              type="button"
              onClick={(e) => nextPreviousMonth(e)}
            >
              <Image
                width={20}
                height={20}
                alt="left arrow"
                src={"/left.svg"}
              />
            </button>{" "}
          </td>
          <td>{`${
            months[currMonth as keyof typeof months]
          } de ${currYear}`}</td>
          <td>
            {" "}
            <button
              id="rigrh"
              type="button"
              onClick={(e) => nextPreviousMonth(e)}
            >
              <Image
                width={15}
                height={15}
                alt="right arrow"
                src={"/right.svg"}
              />
            </button>
          </td>
        </tr>
        <tr>
          <td>dom</td>
          <td>seg</td>
          <td>ter</td>
          <td>qua</td>
          <td>qui</td>
          <td>sex</td>
          <td>sab</td>
        </tr>
      </thead>
      <tbody>
        {daysInCurrMonth.map((day) => (
            <td key={day}>
                <button
                onClick={() => updateHabit(name, day)}  
                type="button">
                  <Image src={ showCorrectIcon(days, day) } width={8} height={8} alt="" />
                </button>
              </td>
        ))}
      </tbody>
    </table>
  );
}
