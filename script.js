// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});
// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255, 248, 243, 0.98)";
        navbar.style.boxShadow = "0 2px 20px rgba(139, 69, 19, 0.1)";
    } else {
        navbar.style.background = "rgba(255, 248, 243, 0.95)";
        navbar.style.boxShadow = "none";
    }
});
// Cart functionality
let cart = [];
// Load cart from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    loadCart();
    updateCartDisplay();
    updateLoginState();
});
// Add to cart functionality
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function (e) {
        e.preventDefault();

        // Get product info
        const productCard = this.closest(".product-card");
        const productName = productCard.querySelector("h3").textContent;
        const productPrice = parseFloat(
            productCard.querySelector(".price").textContent.replace("$", "")
        );
        const productImage = productCard.querySelector("img").src;
        // Add to cart
        addToCart(productName, productPrice, productImage);
        // Create notification
        showNotification(`${productName} added to cart!`);
        // Add animation
        this.textContent = "Added!";
        this.style.background = "#28a745";
        setTimeout(() => {
            this.textContent = "Add to Cart";
            this.style.background = "";
        }, 2000);
    });
});
// Cart management functions
function addToCart(name, price, image) {
    const existingItem = cart.find((item) => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1,
        });
    }
    saveCart();
    updateCartDisplay();
}
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartDisplay();
}
function updateQuantity(index, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(index);
    } else {
        cart[index].quantity = newQuantity;
        saveCart();
        updateCartDisplay();
    }
}
function getCartTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
function getCartCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}
function saveCart() {
    localStorage.setItem("sichyCart", JSON.stringify(cart));
}
function loadCart() {
    const savedCart = localStorage.getItem("sichyCart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}
function updateCartDisplay() {
    const cartCountElement = document.getElementById("cartCount");
    if (cartCountElement) {
        cartCountElement.textContent = getCartCount();
    }
}
// Cart modal functionality
function createCartModal() {
    const modal = document.createElement("div");
    modal.id = "cartModal";
    modal.className = "cart-modal";
    modal.innerHTML = `
<div class="cart-modal-content">
<div class="cart-header">
<h3>Your Cart</h3>
<span class="close-cart">&times;</span>
</div>
<div class="cart-items" id="cartItems">
${cart.length === 0 ? '<p class="empty-cart">Your cart is empty</p>' : ""}
</div>
<div class="cart-footer">
<div class="cart-total">
<strong>Total: $${getCartTotal().toFixed(2)}</strong>
</div>
<button class="checkout-btn">Checkout</button>
</div>
</div>
`;
    document.body.appendChild(modal);
    // Event listeners
    modal.querySelector(".close-cart").addEventListener("click", () => {
        modal.style.display = "none";
    });
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
    return modal;
}
function renderCartItems() {
    const cartItemsContainer = document.getElementById("cartItems");
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML =
            '<p class="empty-cart">Your cart is empty</p>';
        return;
    }
    cartItemsContainer.innerHTML = cart
        .map(
            (item, index) => `
<div class="cart-item">
<img src="${item.image}" alt="${item.name}" class="cart-item-image">
<div class="cart-item-details">
<h4>${item.name}</h4>
<p>$${item.price.toFixed(2)}</p>
</div>
<div class="cart-item-controls">
<button class="quantity-btn" onclick="updateQuantity(${index}, ${
                item.quantity - 1
            })">-</button>
<span class="quantity">${item.quantity}</span>
<button class="quantity-btn" onclick="updateQuantity(${index}, ${
                item.quantity + 1
            })">+</button>
<button class="remove-btn" onclick="removeFromCart(${index})">&times;</button>
</div>
</div>
`
        )
        .join("");
    // Update total
    const totalElement = document.querySelector(".cart-total strong");
    if (totalElement) {
        totalElement.textContent = `Total: $${getCartTotal().toFixed(2)}`;
    }
}
// Cart button event listener
document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.getElementById("cartButton");
    if (cartButton) {
        cartButton.addEventListener("click", () => {
            const modal =
                document.getElementById("cartModal") || createCartModal();
            renderCartItems();
            modal.style.display = "flex";
        });
    }
});
// Quick view functionality
document.querySelectorAll(".quick-view").forEach((button) => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        const productCard = this.closest(".product-card");
        const productName = productCard.querySelector("h3").textContent;
        const productOrigin = productCard.querySelector(".origin").textContent;
        const productDesc = productCard.querySelector(".description")
            .textContent;
        const productPrice = productCard.querySelector(".price").textContent;
        showQuickView(productName, productOrigin, productDesc, productPrice);
    });
});
// Newsletter form submission
document
    .querySelector(".newsletter-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const button = this.querySelector("button");
        if (email && validateEmail(email)) {
            button.textContent = "Subscribed!";

            button.style.background = "#28a745";
            setTimeout(() => {
                button.textContent = "Subscribe";
                button.style.background = "";
                this.reset();
            }, 3000);
            showNotification("Welcome to our coffee community!");
        } else {
            showNotification("Please enter a valid email address");
        }
    });
// Notification system
function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    // Style the notification
    notification.style.cssText = `
position: fixed;
top: 100px;
right: 20px;
background: #28a745;
color: white;
padding: 1rem 2rem;
border-radius: 25px;
box-shadow: 0 5px 15px rgba(0,0,0,0.2);
z-index: 1001;
animation: slideIn 0.3s ease;
`;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = "slideOut 0.3s ease";
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
// Add CSS animations
const style = document.createElement("style");
style.textContent = `
@keyframes slideIn {
from {
transform: translateX(100%);
opacity: 0;
}
to {
transform: translateX(0);
opacity: 1;
}
}
@keyframes slideOut {
from {
transform: translateX(0);
opacity: 1;
}
to {
transform: translateX(100%);
opacity: 0;

}
}
@keyframes fadeInUp {
from {
opacity: 0;
transform: translateY(30px);
}
to {
opacity: 1;
transform: translateY(0);
}
}
.fade-in-up {
animation: fadeInUp 0.6s ease forwards;
}
`;
document.head.appendChild(style);
// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
        }
    });
}, observerOptions);
// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(
        ".product-card, .story-content, .newsletter-content"
    );
    elementsToAnimate.forEach((el) => observer.observe(el));
});
// Parallax effect for hero section
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");
    if (hero && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});
// Modal functionality for login and membership
const loginModal = document.getElementById("loginModal");
const membershipModal = document.getElementById("membershipModal");
const profileModal = document.getElementById("profileModal");
const loginBtn = document.getElementById("loginBtn");
const membershipBtn = document.getElementById("membershipBtn");
const closeLogin = document.getElementById("closeLogin");
const closeMembership = document.getElementById("closeMembership");
const closeProfile = document.getElementById("closeProfile");
const showMembership = document.getElementById("showMembership");
// Open modals
if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        loginModal.style.display = "flex";
    });
}
if (membershipBtn) {
    membershipBtn.addEventListener("click", () => {
        membershipModal.style.display = "flex";
    });
}
// Close modals
if (closeLogin) {
    closeLogin.addEventListener("click", () => {
        loginModal.style.display = "none";
    });
}
if (closeMembership) {
    closeMembership.addEventListener("click", () => {
        membershipModal.style.display = "none";
    });
}
if (closeProfile) {
    closeProfile.addEventListener("click", () => {
        profileModal.style.display = "none";
    });
}
// Switch from login to membership
if (showMembership) {
    showMembership.addEventListener("click", () => {
        loginModal.style.display = "none";
        membershipModal.style.display = "flex";
    });
}
// Close modals when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = "none";
    }
    if (e.target === membershipModal) {
        membershipModal.style.display = "none";
    }
});
// Form validation and submission
const loginForm = document.getElementById("loginForm");
const membershipForm = document.getElementById("membershipForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        if (validateEmail(email) && password.length >= 6) {
            showNotification("Welcome back! Logging you in...");
            loginModal.style.display = "none";
            // Mock login - in real app, this would call an API
            localStorage.setItem("userEmail", email);
            localStorage.setItem("isLoggedIn", "true");

            updateLoginState();
        } else {
            showNotification("Please check your credentials");
        }
    });
}
if (membershipForm) {
    membershipForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("memberEmail").value;
        if (fullName && validateEmail(email)) {
            showNotification(
                "Welcome to Sichy Café! Membership created successfully."
            );
            membershipModal.style.display = "none";
            // Mock registration - in real app, this would call an API
            const formData = {
                fullName: fullName,
                email: email,
                membershipType: document.getElementById("membershipType").value,
                phone: document.getElementById("phone").value,
                address: document.getElementById("address").value,
                city: document.getElementById("city").value,
                state: document.getElementById("state").value,
                zip: document.getElementById("zip").value,
                preferredDrink: document.getElementById("preferredDrink").value,
                newsletter: document.getElementById("newsletter").checked,
                terms: document.getElementById("terms").checked,
            };
            localStorage.setItem("memberData", JSON.stringify(formData));
            localStorage.setItem("isLoggedIn", "true");
            updateLoginState();
        } else {
            showNotification("Please check all required fields");
        }
    });
}
// Form validation functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
// Update login state UI
function updateLoginState() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const loginBtn = document.getElementById("loginBtn");
    const membershipBtn = document.getElementById("membershipBtn");
    if (isLoggedIn === "true" && loginBtn && membershipBtn) {
        loginBtn.innerHTML = '<i class="fas fa-user"></i> Profile';
        membershipBtn.style.display = "none";
    }
}
// Check if user is already logged in
document.addEventListener("DOMContentLoaded", () => {
    updateLoginState();
});
// Easter egg: Konami code for coffee lovers
let konamiCode = [];

const correctCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
];
document.addEventListener("keydown", (e) => {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-10);
    if (konamiCode.join(",") === correctCode.join(",")) {
        showNotification(
            " Coffee lover detected! Enjoy 10% off with code: BEANMEUP"
        );
    }
});
// Performance optimization: Lazy loading images
if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add("loaded");
                observer.unobserve(img);
            }
        });
    });
    document.querySelectorAll("img").forEach((img) => {
        imageObserver.observe(img);
    });
}
// Quick view modal functionality
function showQuickView(name, origin, description, price) {
    const modal = document.createElement("div");
    modal.className = "quick-view-modal";
    modal.innerHTML = `
<div class="modal-content">
<span class="close-modal">&times;</span>
<h2>${name}</h2>
<p class="modal-origin">${origin}</p>
<p class="modal-description">${description}</p>
<div class="modal-price">${price}</div>
<button class="modal-add-to-cart">Add to Cart</button>
</div>
`;
    // Style modal
    modal.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.8);
display: flex;
align-items: center;
justify-content: center;
z-index: 1002;
`;
    const modalContent = modal.querySelector(".modal-content");
    modalContent.style.cssText = `
background: white;
padding: 2rem;
border-radius: 15px;

max-width: 500px;
width: 90%;
position: relative;
`;
    document.body.appendChild(modal);
    // Close modal functionality
    modal.querySelector(".close-modal").addEventListener("click", () => {
        modal.remove();
    });
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    // Add to cart from modal
    modal.querySelector(".modal-add-to-cart").addEventListener("click", () => {
        showNotification(`${name} added to cart!`);
        modal.remove();
    });
}
// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log(" Artisan Coffee Co. website loaded successfully!");
    // Add loading animation
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = "1";
    }, 100);
});
