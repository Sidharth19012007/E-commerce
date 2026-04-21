const products = [
  { id: 1, name: "T-Shirt", price: 500, img: "https://via.placeholder.com/150" },
  { id: 2, name: "Shoes", price: 1200, img: "https://via.placeholder.com/150" },
  { id: 3, name: "Watch", price: 800, img: "https://via.placeholder.com/150" },
  { id: 4, name: "Bag", price: 700, img: "https://via.placeholder.com/150" },
  { id: 5, name: "Headphones", price: 1500, img: "https://via.placeholder.com/150" },
  { id: 6, name: "Cap", price: 300, img: "https://via.placeholder.com/150" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
  const container = document.getElementById("products");

  products.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");
  const countEl = document.getElementById("cartCount");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <li>
        ${item.name} - ₹${item.price}
        <button onclick="removeItem(${index})">X</button>
      </li>
    `;
  });

  totalEl.innerText = total;
  countEl.innerText = cart.length;

  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

displayProducts();
updateCart();