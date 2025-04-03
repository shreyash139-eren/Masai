const library = {

    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    
    addBook(book) {
    
    if (!book.title || !book.author || !book.year) {
    
    console.log("Book information is incomplete.");
    
    return;
    
    }
    
    const exist=this.books.find(book1=>book1.title===book.title);
    if (exist) {
      console.log("Book already exists.");
      return;
    }
    this.books.push(book);
    
    },
    
    findBookByTitle(title) {
    
    return this.books.find(book => book.title === title );
    
    },
    
    removeBook(title) {
    
    const index = this.books.findIndex(book => book.title === title);
    
    if (index !== -1) {
    
    this.books.splice(index, 1);
    
    } else {
    
    console.log("Book not found.");
    
    } } };
    
    library.addBook({ title: "The Walking Dead", author: "lolo lajpat", year: 2007 });
    
    console.log(library.books.length);
    console.log(library.removeBook("The Walking Dead"))
    console.log(library.books.length);