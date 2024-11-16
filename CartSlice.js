import {createSlice} from "@reduxjs/toolkit"


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers: {
        add:(state,action) => {
            state.push(action.payload); // jo bhi input parameter set kiya hai use action.payload se access krskte h
        },
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;