import Header from './Home/Header';
import Courses from './Home/Courses';
import Categories from './Home/Categories';
import { useSearchParams } from "react-router-dom";

const HomePage = ({ data }) => {

    const [searchParam] = useSearchParams();

    return (
        <>
            <Header />
            <Courses data={ data } searchQuery={searchParam.get("query")} />
            <Categories />
        </>
    );
};

export default HomePage;