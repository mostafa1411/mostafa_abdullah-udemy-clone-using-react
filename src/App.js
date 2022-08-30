import './App.css';
import Content from './components/Content';
import { data } from './data.js';

function App() {
  let { title, description, courses } = data;

  return (
    <Content title={title} description={description} courses={courses} />
  );
}

export default App;
