export interface INavigation {
  id: string
  title: string
  url: string
}

type RoadMapStatus = 'done' | 'progress'
export interface IRoadMap {
  id: string
  title: string
  text: string
  date: string
  status: RoadMapStatus
  imageUrl: string
  colorful?: boolean
}

export interface ICollabContent {
  id: string
  title: string
  text?: string
}

export interface ICollabApp {
  id: string
  title: string
  icon: string
  width: number
  height: number
}

export interface IPricing {
  id: string
  title: string
  description: string
  price: string | null
  features: string[]
}

export interface IBenefit {
  id: string
  title: string
  text: string
  backgroundUrl: string
  iconUrl: string
  imageUrl: string
  light?: boolean
}

export interface ISocial {
  id: string
  title: string
  iconUrl: string
  url: string
}
