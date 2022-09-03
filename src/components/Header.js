import './Header.css';
import headerBsckground from '../assets/header_background_small_screen.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-img d-block d-md-none">
                <img src={ headerBsckground } alt="header background" />
            </div>
            <div className="header-banner">
                <h1>New to Udemy? Lucky <span className="newline">you.</span></h1>
                <p>Courses start at E£169.99. Get your new-<br />student offer before it expires.</p>
            </div>
        </header>
    );
};

export default Header;