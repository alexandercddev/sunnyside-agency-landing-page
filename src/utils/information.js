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
    ]
}

export const services = {
    main: [
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
}

export const projects = {
    title: 'Client testimonials',
    main: [
        {
            key: 'markenting__director',
            description: 'We put our trust in Sunnyside and they delivered, marking sure our needs were met and deadlines were always hit',
            name: 'Emily R.',
            lastName: 'Markenting Director'
        },
        {
            key: 'cheif__operating',
            description: 'Sunnyside´s enthusiasm with their keen interest in our brand´s success made it a satisfying and enjoyable experience.',
            name: 'Thomas S.',
            lastName: 'Cheif Operating Officer'
        },
        {
            key: 'busines__owner',
            description: 'Incredible end result! OPur sakes increased over 400% when we  worked with Sunnyside. Highly recommended!',
            name: 'Jennie F.',
            lastName: 'Busines Owner'
        }
    ]
}

export const contact = {
    image: [ 'milk', 'orange', 'cone', 'sugar'],
    page: 'sunnyside',
    section: [
        {
            key: 'about',
            name: 'About'
        },
        {
            key: 'services',
            name: 'Services'
        },
        {
            key: 'projects',
            name: 'Projects'
        },
    ],
    social:[
        {
            key: 'facebook', 
            url: '#',
        },
        {
            key: 'instagram', 
            url: '#',
        },
        {
            key: 'twitter', 
            url: '#',
        },
        {
            key: 'pinterest', 
            url: '#',
        },
    ],
}

export const options = [
    {
        key: "about",
        name: "About",
        component: <About key="about" id="about" about={about}/>, 
    },
    {
        key: "services",
        name: "Services",
        component: <Services key="services" id="services" services={services}/>,
    },
    {
        key: "projects",
        name: "Projects",
        component: <Projects key="projects" id="projects" projects={projects}/>,
    },
    {
        key: "contact",
        name: "Contact",
        component: <Contact key="contact" id="contact" contact={contact}/>,
    }, 
]; 

export default options;