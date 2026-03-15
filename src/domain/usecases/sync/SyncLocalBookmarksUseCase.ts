import { Bookmark } from '@domain/entities'
import { BookmarkRepository } from '@domain/repositories'

export class SyncLocalBookmarksUseCase {
  private readonly bookmarkRepository: BookmarkRepository

  constructor(bookmarkRepository: BookmarkRepository) {
    this.bookmarkRepository = bookmarkRepository
  }

  async syncLocalBookmarks({
    localBookmarks,
    userId
  }: {
    localBookmarks: Bookmark[]
    userId: string
  }): Promise<{ syncedCount: number }> {
    const bookmarksToSync = localBookmarks.map((bookmark) => {
      return {
        ...bookmark,
        userId: userId
      }
    })

    const bookmarksSaved =
      await this.bookmarkRepository.bulkCreate(bookmarksToSync)

    return {
      syncedCount: bookmarksSaved.length
    }
  }
}
