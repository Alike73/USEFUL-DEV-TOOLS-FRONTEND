
import { createSlice } from '@reduxjs/toolkit';

export const articlesSlice = createSlice({
    name: 'articleItems',

    initialState: {
        selectedArticleCategory: 'ALL TYPES',
    },
    reducers: {
        filterArticleCategory: (state, action) => {
            state.selectedArticleCategory = action.payload;
        }
    },
    
});

export const getSelectedArticleCategory = state => state.articleItems.selectedArticleCategory;
export const { filterArticleCategory } = articlesSlice.actions;
export default articlesSlice.reducer;