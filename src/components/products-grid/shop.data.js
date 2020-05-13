const SHOPDATA = [
    {
      id: 1,
      title: 'prima collezione',
      items: [
        {
          id: 1,
          name: 'Brown',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
          price: 25,
          category: "Hoodie"
        },
        {
          id: 2,
          name: 'nggaaazzz',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
          price: 21,
          category: "Hoodie"
        },
        {
          id: 3,
          name: 'nggaaa',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
          price: 24,
          category: "Jeans"
        },
        {
          id: 9,
          name: 'bella liiii vai cosiiiiiiiiiiiiii',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
          price: 24,
          category: "Jeans"
        }
      ]
    },
    {
      id: 2,
      title: 'seconda collezione',
      items: [
        {
          id: 4,
          name: 'Brownnnnn',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
          price: 23,
          category: "Tees"
        },
        {
          id: 5,
          name: 'nbba',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
          price: 24,
          category: "Jeans"
        }
      ]
    }
  ]

  export let objProducts = []
  SHOPDATA.forEach(collection => collection.items.forEach(product => objProducts.push(product)))

  export default SHOPDATA