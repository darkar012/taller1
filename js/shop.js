const productSection = document.getElementById("productGallery");

let isFav = false;
let isAdd = false;

const products = [{
        name: "PlayStation 5",
        price: 499.99,
        image: "./images/play5.jpg",
        is10discount: false,
        is20discount: false,
        is50discount: false,
        isStock: true,
        isLarge: true,
        type: "Consoles",
        discount: "",
        stock: "Stock",
        description: "Time to play at the next level",
        relevance: 1,
        addShopCart: false
    },
    {
        name: "SRS-XB23",
        price: 99.99,
        image: "./images/SRS-XB23.png",
        is10discount: false,
        is20discount: true,
        is50discount: false,
        isStock: true,
        isLarge: false,
        type: "Audio",
        discount: "20Discount",
        stock: "Stock",
        description: "EXTRA BASS™ Portable Bluetooth® Wireless Speaker",
        relevance: 2,
        addShopCart: false
    },
    {
        name: "Xperia 5 II",
        price: 849.99,
        image: "./images/Xperia5II.png",
        is10discount: false,
        is20discount: false,
        is50discount: false,
        isStock: true,
        isLarge: false,
        type: "Phones",
        discount: "",
        stock: "Stock",
        description: "120Hz HDR OLED triple camera array smartphone with ZEISS® optics",
        relevance: 3,
        addShopCart: false
    },
    {
        name: "ZV-1",
        price: 699.99,
        image: "./images/ZV-1.png",
        is10discount: true,
        is20discount: false,
        is50discount: false,
        isStock: true,
        isLarge: false,
        type: "Photography",
        discount: "10Discount",
        stock: "Stock",
        description: "Sony ZV-1 Camera for Content Creators and Vloggers",
        relevance: 4,
        addShopCart: false
    },
    {
        name: "XR-85Z9J",
        price: 8999.99,
        image: "./images/XR-85Z9J.png",
        is10discount: false,
        is20discount: false,
        is50discount: false,
        isStock: true,
        isLarge: false,
        type: "House Technology",
        discount: "",
        stock: "Stock",
        description: "BRAVIA XR Z9J 8K HDR Full Array LED with Smart Google TV (2021)",
        relevance: 5,
        addShopCart: false
    },
    {
        name: "MDR-ZX310AP",
        price: 39.99,
        image: "./images/MDR-ZX310AP.png",
        is10discount: false,
        is20discount: false,
        is50discount: false,
        isStock: true,
        isLarge: false,
        type: "Audio",
        discount: "",
        stock: "Stock",
        description: "Wired On-ear Folding Headphones with Microphone",
        relevance: 6,
        addShopCart: false
    },
    {
        name: "Far Cry 6",
        price: 99.99,
        image: "./images/farCry6.png",
        is10discount: false,
        is20discount: false,
        is50discount: false,
        isStock: true,
        isLarge: false,
        type: "Consoles",
        discount: "",
        stock: "Stock",
        description: "Fight alongside a modern-day guerrilla revolution to liberate Yara!",
        relevance: 7,
        addShopCart: false
    },
    {
        name: "ICD-PX470",
        price: 79.99,
        image: "./images/ICD-PX470.png",
        is10discount: false,
        is20discount: false,
        is50discount: false,
        isStock: false,
        isLarge: false,
        type: "Audio",
        discount: "",
        stock: "noStock",
        description: "Stereo Digital Voice Recorder with Built-in USB",
        relevance: 8,
        addShopCart: false
    },
    {
        name: "NW-A55",
        price: 219.99,
        image: "./images/NW-A55.png",
        is10discount: false,
        is20discount: false,
        is50discount: false,
        isStock: true,
        isLarge: false,
        type: "Audio",
        discount: "",
        stock: "Stock",
        description: "Take music to the next level with incredible High-Resolution Audio fidelity",
        relevance: 9,
        addShopCart: false
    },
    {
        name: "Xperia 1 III",
        price: 1000.99,
        image: "./images/SonyXperia1III.jpg",
        is10discount: false,
        is20discount: false,
        is50discount: false,
        isStock: true,
        isLarge: true,
        type: "Phones",
        stock: "Stock",
        description: "Update you to the Sony Xperience 1 III",
        relevance: 10,
        addShopCart: false
    },
    {
        name: "Spider-Man: Miles Morales",
        price: 49.99,
        image: "./images/spiderMan.png",
        is10discount: false,
        is20discount: false,
        is50discount: false,
        isStock: true,
        isLarge: false,
        type: "Consoles",
        discount: "",
        stock: "Stock",
        description: "With great power, there must also come great responsibility",
        relevance: 11,
        addShopCart: false
    },
    {
        name: "ILME-FX6V",
        price: 5999.99,
        image: "./images/ILME-FX6V.png",
        is10discount: false,
        is20discount: false,
        is50discount: false,
        isStock: true,
        isLarge: false,
        type: "Photography",
        discount: "",
        stock: "Stock",
        description: "Includes a full-frame image sensor to expand your cinematic creativity",
        relevance: 12,
        addShopCart: false
    },
    {
        name: "BDP-S6700",
        price: 99.99,
        image: "./images/BDP-S6700.png",
        is10discount: false,
        is20discount: false,
        is50discount: true,
        isStock: true,
        isLarge: false,
        type: "House Technology",
        discount: "50Discount",
        stock: "Stock",
        description: "Blu-ray™ Player with 4K Upscaling and Wi/Fi for Streaming Video",
        relevance: 13,
        addShopCart: false
    },
    {
        name: "Final Fantasy VII remake",
        price: 59.99,
        image: "./images/FFVIIRemake.png",
        is10discount: false,
        is20discount: false,
        is50discount: false,
        isStock: true,
        isLarge: false,
        type: "Consoles",
        discount: "",
        stock: "Stock",
        description: "A new adaptation of the masterpiece of the Japanese role",
        relevance: 14,
        addShopCart: false
    },
];

const productTemplate = (item) => {

    const product = document.createElement("a");

    let tagHtmlDiscount;
    let tagHtmlStock;
    let addedToCart;

    if (item.is10discount) {
        tagHtmlDiscount = `<span class="product__tag product__tag--discount">10% OFF</span>`;
    } else if (item.is20discount) {
        tagHtmlDiscount = `<span class="product__tag product__tag--discount">20% OFF</span>`;
    } else if (item.is50discount) {
        tagHtmlDiscount = `<span class="product__tag product__tag--discount">50% OFF</span>`;
    } else {
        tagHtmlDiscount = `<span></span>`;
    }

    if (!item.isStock) {
        tagHtmlStock = `<span class="product__tag product__tag--NoStock">NO STOCK</span>`;
    } else {
        tagHtmlStock = `<span></span>`;
    }

    if (item.addShopCart) {
        addedToCart = `<img src="./images/add.png" class="addCart" id=${"s"+item.relevance}>`
    } else {
        addedToCart = `<img src="./images/notAdd.png" class="addCart" id=${"s"+item.relevance}>`
    }

    if (item.isLarge) {
        product.className = "productLarge products";
        product.innerHTML = `
        <img src=${item.image} alt="" class="productLarge__image">
        <h5 class="productLarge__title">${item.name}</h5>
        ${addedToCart}
        <img src="./images/noFav.png" class="productLarge__favorite" id=${item.name}>
        <p class="productLarge__description">${item.description}</p>
        <h5 class="productLarge__price">${"$" + item.price}</h5>
    `;
    } else {
        product.className = "product products";
        product.innerHTML = `
        <img src=${item.image} alt="" class="product__image">     
        ${tagHtmlDiscount}
        ${tagHtmlStock}
        ${addedToCart}
        <img src="./images/noFav.png" class="product__favorite" id=${item.name}>
        <h5 class="product__title">${item.name}</h5>
        <p class="product__description">${item.description}</p>
        <h5 class="product__price">${"$" + item.price}</h5>
    `;
    }

    productSection.appendChild(product);
};


products.forEach((product) => {
    productTemplate(product);
});



const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrow3 = document.getElementById("arrow3");
const filterByDiscount = document.getElementById("discounts");
const filterByType = document.getElementById("type");

filterByDiscount.addEventListener("click", () => {
    arrow2.style.transform = "rotate(+135deg)";
    arrow2.style.top = "1px";
});

filterByDiscount.addEventListener("change", (e) => {
    loadProducts();
    discountFirst += 1;
});

filterByType.addEventListener("click", () => {
    arrow1.style.transform = "rotate(+135deg)";
    arrow1.style.top = "1px";
});

filterByType.addEventListener("change", (e) => {
    loadProducts();
    typeFirst += 1;
});

const orderBySelect = document.getElementById("orderBy");

orderBySelect.addEventListener("change", (e) => {
    loadProducts();
});



const loadProducts = () => {
    const type = filterByType.value || "";
    const order = orderBySelect.value || "";

    const discount = filterByDiscount.value || "";

    productSection.innerHTML = "";

    let filteredProductsByType = products;

    if (type === "All products" || type === "") {
        filteredProductsByType;
    } else {
        filteredProductsByType = products.filter(
            (product) => product.type === type
        );
    }

    if (discount === "All products" || discount === "") {
        filteredProductsByType;
    } else {
        if (discount === "Stock" || discount === "noStock") {
            filteredProductsByType = filteredProductsByType.filter(
                (product) => product.stock === discount
            );
        } else {
            filteredProductsByType = filteredProductsByType.filter(
                (product) => product.discount === discount
            );
        }
    }

    if (order === "PriceLow") {
        filteredProductsByType = filteredProductsByType.sort(
            (a, b) => a.price - b.price
        );
    } else if (order === "PriceHigh") {
        filteredProductsByType = filteredProductsByType.sort(
            (a, b) => b.price - a.price
        );
    } else if (order === "AlfabeticD") {
        filteredProductsByType = filteredProductsByType.sort(function(a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    } else if (order === "AlfabeticA") {
        filteredProductsByType = filteredProductsByType.sort(function(a, b) {
            if (a.name > b.name) {
                return -1;
            }
            if (a.name < b.name) {
                return 1;
            }
            return 0;
        });
    } else {
        filteredProductsByType = filteredProductsByType.sort(
            (a, b) => a.relevance - b.relevance
        );
    }

    filteredProductsByType.forEach((product) => {
        productTemplate(product);
    });
};

const favProducts = document.getElementsByClassName("product__favorite");
const favProductsLarge = document.getElementsByClassName("productLarge__favorite");

const favoriteSelection = (element) => {
    element.addEventListener("click", () => {
        if (isFav) {
            element.src = "./images/noFav.png";
            isFav = false;
        } else {
            element.src = "./images/fav.png";
            isFav = true;
        }
    });
};

for (let i = 0; i < favProductsLarge.length; i++) {
    const element = favProductsLarge[i];
    favoriteSelection(element);
}
for (let i = 0; i < favProducts.length; i++) {
    const element = favProducts[i];
    favoriteSelection(element);
}

const cartShop = document.getElementsByClassName("addCart");

const addSelection = (element) => {
    element.addEventListener("click", () => {
        products.forEach((product) => {
            if (element.id === "s" + product.relevance) {
                if (isAdd) {
                    element.src = "./images/notAdd.png";
                    product.addShopCart = false;
                    isAdd = false;
                } else {
                    element.src = "./images/add.png";
                    product.addShopCart = true;
                    isAdd = true;
                }
                let productsAdded = products.filter((product) => product.addShopCart);
                console.log(productsAdded);
            }
        });
    });
}

for (let i = 0; i < cartShop.length; i++) {
    const element = cartShop[i];
    addSelection(element);
}