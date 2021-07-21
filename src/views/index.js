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
            <div id="header__toggle">
                <div className="header__toggle__md"></div>
            </div>
        </header>
        {options.map((item, index) => {
            return item.component
        })}
    </div>);
}

export default SunnySide;