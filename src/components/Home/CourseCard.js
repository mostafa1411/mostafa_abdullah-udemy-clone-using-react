import './CourseCard.css';
import React, { useState } from 'react';
import StarRating from '../StarRating';
import { SplideSlide } from '@splidejs/react-splide';
import { OverlayTrigger, Popover } from 'react-bootstrap';

import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';

const CourseCard = ({ course }) => {
    const [love, setLove] = useState(false);

    const rateValues = [];

    for (let i = 1; i <= 5; i++) {
        if (course.rating >= i) {
            rateValues.push(1);
        }
        else if (course.rating <= i - 1) {
            rateValues.push(0);
        }
        else {
            rateValues.push(course.rating + 1 - i);
        }
    }

    const handleClick = () => {
        window.open(`/course/${course.id}`, "_self");
    };    

    const getPosition = () => {
        const card = document.querySelector(`#course-card-${course.id}`);
        if (card === null) {
            return "bottom";
        }
        
        let rightDistance = window.innerWidth - card.getBoundingClientRect().right;
        if (rightDistance > 350) {
            console.log(rightDistance);
            return "right";
        }

        let leftDistance = card.getBoundingClientRect().left;
        if (leftDistance > 350) {
            return "left";
        }

        return "bottom";
    };

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
        <OverlayTrigger
            trigger={["hover", "focus"]}
            placement={getPosition()}
            overlay={
                <Popover>
                    <div className="popup-container">
                        <Link className="popup-title" to={"course/" + course.id}>
                            { course.title }
                        </Link>

                        <p className="last-updated">
                            { course.bestseller_badge_content ? <span><span className="bestseller">Bestseller</span>{" "}</span> : '' }
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
                </Popover>
            }
        >
            {/* <SplideSlide className="course-card" onClick={handleClick}> */}
            <div id={`course-card-${course.id}`} className="course-card" onClick={handleClick}>
                <div className="course-img">
                    <img src={ course.image_240x135 } alt="python course" />
                </div>
                <div className="course-info">
                    <div className="title">{ course.title }</div>
                    <div className="creator">{ course.visible_instructors[0].display_name }</div>
                    <div className="rating">
                        <span className="rate">{ course.rating.toFixed(1) }</span>
                        <span className="stars">
                            {
                                rateValues.map((rating, idx) => (
                                    <StarRating key={idx} rating={rating} />
                                ))
                            }
                        </span>
                        <span className="reviews">({ course.num_reviews })</span>
                    </div>
                    <div className="price">E£{ course.price }</div>
                    { course.bestseller_badge_content ? <div className="bestseller">Bestseller</div> : '' }
                </div>
            </div>
            {/* </SplideSlide> */}
        </OverlayTrigger>        
    );
};

export default CourseCard;