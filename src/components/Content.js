import './Content.css';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import ExploreButton from './ExploreButton';
import Cards from './Cards';

const Content = ({ coursesData }) => {

    return (
        <div className="content">
            <SectionTitle header={ coursesData.header } />
            <SectionDescription description={ coursesData.description } />
            <ExploreButton name={ coursesData.title } />
            <Cards courses={ coursesData.items } />
        </div>
    );
};

export default Content;
