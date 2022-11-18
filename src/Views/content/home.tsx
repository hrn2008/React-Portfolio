import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import User from '../../Models/User';


function Home(props:User)
{
    useEffect(() => {
        document.title="Home";
    },[]);

    return(
        <div className="container">
            {/* Content */}
            <div className="content home">
                <h1>Welcome to our Site! {props.displayName}.</h1>
                <p id="bio">A junior web developer with more than two years of work experiences. I have been working with HTML, CSS,JavaScript, JQuery, SQL, and MySQL databases. I have a great knowledge of PHP, Bootstrap, and CMS such as WordPress, and Joomla. I am a self-starter, self-learner, and enthusiastic to tackle new programing strategies and software.<Link to={"/about"}>Read More...</Link></p>
                <h4 id="proj">Projects</h4>
                <p id="proj-p">You can see some examples of my work in <Link to={"/projects"}>Projects page</Link>. Most of them are designed and developed with WordPress CMS (include of HTML, CSS, JS), and some are examples of academic projects.</p>
                <h4 id="serv">Services</h4>
                <p id="serv-p">As a web designer and programmer, I can provide services and support them well. You can always contact me during the project to know about the progress of the project. For more details please take a look at my services on the <Link to={"/services"}>Service page</Link>.</p>
                <h4 id="cnct">Contact me</h4>
                <p id="cnct-p">To contact me, you can send your message through the form on the <Link to={"/contact"}>Contact page</Link> and I will respond as soon as possible.</p>
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

export default Home;
