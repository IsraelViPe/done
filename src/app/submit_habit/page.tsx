export default function SubmitHabit() {
    return (
        <form>
            <h2>novo hábito</h2>
            <label htmlFor="">
                <input 
                type="text" />
            </label>
            <button
            type="button">cadastrar</button>
            <button
            type="button">cancelar</button>
        </form>
    )
}