import { useRef } from 'react'
import { useTierList } from '@/hooks/useTierList'
import TierGroup from '../TierGroup'
import styles from './styles.module.scss'
import html2canvas from 'html2canvas'

export default function TierList() {
  const { tierList, addItem, removeItem, moveItem } = useTierList()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const tierListRef = useRef<HTMLDivElement>(null)

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string
      addItem(imageUrl)
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveItem = (itemId: string) => {
    if (window.confirm('このアイテムを削除しますか？')) {
      removeItem(itemId)
    }
  }

  const handleSaveImage = async () => {
    if (!tierListRef.current) return

    const canvas = await html2canvas(tierListRef.current)
    const link = document.createElement('a')
    link.download = 'tier-list.png'
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        <button
          className={styles.button}
          onClick={() => fileInputRef.current?.click()}
        >
          アイテム追加
        </button>
        <button className={styles.button} onClick={handleSaveImage}>
          画像保存
        </button>
      </div>
      <div ref={tierListRef} className={styles.tierList}>
        {tierList.groups.map((group) => (
          <TierGroup
            key={group.rank}
            group={group}
            onRemoveItem={handleRemoveItem}
            onMoveItem={moveItem}
          />
        ))}
      </div>
    </div>
  )
}
