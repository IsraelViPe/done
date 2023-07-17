'use server'
import { revalidatePath } from "next/cache";

import { deleteHabitByName, updateHabitByName } from "../services/kv_db_endpoints";

export async function deleteHabit (name: string) {
    await deleteHabitByName(name);
    revalidatePath("/submit_habit");
  };
  
export async function updateHabit (name: string, date: string)  {
  console.log(name, date)
    await updateHabitByName(name, date);
    revalidatePath("/submit_habit")
  };