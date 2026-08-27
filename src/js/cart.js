// =========================================================
// NND — CART
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const cartItems =
        document.getElementById("cartItems");

    const emptyCart =
        document.getElementById("emptyCart");

    const summaryItems =
        document.getElementById("summaryItems");

    const subtotal =
        document.getElementById("subtotal");

    const cartTotal =
        document.getElementById("cartTotal");

    const checkoutBtn =
        document.getElementById("checkoutBtn");


    function getCart() {

        return JSON.parse(
            localStorage.getItem("nnd-cart")
        ) || [];

    }


    function saveCart(cart) {

        localStorage.setItem(
            "nnd-cart",
            JSON.stringify(cart)
        );

    }


    function formatPrice(value) {

        return `₹${Number(value).toLocaleString("en-IN")}`;

    }


    function getSymbol(name) {

        const value =
            name.toLowerCase();


        if (value.includes("sunflower"))
            return "🌻";


        if (value.includes("tulip"))
            return "🌷";


        if (value.includes("rose"))
            return "🌹";


        if (
            value.includes("bouquet") ||
            value.includes("flower")
        )
            return "🌼";


        if (
            value.includes("clip") ||
            value.includes("scrunchie")
        )
            return "🎀";


        if (value.includes("keychain"))
            return "♡";


        return "✿";

    }


    function renderCart() {

        const cart = getCart();


        cartItems.innerHTML = "";


        if (!cart.length) {

            emptyCart.hidden = false;

            summaryItems.textContent = "0";

            subtotal.textContent = "₹0";

            cartTotal.textContent = "₹0";

            updateHeaderCount();

            return;

        }


        emptyCart.hidden = true;


        let totalItems = 0;

        let totalPrice = 0;


        cart.forEach(item => {

            const quantity =
                Number(item.quantity) || 1;


            const price =
                Number(item.price) || 0;


            totalItems += quantity;

            totalPrice +=
                price * quantity;


            const element =
                document.createElement("article");


            element.className =
                "cart-item";


            element.innerHTML = `

                <div class="cart-item-visual">

                    ${
                        item.image
                            ? `
                                <img
                                    src="./public/images/products/${item.image}"
                                    alt="${escapeHTML(item.name)}"
                                >
                            `
                            : `
                                <span class="cart-item-symbol">
                                    ${getSymbol(item.name)}
                                </span>
                            `
                    }

                </div>


                <div class="cart-item-info">

                    <span class="cart-item-category">
                        Handmade
                    </span>

                    <a
                        href="./product.html?id=${encodeURIComponent(item.id)}"
                        class="cart-item-name"
                    >
                        ${escapeHTML(item.name)}
                    </a>

                    <span class="cart-item-price">
                        ${formatPrice(price)} each
                    </span>

                </div>


                <div class="cart-item-controls">

                    <div class="quantity-control">

                        <button
                            type="button"
                            data-action="decrease"
                            data-id="${item.id}"
                        >
                            −
                        </button>

                        <span class="quantity-value">
                            ${quantity}
                        </span>

                        <button
                            type="button"
                            data-action="increase"
                            data-id="${item.id}"
                        >
                            +
                        </button>

                    </div>


                    <strong class="cart-item-total">
                        ${formatPrice(price * quantity)}
                    </strong>


                    <button
                        type="button"
                        class="remove-item"
                        data-action="remove"
                        data-id="${item.id}"
                    >
                        Remove
                    </button>

                </div>

            `;


            cartItems.appendChild(element);

        });


        summaryItems.textContent =
            totalItems;


        subtotal.textContent =
            formatPrice(totalPrice);


        cartTotal.textContent =
            formatPrice(totalPrice);


        updateHeaderCount();

    }


    cartItems.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-action]"
                );


            if (!button) return;


            const action =
                button.dataset.action;


            const id =
                button.dataset.id;


            let cart =
                getCart();


            const item =
                cart.find(
                    product =>
                        product.id === id
                );


            if (!item) return;


            if (action === "increase") {

                item.quantity += 1;

            }


            if (action === "decrease") {

                item.quantity -= 1;


                if (item.quantity <= 0) {

                    cart =
                        cart.filter(
                            product =>
                                product.id !== id
                        );

                }

            }


            if (action === "remove") {

                cart =
                    cart.filter(
                        product =>
                            product.id !== id
                    );

            }


            saveCart(cart);

            renderCart();

        }
    );


    checkoutBtn.addEventListener(
        "click",
        () => {

            const cart =
                getCart();


            if (!cart.length) {

                return;

            }


            window.location.href =
                "./checkout.html";

        }
    );


    function updateHeaderCount() {

        const cart =
            getCart();


        const count =
            cart.reduce(
                (sum, item) =>
                    sum + Number(item.quantity || 0),
                0
            );


        document
            .querySelectorAll(".cart-count")
            .forEach(element => {

                element.textContent =
                    count;

            });

    }


    function escapeHTML(value) {

        return String(value)

            .replace(
                /&/g,
                "&amp;"
            )

            .replace(
                /</g,
                "&lt;"
            )

            .replace(
                />/g,
                "&gt;"
            )

            .replace(
                /"/g,
                "&quot;"
            )

            .replace(
                /'/g,
                "&#039;"
            );

    }


    renderCart();

});