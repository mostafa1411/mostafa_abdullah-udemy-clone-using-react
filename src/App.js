import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Courses from './components/Courses';
import Categories from './components/Categories';
import Footer from './components/Footer';

import CourseHeader from './pages/Course/CourseHeader';
import CourseObjectives from './pages/Course/CourseObjectives';
import CourseContent from './pages/Course/CourseContent';
import CourseRequirements from './pages/Course/CourseRequirements';
import CourseDescription from './pages/Course/CourseDescription';
import CourseInstructors from './pages/Course/CourseInstructors';
import CourseStudentFeedback from './pages/Course/CourseStudentFeedback';
import CourseReviews from './pages/Course/CourseReviews';
import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
  
      const fetchData = async () => {
          try {
              const response = await fetch("http://localhost:8000/data");
              const data = await response.json();
              setData(data);
          }
          catch (err) {
              console.error(err);
          }
      };
  
      fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Header />
          { data && <Courses coursesData={ data.courses[0] } /> }
          <Categories />
        </Route>
        <Route path="/course/:courseId">
          <CourseHeader />
          <CourseObjectives />
          <CourseContent />
          <CourseRequirements />
          <CourseDescription />
          <CourseInstructors />
          <CourseStudentFeedback />
          <CourseReviews />
        </Route>
        <Route>
          <h1>Error 404, Page Not Found</h1>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
