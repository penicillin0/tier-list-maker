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

        <meta property="og:title" content="Tier表作成ツール" />
        <meta
          property="og:description"
          content="簡単にTier表を作成できる無料ツール。"
        />
        <meta property="og:image" content="/og-image.png" />
        {/* TODO: 本番環境のURLに変更 */}
        {/* <meta property="og:url" content="https://example.com" /> */}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Tier List Maker</h1>
        <TierList />
        <UsageGuide />
        <FAQ />
      </div>
    </>
  )
}
