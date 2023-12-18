import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    initialState:[],
    name: 'CartSlice',
    reducers:{
        addToCart: (state,action)=>{
            const findProduct = state.find((item) => item.id === action.payload.id);
            if(findProduct){
                findProduct.quantity += 1;
            }else{
                const productClone = {...action.payload, quantity:1}
                state.push(productClone);
            }
        },
        removeFromCart: (state,action)=>{
            return state.filter(item => item.id !== action.payload.id);
        },
        clearCart: ()=>{
            return [];
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.find((item) => item.id === id);
      
            if (existingItem) {
              existingItem.quantity = quantity;
            }
    }}
})

export const {addToCart, removeFromCart, clearCart, updateQuantity} = CartSlice.actions;
export default CartSlice.reducer;