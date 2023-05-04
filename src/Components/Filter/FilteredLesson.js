import { useDispatch, useSelector } from "react-redux";
import { filterLessonCategory, getSelectedLessonCategory } from "../Redux/LessonsSlice";

const FilteredLesson = ({lesson}) => {

    const selectedLessonCategory = useSelector(getSelectedLessonCategory);
    const dispatch = useDispatch();

    return (
        <button className={
            selectedLessonCategory === lesson ? 'btn btn-success rounded-pill px-3 filterBtn' 
            : 'btn btn-secondary rounded-pill px-3 filterBtn'
            } 
            type="button" onClick={() => {dispatch(filterLessonCategory(lesson))}}>
            {lesson}
        </button>
    )
}
export default FilteredLesson;