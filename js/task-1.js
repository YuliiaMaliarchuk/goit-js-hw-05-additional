// Фільтрація книг за рейтингом: Створіть функцію filterBooksByRating(books, rating),
// яка приймає масив книг і число(мінімальний рейтинг).Функція повинна повертати новий масив книг,
// рейтинг яких більше або дорівнює заданому.

const filterBooksByRating = (books, rating) => {
    return books.filter(book => book.rating >= rating);
};
 
const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, rating: 8.5, price: 15 },
  { title: "1984", author: "George Orwell", year: 1949, rating: 9, price: 12 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, rating: 7.5, price: 20 },
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, rating: 9.5, price: 25 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, rating: 8, price: 10 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, rating: 9, price: 18 }
];

console.log(filterBooksByRating(books, 8));  // Фільтрація книг з рейтингом більше або дорівнює 8