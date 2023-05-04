import { useDispatch, useSelector } from "react-redux";
import { filterArticleCategory, getSelectedArticleCategory } from "../Redux/ArticlesSlice";


const FilteredArticle = ({article}) => {

    const selectedArticleCategory = useSelector(getSelectedArticleCategory);
    const dispatch = useDispatch();


    return (
        <button className={
            selectedArticleCategory === article ? 'btn btn-success rounded-pill px-3 filterBtn' 
            : 'btn btn-secondary rounded-pill px-3 filterBtn'
            } 
            type="button" onClick={() => {dispatch(filterArticleCategory(article))}}>
            {article}
        </button>
    )
}
export default FilteredArticle;