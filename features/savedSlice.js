import { createSlice } from "@reduxjs/toolkit";

const savedStorageKey = 'savedItems';

const initialState = {
    savedItems: [],
}

const savedSlice = createSlice({
    name: 'saved',
    initialState,
    reducers: {
        setSavedItems: (state, action) => {
            state.savedItems = action.payload;
            localStorage.setItem(savedStorageKey, JSON.stringify(state.savedItems));
        },
        addToSaved: (state, action) => {
            const itemIndex = state.savedItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) return;

            state.savedItems = [...state.savedItems, { ...action.payload, notes: ''}];
            localStorage.setItem(savedStorageKey, JSON.stringify(state.savedItems));
        },
        removeFromSaved: (state, action) => {
            const oldItems = [...state.savedItems];
            const newItems = oldItems.filter((item) => {
                return item.id !== action.payload.id
            });

            state.savedItems = newItems;
            localStorage.setItem(savedStorageKey, JSON.stringify(state.savedItems));
        },
        editNotes: (state, action) => {
            const itemIndex = state.savedItems.findIndex(item => item.id === action.payload.item.id);
            if (itemIndex < 0) return;

            state.savedItems[itemIndex].notes = action.payload.note;
            localStorage.setItem(savedStorageKey, JSON.stringify(state.savedItems));
        }
    }
})

export const getSavedItems = state => state.saved.savedItems;

export const { setSavedItems, addToSaved, removeFromSaved, editNotes } = savedSlice.actions;

export { savedStorageKey }

export default savedSlice.reducer;