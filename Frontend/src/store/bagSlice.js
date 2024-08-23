import {createSlice} from '@reduxjs/toolkit';


const bagSlice= createSlice({
    name: 'bag',
    initialState: ["002"],
    reducers : {
        addTobag: (store, action)=>{
            store.push(action.payload)
            
        },
        removeFromBag: (store, action)=>{
            return store.filter((itemId)=> itemId !==  action.payload)
            
        },

    }
})


export  const bagActions=bagSlice.actions; 
export default bagSlice;