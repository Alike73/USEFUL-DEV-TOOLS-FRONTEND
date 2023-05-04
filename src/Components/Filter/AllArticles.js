
import { useEffect, useState } from "react";
import FilteredArticle from "./FilteredArticle";

const AllArticles = () => {

    const [typeArticles, setTypeArticles] = useState([
        'ALL TYPES', 
        'HTML & CSS', 
        'JAVASCRIPT', 
        'REACT',
        'REDUX', 
        'NODE.JS',
        'GIT_HUB',
        'USEFUL',
        ]);

        useEffect(() => {
            setTypeArticles(typeArticles)
        }, [typeArticles]);

    return (
        <div className='d-flex flex-wrap gap-2 justify-content-center mt-0 py-3'>
            {typeArticles.map((article, index) => <FilteredArticle article = {article} key={index} />)}
        </div>
    )
}
export default AllArticles;