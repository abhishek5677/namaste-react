import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            console.log('trigger empty')
            state.items.pop()
        },
        emptyCart: (state) => {
            state.items.length = 0;
        }
    }
})

export const { addItem, removeItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;