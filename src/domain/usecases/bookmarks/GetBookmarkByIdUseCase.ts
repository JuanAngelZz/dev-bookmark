import { Bookmark } from '@domain/entities'
import { BookmarkRepository } from '@domain/repositories'

export class GetBookmarkByIdUseCase {
  private readonly bookmarkRepository: BookmarkRepository

  constructor(bookmarkRepository: BookmarkRepository) {
    this.bookmarkRepository = bookmarkRepository
  }

  async getBookmarkById(bookmarkId: string): Promise<Bookmark> {
    const bookmark = await this.bookmarkRepository.getById(bookmarkId)

    if (!bookmark) {
      throw new Error('Bookmark not found')
    }

    return bookmark
  }
}
