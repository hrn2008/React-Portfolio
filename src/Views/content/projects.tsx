/* projects page */
/*
REACT Portfolio Assignment
Hamidreza Naji
S#: 200503068
Course: Advance Client-side JavaScript - COMP2112
*/

import React, { useEffect } from 'react';

function Projects()
{
    useEffect(() => {
        document.title="Projects";
    },[]);
    
    return(
        <div className="container">
            <div className="content projects">
            <h1>My Projects</h1>
            <p>On this page, you can see examples of my works which were done in Canada. Some of them are project-oriented. The projects that are with CMS are done with WordPress, and the rest are completely programmed in the front-end and back-end.</p>
            <hr/>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card" id="project1">
                  <a href="../img/kitkat-page.png" target="_blank">
                    <img src="../img/kitkat.jpg" className="card-img-top" alt="kitkat" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">KitKat</h5>
                    <p className="card-text" >This is one of the HTML5,CSS3 Projects that I designed in Georgian College</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" id="project2">
                  <a href="../img/tcco-page.png" target="_blank">
                    <img src="../img/tcco.jpg" className="card-img-top" alt="tcco"/>
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">TCCO</h5>
                    <p className="card-text">This is the website of TCCO company that I designed and developed more than 80%. I was one of their team member who work on creating pages, HTML, CSS ,and JS.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" id="project3">
                  <a href="../img/canadiantire-page.png" target="_blank">
                    <img src="../img/canadiantire.jpg" className="card-img-top" alt="canadian tire" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">Canadian Tire</h5>
                    <p className="card-text">This is also one of my projects in Georgian College</p>
                  </div>
                </div>
              </div>                
            </div>            
       </div> {/* content */}
        {/* My Picture */}
        <div className="pic">
                <img src='../img/me.jpg' className="img-thumbnail" alt='my portrait' />
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

export default Projects;
