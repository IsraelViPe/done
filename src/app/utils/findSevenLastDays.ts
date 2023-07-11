export default function findSevenLastDays(today: Date) {
  const currMonth = today.getMonth();
  const currYear = today.getFullYear();

  let currDay = new Date(currYear, currMonth, today.getDate() - 6);
  const result = [];

  while (currDay <= today) {
    result.push({
      dayWeek: currDay.toLocaleDateString("pt-BR", { weekday: "short" }),
      date: currDay.toLocaleDateString(),
    });

    currDay = new Date(currYear, currMonth, currDay.getDate() + 1);
  }

  return result;
}
