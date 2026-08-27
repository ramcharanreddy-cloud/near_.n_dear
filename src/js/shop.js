// =========================================================
// NND — SHOP
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const productGrid =
        document.getElementById("productGrid");

    const productCount =
        document.getElementById("productCount");

    const searchInput =
        document.getElementById("searchInput");

    const sortSelect =
        document.getElementById("sortSelect");

    const categoryButtons =
        document.querySelectorAll(".category-btn");

    const emptyState =
        document.getElementById("emptyState");

    const clearFilters =
        document.getElementById("clearFilters");


    // -----------------------------------------------------
    // NAVBAR SEARCH ELEMENTS
    // -----------------------------------------------------

    const navSearchToggle =
        document.querySelector(".nav-search-toggle");

    const searchPanel =
        document.getElementById("searchPanel");

    const searchClose =
        document.getElementById("searchClose");

    const navSearchInput =
        document.getElementById("navSearchInput");


    // -----------------------------------------------------
    // DATA
    // -----------------------------------------------------

    const allProducts =
        window.NND_PRODUCTS || [];


    let activeCategory =
        "all";


    let searchTerm =
        "";


    let sortType =
        "featured";


    // -----------------------------------------------------
    // CATEGORY LABELS
    // -----------------------------------------------------

    const categoryLabels = {

        "bouquets":
            "Bouquets",

        "keychains":
            "Keychains",

        "hair-accessories":
            "Hair Accessories",

        "accessories":
            "Accessories",

        "gifts":
            "Gifts",

        "flowers":
            "Flowers",

        "charms":
            "Charms",

        "wearables":
            "Wearables"

    };


    // -----------------------------------------------------
    // PLACEHOLDER SYMBOLS
    // -----------------------------------------------------

    function getProductSymbol(product) {

        const name =
            product.name.toLowerCase();


        if (
            name.includes("sunflower")
        ) {
            return "🌻";
        }


        if (
            name.includes("tulip") ||
            name.includes("flower") ||
            name.includes("bouquet")
        ) {
            return "🌷";
        }


        if (
            name.includes("rose")
        ) {
            return "🌹";
        }


        if (
            name.includes("clip") ||
            name.includes("scrunchie")
        ) {
            return "🎀";
        }


        if (
            name.includes("keychain")
        ) {
            return "♡";
        }


        if (
            name.includes("blanket")
        ) {
            return "✿";
        }


        if (
            name.includes("scarf")
        ) {
            return "〰";
        }


        if (
            name.includes("charm")
        ) {
            return "✦";
        }


        return "✿";
    }


    // -----------------------------------------------------
    // PRODUCT BACKGROUND
    // -----------------------------------------------------

    function getProductBackground(index) {

        const backgrounds = [

            "#F3D477",
            "#F4C7C3",
            "#B9DDE0",
            "#EFDCC2",
            "#E9B8A8",
            "#D6C7E8",
            "#C9DFBE",
            "#F2D8A7"

        ];


        return backgrounds[
            index % backgrounds.length
        ];
    }


    // -----------------------------------------------------
    // DISCOUNT
    // -----------------------------------------------------

    function getDiscount(product) {

        if (
            !product.originalPrice ||
            product.originalPrice <= product.price
        ) {
            return 0;
        }


        return Math.round(

            (
                (
                    product.originalPrice -
                    product.price
                ) /
                product.originalPrice
            ) * 100

        );

    }


    // -----------------------------------------------------
    // PRODUCT CARD
    // -----------------------------------------------------

    function createProductCard(
        product,
        index
    ) {

        const discount =
            getDiscount(product);


        const category =
            categoryLabels[product.category] ||
            product.category;


        const card =
            document.createElement("article");


        card.className =
            "product-card";


        // -------------------------------------------------
        // PRODUCT VISUAL
        // -------------------------------------------------

        const visual =
            document.createElement("div");


        visual.className =
            "product-visual";


        visual.style.setProperty(
            "--product-bg",
            getProductBackground(index)
        );


        // -------------------------------------------------
        // IMAGE
        // -------------------------------------------------

        if (product.image) {

            const image =
                document.createElement("img");


            image.className =
                "product-image";


            image.src =
                product.image;


            image.alt =
                product.name;


            image.loading =
                "lazy";


            image.onerror = () => {

                image.remove();


                visual.insertAdjacentHTML(
                    "afterbegin",
                    createPlaceholder(product)
                );

            };


            visual.appendChild(
                image
            );

        } else {

            visual.innerHTML =
                createPlaceholder(product);

        }


        // -------------------------------------------------
        // DISCOUNT BADGE
        // -------------------------------------------------

        if (discount > 0) {

            visual.insertAdjacentHTML(

                "beforeend",

                `
                    <span class="product-badge">
                        -${discount}%
                    </span>
                `

            );

        }


        // -------------------------------------------------
        // CUSTOMISATION BADGE
        // -------------------------------------------------

        if (product.customizable) {

            visual.insertAdjacentHTML(

                "beforeend",

                `
                    <span class="product-badge custom">
                        Customisable
                    </span>
                `

            );

        }


        // -------------------------------------------------
        // ADD TO CART
        // -------------------------------------------------

        const addButton =
            document.createElement("button");


        addButton.className =
            "add-product-btn";


        addButton.type =
            "button";


        addButton.setAttribute(
            "aria-label",
            `Add ${product.name} to cart`
        );


        addButton.innerHTML =
            "+";


        addButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                addToCart(product);


                addButton.classList.add(
                    "added"
                );


                addButton.innerHTML =
                    "✓";


                setTimeout(() => {

                    addButton.classList.remove(
                        "added"
                    );


                    addButton.innerHTML =
                        "+";

                }, 900);

            }
        );


        visual.appendChild(
            addButton
        );


        // -------------------------------------------------
        // PRODUCT PAGE
        // -------------------------------------------------

        visual.addEventListener(
            "click",
            () => {

                window.location.href =
                    `./product.html?id=${encodeURIComponent(product.id)}`;

            }
        );


        // -------------------------------------------------
        // PRODUCT INFO
        // -------------------------------------------------

        const info =
            document.createElement("div");


        info.className =
            "product-info";


        info.innerHTML = `

            <a
                href="./product.html?id=${encodeURIComponent(product.id)}"
                class="product-name"
            >
                ${escapeHTML(product.name)}
            </a>


            <span class="product-category">
                ${escapeHTML(category)}
            </span>


            <div class="product-price-row">

                <span class="product-price">
                    ₹${Number(product.price).toLocaleString("en-IN")}
                </span>


                ${
                    product.originalPrice
                    ?
                    `
                        <span class="product-old-price">
                            ₹${Number(product.originalPrice).toLocaleString("en-IN")}
                        </span>
                    `
                    :
                    ""
                }

            </div>

        `;


        card.appendChild(
            visual
        );


        card.appendChild(
            info
        );


        return card;

    }


    // -----------------------------------------------------
    // PLACEHOLDER
    // -----------------------------------------------------

    function createPlaceholder(product) {

        return `

            <div class="product-placeholder">

                <span class="product-placeholder-symbol">
                    ${getProductSymbol(product)}
                </span>

            </div>

        `;

    }


    // -----------------------------------------------------
    // FILTER PRODUCTS
    // -----------------------------------------------------

    function getFilteredProducts() {

        let result =
            [...allProducts];


        // -------------------------------------------------
        // CATEGORY
        // -------------------------------------------------

        if (
            activeCategory !== "all"
        ) {

            result =
                result.filter(
                    product =>
                        product.category ===
                        activeCategory
                );

        }


        // -------------------------------------------------
        // SEARCH
        // -------------------------------------------------

        if (
            searchTerm.trim()
        ) {

            const search =
                searchTerm
                    .toLowerCase()
                    .trim();


            result =
                result.filter(
                    product => {

                        const searchable = [

                            product.name,

                            product.category,

                            product.description

                        ]
                            .join(" ")
                            .toLowerCase();


                        return searchable.includes(
                            search
                        );

                    }
                );

        }


        // -------------------------------------------------
        // SORT
        // -------------------------------------------------

        switch (sortType) {

            case "price-low":

                result.sort(
                    (a, b) =>
                        a.price - b.price
                );

                break;


            case "price-high":

                result.sort(
                    (a, b) =>
                        b.price - a.price
                );

                break;


            case "name":

                result.sort(
                    (a, b) =>
                        a.name.localeCompare(
                            b.name
                        )
                );

                break;


            default:

                // Original dataset order

                break;

        }


        return result;

    }


    // -----------------------------------------------------
    // RENDER PRODUCTS
    // -----------------------------------------------------

    function renderProducts() {

        const filtered =
            getFilteredProducts();


        productGrid.innerHTML =
            "";


        productCount.textContent =
            filtered.length;


        if (
            !filtered.length
        ) {

            emptyState.hidden =
                false;

            return;

        }


        emptyState.hidden =
            true;


        filtered.forEach(
            (product, index) => {

                productGrid.appendChild(

                    createProductCard(
                        product,
                        index
                    )

                );

            }
        );

    }


    // -----------------------------------------------------
    // EXISTING SHOP SEARCH
    // -----------------------------------------------------

    searchInput.addEventListener(
        "input",
        event => {

            searchTerm =
                event.target.value;


            // Keep navbar search synced
            if (navSearchInput) {

                navSearchInput.value =
                    event.target.value;

            }


            renderProducts();

        }
    );


    // -----------------------------------------------------
    // SORT
    // -----------------------------------------------------

    sortSelect.addEventListener(
        "change",
        event => {

            sortType =
                event.target.value;


            renderProducts();

        }
    );


    // -----------------------------------------------------
    // CATEGORY
    // -----------------------------------------------------

    categoryButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    categoryButtons
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "active"
                                )
                        );


                    button.classList.add(
                        "active"
                    );


                    activeCategory =
                        button.dataset.category;


                    renderProducts();

                }
            );

        }
    );


    // -----------------------------------------------------
    // CLEAR FILTERS
    // -----------------------------------------------------

    clearFilters.addEventListener(
        "click",
        () => {

            activeCategory =
                "all";


            searchTerm =
                "";


            sortType =
                "featured";


            searchInput.value =
                "";


            if (navSearchInput) {

                navSearchInput.value =
                    "";

            }


            sortSelect.value =
                "featured";


            categoryButtons
                .forEach(
                    button =>
                        button.classList.toggle(

                            "active",

                            button.dataset.category ===
                            "all"

                        )
                );


            renderProducts();

        }
    );


    // =====================================================
    // NAVBAR SEARCH
    // =====================================================


    // -----------------------------------------------------
    // OPEN SEARCH
    // -----------------------------------------------------

    function openNavSearch() {

        if (!searchPanel) {
            return;
        }


        searchPanel.classList.add(
            "active"
        );


        searchPanel.setAttribute(
            "aria-hidden",
            "false"
        );


        if (navSearchToggle) {

            navSearchToggle.setAttribute(
                "aria-expanded",
                "true"
            );

        }


        setTimeout(
            () => {

                if (navSearchInput) {

                    navSearchInput.focus();

                }

            },
            250
        );

    }


    // -----------------------------------------------------
    // CLOSE SEARCH
    // -----------------------------------------------------

    function closeNavSearch() {

        if (!searchPanel) {
            return;
        }


        searchPanel.classList.remove(
            "active"
        );


        searchPanel.setAttribute(
            "aria-hidden",
            "true"
        );


        if (navSearchToggle) {

            navSearchToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    // -----------------------------------------------------
    // SEARCH BUTTON
    // -----------------------------------------------------

    if (navSearchToggle) {

        navSearchToggle.addEventListener(
            "click",
            openNavSearch
        );

    }


    // -----------------------------------------------------
    // CLOSE BUTTON
    // -----------------------------------------------------

    if (searchClose) {

        searchClose.addEventListener(
            "click",
            closeNavSearch
        );

    }


    // -----------------------------------------------------
    // CLICK OUTSIDE
    // -----------------------------------------------------

    if (searchPanel) {

        searchPanel.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    searchPanel
                ) {

                    closeNavSearch();

                }

            }
        );

    }


    // -----------------------------------------------------
    // ESCAPE
    // -----------------------------------------------------

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                searchPanel &&
                searchPanel.classList.contains(
                    "active"
                )
            ) {

                closeNavSearch();

            }

        }
    );


    // -----------------------------------------------------
    // NAVBAR SEARCH INPUT
    // -----------------------------------------------------

    if (navSearchInput) {

        navSearchInput.addEventListener(
            "input",
            event => {

                searchTerm =
                    event.target.value;


                // Sync existing Shop search
                searchInput.value =
                    event.target.value;


                renderProducts();

            }
        );


        navSearchInput.addEventListener(
            "keydown",
            event => {

                if (
                    event.key !== "Enter"
                ) {
                    return;
                }


                event.preventDefault();


                const query =
                    navSearchInput.value.trim();


                if (!query) {
                    return;
                }


                searchTerm =
                    query;


                searchInput.value =
                    query;


                renderProducts();


                closeNavSearch();

            }
        );

    }


    // -----------------------------------------------------
    // URL SEARCH
    // -----------------------------------------------------

    const urlParams =
        new URLSearchParams(
            window.location.search
        );


    const urlSearch =
        urlParams.get("search");


    if (urlSearch) {

        searchTerm =
            urlSearch;


        searchInput.value =
            urlSearch;


        if (navSearchInput) {

            navSearchInput.value =
                urlSearch;

        }

    }


    // -----------------------------------------------------
    // ADD TO CART
    // -----------------------------------------------------

    function addToCart(product) {

        let cart =
            JSON.parse(
                localStorage.getItem(
                    "nnd-cart"
                )
            ) || [];


        const existing =
            cart.find(
                item =>
                    item.id ===
                    product.id
            );


        if (existing) {

            existing.quantity +=
                1;

        } else {

            cart.push({

                id:
                    product.id,

                name:
                    product.name,

                price:
                    product.price,

                image:
                    product.image,

                quantity:
                    1

            });

        }


        localStorage.setItem(
            "nnd-cart",
            JSON.stringify(cart)
        );


        updateCartCount();

    }


    // -----------------------------------------------------
    // CART COUNT
    // -----------------------------------------------------

    function updateCartCount() {

        const cart =
            JSON.parse(
                localStorage.getItem(
                    "nnd-cart"
                )
            ) || [];


        const total =
            cart.reduce(
                (sum, item) =>
                    sum +
                    Number(
                        item.quantity || 0
                    ),
                0
            );


        document
            .querySelectorAll(
                ".cart-count"
            )
            .forEach(
                element =>
                    element.textContent =
                        total
            );

    }


    // -----------------------------------------------------
    // HTML ESCAPE
    // -----------------------------------------------------

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


    // -----------------------------------------------------
    // INITIALIZE
    // -----------------------------------------------------

    renderProducts();

    updateCartCount();

});