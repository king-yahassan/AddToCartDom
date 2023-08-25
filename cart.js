const cartItemsDiv = document.getElementById('cart-items');

const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

for (let i = 0; i < cartItems.length; i++) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('productss');

    const image = document.createElement('img');
    image.src = cartItems[i].image;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = cartItems[i].description;

    const nameElement = document.createElement('p');
    nameElement.textContent = cartItems[i].name;

    const priceElement = document.createElement('p');
    priceElement.textContent = `Prix : ${cartItems[i].price} XOF`;

    itemDiv.appendChild(image);
    itemDiv.appendChild(descriptionElement);
    itemDiv.appendChild(nameElement);
    itemDiv.appendChild(priceElement);

    cartItemsDiv.appendChild(itemDiv);
    
}

// cartItems.forEach(item => {
    // const itemDiv = document.createElement('div');
    // itemDiv.classList.add('cart-item');

    // const image = document.createElement('img');
    // image.src = item.image;

    // const nameElement = document.createElement('p');
    // nameElement.textContent = item.name;

    // const priceElement = document.createElement('p');
    // priceElement.textContent = `Prix : ${item.price} XOF`;

    // itemDiv.appendChild(image);
    // itemDiv.appendChild(nameElement);
    // itemDiv.appendChild(priceElement);

    // cartItemsDiv.appendChild(itemDiv);
// });

// Lorsque l'utilisateur valide le panier
const validateButton = document.getElementById('validate-button'); // Supposons que vous ayez un bouton avec cet ID
validateButton.addEventListener('click', validateCart);

function validateCart() {
    // Réinitialisez les données du panier dans sessionStorage
    sessionStorage.removeItem('cartItems');
    
    // Redirigez l'utilisateur vers une page de confirmation ou ailleurs
    alert("votre panier a été validé avec succès")
    window.location.href = 'product.html'; // 

}



























// const cartItemsDiv = document.getElementById('cart-items');

// const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

// cartItems.forEach(item => {
//     const itemDiv = document.createElement('div');
//     itemDiv.classList.add('cart-item'); // Ajoutez une classe pour le style CSS

//     const image = document.createElement('img');
//     image.src = item.image; // Supposons que chaque élément a une propriété "image"

//     const nameElement = document.createElement('p');
//     nameElement.textContent = item.name; // Supposons que chaque élément a une propriété "name"

//     const priceElement = document.createElement('p');
//     priceElement.textContent = `Prix : ${item.price} XOF`; // Supposons que chaque élément a une propriété "price"

//     itemDiv.appendChild(image);
//     itemDiv.appendChild(nameElement);
//     itemDiv.appendChild(priceElement);

//     cartItemsDiv.appendChild(itemDiv);
// });
