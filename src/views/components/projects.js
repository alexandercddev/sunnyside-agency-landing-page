/** 
* @author: Alexander Chi
* @description:
* @date: 20/Julio/2021
**/
import React, { useState } from 'react';   

export function Projects (props) { 
    const pathName = window.location.pathname; 
    const handleWindows = (url, index) => {
        window.open(url);
    }  

    return (<>    
        <section id={props.id} className="section__projects">

        </section>
    </>);
}

export default Projects;