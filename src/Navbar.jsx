// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="logo">hyp</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
