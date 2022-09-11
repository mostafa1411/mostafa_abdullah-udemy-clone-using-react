import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CoursePage from './components/CoursePage';

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
      <Routes>
        <Route path="/" element={<HomePage data={ data } />} />
        <Route path="/course/:courseId" element={ data && <CoursePage data={ data } /> } />
        <Route path='*' element={<h1>Error 404, Page Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
