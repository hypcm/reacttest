// src/App.jsx
import './App.css';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Particles from './components/Particles';

function App() {
  return (
    <>
      <Particles />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </>
  );
}

export default App;
