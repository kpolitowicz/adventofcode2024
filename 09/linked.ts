export class Chunk {
  public next: Chunk | null = null;
  public prev: Chunk | null = null;

  constructor(
    public fileId: number,
    public size: number,
  ) {}
}

export class LinkedList {
  private head: Chunk | null = null;
  private tail: Chunk | null = null;

  public append(fileId: number, size: number): Chunk {
    const chunk = new Chunk(fileId, size);
    if (!this.head) {
      this.head = chunk;
      this.tail = chunk;
    } else {
      const last = this.tail || this.head;
      chunk.prev = last;
      last.next = chunk;
      this.tail = chunk;
    }
    return chunk;
  }

  public traverse(): number[][] {
    if (!this.head) {
      return [];
    }
    const ary = [];
    let current: Chunk | null = this.head;
    while (current) {
      ary.push([current.fileId, current.size]);
      current = current.next;
    }

    return ary;
  }

  public getNextFileFromRight(currentFileId: number): Chunk | null | undefined {
    let cursor = this.tail;
    while (cursor) {
      if (cursor.fileId !== -1 && cursor.fileId < currentFileId) {
        return cursor;
      }
      cursor = cursor.prev;
    }

    return null;
  }

  public findFreeSpace(file: Chunk): Chunk | null {
    let cursor = this.head;
    while (cursor) {
      if (cursor.fileId === -1 && cursor.size >= file.size) {
        return cursor;
      }
      if (cursor.fileId === file.fileId) {
        break;
      }
      cursor = cursor.next;
    }
    return null;
  }

  // we already know the space is same or langer than the file so
  // we have 2 cases:
  // - same size: just swap free space with the file
  // - larger: divide free space into same size + diff and then swap same size
  public moveFileToFreeSpace(file: Chunk, space: Chunk) {
    if (file.size < space.size) {
      space = this.divideSpace(space, file.size);
    }

    this.swapChunks(file, space);
  }

  public divideSpace(space: Chunk, fileSize: number): Chunk {
    const newSpace = new Chunk(-1, space.size - fileSize);
    newSpace.prev = space;
    newSpace.next = space.next;
    if (space.next) {
      space.next.prev = newSpace;
    }

    space.size = fileSize;
    space.next = newSpace;

    return space;
  }

  public swapChunks(chunk1: Chunk, chunk2: Chunk) {
    const chunk1Prev = chunk1.prev;
    const chunk1Next = chunk1.next;
    const chunk2Prev = chunk2.prev;
    const chunk2Next = chunk2.next;

    // special case to swap adjacent nodes
    if (chunk2.next === chunk1) {
      chunk1.next = chunk2;
      chunk1.prev = chunk2Prev;
      if (chunk2Prev) {
        chunk2Prev.next = chunk1;
      }

      chunk2.prev = chunk1;
      chunk2.next = chunk1Next;
      if (chunk1Next) {
        chunk1Next.prev = chunk2;
      }
    } else {
      const linkInPlace = (
        c1: Chunk,
        c2Prev: Chunk | null,
        c2Next: Chunk | null,
      ) => {
        c1.prev = c2Prev;
        if (c2Prev) {
          c2Prev.next = c1;
        } else {
          this.head = c1;
        }
        c1.next = c2Next;
        if (c2Next) {
          c2Next.prev = c1;
        } else {
          this.tail = c1;
        }
      };

      linkInPlace(chunk1, chunk2Prev, chunk2Next);
      linkInPlace(chunk2, chunk1Prev, chunk1Next);
    }
  }

  public getHead(): Chunk {
    return this.head;
  }
  public getTail(): Chunk {
    return this.tail;
  }
}
