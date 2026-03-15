import { BookmarkRepository } from '@domain/repositories'

export class DeleteBookmarkUseCase {
  private readonly bookmarkRepository: BookmarkRepository

  constructor(bookmarkRepository: BookmarkRepository) {
    this.bookmarkRepository = bookmarkRepository
  }

  async delete(id: string): Promise<void> {
    return await this.bookmarkRepository.delete(id)
  }
}
