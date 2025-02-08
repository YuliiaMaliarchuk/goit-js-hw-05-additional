// Вибірка найбільш популярних книг: Створіть функцію getMostPopularBooks(books),
// яка повертає 3 найбільш популярні книги з масиву, тобто з найбільшим рейтингом.

const getMostPopularBooks = (books) => { 
    return books
    .toSorted((firstBook, secondBook) => secondBook.rating - firstBook.rating)
    .slice(0, 3)
};

console.log(getMostPopularBooks(books));