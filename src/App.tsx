import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/globalStyles.css';
import Page from './components/Page';
import { useDarkMode } from './helper/DarkModeContext';

function App() {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [sectionToScroll, setSectionToScroll] = useState<number>(-1);
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark-mode parent-div" : "parent-div"}>
      <Router>
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} setSectionToScroll={setSectionToScroll}/>
        <Routes>
          <Route path="/*" element={<Page sectionToScroll={sectionToScroll} setActiveSection={setActiveSection} setSectionToScroll={setSectionToScroll} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;