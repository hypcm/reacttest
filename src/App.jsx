// src/App.jsx
import './App.css';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Particles from './components/Particles';

function App() {
  return (
    <>
      <Particles />
      <Cursor />
      <Navbar />
      <Hero />
      {/* Add About, Contact, etc. here */}
    </>
  );
}

export default App;
