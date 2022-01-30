import logo from './logo.svg';

import './App.css';

// For sake of Routing
import Landing from './_landing';
import Attendant from './_attendant';
import Restroom from './_restroom';
import Menu from './_menu';
import ErrorPage from './_Error';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/restroomQueue"> Restroom </Link>
        <Link to="/attendant"> Attendant </Link>
        <Link to="/menu"> Menu </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/attendant" element={<Attendant />} />
        <Route path="/restroomQueue" element={<Restroom />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div> Foooter </div>
    </Router>
    
  );
}

export default App;
