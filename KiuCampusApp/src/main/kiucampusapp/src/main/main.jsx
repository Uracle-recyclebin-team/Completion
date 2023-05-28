import React from 'react';
import { Link } from 'react-router-dom';
import map from '../image/map.png';
import '../main/main.css';
import Header from '../header/header';

function Main() {
  return (
    <div className="Main">
      <Header />
      <div className="Map_Middle">
        <img src={map} className="Map_img" alt="Map" />
      </div>
      <div className="Map_Bottom">
        <ul>
          <li value="1">01 본관</li>
          <li value="2">02 중앙도서관/학생서비스센터</li>
          <li value="3">03 3호관(교수연수동)</li>
          <li value="5">05 5호관</li>
          <li value="6"><Link to="../building/building" style={{ textDecoration: "none", color: "black" }}>06 6호관</Link></li>
          <li value="7">07 7호관</li>
          <li value="8">08 8호관</li>
          <li value="9">09 9호관</li>
          <li value="10">10 학생생활관(지성관)</li>
          <li value="11">11 11호관</li>
          <li value="12">12 창의적융합교육센터</li>
          <li value="13">13 학생회관/학생식당/복지매장</li>
          <li value="14">14 14호관/KIU철도아카데미</li>
          <li value="17">17 17호관/BLS센터</li>
          <li value="18">18 18호관</li>
          <li value="19">19 학생생활관(웅비관)</li>
          <li value="20">20 KIU피트니스 센터</li>
          <li value="21">21 종합체육관</li>
          <li value="22">22 22호관/국제교류교육원</li>
          <li value="23">23 R&DB센터/창업지원단</li>
          <li value="24">24 학생생활관(목련관)</li>
          <li value="25">25 산학교육관</li>
          <li value="26">26 강당/코워킹 스페이스</li>
          <li value="27">27 풋살경기장</li>
          <li value="28">28 자율주행차융합기술연구소</li>
          <li value="30">30 대운동장</li>
          <li value="31">31 노천강당</li>
          <li value="32">32 취업처/대학일자리센터/현장실습지원센터/학생상담센터</li>
          <li value="33">33 학생생활관(일청관)</li>
          <li value="36">36 하늘정원</li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
