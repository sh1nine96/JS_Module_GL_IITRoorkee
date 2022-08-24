var strProducts = `
[
    {
        "name": "PS3",
        "description": "video game",
        "price": 35000,
        "rating": {
            "min": 2,
            "max": 10
        }
    },

    {
        "name": "PS2",
        "description": "video game 2nd gen",
        "price": 15000,
        "rating": {
            "min": 2,
            "max": 10
        }

    },

    {
        "name": "PS",
        "description": "video game 1st gen",
        "price": 5000

    }
]
`;

console.log(strProducts);

var products = JSON.parse(strProducts);
console.log(products);

var newProduct = {
    name: "XBox",
    "description": "Microsoft games",
    price: 40000
};

products.push(newProduct);
console.log(products);

var strProductsSendBack = JSON.stringify(products);
console.log(strProductsSendBack);

// practice

var strObj = `[{
    "name": "Json",
    "type": "Exchange format",
    "similarTypes": ["XML","YML","CSV"],
    "rating": 10
}
]
`;

var jsObj = JSON.parse(strObj);
console.log(jsObj);

