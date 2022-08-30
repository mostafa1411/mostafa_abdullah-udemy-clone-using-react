import './SliderButtons.css';

const SliderButtons = () => {
    return (
        <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="splide__arrow splide__arrow--next">
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
};

export default SliderButtons;