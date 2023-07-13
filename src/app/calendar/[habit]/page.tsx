"use client"
import { useGlobalContext } from '@/app/context/store';
import CalendarTable from '../../components/CalendarTable';

export default function Calendar({ params }: { params: { habit: string } }) {
    const { habitList, setHabitList } = useGlobalContext()

    const habitName = params.habit.trim().replace('%20', ' ');
    console.log(habitName);


    const updateHabit = (name:string, date:string) => {
        console.log(name, date);
    } 

    return (
        <section>
            <p>{habitName}</p> 
            <CalendarTable updateHabit={updateHabit} name={ '' } days={{}}/>
        </section>
    )
}