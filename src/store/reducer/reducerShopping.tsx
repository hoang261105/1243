const initialShopping: any = JSON.parse(
  localStorage.getItem("products") || "[]"
);

// [
//   {
//     id: 1,
//     name: "Pizza",
//     img: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/pizza.jpg?raw=true",
//     price: 30,
//     quantity: 11,
//     describe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
//   },
//   {
//     id: 2,
//     name: "Hamburger",
//     img: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/Hamburger.jpg?raw=true",
//     price: 15,
//     quantity: 20,
//     describe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
//   },
//   {
//     id: 3,
//     name: "Bread",
//     img: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/bread.jpg?raw=true",
//     price: 20,
//     quantity: 24,
//     describe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
//   },
//   {
//     id: 4,
//     name: "Cake",
//     img: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/Cake.jpg?raw=true",
//     price: 10,
//     quantity: 10,
//     describe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
//   },
// ];

// localStorage.setItem("products", JSON.stringify(initialShopping));

const reducerShopping = (state = initialShopping, action: any) => {
  switch (action.type) {
    case "ADDTOCART":
      return state;

    default:
      return state;
  }
};

export default reducerShopping;
