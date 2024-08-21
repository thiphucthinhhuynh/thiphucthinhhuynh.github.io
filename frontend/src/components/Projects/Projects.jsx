import './Projects.css';
import { BsGithub } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Projects = () => {
    return (
        <section id="projects">
            <p>PROJECTS</p>

            <div className="project-container">
                <div id="nooknet">
                    <img src="https://i.imghippo.com/files/zNdTO1724134424.png" alt="Nooknet" />
                    <p className="name">Nooknet</p>
                    <p className="description">Nooknet is an eCommerce website inspired by Nookazon for trading in-game items.
                        I built a comprehensive backend with <strong>Express</strong>, managing stores and items through secure <strong>APIs</strong> with authentication and validation.
                        Using <strong>Sequelize</strong>, I optimized data interactions and complex relationships in <strong>PostgreSQL</strong>, while the <strong>React</strong> frontend offers seamless navigation, item management, and responsive design using <strong>CSS</strong> grid and flexbox.
                    </p>
                    <div className="button-container">
                        <a href="https://github.com/thiphucthinhhuynh/nooknet" target="_blank" rel="noopener noreferrer">
                            <button><BsGithub />    CODE</button>
                        </a>
                        <a href="https://nooknet.onrender.com/" target="_blank" rel="noopener noreferrer">
                            <button><BsBoxArrowUpRight />   LIVE</button>
                        </a>
                    </div>
                </div>

                <div id="tumblr">
                    <img src="https://i.imghippo.com/files/9DMVW1724134432.png" alt="Tumblr-Project" />
                    <p className="name">Tumblr-Project</p>
                    <p className="description">Tumblr-Project is a collaborative effort to recreate Tumblr’s functionality.
                        I developed secure <strong>Flask</strong> routes for posts and comments, leveraging <strong>SQLAlchemy</strong> for database integrity and <strong>Redux</strong> for efficient state management.
                        Working with two teammates, I handled <strong>CRUD</strong> operations and utilized <strong>Git</strong> for smooth code integration.
                    </p>
                    <div className="button-container">
                        <a href="https://github.com/thiphucthinhhuynh/Tumblr-Project" target="_blank" rel="noopener noreferrer">
                            <button><BsGithub />    CODE</button>
                        </a>
                        <a href="https://tumblr-project.onrender.com/" target="_blank" rel="noopener noreferrer">
                            <button><BsBoxArrowUpRight />   LIVE</button>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
