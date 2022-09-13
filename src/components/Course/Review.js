import './Review.css';
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import ThumbUpIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDownOutlined";

const Review = ({ review }) => {
    const [feedback, setFeedback] = useState(0);

    return (
        <div className="review-container">
            <p className="user-initials">{ review.user.initials }</p>
            <div>
                <h3 className="username">{ review.user.public_display_name }</h3>
                <div className="rating-time">
                    <Rating sx={{ fontSize: 20, color: "#e59819", paddingBottom: 0 }} defaultValue={ review.rating } precision={0.5} readOnly />
                    <p className="time-since">{ review.created_formatted_with_time_since } </p>
                </div>
                <p className="review-content">{ review.content }</p>
                <p className="review-feedback">
                    {feedback === 0 ? "Was this review helpful?"
                                    : "Thank you for your feedback"}
                </p>
                <div className="feedback-actions">
                    <button className={feedback === 1 ? "thump-btn-clicked" : "thump-btn"}
                            onClick={() => setFeedback(feedback === 1 ? 0 : 1)}>
                        <ThumbUpIcon sx={{ fontSize: 19 }} />
                    </button>
                    <button className={feedback === -1 ? "thump-btn-clicked" : "thump-btn"}
                            onClick={() => setFeedback(feedback === -1 ? 0 : -1)}>
                        <ThumbDownIcon sx={{ fontSize: 19 }} />
                    </button>
                    <p className="report">Report</p>
                </div>
            </div>
        </div>
    );
}

export default Review;
