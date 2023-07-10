export default function findSevenLastDays(today: Date) {
    const currMonth = today.getMonth();
    const currYear = today.getFullYear();

    const weekDays = { 0: "Dom", 1:"Seg", 2:"Ter", 3:"Qua", 4:"Qui", 5 :"Sex", 6: "Sab"};

    let currDay = new Date(currYear, currMonth, today.getDate() - 6);
    const result = [];

    while (currDay <= today) {
        let dayWeek = currDay.getDay();
        result.push({dayWeek: weekDays[dayWeek as keyof typeof weekDays], date: currDay.toLocaleDateString()})

        currDay = new Date(currYear, currMonth, currDay.getDay() + 1)
    }

    return result;
}