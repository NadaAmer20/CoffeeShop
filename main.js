document.addEventListener("DOMContentLoaded", () => {
    const cartCounter = document.getElementById("cart-counter");
    let cartCount = 0;

    document.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            cartCounter.textContent = cartCount;
             const productName = button.closest(".section-1__card").querySelector(".section-1__coffee-descp").querySelector("h3").textContent;
            const product = button.getAttribute("data-product");
            alert(`${productName} added to cart!`);
        });
    });
});
