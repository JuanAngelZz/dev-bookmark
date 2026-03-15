import { BookmarkRepository } from '@domain/repositories'
import { Bookmark } from '@domain/entities'

export class CreateBookmarkUseCase {
  private readonly bookmarkRepository: BookmarkRepository

  constructor(bookmarkRepository: BookmarkRepository) {
    this.bookmarkRepository = bookmarkRepository
  }

  async create({
    title,
    url,
    description,
    category,
    tags
  }: Bookmark): Promise<Bookmark> {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      throw new Error('Invalid URL format')
    }

    if (title.trim() === '') {
      throw new Error('Title cannot be empty')
    }

    const newBookmark = await this.bookmarkRepository.create({
      title,
      url,
      description,
      category,
      tags,
      isFavorite: false
    })

    return newBookmark
  }
}
