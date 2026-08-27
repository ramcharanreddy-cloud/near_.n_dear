// =========================================================
// NND — PRODUCT DETAILS
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    // Get product ID from URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    // Get products from products.js
    const allProducts = window.NND_PRODUCTS || [];

    // Find matching product
    const product = allProducts.find(
        item => String(item.id) === String(productId)
    );

    // Product not found
    if (!product) {
        showProductNotFound();
        return;
    }

    // Render product
    renderProduct(product);

    // Setup interactions
    setupQuantity();
    setupAddToCart(product);
    setupWhatsApp(product);

    // Update cart number
    updateCartCount();
});


// =========================================================
// RENDER PRODUCT
// =========================================================

function renderProduct(product) {

    const container =
        document.getElementById("productDetails");

    if (!container) return;

    const discount =
        product.originalPrice &&
        product.originalPrice > product.price
            ? Math.round(
                (
                    (product.originalPrice - product.price) /
                    product.originalPrice
                ) * 100
            )
            : 0;

    const symbol =
        getProductSymbol(product);


    container.innerHTML = `

        <section class="product-page">

            <!-- PRODUCT VISUAL -->

            <div class="product-detail-visual">

                <div class="detail-art">

                    <span class="detail-art-symbol">
                        ${symbol}
                    </span>

                    <span class="detail-art-name">
                        NND
                    </span>

                </div>


                ${
                    discount > 0
                        ? `
                            <span class="detail-discount">
                                -${discount}%
                            </span>
                        `
                        : ""
                }

            </div>


            <!-- PRODUCT INFORMATION -->

            <div class="product-detail-info">

                <span class="detail-category">
                    ${escapeHTML(
                        getCategoryName(product.category)
                    )}
                </span>


                <h1>
                    ${escapeHTML(product.name)}
                </h1>


                ${
                    product.customizable
                        ? `
                            <div class="customizable-badge">
                                ✦ Customisation available
                            </div>
                        `
                        : ""
                }


                <div class="detail-price">

                    <span class="current-price">
                        ₹${Number(product.price).toLocaleString("en-IN")}
                    </span>


                    ${
                        product.originalPrice
                            ? `
                                <span class="old-price">
                                    ₹${Number(
                                        product.originalPrice
                                    ).toLocaleString("en-IN")}
                                </span>
                            `
                            : ""
                    }

                </div>


                <p class="detail-description">

                    ${
                        product.description
                            ? escapeHTML(product.description)
                            : "A little handmade piece, thoughtfully created to make someone feel special. Made with love, one stitch at a time."
                    }

                </p>


                <!-- QUANTITY -->

                <div class="quantity-section">

                    <span class="quantity-label">
                        Quantity
                    </span>


                    <div class="quantity-control">

                        <button
                            class="quantity-btn"
                            id="decreaseQty"
                            type="button"
                        >
                            −
                        </button>


                        <span id="quantity">
                            1
                        </span>


                        <button
                            class="quantity-btn"
                            id="increaseQty"
                            type="button"
                        >
                            +
                        </button>

                    </div>

                </div>


                <!-- ACTIONS -->

                <div class="product-actions">

                    <button
                        class="add-cart-large"
                        id="addToCart"
                        type="button"
                    >
                        Add to cart
                    </button>


                    <button
                        class="whatsapp-order"
                        id="whatsappOrder"
                        type="button"
                    >
                        Order on WhatsApp
                    </button>

                </div>


                <!-- PRODUCT META -->

                <div class="product-meta">

                    <div class="meta-item">

                        <span>♡</span>

                        <div>

                            <strong>
                                Made with love
                            </strong>

                            <small>
                                Handmade by NND
                            </small>

                        </div>

                    </div>


                    <div class="meta-item">

                        <span>✦</span>

                        <div>

                            <strong>
                                Thoughtfully made
                            </strong>

                            <small>
                                Created especially for you
                            </small>

                        </div>

                    </div>


                    <div class="meta-item">

                        <span>↗</span>

                        <div>

                            <strong>
                                Custom orders
                            </strong>

                            <small>
                                Ask us about customisation
                            </small>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    `;
}


// =========================================================
// CATEGORY NAME
// =========================================================

function getCategoryName(category) {

    const labels = {

        "bouquets": "Bouquets",

        "keychains": "Keychains",

        "hair-accessories": "Hair Accessories",

        "accessories": "Accessories",

        "gifts": "Gifts",

        "flowers": "Flowers",

        "charms": "Charms",

        "wearables": "Wearables"

    };

    return labels[category] || category;
}


// =========================================================
// PRODUCT SYMBOL
// =========================================================

function getProductSymbol(product) {

    const name =
        product.name.toLowerCase();


    if (name.includes("sunflower")) {
        return "🌻";
    }


    if (name.includes("tulip")) {
        return "🌷";
    }


    if (name.includes("rose")) {
        return "🌹";
    }


    if (
        name.includes("flower") ||
        name.includes("bouquet")
    ) {
        return "🌼";
    }


    if (
        name.includes("clip") ||
        name.includes("scrunchie")
    ) {
        return "🎀";
    }


    if (name.includes("keychain")) {
        return "♡";
    }


    if (name.includes("blanket")) {
        return "✿";
    }


    if (name.includes("scarf")) {
        return "〰";
    }


    if (name.includes("charm")) {
        return "✦";
    }


    return "✿";
}


// =========================================================
// QUANTITY
// =========================================================

function setupQuantity() {

    const quantityElement =
        document.getElementById("quantity");

    const decreaseButton =
        document.getElementById("decreaseQty");

    const increaseButton =
        document.getElementById("increaseQty");


    if (
        !quantityElement ||
        !decreaseButton ||
        !increaseButton
    ) {
        return;
    }


    let quantity = 1;


    decreaseButton.addEventListener(
        "click",
        () => {

            if (quantity > 1) {

                quantity--;

                quantityElement.textContent =
                    quantity;

            }

        }
    );


    increaseButton.addEventListener(
        "click",
        () => {

            if (quantity < 99) {

                quantity++;

                quantityElement.textContent =
                    quantity;

            }

        }
    );
}


// =========================================================
// ADD TO CART
// =========================================================

function setupAddToCart(product) {

    const button =
        document.getElementById("addToCart");


    if (!button) return;


    button.addEventListener(
        "click",
        () => {

            const quantity =
                Number(
                    document.getElementById("quantity")
                        ?.textContent || 1
                );


            let cart =
                JSON.parse(
                    localStorage.getItem("nnd-cart")
                ) || [];


            const existing =
                cart.find(
                    item =>
                        item.id === product.id
                );


            if (existing) {

                existing.quantity += quantity;

            } else {

                cart.push({

                    id: product.id,

                    name: product.name,

                    price: product.price,

                    image: product.image,

                    quantity: quantity

                });

            }


            localStorage.setItem(
                "nnd-cart",
                JSON.stringify(cart)
            );


            button.textContent =
                "✓ Added to cart";

            button.classList.add("added");


            updateCartCount();


            setTimeout(
                () => {

                    button.textContent =
                        "Add to cart";

                    button.classList.remove(
                        "added"
                    );

                },
                1800
            );

        }
    );
}


// =========================================================
// WHATSAPP
// =========================================================

function setupWhatsApp(product) {

    const button =
        document.getElementById(
            "whatsappOrder"
        );


    if (!button) return;


    button.addEventListener(
        "click",
        () => {

            const quantity =
                Number(
                    document.getElementById("quantity")
                        ?.textContent || 1
                );


            const total =
                product.price * quantity;


            const message =
                `Hi NND! 🌻\n\n` +
                `I'd like to order:\n\n` +
                `*${product.name}*\n` +
                `Quantity: ${quantity}\n` +
                `Price: ₹${total}\n\n` +
                `Thank you! ❤️`;


            const phone =
                "916305150599";


            const url =
                `https://wa.me/${phone}?text=` +
                encodeURIComponent(message);


            window.open(
                url,
                "_blank"
            );

        }
    );
}


// =========================================================
// CART COUNT
// =========================================================

function updateCartCount() {

    const cart =
        JSON.parse(
            localStorage.getItem("nnd-cart")
        ) || [];


    const total =
        cart.reduce(
            (sum, item) =>
                sum + Number(item.quantity || 0),
            0
        );


    document
        .querySelectorAll(".cart-count")
        .forEach(
            element => {

                element.textContent =
                    total;

            }
        );
}


// =========================================================
// PRODUCT NOT FOUND
// =========================================================

function showProductNotFound() {

    const container =
        document.getElementById(
            "productDetails"
        );


    if (!container) return;


    container.innerHTML = `

        <div class="product-not-found">

            <span>✦</span>

            <h1>
                This little piece
                couldn't be found.
            </h1>

            <p>
                Let's find something else
                made with love.
            </p>

            <a
                href="./shop.html"
                class="back-to-shop"
            >
                Back to shop ↗
            </a>

        </div>

    `;
}


// =========================================================
// HTML ESCAPE
// =========================================================

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