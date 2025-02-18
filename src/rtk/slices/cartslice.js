// import { createSlice } from "@reduxjs/toolkit";

// const storedItems = localStorage.getItem("cart")
//   ? JSON.parse(localStorage.getItem("cart"))
//   : {
//       cartItems: [],
//       totalQuantity: 0,
//       //   totalAmount: 0,
//     };
// const initialState = {
//   cartItems: storedItems.cartItems,
//   totalQuantity: storedItems.totalQuantity,
//   //   totalAmount: storedItems.totalAmount,
// };
// const cartSlice = createSlice({
//   name: "cartSlice",
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       const newItem = action.payload.product;
//       const color = action.payload.color;
//       const qty = action.payload.qty;

//       const existingItem = state.cartItems.find(
//         (item) => item.id === newItem.id && item?.color === color
//       );
//       state.totalQuantity += qty;

//       if (!existingItem) {
//         state.cartItems.push({
//           ...newItem,
//           quantity: qty,
//           color: color,
//           //   totalPrice: newItem.price,
//         });
//       } else {
//         existingItem.quantity += qty;
//         // existingItem.totalPrice = existingItem.price + newItem.price;
//       }
//       //   state.totalAmount = state.cartItems.reduce((acc, item) => {
//       //     acc += Number(item.price.stringValue) * Number(item.quantity);
//       //     return acc;
//       //   }, 0);
//       localStorage.setItem(
//         "cart",
//         JSON.stringify({
//           cartItems: state.cartItems,
//           //   totalAmount: state.totalAmount,
//           totalQuantity: state.totalQuantity,
//         })
//       );
//     },

//     deleteItem: (state, action) => {
//       const { id, color } = action.payload;
//       const existingItem = state.cartItems.find(
//         (item) => item.id === id && item.color === color
//       );

//       if (existingItem) {
//         state.cartItems = state.cartItems.filter(
//           (item) => !(item.id === id && item.color === color) // تصحيح الفلترة
//         );
//         state.totalQuantity -= existingItem.quantity;
//       }
//       //   state.totalAmount = state.cartItems.reduce((acc, item) => {
//       //     acc += Number(item.price.stringValue) * Number(item.quantity);
//       //     return acc;
//       //   }, 0);
//       localStorage.setItem(
//         "cart",
//         JSON.stringify({
//           cartItems: state.cartItems,
//           //   totalAmount: state.totalAmount,
//           totalQuantity: state.totalQuantity,
//         })
//       );
//     },
//     decreseItem: (state, action) => {
//       const id = action.payload.id;
//       const color = action.payload.color;
//       const existingItem = state.cartItems.find(
//         (item) => item.id === id && item?.color === color
//       );

//       if (existingItem && existingItem.quantity > 1) {
//         existingItem.quantity--;
//         state.totalQuantity--;
//       }
//       //   state.totalAmount = state.cartItems.reduce((acc, item) => {
//       //     acc += Number(item.price.stringValue) * Number(item.quantity);
//       //     return acc;
//       //   }, 0);
//       localStorage.setItem(
//         "cart",
//         JSON.stringify({
//           cartItems: state.cartItems,
//           //   totalAmount: state.totalAmount,
//           totalQuantity: state.totalQuantity,
//         })
//       );
//     },
//     increaseItem: (state, action) => {
//       const { id, color } = action.payload;
//       const existingItem = state.cartItems.find(
//         (item) => item.id === id && item?.color === color
//       );

//       if (existingItem && existingItem.quantity < 99) {
//         existingItem.quantity++;
//         state.totalQuantity++;
//       }
//       //   state.totalAmount = state.cartItems.reduce((acc, item) => {
//       //     acc += Number(item.price.stringValue) * Number(item.quantity);
//       //     return acc;
//       //   }, 0);
//       localStorage.setItem(
//         "cart",
//         JSON.stringify({
//           cartItems: state.cartItems,
//           //   totalAmount: state.totalAmount,
//           totalQuantity: state.totalQuantity,
//         })
//       );
//     },
//     changeColor: (state, action) => {
//       const { id, oldColor, newColor } = action.payload;
//       const existingItem = state.cartItems.find(
//         (item) => item.id === id && item.color === oldColor
//       );
//       if (existingItem) {
//         existingItem.color = newColor;
//       }
//       localStorage.setItem(
//         "cart",
//         JSON.stringify({
//           cartItems: state.cartItems,
//           //   totalAmount: state.totalAmount,
//           totalQuantity: state.totalQuantity,
//         })
//       );
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//       state.totalQuantity = 0;
//       localStorage.setItem(
//         "cart",
//         JSON.stringify({
//           cartItems: [],
//           totalQuantity: 0,
//         })
//       );
//     },
//   },
// });

// export const cartActions = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const getStoredCart = () => {
  if (typeof window !== "undefined") {
    try {
      const cart = localStorage.getItem("cart");
      return cart ? JSON.parse(cart) : { cartItems: [], totalQuantity: 0 };
    } catch (error) {
      console.error("Error parsing cart data:", error);
      localStorage.removeItem("cart"); // إزالة البيانات الفاسدة
    }
  }
  return { cartItems: [], totalQuantity: 0 };
};

const initialState = getStoredCart();

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { product, color, qty } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id && item.color === color
      );

      if (existingItem) {
        existingItem.quantity += qty;
      } else {
        state.cartItems.push({ ...product, quantity: qty, color });
      }
      state.totalQuantity += qty;
    },
    changeColor: (state, action) => {
      const { id, oldColor, newColor } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === id && item.color === oldColor
      );
      if (existingItem) {
        existingItem.color = newColor;
      }
    },
    deleteItem: (state, action) => {
      const { id, color } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== id || item.color !== color
      );
      state.totalQuantity = state.cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    },
    decreaseItem: (state, action) => {
      const { id, color } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === id && item.color === color
      );

      if (existingItem) {
        existingItem.quantity--;
        state.totalQuantity--;
        if (existingItem.quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== id || item.color !== color
          );
        }
      }
    },
    increaseItem: (state, action) => {
      const { id, color } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === id && item.color === color
      );

      if (existingItem && existingItem.quantity < 99) {
        existingItem.quantity++;
        state.totalQuantity++;
      }
    },
    rehydrateState: (state) => {
      if (typeof window !== "undefined") {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
          return JSON.parse(storedCart);
        }
      }
      return state;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
