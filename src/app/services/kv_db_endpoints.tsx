import { createClient } from '@vercel/kv';
import { day } from '../components/WeekGrid';

const kv = createClient({
  url: process.env.KV_REST_API_URL ?? "https://major-gopher-42455.kv.vercel-storage.com",
  token: process.env.KV_REST_API_TOKEN ?? "AaXXASQgM2ZjMmJjMGEtN2UyMy00NGJiLWE5ZmYtMTFiYmE0ZmZiMjhkYzM5OTVhMjBiZjI5NDNjYzgyNDk5OTAwOGQxMjljZmU=",
});

export interface IHabit {
    name : string;
    days : day[];
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
