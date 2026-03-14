import { Category } from '@domain/entities'

export interface CategoryRepository {
  getAll(userId?: string): Promise<Category[]>
  getById(id: string): Promise<Category | null>
  create(
    category: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>,
    userId?: string
  ): Promise<Category>
  update(id: string, data: Partial<Category>): Promise<Category>
  delete(id: string): Promise<void>
}
