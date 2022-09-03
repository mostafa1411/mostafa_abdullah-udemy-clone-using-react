import './Footer.css';
import logo from '../assets/logo-udemy-inverted.svg';
import languageIcon from '../assets/language.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="control">
                <div className="links">
                    <p>Udemy Business</p>
                    <p>Teach on Udemy</p>
                    <p>Get the app</p>
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Help and Support</p>
                    <p>Affiliate</p>
                    <p>Investors</p>
                    <p>Terms</p>
                    <p>Privacy policy</p>
                    <p>Cookie settings</p>
                    <p>Sitemap</p>
                    <p>Accessibility statement</p>
                </div>
                <div className="lang-btn-container">
                    <button className="choose-lang">
                        <img className="lang-icon-img" src={ languageIcon } />
                        English
                    </button>
                </div>
            </div>
            <div className="inc">
                <div className="logo-container">
                    <img className="logo" src={ logo } fill="#fff" />
                </div>
                <div className="copy-right">
                    <p>© 2022 Udemy, Inc.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;