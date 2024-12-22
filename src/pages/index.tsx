import TierList from '@/components/TierList'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tier List Manager</h1>
      <p>Tier表メーカー</p>
      <TierList />
    </div>
  )
}
