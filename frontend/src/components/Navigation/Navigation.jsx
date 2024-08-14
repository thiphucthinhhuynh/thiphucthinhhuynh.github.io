import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className="navigation">
            <div>
                <h2>Thi Phuc Thinh Huynh</h2>
            </div>

            <div>
                <div>ABOUT</div>
                <div>PROJECTS</div>
                <div>SKILLS</div>
                <div>CONTACT</div>
                <div>CONNECT ON LINKEDIN</div>
            </div>
        </div>
    );
}

export default Navigation;
