// Розширене завдання: Для кожної з книг розрахувати цілу категорію книг:

// Якщо ціна книги менша за 10, то це "Доступні книги".
// Якщо ціна книги від 10 до 20, то це "Середні книги".
// Якщо ціна книги більше 20, то це "Дорогі книги".

// Створіть функцію categorizeBooks(books), яка повертає об'єкт, де ключами будуть категорії,
//  а значеннями — масиви книг, що відповідають кожній категорії.

const categorizeBooks = (books) => {
    const categories = {
        "lowPriceBook": [],
        "middlePriceBook": [],
        "highPriceBook": []
    };

    books.forEach(book => {
        if (book.price < 10) {
            categories["lowPriceBook"].push(book);
        } else if (book.price >= 10 && book.price < 20) {
            categories["middlePriceBook"].push(book);
        } else { 
            categories["highPriceBook"].push(book);
        }
    });
    
    return categories;
};
 
console.log(categorizeBooks(books));  // Категоризація книг за ціною