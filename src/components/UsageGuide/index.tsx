import styles from './styles.module.scss'

export default function UsageGuide() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>簡単なティア表作成使い方ガイド</h2>
      <p className={styles.overview}>
        「Tier表作成ツール」の基本的な操作方法をわかりやすく解説します。誰でも簡単にティアに応じたグループ分けや管理ができます。
      </p>
      <div className={styles.steps}>
        <div className={styles.step}>
          <h3>ステップ 1: Tier表の作成を始める</h3>
          <ul>
            <li>
              「アイテム追加」ボタンをクリックし、ローカルから画像を選択してアップロードします。
            </li>
            <li>追加された画像は自動的にDグループ（青色）に配置されます。</li>
          </ul>
        </div>
        <div className={styles.step}>
          <h3>ステップ 2: グループ(ティア)に分類する</h3>
          <ul>
            <li>
              ドラッグ＆ドロップで画像をS（赤）からD（青）のグループ間で移動します。
            </li>
            <li>グループ分けはリアルタイムで保存されます。</li>
          </ul>
        </div>
        <div className={styles.step}>
          <h3>ステップ 3: ティアアイテムの削除</h3>
          <ul>
            <li>
              各アイテムの右上に表示される「×」ボタンをクリックすると削除できます。
            </li>
            <li>必要に応じて確認ダイアログが表示されます。</li>
          </ul>
        </div>
        <div className={styles.step}>
          <h3>ステップ 4: 作成したTier表を保存</h3>
          <ul>
            <li>
              画面下部の「画像保存」ボタンをクリックして、Tier表全体をPNG形式でダウンロードします。
            </li>
            <li>保存した画像はSNSやメールで共有可能です。</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
