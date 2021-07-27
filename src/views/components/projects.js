/** 
* @author: Alexander Chi
* @description:
* @date: 20/Julio/2021
**/
import React, { useState } from 'react';   

export function Projects (props) { 
    const { projects } = props;
    const pathName = window.location.pathname; 
    const handleWindows = (url, index) => {
        window.open(url);
    }  

    return (<>    
        <section 
            id={props.id} 
            className="section__projects">
            <h2 className="project">{projects.title}</h2>
            <div className={"projects__container"}>
                {projects.main.map((item, index) => {
                    return (<div key={item.key} className={"projects__content"}>
                        <img className={"projects__img projects__" + item.key}></img>
                        <p className="services__p">{item.description}</p>
                        <h3 className="services__h3">{item.name}</h3>
                        <span className="services__span">{item.lastName}</span>
                    </div>)
                })}
            </div>
        </section>
    </>);
}

export default Projects;