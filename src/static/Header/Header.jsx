import{ useState } from 'react';
import './Header.css';
import Button from '../../shared/Button'; // Adjust path based on your folder structure
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='container'>
      {/* Menu icon on the left */}
      <div className='menu-icon' onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />} {/* Toggle icons */}
      </div>

      <div className='logo'>
        <img src='https://coolors.co/assets/img/logo.svg' alt='Logo' />
      </div>

      {/* Navigation links for desktop */}
      <div className='nav'>
        <nav>Tools</nav>
        <nav className='GoPro'>Go Pro</nav>
        <nav>Sign In</nav>
        <Button bgColor="#0073ff" text="Sign Up" /> {/* Reusable button */}
      </div>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        
        <nav>Tools</nav>
        <nav className='GoPro'>Go Pro</nav>
        <nav>Sign In</nav>
        <Button bgColor="#0073ff" text="Sign Up" />
      </div>
    </div>
  );
}

export default Header;
