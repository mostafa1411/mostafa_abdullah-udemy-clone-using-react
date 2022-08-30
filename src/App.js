import './App.css';
import SectionTitle from './components/SectionTitle';
import SectionDescription from './components/SectionDescription';
import ExploreButton from './components/ExploreButton';
import Cards from './components/Cards';

function App() {
  return (
    <div className="content">
      <SectionTitle />
      <SectionDescription />
      <ExploreButton />
      <Cards />
    </div>
  );
}

export default App;
