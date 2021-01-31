## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

- [ ] Change the last book read to be the book that just got finished
- [ ] Change the current book to be the next book to be read
- [ ] Change the next book to be read property to be the first unread book you find in the list of books

#### BookList Methods

- [] `add(Book)` should add a book to the book list array.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the bext book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.
