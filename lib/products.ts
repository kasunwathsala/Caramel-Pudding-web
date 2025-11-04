export interface Product {
  id: string
  name: string
  image: string
  price: number
  flavor: string
  description: string
  longDescription: string
  ingredients: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: "classic-caramel",
    name: "Classic Caramel",
    image: "/images/classic-caramel.jpg",
    price: 12.99,
    flavor: "Classic",
    description: "Our signature smooth and buttery caramel pudding",
    longDescription:
      "Experience pure caramel bliss with our signature pudding. Made from the finest caramel and fresh cream, this classic variety has been perfected over years of craftsmanship. Smooth, rich, and utterly indulgent.",
    ingredients: ["Caramel", "Cream", "Vanilla", "Sugar", "Sea Salt"],
  },
  {
    id: "salted-caramel",
    name: "Salted Caramel",
    image: "/images/salted-caramel.jpg",
    price: 13.99,
    flavor: "Salted",
    description: "A perfect balance of sweet and salty goodness",
    longDescription:
      "Elevate your pudding experience with our Salted Caramel. The perfect balance between sweet and savory, this variety features premium sea salt that brings out the depth of our caramel. A sophisticated choice for the discerning palate.",
    ingredients: ["Caramel", "Cream", "Sea Salt", "Vanilla", "Sugar"],
  },
  {
    id: "dark-chocolate-caramel",
    name: "Dark Chocolate Caramel",
    image: "/images/dark-chocolate-caramel.jpg",
    price: 14.99,
    flavor: "Chocolate",
    description: "Rich caramel blended with premium dark chocolate",
    longDescription:
      "For chocolate lovers, our Dark Chocolate Caramel is a dream come true. We combine our signature caramel with 70% premium dark chocolate for a decadent dessert experience. Velvety, smooth, and absolutely irresistible.",
    ingredients: ["Caramel", "Dark Chocolate (70%)", "Cream", "Vanilla", "Sugar"],
  },
  {
    id: "espresso-caramel",
    name: "Espresso Caramel",
    image: "/images/espresso-caramel.jpg",
    price: 14.99,
    flavor: "Coffee",
    description: "Bold espresso meets smooth caramel",
    longDescription:
      "Wake up your taste buds with our Espresso Caramel. A sophisticated blend of our signature caramel with premium espresso, this variety is perfect for coffee enthusiasts. Rich, aromatic, and energizing.",
    ingredients: ["Caramel", "Espresso", "Cream", "Vanilla", "Sugar"],
  },
  {
    id: "maple-pecan",
    name: "Maple Pecan",
    image: "/images/maple-pecan.jpg",
    price: 15.99,
    flavor: "Maple",
    description: "Autumn-inspired caramel with pecans and maple",
    longDescription:
      "Bring the warmth of fall year-round with our Maple Pecan. We blend caramel with pure maple syrup and crunchy roasted pecans for a delightful texture contrast. Nutty, warm, and utterly comforting.",
    ingredients: ["Caramel", "Maple Syrup", "Pecans", "Cream", "Vanilla"],
  },
  {
    id: "vanilla-bean",
    name: "Vanilla Bean",
    image: "/images/vanilla-bean.jpg",
    price: 13.99,
    flavor: "Vanilla",
    description: "Caramel infused with real Madagascar vanilla beans",
    longDescription:
      "Our Vanilla Bean variety showcases the subtle complexity of real vanilla. We infuse our caramel with premium Madagascar vanilla beans, creating a refined and elegant pudding. Pure, aromatic perfection.",
    ingredients: ["Caramel", "Vanilla Beans (Madagascar)", "Cream", "Sugar"],
  },
]
