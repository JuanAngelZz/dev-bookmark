export interface Bookmark {
  id: string
  title: string
  url: string
  description?: string
  category: string
  tags: string[]
  isFavorite: boolean
  createdAt: Date
  updatedAt: Date
  userId?: string // null si es local, ID del user si es remoto
}
