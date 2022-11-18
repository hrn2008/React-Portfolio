
/* Services page */
/*
REACT Portfolio Assignment
Hamidreza Naji
S#: 200503068
Course: Advance Client-side JavaScript - COMP2112
*/

import React,{useEffect} from 'react';

function Services()
{
    useEffect(() => {
        document.title="Services";
    },[]);

    
    return(
        <div className="container">
            <div className="content services">
                <h1>Services</h1>
                <p>My best effort is to deliver every project in the best quality and on time and I know that time and quality are the most important factors of every project. My services are divided into 1- Web Design & Development, 2-Digital Marketing, 3-Graphic Design, and 4- Search Engine Optimisation categories.</p>
                <hr/>
                <div className="row g-2">
                    <div className="col-md-6 col-sm-12" id="cat1">
                        <div className="p-3 border bg-light">WEB DESIGN & DEVELOPMENT</div>
                        <p>If you need a Shopping store website, Business Company website, Personal, etc., you can completely count on me. The design and development of your website will be with the most up-to-date technology and applicable on any platform. Support and training are free for up to 3 months.</p>
                    </div>
                    <div className="col-md-6 col-sm-12" id="cat2">
                        <div className="p-3 border bg-light">DIGITAL MARKETING</div>
                        <p>I provide in-depth solutions for every need. My planning always starts with in-depth keyword research, followed by cost-effective SEM and PPC strategies that capture leads, improve your reach, and maximize your campaign’s performance.</p>
                    </div>
                    <div className="col-md-6 col-sm-12" id="cat3">
                        <div className="p-3 border bg-light">GRAPHIC DESGIN</div>
                        <p>By mastering Photoshop and Illustrator, any idea you have in your mind can be designed. This includes logos, banners, advertisements and any other designs.</p>
                    </div>
                    <div className="col-md-6 col-sm-12" id="cat4">
                        <div className="p-3 border bg-light">Search Engine Optimization</div>
                        <p>It is the process used to optimize a website's technical configuration, content relevance and link popularity so its pages can become easily findable, more relevant and popular towards user search queries, and as a consequence, search engines rank them better.</p>
                    </div>
                </div>
            </div>
            {/* My Picture */}
            <div className="pic">
                <img src="../img/me.jpg" className="img-thumbnail" alt="my picture" />
            </div>
            {/* Contact Information */}
            <div className="contact">
                <h4>HRN WEB DESIGN</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="fa-solid fa-user"></i> HamidReza Naji</li>
                    <li className="list-group-item"><i className="fa-solid fa-code"></i> Web Developer</li>
                    <li className="list-group-item"><i className="fa-solid fa-phone"></i> +17057702750</li>
                    <li className="list-group-item"><i className="fa-solid fa-location-dot"></i> HRN2008@yahoo.com</li>
                    <li className="list-group-item"><i className="fa-solid fa-envelope-circle-check"></i> Barrie, Ontario, Canada</li>
                </ul>
            </div>
        </div>
    );
}

export default Services;


