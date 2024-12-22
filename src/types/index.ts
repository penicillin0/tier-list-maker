export type TierRank = 'S' | 'A' | 'B' | 'C' | 'D'

export interface TierItem {
  id: string
  imageUrl: string
}

export interface TierGroup {
  rank: TierRank
  color: string
  items: TierItem[]
}

export interface TierList {
  groups: TierGroup[]
}