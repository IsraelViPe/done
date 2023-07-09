import styles from  './home.module.scss';
import Link from 'next/link'
import { getHabitsList } from './services/kv_db_endpoints';

export default async function Home() {

  const habitList = await getHabitsList();
  console.log(habitList);

  return (
    <section className={styles.container}>
      <div>
        <h4>você não tem hábitos cadastrados</h4>
      </div>
      <Link
      href="/submit_habit"
      className={styles.link }>
        novo hábito
      </Link>
    </section>
  )
}
