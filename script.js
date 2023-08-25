const products = [
    { id: 1, name: 'Wax', price: 1000, description :'test', image: "https://th.bing.com/th/id/OIP.OkSPuMokAGj3hB7F13EStgHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 2, name: 'Broderie', price: 2000, description :'test', image: "https://th.bing.com/th/id/R.b4c2182134ed7fdc1d2354dd07ae4a59?rik=IAhh3xjIOpEpUw&pid=ImgRaw&r=0" },
    { id: 3, name: 'getzner', price: 1500, description :'test', image: "https://cdn.shopify.com/s/files/1/0374/4143/7831/products/IMG_6221-2_2400x.jpg?v=1611680405" }
];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsDiv = document.getElementById('cart-items');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-product'));
    const selectedProduct = products.find(product => product.id === productId);

    // Ajoutez le produit au tableau des éléments du panier dans sessionStorage
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    cartItems.push(selectedProduct);
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redirigez l'utilisateur vers la page du panier
    window.location.href = 'cart.html';
}

