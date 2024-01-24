import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">메인으로</Link> 
        </li>
        <li>
          <Link to="/map">지도보기</Link>
        </li>
        <li>
          <Link to="/detail">식당찾기</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;