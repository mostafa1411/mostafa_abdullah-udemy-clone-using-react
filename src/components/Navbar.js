import './Navbar.css';
import logo from '../assets/logo-udemy.svg';
import seachIcon from '../assets/search.svg';
import shoppingCartIcon from '../assets/shopping_cart.svg';
import languageIcon from '../assets/language.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="menu d-md-none">
                <i className="fa-solid fa-bars menu-icon"></i>
            </div>
            <div>
                <img className="logo" src={ logo } alt="udemy logo" />
            </div>
            <div className="d-none d-md-block">
                <a href="#categories">Categories</a>
            </div>
            <div className="form d-none d-md-block">
                <form action="" method="post" className="search-form">
                    <label htmlFor="search">
                        <button type="submit" className="search-btn"><img src={ seachIcon } alt="search icon" className="search-icon" /></button>
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