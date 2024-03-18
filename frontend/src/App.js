import './App.css';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Up from './Up';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
       <Router>
        {/* <Up/> */}
        <Header/>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route element={<Login/> } exact path="/" />
        <Route  element={<About/> } path="/about"  />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
