// Function to handle adding an item to the cart
function addToCart(productName, price, imageUrl) {
    // Create a cart object if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Create a new item object
    let item = {
        name: productName,
        price: price,
        imageUrl: imageUrl,
        quantity: 1
    };

    // Add the item to the cart
    cart.push(item);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optional: Update the cart icon with the number of items
    updateCartIcon();
}

// Function to update the cart icon with the number of items
function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCount = cart.length;
    document.getElementById("cart-count").textContent = cartCount;
}

// Add event listeners to the shopping cart icons
document.querySelectorAll('.cart').forEach((cartIcon) => {
    cartIcon.addEventListener('click', function() {
        let productName = cartIcon.closest('.pro').querySelector('h5').textContent;
        let price = cartIcon.closest('.pro').querySelector('h4').textContent.replace('SSP ', '').trim();
        let imageUrl = cartIcon.closest('.pro').querySelector('img').src;

        // Add to cart
        addToCart(productName, price, imageUrl);
    });
});

// Update cart icon when the page loads
document.addEventListener('DOMContentLoaded', updateCartIcon);