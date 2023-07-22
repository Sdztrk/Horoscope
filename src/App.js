
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/Header/Header';
import Body from "./components/body/Body";
import "./scss/Reset.scss"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
