import './CourseCard.css';
import StarRating from '../StarRating';
import { SplideSlide } from '@splidejs/react-splide';

const CourseCard = (props) => {

    const handleClick = () => {
        window.open(`/course/${props.id}`, "_self");
    }

    const rateValues = [];

    for (let i = 1; i <= 5; i++) {
        if (props.rating >= i) {
            rateValues.push(1);
        }
        else if (props.rating <= i - 1) {
            rateValues.push(0);
        }
        else {
            rateValues.push(props.rating + 1 - i);
        }
    }

    return (
        <SplideSlide className="course-card" onClick={handleClick}>
            <div className="course-img">
                <img src={ props.image_240x135 } alt="python course" />
            </div>
            <div className="course-info">
                <div className="title">{ props.title }</div>
                <div className="creator">{ props.visible_instructors[0].display_name }</div>
                <div className="rating">
                    <span className="rate">{ props.rating.toFixed(1) }</span>
                    <span className="stars">
                        {
                            rateValues.map((rating, idx) => (
                                <StarRating key={idx} rating={rating} />
                            ))
                        }
                    </span>
                    <span className="reviews">({ props.num_reviews })</span>
                </div>
                <div className="price">E£{ props.price }</div>
                { props.bestseller_badge_content ? <div className="bestseller">Bestseller</div> : '' }
            </div>
        </SplideSlide>
    );
};

export default CourseCard;