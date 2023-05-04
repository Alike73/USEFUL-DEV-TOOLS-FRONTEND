import './Footer.css';
import { useEffect, useState } from "react";
import myDoggy from '../../Assets/myDoggy.svg';

const Footer = () => {

    const [year, setYear] = useState('');
    useEffect(() => {
        setYear(new Date().getFullYear().toString());
    }, [])


    return (
        <div className="w-100 py-5 d-flex justify-content-center align-items-center footer">
            <small>
                <i className="bi bi-c-circle me-2"></i>
                {year}. Created with 
                <i className="bi bi-heart-fill mx-2"></i> 
                    by Developer Alec
                    <img className='myDoggy' src={myDoggy} alt="myDoggy" />
            </small>
        </div>
    )
}
export default Footer;