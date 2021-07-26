/** 
* @author: Alexander Chi
* @description:
* @date: 20/Julio/2021
**/
import {About} from '../views/components/about';
import {Services} from '../views/components/services';
import {Projects} from '../views/components/projects';
import {Contact} from '../views/components/contact';

export const about = {
    main: [
        {
            className: "transform",
            subTitle: "Transform, your brand",
            description: "We are a full-services creative agency " +
                        "specializing in helping brands grow fast. " +
                        "Engage your clients through compelling visual " +
                        "that do most of the marketing for you. "
        },
        {
            className: "satnd__out",
            subTitle: "Stand out to the righjt audience",
            description: "Using a collaborative formula of " +
                        "designers reesarchers, photographers, " +
                        "videographers, and copywriters, we'll " +
                        "build and extend your brand in digital places.", 
        }
    ],
    footer: [
        {
            className: "graphic",
            subTitle: "Graphic Design",
            description: "Great design makes you memorable. We deliver atwork that underscore your brand message and potencial client´ attention"
        },
        {
            className: "photography",
            subTitle: "Photography",
            description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.", 
        }
    ]
};

export const options = [
    {
        key: "about",
        name: "About",
        component: <About key="about" id="about" about={about}/>, 
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