import { day, getHabitsList } from '@/app/services/kv_db_endpoints';
import CalendarTable from '../../components/CalendarTable';
import styles from './calendar.module.scss'
import Link from 'next/link';
import Image from 'next/image';

export default  async function Calendar({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined}}) {

    const habitList = await getHabitsList();
    const habitName = searchParams?.habitName as string;
    const [_, days] = habitList?.find((habit) => habit[0].trim() === habitName.trim()) 
   
    return (
        <section className={styles.container}>
            <p>{searchParams?.habitName}</p>
            <div className={styles.link_back}>
                <Image src="/left.svg" width={20} height={20} alt='seta esquerda voltar'/>
                <Link href="/">Voltar</Link>
            </div>
            <CalendarTable name={searchParams?.habitName as string}  days={days as day} />
        </section>
    )
}