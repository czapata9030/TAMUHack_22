import './App.css';

// For sake of Routing
import Landing from './_landing';
import Attendant from './_attendant';
import Restroom from './_restroom';
import Menu from './_menu';
import ErrorPage from './_Error';
import AttendOTW from './_attendOTW';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Landing </Link>
        <Link to="/restroomQueue"> Restroom </Link>
        <Link to="/attendant"> Attendant </Link>
        <Link to="/menu"> Menu </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/attendant" element={<Attendant />} />
        <Route path="/ontheway" element={<AttendOTW />} />
        <Route path="/restroomQueue" element={<Restroom />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <div class="footer"> Foooter </div>
    </Router>
    
  );
}

export default App;
