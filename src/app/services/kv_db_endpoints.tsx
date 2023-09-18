import { kv } from "@vercel/kv";

export type day = {
  [key: string]: boolean;
};

export type Habits = {
  [key: string]: Record<string, boolean>
} | null

export interface IHabit {
  length:number;
  0: string;
  1: day;
}

export async function createHabit(habitName: string) {
  await kv.hset("habits", { [habitName]: {}});
}


export async function getHabitsList (): Promise < Habits | undefined> {
  
  try {
    const habitsList =  await kv.hgetall('habits');
    return habitsList as Habits
  } catch (error) {
    console.log(error);
  }
}

export async function deleteHabitByName(habitName: string) {
  try {
   await kv.hdel('habits', habitName);
  } catch (error) {
    console.log(error);
  }
}

export async function updateHabitByName(habitName: string, date: string, daysList: day) {

  const isUndefinedDate = !(date in daysList);

  const updatedHabitList = {
    [habitName] : {
      ...daysList, [date]: isUndefinedDate? true: !daysList[date]
    }
  }
 
  try {
    await kv.hset("habits", updatedHabitList )
    
  } catch (error) {
    console.log(error);
  }
}
