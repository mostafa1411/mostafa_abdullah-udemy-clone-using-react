import './Description.css';
import ShowMore from '../ShowMore';

const Description = ({ details }) => {
    return (
        <section className="course-description">
            <h2 className="course-section-header">Description</h2>
            <ShowMore>
                <p className="description-text">{ details.description }</p>
                <h2 className="course-section-header">Who this course is for:</h2>
                <p className="description-text">{ details.for_who }</p>
            </ShowMore>
        </section>
    );
};

export default Description;