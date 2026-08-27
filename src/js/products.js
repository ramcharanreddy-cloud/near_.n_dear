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
        image: "sunflower-bouquet.png"
    },

    {
        id: "single-tulip-bouquet",
        name: "Single Tulip Bouquet",
        price: 149,
        originalPrice: 199,
        category: "bouquets",
        customizable: true,
        description: "Customisation available",
        image: "single-tulip-bouquet.png"
    },

    {
        id: "4-tulip-bouquet",
        name: "4 Tulip Bouquet",
        price: 499,
        originalPrice: 550,
        category: "bouquets",
        customizable: true,
        description: "Customisation available",
        image: "4-tulip-bouquet.png"
    },

    {
        id: "crochet-flower-red-bouquet",
        name: "Crochet Flower Red Bouquet",
        price: 549,
        originalPrice: 649,
        category: "bouquets",
        customizable: true,
        description: "Customisation available",
        image: "crochet-flower-red-bouquet.png"
    },

    {
        id: "4x4-frame-with-flower",
        name: "4×4 Frame with Flower",
        price: 199,
        originalPrice: 250,
        category: "gifts",
        customizable: true,
        description: "Customisation available",
        image: "4x4-frame-with-flower.png"
    },

    {
        id: "one-piece-hat-keychain",
        name: "One Piece Hat Keychain",
        price: 99,
        originalPrice: 125,
        category: "keychains",
        customizable: false,
        description: "",
        image: "one-piece-hat-keychain.png"
    },

    {
        id: "mini-bouquets",
        name: "Mini Bouquets",
        price: 99,
        originalPrice: 129,
        category: "bouquets",
        customizable: false,
        description: "Mini bouquet ₹99 each",
        image: "mini-bouquets.png"
    },

    {
        id: "mini-claw-clip",
        name: "Mini Claw Clip",
        price: 79,
        originalPrice: 100,
        category: "hair-accessories",
        customizable: false,
        description: "Mini crochet claw clip",
        image: "mini-claw-clip.png"
    },

    {
        id: "crochet-claw-clip",
        name: "Crochet Claw Clip",
        price: 120,
        originalPrice: 150,
        category: "hair-accessories",
        customizable: false,
        description: "Small flower claw clip",
        image: "crochet-claw-clip.png"
    },

    {
        id: "closed-rose",
        name: "Closed Rose",
        price: 199,
        originalPrice: 250,
        category: "flowers",
        customizable: false,
        description: "Crochet rose",
        image: "closed-rose.png"
    },

    {
        id: "mogra-scrunchie",
        name: "Mogra Scrunchie",
        price: 80,
        originalPrice: 120,
        category: "hair-accessories",
        customizable: false,
        description: "",
        image: "mogra-scrunchie.png"
    },

    {
        id: "lip-balm-holder",
        name: "Lip Balm Holder",
        price: 199,
        originalPrice: 250,
        category: "accessories",
        customizable: true,
        description: "Customisation available",
        image: "lip-balm-holder.png"
    },

    {
        id: "2-daisy-flower-bouquet",
        name: "2 Daisy Flower Bouquet",
        price: 149,
        originalPrice: 199,
        category: "bouquets",
        customizable: true,
        description: "Customisation available",
        image: "2-daisy-flower-bouquet.png"
    },

    {
        id: "single-lilu-bouquet",
        name: "Single Lilu Bouquet",
        price: 249,
        originalPrice: 300,
        category: "bouquets",
        customizable: true,
        description: "Customisation available",
        image: "single-lilu-bouquet.png"
    },

    {
        id: "spidy-tulip",
        name: "Spidy Tulip",
        price: 149,
        originalPrice: 199,
        category: "bouquets",
        customizable: true,
        description: "Customisation available",
        image: "spidy-tulip.png"
    },

    {
        id: "2-flower-claw-clip",
        name: "2 Flower Claw Clip",
        price: 90,
        originalPrice: 120,
        category: "hair-accessories",
        customizable: true,
        description: "Customisation available",
        image: "2-flower-claw-clip.png"
    },

    {
        id: "3-flower-claw-clip",
        name: "3 Flower Claw Clip",
        price: 120,
        originalPrice: 150,
        category: "hair-accessories",
        customizable: true,
        description: "Customisation available",
        image: "3-flower-claw-clip.png"
    },

    {
        id: "heart-keychain",
        name: "Heart Keychain",
        price: 120,
        originalPrice: 150,
        category: "keychains",
        customizable: false,
        description: "",
        image:"heart-keychain.png"
    },

    {
        id: "star-keychain",
        name: "Star Keychain",
        price: 120,
        originalPrice: 150,
        category: "keychains",
        customizable: false,
        description: "",
        image: "star-keychain.png"
    },

    {
        id: "mikasa-keychain",
        name: "Mikasa Keychain",
        price: 99,
        originalPrice: 120,
        category: "keychains",
        customizable: false,
        description: "",
        image:"mikasa-keychain.png"
    },

    {
        id: "crochet-hair-clips",
        name: "Crochet Hair Clips",
        price: 40,
        originalPrice: 60,
        category: "hair-accessories",
        customizable: true,
        description: "Customisation available",
        image: "crochet-hair-clips.png"
    },

    {
        id: "bouquet-blanket",
        name: "Bouquet Blanket",
        price: 999,
        originalPrice: 1200,
        category: "gifts",
        customizable: false,
        description: "16 inch bouquet blanket",
        image: "bouquet-blanket.png"
    },

    {
        id: "bow-keychains",
        name: "Bow Keychains",
        price: 99,
        originalPrice: 120,
        category: "keychains",
        customizable: true,
        description: "Customisation available",
        image: "bow-keychains.png"
    },

    {
        id: "kaleshi-clip",
        name: "Kaleshi Clip",
        price: 59,
        originalPrice: 80,
        category: "hair-accessories",
        customizable: false,
        description: "",
        image: "kaleshi-clip.png"
    },

    {
        id: "mikasa-scarf",
        name: "Mikasa Scarf",
        price: 1500,
        originalPrice: 2000,
        category: "wearables",
        customizable: false,
        description: "",
        image: "mikasa-scarf.png"
    },

    // =====================================================
    // IMAGE ADDED
    // =====================================================

    {
        id: "keychain-each-99",
        name: "Keychain Each ₹99",
        price: 99,
        originalPrice: 150,
        category: "keychains",
        customizable: false,
        description: "Keychain each ₹99",
        image: "keychain-each-99.png"
    },

    {
        id: "moor-pankh-keychain",
        name: "Moor Pankh Keychain",
        price: 99,
        originalPrice: 120,
        category: "keychains",
        customizable: false,
        description: "",
        image: "moor-pankh-keychain.png"
    },

    {
        id: "evil-eye-charm",
        name: "Evil Eye Charm",
        price: 140,
        originalPrice: 160,
        category: "charms",
        customizable: false,
        description: "",
        image: "evil-eye-charm.png"
    },

    {
        id: "cream-roll-keychain",
        name: "Cream Roll Keychain",
        price: 99,
        originalPrice: 120,
        category: "keychains",
        customizable: false,
        description: "",
        image: "cream-roll-keychain.png"
    },

    {
        id: "3-flower-bouquet-keychain",
        name: "3 Flower Bouquet Keychain",
        price: 99,
        originalPrice: 130,
        category: "keychains",
        customizable: false,
        description: "",
        image: "3-flower-bouquet-keychain.png"
    },

    {
        id: "sunflower-keychain",
        name: "Sunflower Keychain",
        price: 120,
        originalPrice: 160,
        category: "keychains",
        customizable: false,
        description: "",
        image: "sunflower-keychain.png"
    }

];


// =========================================================
// NND STORE INFORMATION
// =========================================================

const storeInfo = {

    name: "NND",

    fullName: "Near N Dear",

    whatsappCatalogue:
        "https://wa.me/916305150599",

    instagram:
        "https://www.instagram.com/near_.n_dear?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="

};


// =========================================================
// GLOBAL ACCESS
// =========================================================

window.NND_PRODUCTS = products;

window.NND_STORE = storeInfo;