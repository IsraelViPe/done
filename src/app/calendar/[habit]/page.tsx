import { getHabitsList } from "@/app/services/kv_db_endpoints";

export default async function Calendar({ params }: { params: { habit: string } }) {

    const habitList = await getHabitsList();
    const currHabit = habitList?.find(({name}) => name === params.habit.replace('%20', ' '));

    return (
        <section>
            <p>{currHabit?.name}</p> 
        </section>
    )
}