import { BookmarkRepository } from '@domain/repositories'
import { Bookmark } from '@domain/entities'

export class UpdateBookmarkUseCase {
  private readonly bookmarkRepository: BookmarkRepository

  constructor(bookmarkRepository: BookmarkRepository) {
    this.bookmarkRepository = bookmarkRepository
  }

  async update({
    id,
    data
  }: {
    id: string
    data: Partial<Bookmark>
  }): Promise<Bookmark> {
    const { url } = data

    if (!url?.startsWith('http://') && !url?.startsWith('https://')) {
      throw new Error('URL must start with http:// or https://')
    }

    const updatedBookmark = await this.bookmarkRepository.update(id, data)

    if (!updatedBookmark) {
      throw new Error('Bookmark not found')
    }

    return updatedBookmark
  }
}
