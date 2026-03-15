import { BookmarkRepository } from '@domain/repositories'
import { Bookmark } from '@domain/entities'

export class GetBookmarksUseCase {
  private readonly bookmarksRepository: BookmarkRepository

  constructor(bookmarksRepository: BookmarkRepository) {
    this.bookmarksRepository = bookmarksRepository
  }

  async getAll(userId: string): Promise<Bookmark[]> {
    const bookmarks = await this.bookmarksRepository.getAll(userId)
    return bookmarks
  }

  async getByCategory(userId: string, category: string): Promise<Bookmark[]> {
    const bookmarks = await this.bookmarksRepository.getByCategory(
      category,
      userId
    )
    return bookmarks
  }

  async search(userId: string, query: string): Promise<Bookmark[]> {
    const bookmarks = await this.bookmarksRepository.search(query, userId)
    return bookmarks
  }
}
