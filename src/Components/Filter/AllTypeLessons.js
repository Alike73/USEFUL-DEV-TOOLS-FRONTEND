import { useEffect, useState } from "react";
import FilteredLesson from "./FilteredLesson";

const AllTypeLessons = () => {

    const [typeLessons, setTypeLessons] = useState([
        'ALL TYPES', 
        'HTML & CSS', 
        'JAVASCRIPT', 
        'REACT & REDUX', 
        'NODE.JS',
        'GIT_HUB',
        'FIGMA',
        'USEFUL',
        ]);

        useEffect(() => {
            setTypeLessons(typeLessons)
        }, [typeLessons]);


    return (
        <div className='d-flex flex-wrap gap-2 justify-content-center mt-0 py-3'>
            {typeLessons.map((lesson, index) => <FilteredLesson lesson = {lesson} key={index} />)}
        </div>
    )
}
export default AllTypeLessons;