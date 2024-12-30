import { useRef, useState } from 'react'
import { TierGroup as TierGroupType, TierItem, TierRank } from '@/types'
import styles from './styles.module.scss'
import Image from 'next/image'
import { isMobile } from '@/utils/device'

interface Props {
  group: TierGroupType
  onRemoveItem: (itemId: string) => void
  onMoveItem: (itemId: string, fromRank: TierRank, toRank: TierRank) => void
}

export default function TierGroup({ group, onRemoveItem, onMoveItem }: Props) {
  const dropRef = useRef<HTMLDivElement>(null)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })
  const lastTapRef = useRef<{ time: number; id: string | null }>({
    time: 0,
    id: null,
  })

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

  const handleLongPress = (
    e: React.TouchEvent | React.MouseEvent,
    itemId: string
  ) => {
    e.preventDefault()
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    setMenuPosition({
      x: rect.left,
      y: rect.bottom + window.scrollY,
    })
    setSelectedItem(itemId)
    setShowMobileMenu(true)
  }

  const handleMoveToRank = (rank: TierRank) => {
    if (selectedItem) {
      onMoveItem(selectedItem, group.rank, rank)
      setShowMobileMenu(false)
      setSelectedItem(null)
    }
  }

  const handleTap = (e: React.TouchEvent, item: TierItem) => {
    e.preventDefault()
    const now = Date.now()
    const DOUBLE_TAP_DELAY = 300

    if (
      lastTapRef.current.time > now - DOUBLE_TAP_DELAY &&
      lastTapRef.current.id === item.id
    ) {
      // Double tap detected
      handleLongPress(e, item.id)
      lastTapRef.current = { time: 0, id: null }
    } else {
      lastTapRef.current = { time: now, id: item.id }
    }
  }

  return (
    <>
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
              draggable={!isMobile()}
              onDragStart={(e) => !isMobile() && handleDragStart(e, item)}
              onTouchStart={(e) => handleTap(e, item)}
              onContextMenu={(e) => {
                e.preventDefault()
                handleLongPress(e, item.id)
              }}
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
      {showMobileMenu && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setShowMobileMenu(false)}
          />
          <div
            className={styles.mobileMenu}
            style={{
              top: menuPosition.y,
              left: menuPosition.x,
            }}
          >
            <div className={styles.menuTitle}>移動先を選択</div>
            {['S', 'A', 'B', 'C', 'D'].map((rank) =>
              rank !== group.rank ? (
                <button
                  key={rank}
                  className={styles.menuItem}
                  onClick={() => handleMoveToRank(rank as TierRank)}
                >
                  {rank}ランクへ移動
                </button>
              ) : null
            )}
            <button
              className={styles.menuItem}
              onClick={() => {
                if (selectedItem) onRemoveItem(selectedItem)
                setShowMobileMenu(false)
              }}
            >
              削除
            </button>
          </div>
        </>
      )}
    </>
  )
}
