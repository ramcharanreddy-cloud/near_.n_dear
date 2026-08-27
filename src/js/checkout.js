// =========================================================
// NND — CHECKOUT
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("checkoutForm");

    const itemsContainer =
        document.getElementById("checkoutItems");

    const totalElement =
        document.getElementById("checkoutTotal");

    const errorElement =
        document.getElementById("checkoutError");


    // -------------------------------------------------------
    // GET CART
    // -------------------------------------------------------

    function getCart() {

        return JSON.parse(
            localStorage.getItem("nnd-cart")
        ) || [];

    }


    // -------------------------------------------------------
    // FORMAT PRICE
    // -------------------------------------------------------

    function formatPrice(value) {

        return `₹${Number(value).toLocaleString("en-IN")}`;

    }


    // -------------------------------------------------------
    // PRODUCT SYMBOL
    // -------------------------------------------------------

    function getSymbol(name) {

        const value =
            String(name).toLowerCase();


        if (value.includes("sunflower"))
            return "🌻";

        if (value.includes("tulip"))
            return "🌷";

        if (value.includes("rose"))
            return "🌹";

        if (
            value.includes("flower") ||
            value.includes("bouquet")
        )
            return "🌼";

        if (
            value.includes("clip") ||
            value.includes("scrunchie")
        )
            return "🎀";

        if (value.includes("keychain"))
            return "♡";

        if (value.includes("blanket"))
            return "✿";

        if (value.includes("scarf"))
            return "〰";

        if (value.includes("charm"))
            return "✦";

        return "✿";
    }


    // -------------------------------------------------------
    // HTML ESCAPE
    // -------------------------------------------------------

    function escapeHTML(value) {

        return String(value)

            .replace(/&/g, "&amp;")

            .replace(/</g, "&lt;")

            .replace(/>/g, "&gt;")

            .replace(/"/g, "&quot;")

            .replace(/'/g, "&#039;");
    }


    // -------------------------------------------------------
    // RENDER ORDER
    // -------------------------------------------------------

    function renderCheckout() {

        const cart = getCart();


        // No products
        if (!cart.length) {

            itemsContainer.innerHTML = `

                <div class="checkout-empty">

                    <div>
                        ✿
                    </div>

                    <h3>
                        Your bag is empty.
                    </h3>

                    <a href="./shop.html">
                        Explore the collection →
                    </a>

                </div>

            `;

            totalElement.textContent = "₹0";

            return;
        }


        let total = 0;


        itemsContainer.innerHTML = "";


        cart.forEach(item => {

            const price =
                Number(item.price) || 0;

            const quantity =
                Number(item.quantity) || 1;

            const itemTotal =
                price * quantity;


            total += itemTotal;


            const element =
                document.createElement("div");


            element.className =
                "checkout-item";


            element.innerHTML = `

                <div class="checkout-item-image">

                    ${
                        item.image
                            ? `
                                <img
                                    src="${item.image}"
                                    alt="${escapeHTML(item.name)}"
                                >
                            `
                            : `
                                <span class="checkout-item-symbol">
                                    ${getSymbol(item.name)}
                                </span>
                            `
                    }

                </div>


                <div>

                    <div class="checkout-item-name">
                        ${escapeHTML(item.name)}
                    </div>

                    <div class="checkout-item-meta">
                        Qty ${quantity} × ${formatPrice(price)}
                    </div>

                </div>


                <div class="checkout-item-price">
                    ${formatPrice(itemTotal)}
                </div>

            `;


            itemsContainer.appendChild(element);

        });


        totalElement.textContent =
            formatPrice(total);

    }


    // -------------------------------------------------------
    // CART COUNT
    // -------------------------------------------------------

    function updateCartCount() {

        const cart = getCart();


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


    // -------------------------------------------------------
    // VALIDATION
    // -------------------------------------------------------

    function validateForm() {

        const name =
            document
                .getElementById("customerName")
                .value
                .trim();


        const phone =
            document
                .getElementById("customerPhone")
                .value
                .replace(/\D/g, "");


        const address =
            document
                .getElementById("customerAddress")
                .value
                .trim();


        const city =
            document
                .getElementById("customerCity")
                .value
                .trim();


        const pincode =
            document
                .getElementById("customerPincode")
                .value
                .replace(/\D/g, "");


        if (name.length < 2) {

            showError(
                "Please enter your full name."
            );

            return false;
        }


        if (!/^[6-9]\d{9}$/.test(phone)) {

            showError(
                "Please enter a valid 10-digit WhatsApp number."
            );

            return false;
        }


        if (address.length < 5) {

            showError(
                "Please enter your delivery address."
            );

            return false;
        }


        if (city.length < 2) {

            showError(
                "Please enter your city."
            );

            return false;
        }


        if (!/^\d{6}$/.test(pincode)) {

            showError(
                "Please enter a valid 6-digit pincode."
            );

            return false;
        }


        hideError();

        return true;
    }


    // -------------------------------------------------------
    // ERROR
    // -------------------------------------------------------

    function showError(message) {

        errorElement.textContent =
            message;

        errorElement.hidden =
            false;


        errorElement.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }


    function hideError() {

        errorElement.hidden =
            true;

        errorElement.textContent =
            "";

    }


    // -------------------------------------------------------
    // CREATE WHATSAPP MESSAGE
    // -------------------------------------------------------

    function createWhatsAppMessage() {

        const cart = getCart();


        const name =
            document
                .getElementById("customerName")
                .value
                .trim();


        const phone =
            document
                .getElementById("customerPhone")
                .value
                .trim();


        const email =
            document
                .getElementById("customerEmail")
                .value
                .trim();


        const address =
            document
                .getElementById("customerAddress")
                .value
                .trim();


        const city =
            document
                .getElementById("customerCity")
                .value
                .trim();


        const pincode =
            document
                .getElementById("customerPincode")
                .value
                .trim();


        const notes =
            document
                .getElementById("orderNotes")
                .value
                .trim();


        let total = 0;


        let productLines = "";


        cart.forEach(
            (item, index) => {

                const quantity =
                    Number(item.quantity) || 1;

                const price =
                    Number(item.price) || 0;

                const itemTotal =
                    price * quantity;

                total += itemTotal;


                productLines +=
                    `${index + 1}. ${item.name}\n` +
                    `   Qty: ${quantity}\n` +
                    `   Price: ${formatPrice(itemTotal)}\n\n`;

            }
        );


        const message =

            `🌻 *NEW NND ORDER*\n` +
            `━━━━━━━━━━━━━━━━━━\n\n` +

            `*CUSTOMER DETAILS*\n\n` +

            `Name: ${name}\n` +
            `WhatsApp: ${phone}\n` +

            (
                email
                    ? `Email: ${email}\n`
                    : ""
            ) +

            `\n` +

            `*DELIVERY ADDRESS*\n\n` +

            `${address}\n` +
            `${city} - ${pincode}\n\n` +

            `*ORDER ITEMS*\n\n` +

            productLines +

            `*TOTAL: ${formatPrice(total)}*\n\n` +

            (
                notes
                    ? `*CUSTOM REQUEST*\n\n${notes}\n\n`
                    : ""
            ) +

            `━━━━━━━━━━━━━━━━━━\n` +

            `Order placed through NND website ❤️`;


        return message;
    }


    // -------------------------------------------------------
    // SUBMIT
    // -------------------------------------------------------

    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const cart =
                getCart();


            if (!cart.length) {

                showError(
                    "Your cart is empty. Please add something before checkout."
                );

                return;
            }


            if (!validateForm()) {

                return;
            }


            const message =
                createWhatsAppMessage();


            const phone =
                "916305150599";


            const whatsappURL =
                `https://wa.me/${phone}?text=` +
                encodeURIComponent(message);


            const button =
                form.querySelector(
                    ".whatsapp-order-btn"
                );


            if (button) {

                button.disabled = true;

                button.querySelector("span")
                    .textContent =
                    "Opening WhatsApp...";

            }


            // Open WhatsApp
            window.open(
                whatsappURL,
                "_blank"
            );


            // Restore button
            setTimeout(
                () => {

                    if (button) {

                        button.disabled =
                            false;

                        button.querySelector("span")
                            .textContent =
                            "Place order on WhatsApp";

                    }

                },
                1500
            );

        }
    );


    // -------------------------------------------------------
    // INITIALIZE
    // -------------------------------------------------------

    renderCheckout();

    updateCartCount();

});