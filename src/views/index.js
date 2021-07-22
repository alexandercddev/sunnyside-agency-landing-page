/** 
* @author: Alexander Chi
* @description:
* @date: 13/Julio/2021
**/
import React, { useState } from 'react';  
import { options } from '../utils/information';

export function SunnySide (props) { 
    const pathName = window.location.pathname;
    return (<div className="main__div">    
        <header className="header" > 
            <div className="header__content">
                <span className="header__logo">
                    Sunnyside
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
                    <div id="toggle">
                        <div className="header__toggle__md"></div>
                    </div>
                </div>
            </div> 
            <div className="header__text">
                <h1>WE ARE CREATIVE</h1>
            </div>
            <div className="header__arrow">
                <div className="header__arrow__line"></div>
                <div className="header__arrow__triangule"></div>
            </div>  
        </header>
        {options.map((item, index) => {
            return item.component
        })}
    </div>);
}

export default SunnySide;