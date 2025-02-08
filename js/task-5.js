// Перевірка наявності книг певного автора: Створіть функцію isAuthorExists(books, authorName),
// яка перевіряє, чи є в масиві хоча б одна книга заданого автора. Використовуйте метод some().

const isAuthorExists = (books, authorName) => {
    return books.some(book => book.author === authorName);
};
 
console.log(isAuthorExists(books, "J.K. Rowling"));  // Перевірка, чи є книга автора "J.K. Rowling"