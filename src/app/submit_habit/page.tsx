import { revalidatePath } from 'next/cache';
import style from './submit_habit.module.scss';
import { IHabit, createOrUpdateHabit, getHabitsList } from '../services/kv_db_endpoints';
import { redirect } from 'next/navigation'


export default async function SubmitHabit() {

    const habitsList = await getHabitsList();

    
    async function addNewHabit(data:FormData) {
        'use server'
        const newHabitName = data.get("newHabit") as string;
        const newHabit: IHabit = {name: newHabitName, days: {}}

        if (habitsList) {
            console.log('entrei aqui')
            const updatedHabitsList = [...habitsList, newHabit];
            await createOrUpdateHabit(updatedHabitsList);
        } else {
            console.log('entrei no else')
            await createOrUpdateHabit([newHabit]);
        }   
        revalidatePath("/submit_habit");
        redirect("/");
    }
    
    return (
        <section className={style.container}>
            <form action={addNewHabit}  className={style.form} method='post'>
                <h3>novo hábito</h3>
                <label htmlFor="">
                    <input
                    required
                    name="newHabit"
                    type="text" />
                </label>
                <button
                className={style.primary_button}
                type="submit">cadastrar</button>
                <button
                className={style.delete_button}
                type="button">cancelar</button>
            </form>
        </section>
    )
}