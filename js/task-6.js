// Отримання книг, які були видані після певного року:
// Створіть функцію getBooksNotReleasedYet(books, currentYear), яка повертає книги, рік видання яких більший за поточний рік.

const getBooksNotReleasedYet = (books, year) => {
    return books.filter(book => book.year > year);
};
 
console.log(getBooksNotReleasedYet(books, 1950));  // Отримання книг, що були видані після 1950