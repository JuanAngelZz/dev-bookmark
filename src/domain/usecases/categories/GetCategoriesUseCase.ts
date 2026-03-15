import { CategoryRepository } from '@domain/repositories'
import { Category } from '@domain/entities'

export class GetCategoriesUseCase {
  private readonly categoryRepository: CategoryRepository

  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async getAll(userId?: string): Promise<Category[]> {
    const categories = await this.categoryRepository.getAll(userId)
    return categories
  }

  async getById(id: string): Promise<Category | null> {
    const category = await this.categoryRepository.getById(id)
    return category
  }
}
