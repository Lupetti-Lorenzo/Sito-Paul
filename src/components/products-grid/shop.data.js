const SHOPDATA = [
    {
      id: 1,
      title: 'prima collezione',
      releaseDate: '15-02-2020',
      items: [
        {
          id: 3,
          name: 'jea',
          price: 25,
          category: "Jeans",
          images: {
            front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
            back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
            Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
            Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
            Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
            Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
            Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
            Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
            XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
            XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
        },
        discount: {
          applied: false,
          howMuch: 0
        },
        disponibility: {
          S: 0,
          M: 10,
          L: 10,
          XL: 10
        }
      },
      {
        id: 4,
        name: 'teeeeengga',
        price: 30,
        category: "Tees",
        images: {
          front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
          back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
          Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
          Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
          Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
          Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
          Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
          Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
          XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
          XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
      },
      discount: {
        applied: false,
        howMuch: 0
      },
      disponibility: {
        S: 10,
        M: 10,
        L: 10,
        XL: 10
      }
    },
    {
      id: 3,
      name: 'jea',
      price: 25,
      category: "Jeans",
      images: {
        front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
        back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
        Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
        Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
        Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
        Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
        Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
        Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
        XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
        XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
    },
    discount: {
      applied: false,
      howMuch: 0
    },
    disponibility: {
      S: 0,
      M: 10,
      L: 10,
      XL: 10
    }
  },{
    id: 3,
    name: 'jea',
    price: 25,
    category: "Jeans",
    images: {
      front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
      back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
      Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
      Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
      Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
      Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
      Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
      Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
      XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
      XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
  },
  discount: {
    applied: false,
    howMuch: 0
  },
  disponibility: {
    S: 0,
    M: 10,
    L: 10,
    XL: 10
  }
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
},{
  id: 3,
  name: 'jea',
  price: 25,
  category: "Jeans",
  images: {
    front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
    back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
    Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
    Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
    Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
    Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
    Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
    Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
    XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
    XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
},
discount: {
  applied: false,
  howMuch: 0
},
disponibility: {
  S: 0,
  M: 10,
  L: 10,
  XL: 10
}
}
    ]
  },
  {
    id: 2,
    title: 'seconda collezione',
    releaseDate: '15-02-2020',
    items: [
      {
        id: 1,
        name: 'Brown',
        price: 25,
        category: "Hoodie",
        images: {
          front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
          back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
          Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
          Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
          Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
          Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
          Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
          Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
          XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
          XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
      },
      discount: {
        applied: false,
        howMuch: 0
      },
      disponibility: {
        S: 10,
        M: 10,
        L: 10,
        XL: 10
      }
    },
    {
      id: 2,
      name: 'White',
      price: 30,
      category: "Hoodie",
      images: {
        front: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465',
        back: 'https://cdn.shopify.com/s/files/1/1426/7942/products/NERVOUS-HOOD-BLACK_590x.png?v=1537915297',
        Sfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/LIGHTNING-HOODIE_590x.png?v=1509149947',
        Sback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/DEXPANTS_590x.jpg?v=1484598173',
        Mfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-BLACK_590x.png?v=1525120992',
        Mback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/FLAMES-HOODIE-WHITE_590x.png?v=1525121037',
        Lfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/RALLY_TOWEL-BLACK_590x.png?v=1525121077',
        Lback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-BLACK_590x.png?v=1548190418',
        XLfront: 'https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-RED_590x.png?v=1548190521',
        XLback: 'https://cdn.shopify.com/s/files/1/1426/7942/products/TEE-BALLOUT-NAVY_590x.png?v=1548190350'
    },
    discount: {
      applied: false,
      howMuch: 0
    },
    disponibility: {
      S: 10,
      M: 10,
      L: 10,
      XL: 10
    }
  }
  ]
}
]

  export let objProducts = []
  SHOPDATA.forEach(collection => collection.items.forEach(product => objProducts.push(product)))

  export default SHOPDATA