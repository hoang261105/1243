const initialCarts: any = JSON.parse(localStorage.getItem("carts") || "[]");
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
// ];

// localStorage.setItem("carts", JSON.stringify(initialCarts));

const reducerCarts = (state = initialCarts, action: any) => {
  switch (action.type) {
    case "DELETE":
      return state;

    default:
      return state;
  }
};

export default reducerCarts;
