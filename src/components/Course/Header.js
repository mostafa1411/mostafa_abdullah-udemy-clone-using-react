import './Header.css';
import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Rating from "@mui/material/Rating";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import LanguageIcon from "@mui/icons-material/Language";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const Header = ({ course }) => {
    const Instructors = () => {
        return course.visible_instructors.map((instructor, idx) => {
            return (
                <span key={ idx }>
                    <a href={"#instructor-" + (idx + 1)} className="header-instructor-name">
                        { instructor.display_name }
                    </a>
                    { idx === course.visible_instructors.length - 1 ? "" : ", " }
                </span>
            );
        });
    };

    return (
        <header className="course-header-section">
            <div className="header-wrapper">
                <div className="header-container">
                    <p className="path">
                        Development<KeyboardArrowRightIcon sx={{ fontSize: 16, color: "#fff", marginLeft: 0.6, marginRight: 0.6 }} />
                        Programming Languages<KeyboardArrowRightIcon sx={{ fontSize: 16, color: "#fff", marginLeft: 0.6, marginRight: 0.6 }} />
                        Python
                    </p>
                    <div className="video-container">
                        <img className="course-header-img" src={ course.image_240x135 } alt="course cover" />
                    </div>
                    <h1 className="header-course-title">{ course.title }</h1>
                    <p className="header-course-headline">{ course.headline }</p>
                    <div className="header-rating-container">
                        <p className="header-rating-value">{ course.avg_rating.toFixed(1) }</p>
                        <Rating sx={{ fontSize: 15, color: "#f3cabc", marginBottom: 1.7 }} defaultValue={ course.avg_rating } precision={0.5} readOnly />
                        <a href="#rating-feedback" className="header-reviews-count">
                            <p>{`(${course.num_reviews.toLocaleString()} ratings)`}</p>
                        </a>
                        <p className="header-students-count">{` ${course.num_subscribers.toLocaleString()} students`}</p>
                    </div>
                    <p className="header-instructors">
                        { "Created by " }
                        <Instructors />
                    </p>
                    <div className="header-course-lang">
                        <div>
                            <NewReleasesIcon sx={{ fontSize: 16 }} />
                            <p>{ `Last update ${course.last_update_date}` }</p>
                        </div>
                        <div>
                            <LanguageIcon sx={{ fontSize: 16 }} />
                            <p>{ course.locale.simple_english_title }</p>
                        </div>
                        <div>
                            <ClosedCaptionIcon sx={{ fontSize: 19 }} />
                            <p>{ course.caption_languages[0] }</p>
                        </div>
                    </div>
                    <div className="header-small-screen">
                        <p className="price-container">
                            <span className="current-price">{"E£" + course.price}</span>
                            <span className="old-price">{"E£" + course.old_price}</span>
                            <span className="offer">
                                {`${Math.ceil(100 * (course.old_price - course.price) / course.old_price)}% off`}
                            </span>
                        </p>
                        <p className="days-left">
                            <AccessAlarmIcon sx={{ fontSize: 16, color: "#fcaead" }} />
                            <span className="one-day">1 day</span> left at this price!
                        </p>
                        <button className="add-to-cart-btn">Add to cart</button>
                        <p className="guarantee">30-Day Money-Back Guarantee</p>
                        <p className="access">Full Lifetime Access</p>
                        <div className="options">
                            <p>Share</p>
                            <p>Gift this course</p>
                            <p>Apply Coupon</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
