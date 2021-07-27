/** 
* @author: Alexander Chi
* @description:
* @date: 20/Julio/2021
**/
import React, { useState } from 'react';   

export function Contact (props) { 
    const { contact } = props;
    const pathName = window.location.pathname; 
    const handleWindows = (url, index) => {
        window.open(url);
    }  

    return (<>    
        <section 
        id={props.id} 
        className="section__contact">
            <div className="contact__imgs">
                {contact.image.map((value, index) => {
                    return (<div key={value} className={"contact__content"}>
                        <img className={"contact__img contact__" + value}></img>
                    </div>)
                })}
            </div>
            <div className="contact__footer"> 
                <h3>{contact.page}</h3>
                <ul className="contact__options__list">
                    {contact.section.map((item, index) => {
                        return (<li key={item.key}>
                            <a href={'#' + item.key}>
                                {item.name} 
                            </a>
                        </li>)
                    })}
                </ul>  
                <ul className="contact__social__list">
                    {contact.social.map((item, index) => {
                        return (<li key={item.key}>
                            <a>
                                <img className={item.key}></img>
                            </a>
                        </li>)
                    })}
                </ul>  
            </div>
        </section>
    </>);
}

export default Contact;