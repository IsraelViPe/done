import { kv } from "@vercel/kv";

export interface IHabit {
    name : string;
    days : string[];
}

export async function createOrUpdateHabit (data: IHabit[] ) {
    try {
        await kv.set( 'habits', data);
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
