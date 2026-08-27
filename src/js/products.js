// =========================================================
// NND — PRODUCT CATALOGUE
// Near N Dear
// =========================================================

const products = [

    {
        id: "sunflower-bouquet",
        name: "Sunflower Bouquet",
        price: 149,
        originalPrice: 199,
        category: "bouquets",
        customizable: false,
        description: "",
        image: ""
    },

    {
        id: "single-tulip-bouquet",
        name: "Single Tulip Bouquet",
        price: 149,
        originalPrice: 199,
        category: "bouquets",
        customizable: true,
        description: "Customisation available",
        image: ""
    },

    {
        id: "4-tulip-bouquet",
        name: "4 Tulip Bouquet",
        price: 499,
        originalPrice: 550,
        category: "bouquets",
        customizable: true,
        description: "Customisation available",
        image: ""
    },

    {
        id: "crochet-flower-red-bouquet",
        name: "Crochet Flower Red Bouquet",
        price: 549,
        originalPrice: 649,
        category: "bouquets",
        customizable: true,
        description: "Customisation available",
        image: ""
    },

    {
        id: "4x4-frame-with-flower",
        name: "4×4 Frame with Flower",
        price: 199,
        originalPrice: 250,
        category: "gifts",
        customizable: true,
        description: "Customisation available",
        image: ""
    },

    {
        id: "one-piece-hat-keychain",
        name: "One Piece Hat Keychain",
        price: 99,
        originalPrice: 125,
        category: "keychains",
        customizable: false,
        description: "",
        image: ""
    },

    {
        id: "mini-bouquets",
        name: "Mini Bouquets",
        price: 99,
        originalPrice: 129,
        category: "bouquets",
        customizable: false,
        description: "Mini bouquet ₹99 each",
        image: ""
    },

    {
        id: "mini-claw-clip",
        name: "Mini Claw Clip",
        price: 79,
        originalPrice: 100,
        category: "hair-accessories",
        customizable: false,
        description: "Mini crochet claw clip",
        image: ""
    },

    {
        id: "crochet-claw-clip",
        name: "Crochet Claw Clip",
        price: 120,
        originalPrice: 150,
        category: "hair-accessories",
        customizable: false,
        description: "Small flower claw clip",
        image: ""
    },

    {
        id: "closed-rose",
        name: "Closed Rose",
        price: 199,
        originalPrice: 250,
        category: "flowers",
        customizable: false,
        description: "Crochet rose",
        image: ""
    },

    {
        id: "mogra-scrunchie",
        name: "Mogra Scrunchie",
        price: 80,
        originalPrice: 120,
        category: "hair-accessories",
        customizable: false,
        description: "",
        image: ""
    },

    {
        id: "lip-balm-holder",
        name: "Lip Balm Holder",
        price: 199,
        originalPrice: 250,
        category: "accessories",
        customizable: true,
        description: "Customisation available",
        image: ""
    },

    {
        id: "2-daisy-flower-bouquet",
        name: "2 Daisy Flower Bouquet",
        price: 149,
        originalPrice: 199,
        category: "bouquets",
        customizable: true,
        description: "Customisation available",
        image: ""
    },

    {
        id: "single-lilu-bouquet",
        name: "Single Lilu Bouquet",
        price: 249,
        originalPrice: 300,
        category: "bouquets",
        customizable: true,
        description: "Customisation available",
        image: ""
    },

    {
        id: "spidy-tulip",
        name: "Spidy Tulip",
        price: 149,
        originalPrice: 199,
        category: "bouquets",
        customizable: true,
        description: "Customisation available",
        image: ""
    },

    {
        id: "2-flower-claw-clip",
        name: "2 Flower Claw Clip",
        price: 90,
        originalPrice: 120,
        category: "hair-accessories",
        customizable: true,
        description: "Customisation available",
        image: ""
    },

    {
        id: "3-flower-claw-clip",
        name: "3 Flower Claw Clip",
        price: 120,
        originalPrice: 150,
        category: "hair-accessories",
        customizable: true,
        description: "Customisation available",
        image: ""
    },

    {
        id: "heart-keychain",
        name: "Heart Keychain",
        price: 120,
        originalPrice: 150,
        category: "keychains",
        customizable: false,
        description: "",
        image: ""
    },

    {
        id: "star-keychain",
        name: "Star Keychain",
        price: 120,
        originalPrice: 150,
        category: "keychains",
        customizable: false,
        description: "",
        image: ""
    },

    {
        id: "mikasa-keychain",
        name: "Mikasa Keychain",
        price: 99,
        originalPrice: 120,
        category: "keychains",
        customizable: false,
        description: "",
        image: ""
    },

    {
        id: "crochet-hair-clips",
        name: "Crochet Hair Clips",
        price: 40,
        originalPrice: 60,
        category: "hair-accessories",
        customizable: true,
        description: "Customisation available",
        image: ""
    },

    {
        id: "bouquet-blanket",
        name: "Bouquet Blanket",
        price: 999,
        originalPrice: 1200,
        category: "gifts",
        customizable: false,
        description: "16 inch bouquet blanket",
        image: ""
    },

    {
        id: "bow-keychains",
        name: "Bow Keychains",
        price: 99,
        originalPrice: 120,
        category: "keychains",
        customizable: true,
        description: "Customisation available",
        image: ""
    },

    {
        id: "kaleshi-clip",
        name: "Kaleshi Clip",
        price: 59,
        originalPrice: 80,
        category: "hair-accessories",
        customizable: false,
        description: "",
        image: ""
    },

    {
        id: "mikasa-scarf",
        name: "Mikasa Scarf",
        price: 1500,
        originalPrice: 2000,
        category: "wearables",
        customizable: false,
        description: "",
        image: ""
    },

    {
        id: "keychain-each-99",
        name: "Keychain Each ₹99",
        price: 99,
        originalPrice: 150,
        category: "keychains",
        customizable: false,
        description: "Keychain each ₹99",
        image: ""
    },

    {
        id: "moor-pankh-keychain",
        name: "Moor Pankh Keychain",
        price: 99,
        originalPrice: 120,
        category: "keychains",
        customizable: false,
        description: "",
        image: ""
    },

    {
        id: "evil-eye-charm",
        name: "Evil Eye Charm",
        price: 140,
        originalPrice: 160,
        category: "charms",
        customizable: false,
        description: "",
        image: ""
    },

    {
        id: "cream-roll-keychain",
        name: "Cream Roll Keychain",
        price: 99,
        originalPrice: 120,
        category: "keychains",
        customizable: false,
        description: "",
        image: ""
    },

    {
        id: "3-flower-bouquet-keychain",
        name: "3 Flower Bouquet Keychain",
        price: 99,
        originalPrice: 130,
        category: "keychains",
        customizable: false,
        description: "",
        image: ""
    },

    {
        id: "sunflower-keychain",
        name: "Sunflower Keychain",
        price: 120,
        originalPrice: 160,
        category: "keychains",
        customizable: false,
        description: "",
        image: ""
    }

];


// =========================================================
// NND STORE INFORMATION
// =========================================================

const storeInfo = {

    name: "NND",

    fullName: "Near N Dear",

    whatsappCatalogue:
        "https://wa.me/c/916305150599",

    instagram:
        "https://instagram.com/near_n_dear"

};


// =========================================================
// GLOBAL ACCESS
// =========================================================

window.NND_PRODUCTS = products;

window.NND_STORE = storeInfo;