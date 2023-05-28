import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../image/logo_w.png';
import './welcome.css';


const Welcome = () => {
  const navigate = useNavigate(); // useNavigate를 사용하여 navigate 함수 가져오기

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main'); // 메인 페이지 경로로 이동
    }, 2000); // 2초 후에 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, [navigate]);

  return (
    <div className='welcome'>
        <div className='welcome-container'>
            <img src={logo} className="welcome-logo" alt="logo" />
            <p>경일로드</p>
        </div>
    </div>
  );
};

export default Welcome;