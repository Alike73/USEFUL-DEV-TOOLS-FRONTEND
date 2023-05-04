import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../Redux/ToolsSlice";

const Filter = ({category}) => {

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    return (
        <button className={
            selectedCategory === category ? 'btn btn-success rounded-pill px-3 filterBtn' 
            : 'btn btn-secondary rounded-pill px-3 filterBtn'
            } 
            type="button" onClick={() => {dispatch(filterCategory(category))}}>
            {category}
        </button>
    )
}
export default Filter;