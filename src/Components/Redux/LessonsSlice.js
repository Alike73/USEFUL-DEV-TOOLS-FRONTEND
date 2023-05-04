
import { createSlice } from '@reduxjs/toolkit';

export const tutorialItemsSlice = createSlice({
    name: 'tutorialItems',

    initialState: {
        selectedLessonCategory: 'ALL TYPES',
    },
    reducers: {
        filterLessonCategory: (state, action) => {
            state.selectedLessonCategory = action.payload;
        }
    },
    
});

export const getSelectedLessonCategory = state => state.tutorialItems.selectedLessonCategory;
export const { filterLessonCategory } = tutorialItemsSlice.actions;
export default tutorialItemsSlice.reducer;
