import './HeaderNavbar.css';

const HeaderNavbar = () => {
    return (
        <nav className="sections-nav">
            <div className="links-wrapper">
                <div className="links-list">
                    <a className="nav-link" href="#overview">Overview</a>
                    <a className="nav-link" href="#curriculum">Curriculum</a>
                    <a className="nav-link" href="#instructors">Instructor</a>
                    <a className="nav-link" href="#reviews">Reviews</a>
                </div>
            </div>
        </nav>
    );
};

export default HeaderNavbar;