import { Bookmark } from '@domain/entities'

export interface BookmarkRepository {
  getAll(userId?: string): Promise<Bookmark[]>
  getById(id: string): Promise<Bookmark | null>
  getByCategory(category: string, userId?: string): Promise<Bookmark[]>
  search(query: string, userId?: string): Promise<Bookmark[]>
  create(
    bookmark: Omit<Bookmark, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Bookmark>
  update(id: string, data: Partial<Bookmark>): Promise<Bookmark>
  delete(id: string): Promise<void>
  bulkCreate(
    bookmarks: Omit<Bookmark, 'id' | 'createdAt' | 'updatedAt'>[]
  ): Promise<Bookmark[]>
}
