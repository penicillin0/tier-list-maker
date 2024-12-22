import { useState, useEffect } from 'react'
import { TierList, TierRank, TierItem } from '@/types'
import { TIER_COLORS } from '@/constants/tierColors'

const STORAGE_KEY = 'tierListData'

const initialTierList: TierList = {
  groups: [
    { rank: 'S', color: TIER_COLORS.S, items: [] },
    { rank: 'A', color: TIER_COLORS.A, items: [] },
    { rank: 'B', color: TIER_COLORS.B, items: [] },
    { rank: 'C', color: TIER_COLORS.C, items: [] },
    { rank: 'D', color: TIER_COLORS.D, items: [] },
  ],
}

export const useTierList = () => {
  const [tierList, setTierList] = useState<TierList>(initialTierList)

  // LocalStorageからデータを読み込む
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      setTierList(JSON.parse(savedData))
    }
  }, [])

  // データを保存する
  const saveTierList = (newTierList: TierList) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTierList))
    setTierList(newTierList)
  }

  // 新しいアイテムを追加（常にDランクに追加）
  const addItem = (imageUrl: string) => {
    const newItem: TierItem = {
      id: crypto.randomUUID(),
      imageUrl,
    }

    const newTierList = {
      ...tierList,
      groups: tierList.groups.map((group) => {
        if (group.rank === 'D') {
          return { ...group, items: [...group.items, newItem] }
        }
        return group
      }),
    }

    saveTierList(newTierList)
  }

  // アイテムを削除
  const removeItem = (itemId: string) => {
    const newTierList = {
      ...tierList,
      groups: tierList.groups.map((group) => ({
        ...group,
        items: group.items.filter((item) => item.id !== itemId),
      })),
    }

    saveTierList(newTierList)
  }

  const removeAllItem = () => {
    const newTierList = {
      ...tierList,
      groups: tierList.groups.map((group) => ({
        ...group,
        items: [],
      })),
    }

    saveTierList(newTierList)
  }

  // アイテムを移動
  const moveItem = (itemId: string, fromRank: TierRank, toRank: TierRank) => {
    if (fromRank === toRank) return

    const fromGroup = tierList.groups.find((g) => g.rank === fromRank)
    const item = fromGroup?.items.find((i) => i.id === itemId)

    if (!item) return

    const newTierList = {
      ...tierList,
      groups: tierList.groups.map((group) => {
        if (group.rank === fromRank) {
          return {
            ...group,
            items: group.items.filter((i) => i.id !== itemId),
          }
        }
        if (group.rank === toRank) {
          return {
            ...group,
            items: [...group.items, item],
          }
        }
        return group
      }),
    }

    saveTierList(newTierList)
  }

  return {
    tierList,
    addItem,
    removeItem,
    removeAllItem,
    moveItem,
  }
}
