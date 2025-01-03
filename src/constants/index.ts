export const menuData = [
    {
        name: "Classic Ube Chiffon Cake",
        description: "Soft and fluffy chiffon cake flavored with ube, topped with a light buttercream frosting.",
        imgSrc: '/images/products/product1.png',
        alt: 'Ube Chiffon',
        category: 'best-seller',
        price: '390',
        id: 1,
        slug: 'classic-ube-chiffon-cake'
    },
    {
        name: "Ube Macapuno Cake",
        description: "Layers of ube cake filled with macapuno (sweet coconut strings) and frosted with ube buttercream.",
        imgSrc: '/images/products/product2.png',
        alt: 'Ube Macapuno',
        category: 'best-seller',
        price: '650',
        id: 2,
        slug: 'ube-macapuno-cake'
    },
    {
        name: "Ube Leche Flan Cake",
        description: "A decadent combination of ube sponge cake and creamy leche flan as the topping.",
        imgSrc: '/images/products/product3.png',
        alt: 'Ube Leche Flan',
        category: 'regular',
        price: '150',
        id: 3,
        slug: 'ube-leche-flan-cake'
    },
    {
        name: "Ube Cheesecake",
        description: "A baked cheesecake infused with ube flavor, served on a graham cracker crust.",
        imgSrc: '/images/products/product4.png',
        alt: 'Ube Cheesecake',
        category: 'new',
        price: '350',
        id: 4,
        slug: 'ube-cheesecake'
    },
    {
        name: "Ube Pandan Cake",
        description: "A two-toned layered cake featuring the complementary flavors of ube and pandan.",
        imgSrc: '/images/products/product5.png',
        alt: 'Ube Pandan',
        category: 'new',
        price: '350',
        id: 5,
        slug: 'ube-pandan-cake'
    },
    {
        name: "Ube Swiss Roll",
        description: "A rolled ube sponge cake filled with ube jam or cream cheese frosting.",
        imgSrc: '/images/products/product6.png',
        alt: 'Ube Swiss Roll',
        category: 'regular',
        price: '350',
        id: 6,
        slug: 'ube-swiss-roll'
    },
    {
        name: "Ube Mocha Cake",
        description: "A fusion of earthy ube and coffee flavors in a layered cake with mocha frosting.",
        imgSrc: '/images/products/product7.png',
        alt: 'Ube Mocha',
        category: 'regular',
        price: '780',
        id: 7,
        slug: 'ube-mocha-cake'
    },
    {
        name: "Ube Coconut Cream Cake",
        description: "Ube cake filled with coconut cream and topped with toasted coconut flakes.",
        imgSrc: '/images/products/product8.png',
        alt: 'Ube Coconut Cream',
        category: 'best-seller',
        price: '350',
        id: 8,
        slug: 'ube-coconut-cream-cake'
    },
    {
        name: "Ube Tres Leches Cake",
        description: "A moist ube cake soaked in a mixture of three types of milk.",
        imgSrc: '/images/products/product9.png',
        alt: 'Ube Tres Leches',
        category: 'new',
        price: '350',
        id: 9,
        slug: 'ube-tres-leches-cake'
    },
    {
        name: "Ube Crinkle Cake",
        description: "Inspired by ube crinkles, this cake has a rich, fudgy texture and is dusted with powdered sugar.",
        imgSrc: '/images/products/product10.webp',
        alt: 'Ube Crinkle',
        category: 'regular',
        price: '250',
        id: 10,
        slug: 'ube-crinkle-cake'
    },
    {
        name: "Ube Mango Cake",
        description: "Layers of ube cake paired with fresh mango slices and whipped cream.",
        imgSrc: '/images/products/product11.png',
        alt: 'Ube Mango',
        category: 'regular',
        price: '450',
        id: 11,
        slug: 'ube-mango-cake'
    },
    {
        name: "Ube Brownie Cheesecake",
        description: "A hybrid dessert with a chewy ube brownie base topped with creamy ube cheesecake.",
        imgSrc: '/images/products/product12.png',
        alt: 'Ube Brownie',
        category: 'regular',
        price: '950',
        id: 12,
        slug: 'ube-brownie-cheesecake'
    },
];

export const bestSeller = menuData.filter(item => item.category === 'best-seller');

export const storeData = [
    {
        name: "Surigao",
        address: "1340 Vascquez St., Corner Gimena, Brgy. Washington, Surigao, SDN",
        phone: "09175300549 / 09199503051",
        email: "btvp79@yahoo.com",
        branch: "Main branch",
        time: "9:00 AM - 7:00 PM"
    },
    {
        name: "Lapu-lapu City",
        address: "RBI Commercial Center Ground floor, Unit #2 M.L. Quezon National Highway, Brgy Pajo, Lapu Lapu City, Cebu (before PLDT & McDonald's from the 1st Bridge)",
        phone: "(032) 503 0416 / 639099421304",
        email: "btvp79@yahoo.com",
        branch: "branch",
        time: "9:00 AM - 7:00 PM"
    },
];

export const aboutData = [
    {
        title: "Our History",
        branch: "Main branch",
        address: "1340 Vascquez St., Corner Gimena, Brgy. Washington, Surigao, SDN",
        email: "btvp79@yahoo.com",
        phone: "09175300549 / 09199503051",
        time: "9:00 AM - 7:00 PM",
        description: {
            paragraph: {
                par1: "The institution was established in 2021 and based in Surigao Del Norte, Philippines. Our primary purpose in creating this business style is primarily of delivering quality baked goods sourced from local suppliers and farmers.",
                par2:
                "Our store provides a variety of baked goods, primarily cakes. In line with our motivation of producing freshly make merchandise, baking  is made within the premises of the retailing store, providing the ideal goods to our costumers.",
                par3: {
                    sub: "To attain our functional objectives, the management is determined and committed to the SOM established and implemented and contiually improves its effectiveness through the following:",
                    items:[
                        "1. Ensure an established Food Safety Policy.",
                        "2. Communicate to the organiztion the importance of meeting customer requirements as well as the statutory guidelines.",
                        "3. established Food Safety/Quality objectives.",
                        "4. Conduct of Quarterly Management Reviews.",
                        "5. Strengthening the scientific know-how of Personnel.",
                        "6. Provision of all necessary resources to carry out the operations."
                    ]
                }
            }
        },
        Mession: "Our commitment is of producing homemade-quality baked products upholding values not only of simplicity but also, community by supporting local farmers.",
        Vission: "We aim to be part of every locality we serve as trusted institution creating products with standard and love.",
        Objectives: [
            "To build a healty relationship with our customers and distributors.",
            "Provide goods and services to our consumers with enthusiasm and professionalism",
            "Profitably supply with affordable and reasonable prices of our merchandise",
            "To help the community, especially our farmers, to earn a livelihood thus supporting local economy."
        ],
    }
];