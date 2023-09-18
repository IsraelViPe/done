import { revalidatePath } from "next/cache";
import style from "./submit_habit.module.scss";
import { createHabit } from "../services/kv_db_endpoints";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function SubmitHabit() {
  async function addNewHabit(data: FormData) {
    "use server";
    const newHabitName = data.get("newHabit") as string;
    try {
      await createHabit(newHabitName);
    } catch (error) {
      console.log("Ops algo deu errado" + error);
    }
    revalidatePath("/");
    redirect("/");
  }

  return (
    <section className={style.container}>
      <form action={addNewHabit} className={style.form}>
        <h3>novo hábito</h3>
        <label htmlFor="newHabit">
          <input id="newHabit" required name="newHabit" type="text" />
        </label>
        <button type="submit" className={style.primary_button} >
          cadastrar
        </button>
        <Link className={style.link_button} href="/">
          <button type="button">
            cancelar
          </button>
        </Link>
      </form>
    </section>
  );
}
