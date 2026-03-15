import { CategoryRepository } from '@domain/repositories'
import { Category } from '@domain/entities'

export class CreateCategoryUseCase {
  private readonly categoryRepository: CategoryRepository

  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async create({
    name,
    color,
    userId
  }: {
    name: string
    color: string
    userId?: string
  }): Promise<Category> {
    if (name.trim() === '') {
      throw new Error('Category name cannot be empty')
    }

    const newCategory = await this.categoryRepository.create(
      {
        name,
        color
      },
      userId
    )

    return newCategory
  }
}
