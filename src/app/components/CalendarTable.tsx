import Image from "next/image";
import { useState } from "react";

export default function CalendarTable() {
  const [currDay, setCurrDay] = useState(new Date());
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

  // let currMonthName = currDay.toLocaleDateString("pt-BR", { month: "long" });

  console.log(currDay);

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
      </thead>
      <tbody></tbody>
    </table>
  );
}
