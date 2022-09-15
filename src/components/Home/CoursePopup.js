import './CoursePopup.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';

const CoursePopup = ({ course }) => {
    const [love, setLove] = useState(false);
  
    const changeFormat = (date) => {
        const [year, month, ] = date.split("-");
        const months = ["January", "February", "March", "April", "May", "June", "July",
                        "August", "September", "October", "November", "December"];

        return `${months[parseInt(month) - 1]} ${year}`;
    };
  
    const Objectives = () => {
        return (
            course.objectives_summary.map((objective, idx) => {
                return (
                    <li className="learning-item" key={ idx }>
                        <CheckIcon className="checkIcon" sx={{ fontSize: 16 }} />
                        <span>{ objective }</span>
                    </li>
                );
            })
        );
    };
  
    return (
        <div className="popup-container">
            <Link className="popup-title" to={"course/" + course.id}>
                { course.title }
            </Link>
            
            <p className="last-updated">
                { course.bestseller_badge_content ? <span><span className="bestseller">Bestseller</span>{"    "}</span> : '' }
                Updated{" "}
                <span className="last-updated-date">{changeFormat(course.last_update_date)}</span>
            </p>
            <p className="popup-course-details">
                { `${course.content_info} · ${course.instructional_level} · Subtitles` }
            </p>
            <p className="popup-headline">{ course.headline }</p>
            <ul className="learning-items">
                <Objectives />
            </ul>
            <div className="buy-btns">
                <button className="add-to-cart-btn">Add to cart</button>
                <button onClick={() => setLove(!love)} className={"love-btn"}>
                    {love ? <FavoriteIcon sx={{ fontSize: 24, color: "#1c1d1f" }} /> : <FavoriteBorderIcon sx={{ fontSize: 24 }} />}
                </button>
            </div>
        </div>
    );
};

export default CoursePopup;