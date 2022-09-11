import './Content.css';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import ExploreButton from './ExploreButton';
import Cards from './Cards';
import CircularProgress from "@mui/material/CircularProgress";

const Content = ({ data, searchQuery }) => {

    if (data) {
        const coursesData = data.courses[0];
        searchQuery = searchQuery ?? "";
        const filteredCourses = coursesData.items.filter((course) => course.title.toLowerCase().includes(searchQuery));

        return (
            <div className="content">
                <SectionTitle header={ coursesData.header } />
                <SectionDescription description={ coursesData.description } />
                <ExploreButton name={ coursesData.title } />
                <Cards courses={ filteredCourses } />
            </div>
        );
    }
    else {
        return (
            <div className="loading-spinner">
                <CircularProgress />
            </div>
        );
    }
};

export default Content;
