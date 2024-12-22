import TierList from '@/components/TierList'
import styles from '@/styles/Home.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tier表作成ツール | 簡単で便利な無料Webアプリ</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Tier List Manager</h1>
        <p>Tier表メーカー</p>
        <TierList />
      </div>
    </>
  )
}
