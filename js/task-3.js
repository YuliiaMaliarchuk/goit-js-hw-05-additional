// Отримання імен авторів книг з певним рейтингом: Створіть функцію getAuthorsByRating(books, rating),
// яка приймає масив книг і рейтинг.Функція повинна повернути масив імен авторів книг,
// рейтинг яких більше або дорівнює заданому.

const getAuthorsByRating = (books, rating) => {
    return books
    .filter(book => book.rating >= rating)
    .map(book => book.author)
};
 
console.log(getAuthorsByRating(books, 8)); // Отримання авторів книг з рейтингом >= 8