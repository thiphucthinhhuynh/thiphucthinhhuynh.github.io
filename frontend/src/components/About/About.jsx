import './About.css';

const About = () => {
    return (
        <section id="about">
            <p>ABOUT  </p>
            <p className="full-name">Thi Phuc Thinh Huynh</p>

            <div className="about-container">
                <div className="profile-picture-container">
                    <img src="https://i.imghippo.com/files/0SstX1724131142.jpg" alt="Thi Huynh's profile picture" />
                </div>
                <div className="about-content">
                    <strong>Thi Huynh is a full stack web developer with a background in computer science, recently graduating from App Academy’s Full Stack Web Development BootCamp.
                    </strong>
                    <p>Combining a passion for tech with a problem-solving mindset, Thi creates efficient, innovative web applications using JavaScript, Python, React, Flask, and more.
                        A collaborative team player who thrives on continuous learning, Thi is dedicated to bringing creative solutions and exceptional value to future projects.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
