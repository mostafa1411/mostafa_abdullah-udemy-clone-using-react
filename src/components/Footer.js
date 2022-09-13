import './Footer.css';
import logo from '../assets/logo-udemy-inverted.svg';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useLocation, Link } from 'react-router-dom';

const Footer = () => {
    const UdemyBusiness = () => {
        return (
            <div className="udemy-business">
                <p>Top companies choose <span>Udemy Business</span> to build in-demand career skills.</p>
                <div className="partners">
                    <img className="company-logo" src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="company logo" />
                    <img className="company-logo" src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="company logo" />
                    <img className="company-logo" src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="company logo" />
                    <img className="company-logo" src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="company logo" />
                    <img className="company-logo" src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="company logo" />
                </div>
            </div>
        );
    };

    const location = useLocation();

    return (
        <footer className="footer">
            {location.pathname === "/" ? "" : <UdemyBusiness />}
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
                        <LanguageOutlinedIcon sx={{ fontSize: 20, marginRight: 0.5 }} />
                        English
                    </button>
                </div>
            </div>
            <div className="inc">
                <div className="logo-container">
                    <Link to="/">
                        <img className="logo" src={ logo } alt="udemy logo" />
                    </Link>
                </div>
                <div className="copy-right">
                    <p>© 2022 Udemy, Inc.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;