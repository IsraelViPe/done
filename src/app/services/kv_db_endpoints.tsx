import { kv } from "@vercel/kv";

export type day = {
  [key: string]: boolean;
};

type allHabits = {
  [key: string]: day | {};
}

export interface IHabit {
  0: string;
  1: day;
}

export async function createHabit(habitName: string) {
  console.log(habitName)
  await kv.hset("habits", { [habitName]: {}});
}


export async function getHabitsList (): Promise < IHabit[] | undefined> {
  
  try {
    const habitsList =  await kv.hgetall('habits') as allHabits;
    return Object.entries(habitsList)
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
