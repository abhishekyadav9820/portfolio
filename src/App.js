import './App.css';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
  
  <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
