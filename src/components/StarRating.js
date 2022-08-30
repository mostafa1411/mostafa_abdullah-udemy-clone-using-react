import './StarRating.css';

const StarRating = (props) => {
    if (props.rating >= 0.8) {
        return <i className="fa-solid fa-star icon"></i>
    }
    else if (props.rating <= 0.2) {
        return <i className="fa-regular fa-star icon"></i>
    }
    return <i className="fa-solid fa-star-half-stroke icon"></i>
}

export default StarRating;