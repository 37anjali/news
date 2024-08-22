
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import News from './components/news/News';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <div style={{marginBottom:"70px"}}>
     <Navbar/>
     </div>
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      
      </Routes>
      
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
