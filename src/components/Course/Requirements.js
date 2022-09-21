import './Requirements.css';
import CircleIcon from '@mui/icons-material/Circle';

const Requirements = ({ details }) => {
    return (
        <section className="course-requirements">
            <h2 className="course-section-header">Requirements</h2>
            <ul className="requirements-list">
            {
                details.Requirements.map((requirement, idx) => (
                    <li key={ idx } className="requirement-item">
                        <CircleIcon className="circle-icon" />
                        <p className="requirement-text">{ requirement }</p>
                    </li>
                ))
            }
            </ul>
        </section>
    );
};

export default Requirements;