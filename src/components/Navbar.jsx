import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';


const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: theme === 'light' ? '#f8f9fa' : '#343a40',
      color: theme === 'light' ? '#000' : '#fff',
    },
    navLinks: {
      display: 'flex',
      justifyContent: "center",
      alignItems:"center",
      gap: '15px',
      fontSize: "24px",
      
    },
    button: {
      padding: '8px 16px',
      backgroundColor: theme === 'light' ? '#fff' : '#444',
      color: theme === 'light' ? '#000' : '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.navbar}>
      
      <div style={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button style={styles.button} onClick={toggleTheme}>
        Temanı dəyiş
      </button>
    </div>
  );
};

export default Navbar;
