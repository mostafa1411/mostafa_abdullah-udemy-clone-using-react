import './Instructors.css';
import React from "react";  
import ShowMore from "../ShowMore";
import StarRateIcon from "@mui/icons-material/StarRate";
import WorkspacePremiumSharpIcon from '@mui/icons-material/WorkspacePremiumSharp';
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Instructors = ({ data }) => {
    const Instructor = ({ instructor }) => {
        return (
            <ShowMore>
                <div className="instructor-container">
                    <h3 className="instructor-name">{ instructor.display_name }</h3>
                    <p className="instructor-job-title">{ instructor.job_title }</p>
                    <div className="instructor-card">
                        <img className="instructor-img" src={ instructor.image_100x100 } alt="instructor img" />
                        <ul className="instructor-list">
                            <li className="instructor-item">
                                <StarRateIcon sx={{ fontSize: 17 }} />
                                <span>{`${instructor.rating} Instructor Rating`}</span>
                            </li>
                            <li className="instructor-item">
                                <WorkspacePremiumSharpIcon sx={{ fontSize: 17 }} />
                                <span>{`${instructor.reviews.toLocaleString()} Reviews`}</span>
                            </li>
                            <li className="instructor-item">
                                <PeopleAltIcon sx={{ fontSize: 17 }} />
                                <span>{`${instructor.students.toLocaleString()} Students`}</span>
                            </li>
                            <li className="instructor-item">
                                <PlayCircleIcon sx={{ fontSize: 17 }} />
                                <span>{`${instructor.courses} Courses`}</span>
                            </li>
                        </ul>
                    </div>
                    <p className="instructor-description">{instructor.description.slice(0, -10)}</p>
                </div>
            </ShowMore>
        );
    };

    return (
        <section className="course-instructors-section">
            <h2 className="course-section-header">Instructors</h2>
            {
                data.map((instructor, idx) => 
                    <Instructor key={ idx } instructor={ instructor } />
                )
            }
        </section>
    );
};

export default Instructors;
