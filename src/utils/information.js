/** 
* @author: Alexander Chi
* @description:
* @date: 20/Julio/2021
**/
import {About} from '../views/components/about';
import {Services} from '../views/components/services';
import {Projects} from '../views/components/projects';
import {Contact} from '../views/components/contact';

export const options = [
    {
        key: "about",
        name: "About",
        component: <About key="about" id="about"/>,
    },
    {
        key: "services",
        name: "Services",
        component: <Services key="services" id="services"/>,
    },
    {
        key: "projects",
        name: "Projects",
        component: <Projects key="projects" id="projects"/>,
    },
    {
        key: "contact",
        name: "Contact",
        component: <Contact key="contact" id="contact"/>,
    }, 
];

export default options;