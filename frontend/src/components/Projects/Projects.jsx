import './Projects.css';
import { BsGithub } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Projects = () => {
    return (
        <div className="project-section">
            <p>PROJECTS</p>

            <div className="project-container">
                <div id="nooknet">
                    <img src="https://i.imghippo.com/files/zNdTO1724134424.png" alt="Nooknet" />
                    <p className="name">Nooknet</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="button-container">
                        <button><BsGithub /> CODE</button>
                        <button><BsBoxArrowUpRight /> LIVE</button>
                    </div>
                </div>

                <div id="tumblr">
                    <img src="https://i.imghippo.com/files/9DMVW1724134432.png" alt="Tumblr-Project" />
                    <p className="name">Tumblr-Project</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="button-container">
                        <button><BsGithub /> CODE</button>
                        <button><BsBoxArrowUpRight /> LIVE</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;
