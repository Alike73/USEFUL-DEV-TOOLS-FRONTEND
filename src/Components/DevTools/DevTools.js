import './DevTools.css';
import computerIcon from '../../Assets/computer.svg';
import AllCategories from '../Filter/AllCategories';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../Redux/ToolsSlice';
import dataTools from '../data/dataTools';
import Footer from '../Footer/Footer';
import DevToolItem from './DevToolItem';

const DevTools = () => {

    const [tools, setTools] = useState([]);
    const selectedCategory = useSelector(getSelectedCategory);

    useEffect(() => {
        setTools(dataTools);
    }, [])

    return (
        <div className='devToolsPage'>
            <header className="px-4 pt-5 devTools-header">
                <div className="container col-xxl-8 px-4 pt-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-2">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={computerIcon} className="d-block mx-lg-auto img-fluid computerIcon" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-1 fw-bold text-white lh-1 mb-3 headerTitle">
                                USEFUL DEV TOOLS
                            </h1>
                            <p className="lead fs-3 headerText">
                                Collection of developers tools. All in one place!
                            </p>
                        </div>
                        <AllCategories />
                    </div>
                </div>
            </header>
            <div className="container mt-5 py-5">
                <h2 className="pb-2 border-bottom headerSubTitle fs-1">Your set of developer tools</h2>
                <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
                {tools
                    .filter((tool) => {
                    if(selectedCategory === 'ALL TYPES') return true;
                    return selectedCategory === tool.category;
                })
                .map((tool) => <DevToolItem tool = {tool} key={tool.id} />)}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default DevTools;