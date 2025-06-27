
# 🛍️ Ekart Fullstack E-commerce App

A full-stack shopping cart web application inspired by Flipkart.
Built using **Node.js**, **Express**, and vanilla **HTML/CSS/JS**.

---

## 🔗 Live Demo

👉 


---

## 📦 Features

* ✅ Product Listing with Images
* ✅ Add to Cart & Quantity Handling (via localStorage)
* ✅ Checkout Page with:

  * Tax Calculation (5%)
  * Shipping Cost (based on weight & distance)
  * Membership Discount (10% if applicable)
  * Loyalty Points Generation
* ✅ Backend REST APIs using Express.js
* ✅ Frontend hosted via Express static routing
* ✅ Fully responsive for web and mobile

---

## 🛠️ Technologies Used

### Frontend:

* HTML5
* CSS3
* JavaScript (Vanilla)

### Backend:

* Node.js
* Express.js
* CORS

---

## 📁 Folder Structure

```
ekart-fullstack/
├── index.js               # Express server with all API routes
├── package.json            # Dependencies and start script
└── frontend/
    ├── index.html          # Product listing page
    ├── cart.html           # View cart
    ├── checkout.html       # Final bill calculation
    ├── style.css           # Styling
    ├── script.js           # Product/cart logic
    ├── checkout.js         # API integration for billing
    └── images/             # Product images
```

---

## 🔧 APIs (Backend Endpoints)

| Route                  | Method | Description                              |
| ---------------------- | ------ | ---------------------------------------- |
| `/calculate-tax`       | GET    | Returns 5% of cart total                 |
| `/shipping-cost`       | GET    | Calculates shipping by weight × distance |
| `/membership-discount` | GET    | Applies 10% discount if member           |
| `/loyalty-points`      | GET    | Calculates loyalty points (2%)           |
| `/estimate-delivery`   | GET    | Estimates delivery time by method        |
| `/cart-total`          | GET    | Adds new item price to cart total        |

---

## 🚀 How to Run Locally

### 1. Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/ekart-fullstack.git
cd ekart-fullstack
```

### 2. Install Dependencies

```
npm install
```

### 3. Start the Server

```
node server.js
```

The app will be available at:
➡️ [http://localhost:3000](http://localhost:3000)

---

## 🧠 Author

**Ankita Dhara**
2nd Year B.E. (IT) | Jadavpur University
Passionate about full-stack development 💻💙

---

## 📌 License

This project is licensed under the MIT License.

---
