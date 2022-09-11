import './Navbar.css';
import logo from '../assets/logo-udemy.svg';
import searchIcon from '../assets/search.svg';
import shoppingCartIcon from '../assets/shopping_cart.svg';
import languageIcon from '../assets/language.svg';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleSearchQuery = (e) => {
        e.preventDefault();
        let currentValue = document.querySelector("#search").value;
        navigate({pathname: "/", search: `?query=${currentValue}`});
    };

    return (
        <nav className="navbar">
            <div className="menu d-md-none">
                <i className="fa-solid fa-bars menu-icon"></i>
            </div>
            <Link to="/">
                <img className="logo" src={ logo } alt="udemy logo" />
            </Link>
            <div className="d-none d-md-block">
                <a href="#categories">Categories</a>
            </div>
            <div className="form d-none d-md-block">
                <form action="" method="get" className="search-form">
                    <label htmlFor="search">
                        <button type="submit" className="search-btn" onClick={handleSearchQuery}><img src={ searchIcon } alt="search icon" className="search-icon" /></button>
                        <input id="search" type="text" placeholder="Search for anything" />
                    </label>
                </form>
            </div>
            <div className="d-none d-xl-block">
                <a href="#business">Udemy Business</a>
            </div>
            <div className="d-none d-lg-block">
                <a href="#teach">Teach on Udemy</a>
            </div>
            <div className="shopping d-none d-sm-block">
                <a href="#shopping"><img className="shopping-img" src={ shoppingCartIcon } alt="shopping cart icon" /></a>
            </div>
            <div className=" btns d-none d-md-block">
                <button className="login-btn">Log in</button>
                <button className="signup-btn">Sign up</button>
                <button className="lang-btn"><img className="lang-img" src={ languageIcon } alt="language icon" /></button>
            </div>
        </nav>
    );
};

export default Navbar;