

import product01_Img from "../images/product_01.1.jpg";
import product02_Img from "../images/product_01.jpg";
import product03_Img from "../images/product_01.3.jpg";

import product01_Img01 from "../images/product_2.1.jpg";
import product02_Img02 from "../images/product_2.2.jpg";
import product03_Img03 from "../images/product_2.3.jpg";

import product2_Img1 from "../images/product_3.1.jpg";
import product2_Img2 from "../images/product_3.2.jpg";
import product2_Img3 from "../images/product_3.3.jpg";

import product3_Img1 from "../images/product_4.1.jpg";
import product3_Img2 from "../images/product_4.2.jpg";
import product3_Img3 from "../images/product_4.3.png";

import product4_Img1 from "../images/product_04.jpg";
import product4_Img2 from "../images/product_08.jpg";
import product4_Img3 from "../images/product_09.jpg";

import product_05_image_01 from "../images/bread(1).png";
import product_05_image_02 from "../images/bread(2).png";
import product_05_image_03 from "../images/bread(3).png";

import bread02_img01 from "../images/breadLoaf.jpg";
// import bread02_img02 from "../images/french-bread-for-soup.jpg";





const products = [
    {
        id: "01",
        title: "Chicken Burger",
        price: 24.0,
        image01: product01_Img,
        image02: product02_Img,
        image03: product03_Img,
        category: "Burger",

        desc: "A burger is a popular fast food item consisting of a cooked ground meat patty, typically beef, placed inside a sliced bun and often accompanied by various toppings such as lettuce, cheese, tomatoes, onions, and condiments like ketchup and mayonnaise. It's a quintessential American dish enjoyed for its savory flavors and customizable ingredients.",
    },
    {
        id: "02",
        title: "Vegetarian Pizza",
        price: 24.0,
        image01: product01_Img01,
        image02: product02_Img02,
        image03: product03_Img03,
        category: "Pizza",

        desc: "Pizza is a beloved and versatile Italian dish consisting of a round, flattened dough topped with a variety of ingredients, typically including tomato sauce, cheese, and various toppings, baked to perfection in an oven. It's renowned worldwide for its savory flavors and has become a staple in global cuisine, offering endless possibilities for customization to suit diverse tastes and preferences.",
    },
    {
        id: "03",
        title: "Double Cheese Margherita",
        price: 24.0,
        image01: product2_Img1,
        image02: product2_Img2,
        image03: product2_Img3,
        category: "Pizza",

        desc: "A Double Cheese Margherita Pizza is a delightful twist on the classic Margherita, featuring a generous double layer of creamy, gooey cheeses atop a thin, crisp crust, perfectly complemented by a rich tomato sauce and fresh basil leaves. The extra cheese elevates the indulgence, creating a sumptuously melty and flavorful pizza experience.",
    },

    {
        id: "04",
        title: "Maxican Green Wave",
        price: 110.0,
        image01: product3_Img1,
        image02: product3_Img2,
        image03: product3_Img3,
        category: "Pizza",

        desc: "Mexican Green Wave Pizza is a vibrant and flavorsome pizza variation featuring a zesty medley of Mexican-inspired toppings, typically including ingredients like salsa, jalapeños, cilantro, avocados, and seasoned meats, creating a delightful fusion of Mexican cuisine with the beloved classic pizza. The green wave aspect highlights the incorporation of fresh green ingredients that bring a burst of color and a hint of spice to this delectable pizza.",
    },
    {
        id: "05",
        title: "Cheese Burger",
        price: 110.0,
        image01: product4_Img1,
        image02: product4_Img2,
        image03: product4_Img3,
        category: "Burger",

        desc: "A cheeseburger is a savory sandwich made with a ground beef patty, typically seasoned and grilled, topped with melted cheese, and served within a soft bun. The combination of juicy beef, gooey melted cheese, and other toppings like lettuce, tomatoes, and condiments makes for a satisfying and classic American comfort food.",
    },
    {
        id: "06",
        title: "Royal Cheese Burger",
        price: 24.0,
        image01: product01_Img,
        image02: product02_Img,
        image03: product03_Img,
        category: "Burger",

        desc: "The Royal Cheese Burger is a deluxe and indulgent culinary delight, featuring a juicy, perfectly grilled beef patty topped with a generous layer of melted cheese, nestled within a fluffy brioche bun, creating a harmonious blend of flavors and textures fit for royalty. Each bite offers a symphony of savory notes and a burst of creamy richness, making it a classic and elevated choice for burger enthusiasts.",
    },
    {
        id: "07",
        title: "Seafood Pizza",
        price: 24.0,
        image01: product01_Img01,
        image02: product02_Img02,
        image03: product03_Img03,
        category: "Burger",

        desc: "Seafood pizza is a delectable culinary creation that typically features a medley of fresh or cooked seafood toppings such as shrimp, clams, mussels, or squid, enhancing the pizza with a distinct oceanic flavor. The seafood harmoniously blends with traditional pizza elements like cheese, sauce, and crust, resulting in a flavorful and savory delight for seafood enthusiasts.",
    },
    {
        id: "08",
        title: "Thin Cheese Pizza",
        price: 110.0,
        image01: product2_Img1,
        image02: product2_Img2,
        image03: product2_Img3,
        category: "Pizza",

        desc: "Thin cheese pizza is a classic Italian-inspired dish characterized by a thin, crispy crust topped with a generous layer of gooey, melted cheese, delivering a delightful balance of flavors and textures. The thin crust allows the rich, savory taste of the cheese to shine through, making it a popular choice for those seeking a lighter yet satisfying pizza experience.",
    },
    {
        id: "09",
        title: "Thin Cheese Pizza",
        price: 110.0,
        image01: product2_Img1,
        image02: product2_Img2,
        image03: product2_Img3,
        category: "Pizza",

        desc: "Thin cheese pizza is a classic Italian-inspired dish characterized by a thin, crispy crust topped with a generous layer of gooey, melted cheese, delivering a delightful balance of flavors and textures. The thin crust allows the rich, savory taste of the cheese to shine through, making it a popular choice for those seeking a lighter yet satisfying pizza experience.",
    },
    {
        id: "10",
        title: "Classic Hamburger",
        price: 110.0,
        image01: product4_Img1,
        image02: product4_Img2,
        image03: product4_Img3,
        category: "Burger",

        desc: "A classic hamburger is a quintessential American fast-food dish, featuring a ground beef patty cooked to perfection, typically served in a soft bun, and often accompanied by classic toppings like lettuce, tomato, cheese, and condiments such as ketchup and mustard. It's a timeless and beloved culinary creation, renowned for its simplicity and satisfying flavors.",
    },
    {
        id: "11",
        title: "Crunchy Bread ",
        price: 35.0,
        image01: product_05_image_01,
        image02: product_05_image_02,
        image03: product_05_image_03,
        category: "Bread",

        desc: "Crunchy bread is characterized by its firm and crisp texture, achieved through a thorough baking process that results in a satisfying crunch when bitten. It's a popular choice for sandwiches and toasts, offering a delightful contrast to soft fillings or spreads.",
    },
    {
        id: "12",
        title: "Delicious Bread ",
        price: 35.0,
        image01: product_05_image_01,
        image02: product_05_image_02,
        image03: product_05_image_03,
        category: "Bread",

        desc: "Delicious bread is a culinary delight crafted from finely milled grains, water, yeast, and a touch of salt, boasting a golden, crispy crust and a soft, tender interior. Its aromatic, inviting aroma and diverse flavors make it a universally loved staple, elevating any meal with its simple yet irresistible taste.",
    },
    {
        id: "13",
        title: "Loaf Bread ",
        price: 35.0,
        image01: product_05_image_03,
        image02: product_05_image_01,
        image03: product_05_image_03,
        category: "Bread",
    
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
      },
      {
        id: "14",
        title: "Chewy French Bread",
        price: 35.0,
        image01: bread02_img01,
        // image02: bread02_img02,
        // image03: product_05_image_03,
        category: "Bread",
    
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
      },
     
];

export default products
