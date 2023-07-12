"use client"
import { getHabitsList } from "@/app/services/kv_db_endpoints";
import CalendarTable from '../../components/CalendarTable';

export default function Calendar({ params }: { params: { habit: string } }) {
    console.log(params.habit)
    return (
        <section>
            <p>{params.habit}</p> 
            <CalendarTable />
        </section>
    )
}