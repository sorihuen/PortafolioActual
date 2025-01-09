import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Work from './pages/Work.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/portfolio" />} />
        <Route path="/portfolio" element={<Portfolio />}>
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

