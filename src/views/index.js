/** 
* @author: Alexander Chi
* @description:
* @date: 13/Julio/2021
**/
import React, { useState } from 'react';  

const options = [
    {
        key: "about",
        name: "About",
    },
    {
        key: "services",
        name: "Services",
    },
    {
        key: "projects",
        name: "Projects",
    },
    {
        key: "contact",
        name: "Contact",
    }, 
];

export function SunnySide (props) { 
    const pathName = window.location.pathname; 
    const handleWindows = (url, index) => {
        window.open(url);
    }  

    return (<>
        <section>
            <header 
                className="header"
                style={{backgroundImage: `url("./img/desktop/image-header.jpg")`}}> 
                <span className="logo">
                    Sunnyside
                </span>
                <div id="actions">
                    <ul className="options__list">
                        {options.map((item, index) => {
                            return (<li key={item.key}>
                                <a onClick={() => { }}>
                                    {item.name}
                                </a>
                            </li>)
                        })}
                    </ul> 
                    <div id="toggle">
                        <div className="toggle__md"></div>
                    </div>
                </div>
            </header> 
        </section>
            
    </>);
}

export default SunnySide;