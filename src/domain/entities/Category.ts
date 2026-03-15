export interface Category {
  id: string
  name: string
  color: string
  bookmarkCount: number // Calculado a partir de los bookmarks asociados
  createdAt: Date
  updatedAt: Date
  userId?: string // null si es local, ID del user si es remoto
}
