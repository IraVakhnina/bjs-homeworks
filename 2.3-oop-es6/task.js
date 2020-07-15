'use strict'

// №1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return (this.state *= 1.5);
  }

  set state(state) {
    if (state < 0) {
      return (this.rstate = 0);
    } else if (state > 100) {
      return (this.rstate = 100);
    } else {
      return (this.rstate = state);
    }
  }

  get state() {
    return this.rstate;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

//№2

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      return this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let key in this.books) {
      if (this.books[key][type] === value) {
        return this.books[key];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let key in this.books) {
      if (this.books[key].name === bookName) {
        return this.books.splice(key, 1)[0];
      }
    }
    return null;
  }
}





