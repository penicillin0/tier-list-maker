import { useRef } from 'react'
import { TierGroup as TierGroupType, TierItem, TierRank } from '@/types'
import styles from './styles.module.scss'
import Image from 'next/image'

interface Props {
  group: TierGroupType
  onRemoveItem: (itemId: string) => void
  onMoveItem: (itemId: string, fromRank: TierRank, toRank: TierRank) => void
}

export default function TierGroup({ group, onRemoveItem, onMoveItem }: Props) {
  const dropRef = useRef<HTMLDivElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const data = e.dataTransfer.getData('text/plain').split(',')
    const [itemId, fromRank] = data
    onMoveItem(itemId, fromRank as TierRank, group.rank)
  }

  const handleDragStart = (e: React.DragEvent, item: TierItem) => {
    e.dataTransfer.setData('text/plain', `${item.id},${group.rank}`)
  }

  return (
    <div
      ref={dropRef}
      className={styles.group}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className={styles.rank} style={{ backgroundColor: group.color }}>
        {group.rank}
      </div>
      <div className={styles.items}>
        {group.items.map((item) => (
          <div
            key={item.id}
            className={styles.item}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
          >
            <Image
              src={item.imageUrl}
              alt="Tier Item"
              width={100}
              height={100}
            />
            <button
              className={styles.removeButton}
              onClick={() => onRemoveItem(item.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
