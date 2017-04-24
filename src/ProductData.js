module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('products', JSON.stringify([
      {
        id: '0011001',
        name: 'Snapea Crisps',
        image: 'https://fa74d61d848a20b729bb-0251b36b713060ab3e0e8321940e01ff.ssl.cf2.rackcdn.com/0049000050100_CF_version_type_large.jpeg',
        description: 'A healthy snack',
        variants: [
          {
            sku: '1',
            type: 'Single Serving',
            nuVal:70,
            price: 4.99,
            inventory: 10
          },
          {
            sku: '2',
            type: 'Family Pack',
            nuVal:45,
            price: 12.99,
            inventory: 5
          },
          {
            sku: '3',
            type: '30 Pack',
            nuVal:15,
            price: 19.99,
            inventory: 3
          }
        ]
      },
      {
        id: '0011002',
        name: 'Chicken Nuggets',
        image: '../images/snapea.jpg',
        description: 'A healthy snack',
        variants: [
          {
            sku: '4',
            type: 'Single Serving',
            price: 7.99,
            nuVal:15,
            inventory: 10

          },
          {
            sku: '5',
            type: 'Family Pack',
            price: 12.99,
            nuVal:15,
            inventory: 5
          },
          {
            sku: '6',
            type: '30 Pack',
            nuVal:15,
            price: 19.99,
            inventory: 3
          }
        ]
      },
      {
        id: '0011001',
        name: 'Third Item',
        image: 'https://fa74d61d848a20b729bb-0251b36b713060ab3e0e8321940e01ff.ssl.cf2.rackcdn.com/0049000050100_CF_version_type_large.jpeg',
        description: 'A healthy snack',
        variants: [
          {
            sku: '7',
            type: 'Single Serving',
            nuVal:70,
            price: 16.99,
            inventory: 10
          },
          {
            sku: '8',
            type: 'Family Pack',
            nuVal:45,
            price: 12.99,
            inventory: 5
          },
          {
            sku: '9',
            type: '30 Pack',
            nuVal:15,
            price: 19.99,
            inventory: 3
          }
        ]
      },
      {
    id: '31000120200',
    name: "Banquet Chicken Breast Tenders",
    image: "./src/components/grid/images/chicken_tenders.jpeg",
    description: "Made with 100% natural* chicken breast with rib meat.",
    variants: [
      {
      sku: '10',
      type: '240 ml',
      nuVal: 1,
      price: 1.69,
      inventory: 15
      }
    ]
    // "maincategory": "Frozen",
    // "brand": "Banquet",
    // "subcategory1": "Frozen Meat",
    // "item": "Frozen Chicken Breast",
    // "subcategory2": "Frozen Chicken",
    // "price": 3.77,
    // "onsale": "no",
    // "quantity": "24 oz",
    // "caloriesperserving": 210,
    // "nuval": 51,
    // "servingsize": "85 g",
    // "servingsperpackage": 8,
  },
  {
          id: '49000050100',
          name: 'Coca-Cola',
          image: './src/components/grid/images/coke.jpeg',
          description: "Coca-Cola is the most popular and biggest-selling soft drink in history, as well as the best-known product in the world.",
          variants: [
            {
            sku: '11',
            type: '240 ml',
            nuVal: 1,
            price: 1.69,
            inventory: 15
            }
          ]
          // "maincategory": "Beverages",
          // "brand": "Coca-Cola",
          // "subcategory1": "Soft Drinks",
          // "subcategory2": "Carbonated Soft Drinks",
          // "onsale": "yes",
          // "quantity": "2 L",
          // "caloriesperserving": 100,
          // "nuval": 1,
          // "servingsize": "240 ml",
          // "servingsperpackage": 8
      },
      {
    "item": "Spinach",
    id: '32601900950',
    name: "Earthbound Farm Organic Baby Spinach Blend",
    image: "src/components/grid/images/salad_mix.jpeg",
    description: "In 1984, on 21/2-acres in California's verdant Carmel Valley, Drew & Myra Goodman started Earthbound Farm. Rooted on that tiny farm, our commitment to organic has grown stronger every year. Thank you for choosing organic!",
    variants: [
      {
      sku: '12',
      type: '240 ml',
      nuVal: 1,
      price: 1.69,
      inventory: 15
      }
    ]
    // "maincategory": "Fresh",
    // "subcategory1": "Produce",
    // "subcategory2": "Packaged Produce --> Bagged Salad Mixes",
    // "price": "2/$7.00",
    // "onsale": "Yes",
    // "quantity": "5 oz",
    // "caloriesperserving": 20,
    // "nuval": "no",
    // "servingsize": "3 oz (85g/about 2 cups)",
    // "servingsperpackage": 1
},
{

          id: '44000032020',
          name: "Nabisco Oreo Chocolate Sandwich Cookies",
          image: "src/components/grid/images/oreo.jpeg",
          description: "Carry love in your heart and Oreo cookies everywhere else.",
          variants: [
            {
            sku: '13',
            type: '240 ml',
            nuVal: 1,
            price: 1.69,
            inventory: 15
            }
          ]
          // "item": "Oreos",
          // "maincategory": "Pantry",
          // "brand": "Nabisco",
          // "subcategory1": "Snack Foods",
          // "subcategory2": "Cookies",
          // "price": 2.98,
          // "onsale": "no",
          // "quantity": "14.3 oz",
          // "caloriesperserving": 160,
          // "nuval": 3,
          // "servingsize": "34g",
          // "servingsperpackage": 12,
      },
      {
          "item": "Bread",
          id: '72945601330',
          name: "Sara Lee Bread White",
          image: "src/components/grid/images/bread_white.jpeg",
          variants: [
            {
            sku: '14',
            type: '240 ml',
            nuVal: 1,
            price: 1.69,
            inventory: 15
            }
          ]
          // description: "Bread is low fat, cholesterol free food. 0 grams of trans fat per serving. Per 2 slice serving: 150 calories. 0.5g sat fat 3% DV. 230mg sodium 10% DV. 3g sugars. A bread that truly deserves all the accolades. It's the original Sara Lee white, a bread so faithful to tradition that folks all over can't really have a sandwich without it. The flavor and texture say it all, and isn't that what enjoying bread is all about?",
          // "maincategory": "Pantry",
          // "brand": "Sara Lee",
          // "subcategory1": "Bread & Cakes",
          // "subcategory2": "Bread",
          // "price": 1.99,
          // "onsale": "yes",
          // "quantity": "20 oz",
          // "caloriesperserving": 150,
          // "nuval": 25,
          // "servingsize": "Two slices",
          // "servingsperpackage": 10
      },
      {
          "item": "Apples",
          id: '41330',
          name: "Gala Apples",
          description: "Sweet, Juicy, Crisp",
          image: "src/components/grid/images/apple.jpeg",
          variants: [
            {
            sku: '15',
            type: '240 ml',
            nuVal: 1,
            price: 1.69,
            inventory: 15
            }
          ]
          // "maincategory": "Fresh",
          // "brand": "NA",
          // "subcategory1": "Produce",
          // "subcategory2": "Fresh Fruit",
          // "price": "$0.59 ea",
          // "onsale": "yes",
          // "quantity": ".40 lbs",
          // "caloriesperserving": "NA",
          // "nuval": 100,
          // "servingsize": "NA",
          // "servingsperpackage": "NA",
          // "nutritionlabel": "NA"
      }
    ]));
  }

};
