import './Navbar.css';
import logo from '../assets/logo-udemy.svg';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
                        <button type="submit" className="search-btn" onClick={handleSearchQuery}>
                            <SearchOutlinedIcon sx={{ marginLeft: 1, marginRight: 1, color: "#000" }} />
                        </button>
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
                <ShoppingCartOutlinedIcon  />
            </div>
            <div className=" btns d-none d-md-block">
                <button className="login-btn">Log in</button>
                <button className="signup-btn">Sign up</button>
                <button className="lang-btn"><LanguageOutlinedIcon sx={{ fontSize: 20 }} /></button>
            </div>
        </nav>
    );
};

export default Navbar;