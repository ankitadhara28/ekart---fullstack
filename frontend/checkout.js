const BASE_URL = window.location.origin;

async function finalizeBill() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const isMember = document.getElementById("isMember").checked;
  const shippingMethod = document.getElementById("shippingMethod").value;
  const distance = parseFloat(document.getElementById("distance").value);

  if (!distance || distance <= 0) {
    alert("Please enter a valid distance.");
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const weight = cart.length * 2; // Assume ~2kg per item

  try {
    // Tax
    const taxRes = await fetch(`${BASE_URL}/calculate-tax?cartTotal=${cartTotal}`);
    const tax = parseFloat(await taxRes.text());

    // Shipping
    const shipRes = await fetch(`${BASE_URL}/shipping-cost?weight=${weight}&distance=${distance}`);
    const shipping = parseFloat(await shipRes.text());

    // Discount
    let discount = 0;
    if (isMember) {
      const discountRes = await fetch(`${BASE_URL}/membership-discount?isMember=${isMember}&cartTotal=${cartTotal}`);
      const discountText = await discountRes.text();
      const match = discountText.match(/: (\d+(\.\d+)?)/);
      if (match) {
        const discountedTotal = parseFloat(match[1]);
        discount = cartTotal - discountedTotal;
      }
    }

    // Loyalty Points
    const loyaltyRes = await fetch(`${BASE_URL}/loyalty-points?purchaseAmount=${cartTotal}`);
    const loyaltyPoints = parseFloat(await loyaltyRes.text());

    // Final amount
    const finalTotal = cartTotal + tax + shipping - discount;

    // Display
    document.getElementById("billOutput").innerHTML = `
      <h3>🛒 Cart Total: ₹${cartTotal.toFixed(2)}</h3>
      <h3>🧾 Tax (5%): ₹${tax.toFixed(2)}</h3>
      <h3>🚚 Shipping: ₹${shipping.toFixed(2)}</h3>
      <h3>🎁 Discount: ₹${discount.toFixed(2)}</h3>
      <h3><strong>💳 Final Amount: ₹${finalTotal.toFixed(2)}</strong></h3>
      <h3>🏆 Loyalty Points Earned: ${loyaltyPoints}</h3>
    `;
  } catch (error) {
    console.error("Error calculating bill:", error);
    alert("Something went wrong while fetching data from the backend.");
  }
}
