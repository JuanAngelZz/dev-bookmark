import { CategoryRepository } from '@domain/repositories'

export class DeleteCategoryUseCase {
  private readonly categoryRepository: CategoryRepository

  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async delete(id: string): Promise<void> {
    return await this.categoryRepository.delete(id)
  }
}
