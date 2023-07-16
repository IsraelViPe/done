import { createClient } from "@vercel/kv";

export type day = {
  [key: string]: boolean;
};

export interface IHabit {
  name: string;
  days: day;
}

const kv = createClient({
  url:
    process.env.KV_REST_API_URL ??
    "https://major-gopher-42455.kv.vercel-storage.com",
  token:
    process.env.KV_REST_API_TOKEN ??
    "AaXXASQgM2ZjMmJjMGEtN2UyMy00NGJiLWE5ZmYtMTFiYmE0ZmZiMjhkYzM5OTVhMjBiZjI5NDNjYzgyNDk5OTAwOGQxMjljZmU=",
});

export async function createHabit(habitName: string) {
  try {
    const habistList: IHabit[] | null = await kv.get("habits");
    const alreadyExists = habistList?.some(({ name }) => name === habitName);

    if (!alreadyExists) {
      const newHabit = { name: habitName, days: {} }
      habistList?.push(newHabit);
      await kv.set("habits", habistList);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function getHabitsList (): Promise <IHabit[] | undefined> {
  try {
    const habitsList =  await kv.get('habits');
    return habitsList as IHabit[];
  } catch (error) {
    console.log(error);
  }
}

export async function deleteHabitByName(habitName: string) {
  try {
   const habitsList = await getHabitsList();
   const updatedList = habitsList?.filter(({name}) => name !== habitName)
   await kv.set('habits', updatedList);
  } catch (error) {
    console.log(error);
  }
}

export async function updateHabitByName(habitName: string, date: string) {
  try {
    const habitsList = await getHabitsList();
    const indexHabit = habitsList?.findIndex(({ name }) => name === habitName);

    
    if ((indexHabit !== undefined) && (indexHabit !== -1) && (habitsList !== undefined)) {
      const habit = habitsList[indexHabit];

      if (habit !== undefined && Object.keys(habit.days).includes(date)) {
        habit.days[date] = !(habit.days[date]);
        await kv.set('habits', habitsList);
      } else if (habit !== undefined) {
        habit.days[date as keyof typeof habit.days] = true;
        await kv.set('habits', habitsList);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
