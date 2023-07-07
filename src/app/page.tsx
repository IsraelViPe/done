import styles from  './home.module.scss';
import Link from 'next/link'

export default function Home() {
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
