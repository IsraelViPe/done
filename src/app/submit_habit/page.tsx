import style from './submit_habit.module.scss';

export default function SubmitHabit() {
    return (
        <section className={style.container}>
            <form className={style.form}>
                <h2>novo hábito</h2>
                <label htmlFor="">
                    <input
                    type="text" />
                </label>
                <button
                className={style.primary_button}
                type="button">cadastrar</button>
                <button
                className={style.delete_button}
                type="button">cancelar</button>
            </form>
        </section>
    )
}