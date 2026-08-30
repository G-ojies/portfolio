import { useEffect, useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Socials from './components/Socials';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div>
      <div>
        <div className="dark:bg-gradient-to-t from-black/95 to-black dark:text-gray-300">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Banner />
        </div>
      </div>

      <Socials />
      <ScrollToTop />

      <div className="dark:bg-gradient-to-b from-black/95 to-black dark:text-gray-500">
        <About />
      </div>

      <Services />

      <div className="pb-8 dark:bg-gradient-to-b from-black/95 to-black dark:text-gray-300">
        <Portfolio />
      </div>

      <div className="dark:bg-gradient-to-b from-black/95 to-black dark:text-gray-300">
        <Experience />
      </div>

      <Contact />
      <Footer />
      <Nav />
    </div>
  );
};

export default App;
