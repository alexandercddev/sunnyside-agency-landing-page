/** 
* @author: Alexander Chi
* @description:
* @date: 13/Julio/2021
**/
import React, { useState } from 'react';  


export function SunnySide (props) { 
    const pathName = window.location.pathname;  
    const handleWindows = (url, index) => {
        window.open(url);
    }  

    return (
        <>
             Sunnyside agency landing page
        </>
    );
}

export default SunnySide;