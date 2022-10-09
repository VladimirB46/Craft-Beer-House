import { createSlice } from "@reduxjs/toolkit";

const cartStorageKey = 'cartItems';

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems: (state, action) => {
            state.cartItems = action.payload;
            localStorage.setItem(cartStorageKey, JSON.stringify(state.cartItems));
        },
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            if (itemIndex < 0) {
                const newItem = { ...action.payload, price: 1.5, cartQuantity: 1 };
                state.cartItems = [ ...state.cartItems, newItem];
            } else {
                state.cartItems[itemIndex].cartQuantity += 1;
            }
            localStorage.setItem(cartStorageKey, JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action) => {
            const oldItems = [...state.cartItems];
            const newItems = oldItems.filter((item) => {
                return item.id !== action.payload.id
            })

            state.cartItems = newItems;
            localStorage.setItem(cartStorageKey, JSON.stringify(state.cartItems));
        },
        decrementInCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex < 0) return;
            
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            } else {
                const oldItems = [...state.cartItems];
                const newItems = oldItems.filter((item) => {
                    return item.id !== action.payload.id
                })
                state.cartItems = newItems;
            }
            localStorage.setItem(cartStorageKey, JSON.stringify(state.cartItems));
        },
        incrementInCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex < 0) return;
            
            state.cartItems[itemIndex].cartQuantity += 1;
            localStorage.setItem(cartStorageKey, JSON.stringify(state.cartItems));
        },
    },
});

export const getCartItems = (state) => state.cart.cartItems;
export const getCartTotalPrice = (state) => 
    state.cart.cartItems.reduce(
        (total, item) => total + item.price * item.cartQuantity,
        0
    );

export const { setCartItems, addToCart, removeFromCart, decrementInCart, incrementInCart } = cartSlice.actions;

export { cartStorageKey };

export default cartSlice.reducer;