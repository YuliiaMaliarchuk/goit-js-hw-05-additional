// Задача 1: Фільтрація книг за рейтингом і ціною
// Створіть функцію filterBooksByRatingAndPrice(books, minRating, maxPrice), яка фільтрує книги за двома критеріями:

// Книга повинна мати рейтинг, що більший або рівний значенню minRating.
// Книга повинна мати ціну, що менша або рівна значенню maxPrice.
// Функція повинна повернути масив книг, які задовольняють обидва критерії.

const filterBooksByRatingAndPrice = (books, minRating, maxPrice) => {
    return books.filter(book => book.rating >= minRating && book.price <= maxPrice)
};
 
console.log(filterBooksByRatingAndPrice(books, 8.5, 20));