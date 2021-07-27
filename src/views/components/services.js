/** 
* @author: Alexander Chi
* @description:
* @date: 20/Julio/2021
**/
import React, { useState } from 'react';   

export function Services (props) { 
    const { services} = props;
    const pathName = window.location.pathname; 
    const handleWindows = (url, index) => {
        window.open(url);
    }  

    return (<>    
        <section
            id={props.id} 
            className="section__services">
            <div className={"services__content"}>
            {services.main.map((item, index) => {
                return (<div key={"servuices__img" + index} className={"services__img services__" + item.className }>
                    <img className={item.className}></img>
                    <div className="services__img_content">
                        <h2 className="services__sub__title">{item.subTitle}</h2>
                        <p className="services__p">{item.description}</p>
                    </div>
                </div>)
            })}
            </div>
        </section>
    </>);
}

export default Services;