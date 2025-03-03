import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';

const App =()=> {
  return (
    <div className="App">
      
      <Navbar/>
        <Home/>
        <Main/>
      
        <Footer/>
      
    </div>
  );
}

export default App;
