const products = [
  {
    id: 1,
    name: "Phone",
    price: 20000,
    image: "phone.jpg"
  },
  {
    id: 2,
    name: "Laptop",
    price: 55000,
    image: "laptop.jpg"
  },
  {
    id: 3,
    name: "Shoes",
    price: 2500,
    image: "shoe.jpg"
  },
  {
    id: 4,
    name: "Watch",
    price: 5000,
    image: "watch.jpg"
  }
];

function loadProducts() {
  const grid = document.getElementById('productGrid');
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    grid.appendChild(div);
  });
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === productId);
  const existing = cart.find(p => p.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

window.onload = loadProducts;