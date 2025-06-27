function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cartContainer');
  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Price: ₹${item.price} × ${item.quantity} = ₹${itemTotal}</p>
      <button onclick="removeItem(${item.id})">Remove</button>
    `;
    container.appendChild(div);
  });

  const totalDiv = document.createElement('div');
  totalDiv.className = 'product';
  totalDiv.innerHTML = `<h2>Total: ₹${total}</h2>`;
  container.appendChild(totalDiv);
}

function removeItem(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart(); // refresh UI
}

function proceedToCheckout() {
  window.location.href = 'checkout.html';
}

window.onload = loadCart;