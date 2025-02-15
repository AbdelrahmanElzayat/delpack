import { createSlice } from "@reduxjs/toolkit";

const storedItems = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cartItems: [],
      //   totalAmount: 0,
      totalQuantity: 0,
    };
const initialState = {
  cartItems: storedItems.cartItems,
  //   totalAmount: storedItems.totalAmount,
  totalQuantity: storedItems.totalQuantity,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload.product;
      const color = action.payload.color;
      const qty = action.payload.qty;

      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id && item?.color === color
      );
      state.totalQuantity += qty;

      if (!existingItem) {
        state.cartItems.push({
          ...newItem,
          quantity: qty,
          color: color,
          //   totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity += qty;
        // existingItem.totalPrice = existingItem.price + newItem.price;
      }
      //   state.totalAmount = state.cartItems.reduce((acc, item) => {
      //     acc += Number(item.price.stringValue) * Number(item.quantity);
      //     return acc;
      //   }, 0);
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartItems: state.cartItems,
          //   totalAmount: state.totalAmount,
          totalQuantity: state.totalQuantity,
        })
      );
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      //   state.totalAmount = state.cartItems.reduce((acc, item) => {
      //     acc += Number(item.price.stringValue) * Number(item.quantity);
      //     return acc;
      //   }, 0);
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartItems: state.cartItems,
          //   totalAmount: state.totalAmount,
          totalQuantity: state.totalQuantity,
        })
      );
    },
    decreseItem: (state, action) => {
      const id = action.payload.id;
      const color = action.payload.color;
      const existingItem = state.cartItems.find(
        (item) => item.id === id && item?.color === color
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalQuantity--;
      }
      //   state.totalAmount = state.cartItems.reduce((acc, item) => {
      //     acc += Number(item.price.stringValue) * Number(item.quantity);
      //     return acc;
      //   }, 0);
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartItems: state.cartItems,
          //   totalAmount: state.totalAmount,
          totalQuantity: state.totalQuantity,
        })
      );
    },
    increaseItem: (state, action) => {
      const { id, color } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === id && item?.color === color
      );

      if (existingItem && existingItem.quantity < 99) {
        existingItem.quantity++;
        state.totalQuantity++;
      }
      //   state.totalAmount = state.cartItems.reduce((acc, item) => {
      //     acc += Number(item.price.stringValue) * Number(item.quantity);
      //     return acc;
      //   }, 0);
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartItems: state.cartItems,
          //   totalAmount: state.totalAmount,
          totalQuantity: state.totalQuantity,
        })
      );
    },
    changeColor: (state, action) => {
      const { id, oldColor, newColor } = action.payload;
      console.log(id, oldColor, newColor);

      const existingItem = state.cartItems.find(
        (item) => item.id === id && item.color === oldColor
      );
      if (existingItem) {
        existingItem.color = newColor;
      }
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartItems: state.cartItems,
          //   totalAmount: state.totalAmount,
          totalQuantity: state.totalQuantity,
        })
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartItems: [],
          totalQuantity: 0,
        })
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
