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
            sku: '123123',
            type: 'Single Serving',
            nuVal:70,
            price: 4.99,
            inventory: 10
          },
          {
            sku: '123124',
            type: 'Family Pack',
            nuVal:45,
            price: 12.99,
            inventory: 5
          },
          {
            sku: '1231235',
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
            sku: '1231278',
            type: 'Single Serving',
            price: 7.99,
            nuVal:15,
            inventory: 10

          },
          {
            sku: '123124',
            type: 'Family Pack',
            price: 12.99,
            nuVal:15,
            inventory: 5
          },
          {
            sku: '1231235',
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
            sku: '123126',
            type: 'Single Serving',
            nuVal:70,
            price: 16.99,
            inventory: 10
          },
          {
            sku: '123124',
            type: 'Family Pack',
            nuVal:45,
            price: 12.99,
            inventory: 5
          },
          {
            sku: '1231235',
            type: '30 Pack',
            nuVal:15,
            price: 19.99,
            inventory: 3
          }
        ]
      }
    ]));
  }

};