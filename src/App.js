import './App.css';
import About from './components/about';
import MainPart from './components/body-part1';
import Header1 from './components/header';
import Services from './components/services';
import Team from './components/team';
import Component from './components/services1';



function App() {
  return (
    <div className="App">
        <Header1/>
        <MainPart/>  
        <About/> 
        <Services/>
        <Team/>
        <Component/>
    </div>
  );
}

export default App;
