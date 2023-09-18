'use server'
import { revalidatePath } from "next/cache";

import { day, deleteHabitByName, updateHabitByName } from "../services/kv_db_endpoints";

export async function deleteHabit (name: string) {
    await deleteHabitByName(name);
    revalidatePath("/");
  };
  
export async function updateHabit (name: string, date: string, dayList: day)  {
    await updateHabitByName(name, date, dayList);
    revalidatePath("/submit_habit")
  };