
import './Tutorials.css';
import tutorialBannerBg from '../../Assets/tutorialBannerBg.svg';
import AllTypeLessons from '../Filter/AllTypeLessons';
import { useEffect, useState } from 'react';
import dataTutorials from '../data/dataTutorials';
import { useSelector } from 'react-redux';
import { getSelectedLessonCategory } from '../Redux/LessonsSlice';
import TutorialItem from './TutorialItem';
import Footer from '../Footer/Footer';

const Tutorials = () => {

    const [tutorials, setTutorials] =useState([]);
    const selectedLessonCategory = useSelector(getSelectedLessonCategory);

    useEffect(() => {
        setTutorials(dataTutorials);
    }, [])

    return (
        <div className='tutorialsPage'>
            <header className="px-4 pt-5 devTools-header">
                <div className="container col-xxl-8 px-4 pt-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-2">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={tutorialBannerBg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-1 fw-bold text-white lh-1 mb-3 headerTitle">
                                VIDEO TUTORIALS
                            </h1>
                            <p className="lead fs-3 headerText">
                                Collection of video tutorials. All in one place!
                            </p>
                        </div>
                        <AllTypeLessons />
                    </div>
                </div>
            </header>
            <div className="container mt-5 pb-5">
                <h2 className="pb-2 border-bottom headerSubTitle fs-1">Your set of video-tutorials</h2>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 px-4 g-4'>
                {tutorials
                    .filter((tutorial) => {
                    if(selectedLessonCategory === 'ALL TYPES') return true;
                    return selectedLessonCategory === tutorial.lessonCategory;
                })
                .map((tutorial) => <TutorialItem tutorial = {tutorial} key={tutorial.id} />)}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Tutorials;