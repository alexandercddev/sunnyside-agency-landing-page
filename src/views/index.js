/** 
* @author: Alexander Chi
* @description:
* @date: 13/Julio/2021
**/
import React, { useState } from 'react';  
import { options } from '../utils/information';

export function SunnySide (props) { 
    const pathName = window.location.pathname;
    const [active, setActive] = useState(''); 
    const handleClick = () => setActive( active === '' ? 'active' : ''); 

    return (<div className="main__div">    
        <header className="header" > 
            <div className="header__content">
                <span className="header__logo">
                </span>
                <div className="header__options">
                    <ul className="header__options__list">
                        {options.map((item, index) => {
                            return (<li key={item.key}>
                                <a href={'#' + item.key}>
                                    {item.name} 
                                </a>
                            </li>)
                        })}
                    </ul>  
                </div>
                <div className="header__toggle">
                    <div id="toggle" onClick={handleClick}>
                        <div className="header__toggle__md"></div>
                    </div>
                </div>
            </div>  
            <div className={"header__options__mobile " + active}>
                <div className="header__triagule__mobile"></div>
                <ul className="header__options__list__mobile">
                    {options.map((item, index) => {
                        return (<li key={'mobile__' + item.key}>
                            <a href={'#' + item.key} onClick={handleClick}>
                                {item.name} 
                            </a>
                        </li>)
                    })}
                </ul>  
            </div>
            <div className={"header__text " + active}>
                <h1>WE ARE CREATIVE</h1>
            </div>
            <div className={"header__arrow "+ active}>
                <div className="header__arrow__line"></div>
                <div className="header__arrow__triangule"></div>
            </div>  
        </header>
        {options.map((item, index) => {
            return item.component
        })}
        <div class="attribution">
            <span>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</span> 
            <span>Coded by <a href="#">Alexander Chi</a>.</span>
        </div>
    </div>);
}

export default SunnySide;