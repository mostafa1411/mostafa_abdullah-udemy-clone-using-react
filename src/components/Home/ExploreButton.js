import './ExploreButton.css';

const ExploreButton = ({ name }) => {
    return (
        <button className="explore-btn">Explore { name }</button>
    );
};

export default ExploreButton;