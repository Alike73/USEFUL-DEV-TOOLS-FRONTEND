import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";
import { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DevTools from '../DevTools/DevTools';
import Tutorials from '../Tutorials/Tutorials';
import Articles from '../Articles/Articles';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import logo from '../../Assets/logo.svg';
import Clock from '../Clock/Clock';

const Main = () => {

    const [isActiveIco, setActiveIco] = useState(false);
        const toggleIcon = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 820) {
            gsap.fromTo('.nav-link', {opacity: 0, x: '-80%'}, {stagger: .1, opacity: 1, x: '0%'})
            gsap.fromTo('.navIcon', {opacity: 0, x: '-100%'}, {delay: .2, stagger: .1, opacity: 1, x: '0%'})
            }
            
            setActiveIco(!isActiveIco);
        }

        gsap.registerPlugin(ScrollTrigger);
        useEffect(() => {
            gsap.to("progress", {
                value: 100,
                scrollTrigger: {
                    scrub: 0.5,
                },
            });
        }, []);

    return (
        <div>
            <ScrollToTop />
            <header className="App-header">
            <BrowserRouter>
                <BubblyContainer />
                <Routes>
                <Route
                path="/"
                element={
                    <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" aria-label="Fifth navbar example">
                <div className="container-fluid py-1 px-3">
                    <progress max="100" value="0"></progress>
                    <img className="navbar-brand" src={logo} alt="logo" width={80} />
                    <button 
                        onClick={toggleIcon} 
                        className={isActiveIco ? "hamburger hamburger--arrowalt is-active navbar-toggler" : "hamburger hamburger--arrowalt navbar-toggler"} 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#myNavbar" aria-controls="myNavbar" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item px-3 mx-5">
                        <span className="nav-link" aria-current="page" data-bs-toggle="collapse" data-bs-target="#myNavbar" onClick={toggleIcon}>
                            <BubblyLink to="/" colorStart="#301E67" colorEnd="#243763">
                                <i className="bi bi-tools me-3 navIcon"></i> 
                                DEV TOOLS
                            </BubblyLink>
                        </span>
                        </li>
                        <li className="nav-item px-3 mx-5">
                        <span className="nav-link" aria-current="page" data-bs-toggle="collapse" data-bs-target="#myNavbar" onClick={toggleIcon}>
                            <BubblyLink to="/tutorials" colorStart="#394867" colorEnd="#212A3E">
                                <i className="bi bi-person-video3 me-3 navIcon"></i> 
                                TUTORIALS
                            </BubblyLink>
                        </span>
                        </li>
                        <li className="nav-item px-3 mx-5">
                        <span className="nav-link" aria-current="page" data-bs-toggle="collapse" data-bs-target="#myNavbar" onClick={toggleIcon}>
                            <BubblyLink to="/articles" colorStart="#B8621B" colorEnd="#262A56">
                                <i className="bi bi-card-text me-3 navIcon"></i> 
                                ARTICLES
                            </BubblyLink>
                        </span>
                        </li>
                    </ul>
                    <Clock />
                    </div>
                </div>
                </nav>
                <Outlet />
                    </>
                    }
                    >
                    <Route index element={<DevTools />} />
                    <Route path="tutorials" element={<Tutorials />} />
                    <Route path="articles" element={<Articles />} />
                    <Route path="*" element={<>No Match</>} />
                    </Route>
                </Routes>
                </BrowserRouter>
            </header>
        </div>
    )
}
export default Main;