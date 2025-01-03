import FAQ from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import TierList from '@/components/TierList'
import UsageGuide from '@/components/UsageGuide'
import styles from '@/styles/Home.module.scss'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const shareText = encodeURIComponent(
    'Tier表作成メーカー https://tier-list-maker-two.vercel.app/ #Tier表メーカー #ティア表メーカー'
  )
  const twitterShareUrl = `https://x.com/intent/post?text=${shareText}`

  return (
    <>
      <Head>
        <title>
          Tier表作成メーカー | 無料でティア表が作成できるツールサイト
        </title>
        <meta
          name="description"
          content="Tier表を簡単に作成・管理できるティア表メーカー。あなたのティアをグループ分けし、全体を画像として保存する機能もある無料アプリ。"
        />
        <meta
          name="keywords"
          content="Tier表作成, グループ分け, 無料ツール, オンラインアプリ, ティア表メーカー, ティア表作成"
        />

        <meta property="og:title" content="Tier表作成ツール" />
        <meta
          property="og:description"
          content="簡単にTier表を作成できるティア表無料ツール。グループ分けし、全体を画像として保存する機能もある。"
        />
        <meta property="og:image" content="/og-image.png" />
        <meta
          property="og:url"
          content="https://tier-list-maker-two.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ティア表メーカー" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>ティア表(Tier表)メーカー</h1>
        <Link
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareLink}
        >
          <i className="ri-twitter-x-line" /> Xでシェア
        </Link>
        <TierList />
        <UsageGuide />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}
