const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product) => {
    return `<div class="product-item">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <a href="#"><img src="img/product-${product.title}.jpg" alt="product-${product.title}"></a>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
renderPage(products);
