import { getHabitsList } from '@/app/services/kv_db_endpoints';
import CalendarTable from '../../components/CalendarTable';
import styles from './calendar.module.scss'
import Link from 'next/link';
import Image from 'next/image';

export default  async function Calendar({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined}}) {

    const habitList = await getHabitsList() ?? {};
    const habitName = searchParams?.habitName as string;
    const days = Object.entries(habitList).find(([name, days]) => name.trim() === habitName.trim())
   
    return (
        <section className={styles.container}>
            <p>{searchParams?.habitName}</p>
            <div className={styles.link_back}>
                <Image src="/left.svg" width={20} height={20} alt='seta esquerda voltar'/>
                <Link href="/">Voltar</Link>
            </div>
            <CalendarTable name={searchParams?.habitName as string}  days={days? days[1] : {} } />
        </section>
    )
}