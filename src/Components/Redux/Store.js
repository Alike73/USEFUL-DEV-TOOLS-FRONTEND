
import { configureStore } from '@reduxjs/toolkit'

import toolItems from './ToolsSlice';
import tutorialItems from './LessonsSlice';
import articleItems from './ArticlesSlice';

export default configureStore({
    reducer: {
        toolItems: toolItems,
        tutorialItems: tutorialItems,
        articleItems: articleItems
    }
})