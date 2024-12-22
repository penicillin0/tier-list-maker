import FAQ from '@/components/FAQ'
import TierList from '@/components/TierList'
import UsageGuide from '@/components/UsageGuide'
import styles from '@/styles/Home.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tier表作成ツール | 簡単で便利な無料Webアプリ</title>
        <meta
          name="description"
          content="Tier表を簡単に作成・管理できる無料ツール。画像をドラッグアンドドロップでグループ分けし、全体を画像として保存する機能も搭載。"
        />
        <meta
          name="keywords"
          content="Tier表作成, グループ分け, 無料ツール, オンラインアプリ"
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Tier List Manager</h1>
        <TierList />
        <UsageGuide />
        <FAQ />
      </div>
    </>
  )
}
