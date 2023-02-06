import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
// let once = false;
const CartSlice = createSlice({
    name: "Cart",
    initialState: {
        cartItems: [],
        quantity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        amount: 0,
        once: 0,
        gift: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


    },
    reducers: {
        addProduct(state, action) {
            state.cartItems.push(action.payload);
        },
        incrementProduct(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    state.quantity[item.id]++;
                }
                return item;
            });
        },
        decrementProduct(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    if (state.quantity[item.id] > 1) state.quantity[item.id]--;
                }
                return item;
            })
        },
        removeItem(state, action) {
            toast.success("Item Deleted Successfully")
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            state.quantity[action.payload] = 1;
            if (state.gift[Number(action.payload)] === 4) {
                state.gift[Number(action.payload)] = state.gift[Number(action.payload)] - 4;
            }
            state.once = state.gift.reduce(function (x, y) {
                return x + y;
            }, 0);
        },
        addAmount(state, action) {
            let value = (Number(action.payload.price) + Number(state.amount));
            state.amount = value;
            state.amount = state.amount.toFixed(2);
        },
        subtractAmount(state, action) {

            let value = Number(action.payload.price);
            const check = (Number(state.amount) - value);
            if (state.quantity[Number(action.payload.id)] > 1) {
                if (check === 0 || check < 10) {
                    state.amount = 0;
                }
                else {
                    state.amount = Number(state.amount) - Number(action.payload.price);
                    state.amount = state.amount.toFixed(2);
                }
            }
        },
        deleteItems(state, action) {
            let qty = state.quantity[Number(action.payload.id)];
            let Price = Number(action.payload.price);
            let totalPrice = qty * Price;
            // console.log(totalPrice, state.amount, "1");
            totalPrice = totalPrice.toFixed(2);
            state.amount = Number(state.amount).toFixed(2);
            if ((state.amount - totalPrice) === 0 || (state.amount - totalPrice) < 10) {
                state.amount = 0;
                state.once = 0;
                for (let index = 0; index < state.quantity.length; index++) {
                    state.quantity[index] = 1;
                }
            }
            else {
                let value = Number(state.amount) - Number(totalPrice);
                // console.log(value, "2");
                state.amount = value;
                // console.log(state.amount, "3");
                state.amount = state.amount.toFixed(2);
                // console.log(state.amount, "4");
                state.amount = Number(state.amount) - Number(state.gift[Number(action.payload.id)]);
                state.once = state.gift.reduce(function (x, y) {
                    return x + y;
                }, 0);

            }

        },

        giftWrap(state, action) {
            if (state.gift[Number(action.payload.id)] === 0) {
                state.gift[Number(action.payload.id)] = state.gift[Number(action.payload.id)] + 4;
                state.amount = Number(state.amount) + Number(state.gift[Number(action.payload.id)]);
                state.once = state.gift.reduce(function (x, y) {
                    return x + y;
                }, 0);
            }
            else {
                state.gift[Number(action.payload.id)] = state.gift[Number(action.payload.id)] + 4;
                state.amount = Number(state.amount) + Number(state.gift[Number(action.payload.id)]);
                state.once = state.gift.reduce(function (x, y) {
                    return x + y;
                }, 0);
            }

        },
        nogiftWrap(state, action) {
            if (state.gift[Number(action.payload.id)] === 4) {
                state.amount = Number(state.amount) - Number(state.gift[Number(action.payload.id)]);
                state.gift[Number(action.payload.id)] = state.gift[Number(action.payload.id)] - 4;
                state.once = state.gift.reduce(function (x, y) {
                    return x + y;
                }, 0);
            }
            else {
                state.amount = Number(state.amount) - Number(state.gift[Number(action.payload.id)]);
                state.gift[Number(action.payload.id)] = state.gift[Number(action.payload.id)] - 4;
                state.once = state.gift.reduce(function (x, y) {
                    return x + y;
                }, 0);
            }
        }


    }
})
export const { addProduct, incrementProduct, decrementProduct, removeItem, addAmount, subtractAmount, deleteItems, giftWrap, nogiftWrap } = CartSlice.actions;
export default CartSlice.reducer;




