import './App.css';
import About from './components/about';
import MainPart from './components/body-part1';
import Header1 from './components/header';
import Services from './components/services';
import Team from './components/team';




function App() {
  return (
    <div className="App">
        <Header1/>
        <MainPart/>  
        <About/> 
        <Services/>
        <Team/>
    </div>
  );
}

export default App;
