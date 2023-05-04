
import './Articles.css';
import AllArticles from '../Filter/AllArticles';
import ArticleItem from './ArticleItem';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { addTool, deleteTool, editTool, getAllTools } from './FetchTools';
import { getSelectedArticleCategory } from '../Redux/ArticlesSlice';
import Footer from '../Footer/Footer';
import articleBannerBg from '../../Assets/undraw_placeholders_re_pvr4.svg';

const Articles = () => {

    const [showWarning, setShowWarning] = useState(false);
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [toolLink, setToolLink] = useState('');
    const [toolType, setToolType] = useState('');
    const [editing, setEditing] = useState(false);
    const [toolId, setToolId] = useState('');
    const [tools, setTools] = useState([]);
    
    const selectedCategory = useSelector(getSelectedArticleCategory);
    const formSection = useRef(null);

    useEffect(() => {
        getAllTools(setTools)
    }, [])

    const updatingInInput = (_id, image, title, text, toolLink, toolType) => {
        setEditing(true);
        setImage(image)
        setTitle(title)
        setText(text)
        setToolLink(toolLink)
        setToolType(toolType)
        setToolId(_id)

        window.scrollTo({
            top: formSection.current.offsetTop,
            behavior: 'smooth',
        });
    }

    return (
        <div className='articlesPage'>
            <header className="px-4 pt-5 articles-header">
                <div className="container col-xxl-8 px-4 pt-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-2">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={articleBannerBg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-1 fw-bold text-white lh-1 mb-3 headerTitle">
                                EDITABLE DEV ARTICLES
                            </h1>
                            <p className="lead fs-3 headerText">
                                Collection of useful articles. All in one place!
                                You can add your own, and edit, if you want.
                            </p>
                            <div className='formContainer' ref={formSection}>
                                <input
                                autoComplete="off" 
                                type="text" 
                                className="form-control mb-3" 
                                id="floatingInput" 
                                placeholder="Put article's image source link" 
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                            
                                <input
                                autoComplete="off" 
                                type="text" 
                                className="form-control mb-3" 
                                id="floatingInput" 
                                placeholder="Type article title" 
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            
                                <input
                                autoComplete="off" 
                                type="text" 
                                className="form-control mb-3" 
                                id="floatingInput" 
                                placeholder="Type article's description" 
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            
                                <input
                                autoComplete="off" 
                                type="text" 
                                className="form-control mb-3" 
                                id="floatingInput" 
                                placeholder="Type articles's source link" 
                                    value={toolLink}
                                    onChange={(e) => setToolLink(e.target.value)}
                                />
                            
                                <input
                                autoComplete="off" 
                                type="text" 
                                className="form-control mb-4" 
                                id="floatingInput" 
                                placeholder="Type tool category" 
                                    value={toolType}
                                    onChange={(e) => setToolType(e.target.value)}
                                />
                            
                                <button
                                className="w-100 btn btn-lg btn-secondary py-2 fs-5 mb-5 addBtn" 
                                onClick={
                                    editing ? () => editTool(
                                        toolId, image, setImage, title, setTitle, 
                                        text, setText, toolLink, setToolLink, toolType, 
                                        setToolType, setEditing, setTools
                                    ) : () => {
                                        if (!image || !title || !text || !toolLink || !toolType) {
                                            setShowWarning(true);
                                            setTimeout(() => setShowWarning(false), 3000); // show warning for 3 seconds
                                        } else {
                                            setShowWarning(false);
                                            addTool(
                                                image, setImage, title, setTitle, 
                                                text, setText, toolLink, setToolLink, 
                                                toolType, setToolType, setTools
                                            );
                                        }
                                    }
                                } 
                                >
                                    {editing ? 'Add changes to yor article' : 'Add your article'}
                                </button>
                                {showWarning && (
                                    <div className="alert alert-danger mt-3 text-center lead" role="alert">
                                        Please fill out all the inputs first.
                                    </div>
                                )}
                            </div>
                        </div>
                        <AllArticles />
                    </div>
                </div>
            </header>
            
            <div className='container px-4 py-5'>
                <h2 className="pb-2 border-bottom headerSubTitle fs-1">Your set of articles</h2>
                <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
                {tools
                    .filter((tool) => {
                    if(selectedCategory === 'ALL TYPES') return true;
                    return selectedCategory === tool.toolType;
                    })
                    .map((tool) => <ArticleItem image = {tool.image} title = {tool.title} text = {tool.text} toolLink = {tool.toolLink} key={tool._id}
                        updatingInInput = {() => updatingInInput(tool._id, tool.image, tool.title, tool.text, tool.toolLink, tool.toolType )}
                        deleteTool={() => deleteTool(tool._id, setTools)}
                    />)}                
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Articles;