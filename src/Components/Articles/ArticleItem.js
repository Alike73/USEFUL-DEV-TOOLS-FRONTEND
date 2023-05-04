
import {gsap} from "gsap";
import { useEffect, useRef } from "react";

const ArticleItem = ({image, title, text, toolLink, deleteTool, updatingInInput}) => {

    const cardRef = useRef();
    useEffect(() => {
        gsap.fromTo([cardRef.current], {scale: .8, opacity: 0, y: 100}, {duration: .5, scale: 1, opacity: 1, y: 0})
    })

    return (
        <div className="col p-3 articleContainer" ref={cardRef}>
            <article>
                <img src={image} alt="Article preview" />
                <div>
                    <h6 className="fs-5">
                        {title}
                    </h6>
                    <p>
                        {text}
                    </p>
                </div>
                <div className="articleBtnBox mb-3">
                    <span onClick = {updatingInInput}>
                        <i className="bi bi-pen me-2"></i>
                        Edit 
                    </span>
                    <span onClick={deleteTool}>
                        <i className="bi bi-trash3 me-2"></i>
                        Delete 
                    </span>
                    <a className="articleLink" href={toolLink} target="_blank" rel="noreferrer">
                        View article
                        <i className="bi bi-chevron-right ms-2"></i>
                    </a>
                </div>
            </article>
        </div>
    )
}
export default ArticleItem;