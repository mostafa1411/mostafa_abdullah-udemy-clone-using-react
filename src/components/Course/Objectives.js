import './Objectives.css';
import CheckIcon from "@mui/icons-material/Check";

const Objectives = ({ course }) => {
    return (
        <section className="course-objectives">
            <h2 className="course-section-header">What you'll learn</h2>
            <ul className="learning-items">
            {
                course.objectives_summary.map((objective, idx) => {
                    return (
                        <li className="learning-item" key={ idx }>
                            <CheckIcon className="checkIcon" sx={{ fontSize: 16 }} />
                            <span>{ objective }</span>
                        </li>
                    );
                })
            }
            </ul>
        </section>
    );
};

export default Objectives;