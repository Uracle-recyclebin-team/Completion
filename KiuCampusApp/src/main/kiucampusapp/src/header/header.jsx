import React from 'react';
import logo from '../image/logo_w.png';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="Main-header">
        <div className='Main-Name'>
          <img src={logo} className="Main-logo" alt="logo" />
          <p>경일로드</p>
        </div>
        <ul className="Main-Top">
          <li><Link to="../main/main" style={{ textDecoration: "none", color: "white" }}>지도</Link></li>
          <li><Link to="https://www.kiu.ac.kr/pages/sub.htm?nav_code=kiu1540289823" style={{ textDecoration: "none", color: "white" }}>내선번호</Link></li>
          <li><Link to="../phone/phone" style={{ textDecoration: "none", color: "white" }}>학과 교수님</Link></li>
          <li><Link to="https://www.kiu.ac.kr/pages/sub.htm?nav_code=kiu1540289829" style={{ textDecoration: "none", color: "white" }}>사무실</Link></li>
        </ul>
    </header>
  );
};

export default Header;