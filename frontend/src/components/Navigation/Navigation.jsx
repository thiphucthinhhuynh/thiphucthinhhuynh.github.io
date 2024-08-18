import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className="navigation">
            <p>Thi Phuc Thinh Huynh</p>

            <div className="navigation-menu">
                <div>ABOUT</div>
                <div>PROJECTS</div>
                <div>SKILLS</div>
                <div>CONTACT</div>
            </div>
        </div>
    );
}

export default Navigation;
