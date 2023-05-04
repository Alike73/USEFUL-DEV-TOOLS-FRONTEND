
import { createSlice } from '@reduxjs/toolkit';

export const toolItemsSlice = createSlice({
    name: 'toolItems',

    initialState: {
        selectedCategory: 'ALL TYPES',
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    },
    
});

export const getSelectedCategory = state => state.toolItems.selectedCategory;
export const { filterCategory } = toolItemsSlice.actions;
export default toolItemsSlice.reducer;