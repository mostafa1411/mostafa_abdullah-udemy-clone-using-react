import './CourseCard.css';
import StarRating from '../StarRating';
import { SplideSlide } from '@splidejs/react-splide';
import CoursePopup from './CoursePopup';

const CourseCard = ({ course }) => {
    
    const handleClick = () => {
        window.open(`/course/${course.id}`, "_self");
    };

    const handleMouseOver = () => {
        document.querySelector(`#course-popup-${course.id}`).style.display = "block";
    };

    const handleMouseLeave = () => {
        document.querySelector(`#course-popup-${course.id}`).style.display = "none";
    };

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

    return (
        <div className="popup-controller">
            <SplideSlide className="course-card" onClick={handleClick} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
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
            </SplideSlide>
            <div id={`course-popup-${course.id}`} className="course-popup">
                <CoursePopup course={ course } />
            </div>
        </div>
    );
};

export default CourseCard;