// Сортування книг за ціною: Створіть функцію sortBooksByPrice(books),
// яка приймає масив книг і сортує його за ціною від найменшої до найбільшої.

const sortBooksByPrice = (books) => {
    return books.toSorted((firstBook, secondBook) => firstBook.price - secondBook.price, 0);
};
 
console.log(sortBooksByPrice(books)); // Сортування книг за ціною