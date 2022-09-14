import './Reviews.css';
import Review from "./Review";
import { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Reviews = ({ reviews }) => {
    const [rateFilter, setRateFilter] = useState(6);

    const ratingFilters = ["All ratings", "Five stars", "Four stars", "Three stars", "Two stars", "One star"];

    const handleReviewSearch = (e) => {
        e.preventDefault();
        let filterValue = e.target.value.toLowerCase() ?? "";
        // filteredReviews = reviews.results.filter((review) => review.content.toLowerCase().includes(filterValue));
    };

    const handleRatingSearch = (e) => {
        e.preventDefault();
        let filterValue = parseInt(e.target.value);
        setRateFilter(filterValue);
        console.log("rateFilter = ", rateFilter);
    };

    return (
        <section id="reviews" className="course-reviews-section">
            <h2 className="course-section-header">Reviews</h2>
            <form className="reviews-search-form">
                <div className="content-filter">
                    <input className="reviews-search-input" placeholder="Search reviews" />
                    <button className="search-btn-black" onClick={ handleReviewSearch }>
                        <SearchIcon sx={{ color: "#fff" }} />
                    </button>
                </div>
                <div className="rating-filter">
                    <select className="filter-value-select" name="filter-value" onChange={ handleRatingSearch }>
                    {
                        ratingFilters.map((rateValue, idx) => 
                            <option key={ idx } value={6 - idx}>{ rateValue }</option>)
                    }
                    </select>
                </div>
            </form>
            <div className="users-reviews-container">
            {
                (rateFilter === 6 ? reviews.results : reviews.results.filter((review) => Math.ceil(review.rating) === rateFilter)).map((review, idx) => <Review key={ idx } review={ review } />)
            }
            </div>
        </section>
    );
};

export default Reviews;