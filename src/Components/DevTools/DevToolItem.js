
import {gsap} from "gsap";
import { useEffect, useRef } from "react";

const DevToolItem = ({tool}) => {

    const cardRef = useRef();
    useEffect(() => {
        gsap.fromTo([cardRef.current], {scale: .8, opacity: 0, y: 100}, {duration: .5, scale: 1, opacity: 1, y: 0})
    })

    return (
        <div className="col p-3 toolContainer" ref={cardRef}>
            <article>
                <img className="toolImg" src={tool.img} alt="Article preview" />
                <div>
                <h6 className="fs-5">{tool.title}</h6>
                <p className="mt-3">
                    {tool.text}
                </p>
                </div>
                <div className="toolBtnBox mb-3 d-flex justify-content-between ps-3">
                    <a className="toolLink" href={tool.link} target="_blank" rel="noreferrer">
                        Use the tool
                        <i id="toolIco" className="bi bi-chevron-right ms-2"></i>
                    </a>
                    <i className="bi bi-tools fs-5 me-3"></i>
                </div>
            </article>
        </div>
    )
}
export default DevToolItem;