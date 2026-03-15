import { CategoryRepository } from '@domain/repositories'
import { Category } from '@domain/entities'

export class UpdateCategoryUseCase {
  private readonly categoryRepository: CategoryRepository

  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async update(id: string, data: Partial<Category>): Promise<Category> {
    if (data.name !== undefined && data.name.trim() === '') {
      throw new Error('Category name cannot be empty')
    }

    const updatedCategory = await this.categoryRepository.update(id, data)

    if (!updatedCategory) {
      throw new Error('Category not found')
    }

    return updatedCategory
  }
}
