import { useEffect, useState } from "react";
import Filter from "./Filter";


const AllCategories = () => {

    const [categories, setCategories] = useState([
        'ALL TYPES', 
        'CSS GENERATORS', 
        'ICONS', 
        'JS LIBRARY', 
        'SVG',
        'IMAGES',
        'TEMPLATES',
        'COLORS',
        'LOADERS'
        ]);

        useEffect(() => {
            setCategories(categories)
        }, [categories]);


    return (
        <div className='d-flex flex-wrap gap-2 justify-content-center mt-0 py-3'>
            {categories.map((category, index) => <Filter category = {category} key={index} />)}
        </div>
    )
}
export default AllCategories;