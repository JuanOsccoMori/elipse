import React from 'react'
import avatar2 from "../../assets/img/Chica.svg";
import ellipse1 from "../../assets/img/Ellipse-1.svg";
import ellipse2 from "../../assets/img/Ellipse-2.svg";
import icon1 from "../../assets/icons/1.png";
import icon2 from "../../assets/icons/2.png";
import icon3 from "../../assets/icons/3.png";
import icon4 from "../../assets/icons/4.png";
import icon5 from "../../assets/icons/5.png";
import icon6 from "../../assets/icons/6.png";
import "./Content.css";

export default function Content() {
    return (
        <>
            <img src={ellipse1} className='position-absolute bottom-0 end-0 img-fluid element1' alt='elipse 1' />
            <img src={ellipse2} className='position-absolute bottom-0 end-0 img-fluid element2' alt='elipse 2' />
            <img src={avatar2} className='position-absolute bottom-0 end-0 img-fluid element3'  alt='avatar' />
            <ul className='content-navs-icons'>
                <i className='e-1' >
                    <img src={icon1} className='radius' alt='icon' />
                    <span className='tooltip'>Mis locales</span>
                </i>
                <i className='e-2' >
                    <img src={icon2} className='radius' alt='icon' />
                    <span className='tooltip'>Mis locales</span>
                </i>
                <i className='e-3' >
                    <img src={icon3} className='radius' alt='icon' />
                    <span className='tooltip'>Mis locales</span>
                </i>
                <i className='e-4' >
                    <img src={icon4} className='radius' alt='icon' />
                    <span className='tooltip'>Mis locales</span>
                </i>
                <i className='e-5' >
                    <img src={icon5} className='radius' alt='icon' />
                    <span className='tooltip'>Mis locales</span>
                </i>
                <i className='e-6'>
                    <img src={icon6} className='radius' alt='icon' />
                    <span className='tooltip'>Mis locales</span>
                </i>
            </ul>
        </>
    )
}
