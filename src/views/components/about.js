/** 
* @author: Alexander Chi
* @description:
* @date: 20/Julio/2021
**/
import React, { useState } from 'react';   

export function About (props) {  
    const {about} = props;
    const pathName = window.location.pathname; 
    const handleWindows = (url, index) => {
        window.open(url);
    }  

    return (<>    
        <section 
            id={props.id}   
            className="section__about" >
                {about.map((item, index) => {
                    return (
                        <div className={"about__content about__" + item.className }>
                            <div className="about__text">
                                <h2 className="about__sub__title">{item.subTitle}</h2>
                                <p className="about__p">{item.description}</p>
                            </div>
                            <div className="about__img">
                                <img className={item.className}></img>
                            </div>
                        </div>
                    )
                })}
        </section>
    </>);
}

export default About;