// Вирахування середньої ціни книг після фільтрації: Створіть функцію getAveragePriceOfBooks(books),
// яка обчислює середню ціну книг у масиві. Використовуйте методи reduce() для підсумовування цін та ділення на кількість книг.

const getAveragePriceOfBooks = (books) => {
    const totalPrice = books.reduce((total, book) => total + book.price, 0);
    return totalPrice / books.length;
};
 
console.log(getAveragePriceOfBooks(books));  // Обчислення середньої ціни книг