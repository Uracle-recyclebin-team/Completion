import React, { useState } from 'react';
import image from '../image/6building.jpg';
import floor2 from '../image/2floor.png';
import floor3 from '../image/3floor.png';
import floor4 from '../image/4floor.png';
import Header from '../header/header';
import '../main/main';
import '../main/main.css';
import '../building/building.css';
import Slide2floor from '../slide/slide_2floor';
import Slide3floor from '../slide/slide_3floor';
import Slide4floor from '../slide/slide_4floor';

/*층별 슬라이드 기능*/
function Building() {
  const [showMiddle2, setShowMiddle2] = useState(false);
  const [showMiddle3, setShowMiddle3] = useState(false);
  const [showMiddle4, setShowMiddle4] = useState(false);

/*2층 다운버튼*/
  const handleUpClick = () => {
    if (showMiddle2) {
      setShowMiddle2(false);
      setShowMiddle3(true);
    }
  };

/*3층 업버튼, 다운버튼*/
  const handleUpClick2 = () => {
    if (showMiddle3) {
      setShowMiddle3(false);
      setShowMiddle4(true);
    }
  };

  const handleDownClick2 = () => {
    if (showMiddle3) {
      setShowMiddle3(false);
      setShowMiddle2(true);
    }
  };

/*4층 다운버튼*/
  const handleDownClick3 = () => {
    if (showMiddle4) {
      setShowMiddle4(false);
      setShowMiddle3(true);
    }
  };

  return (
    <div className="Building">
      <Header />
      <h1>6 호관</h1>
      {/*최초 표출화면(건물 외관 사진)*/}
      <div className="Building-Middle" style={{ display: !showMiddle2 && !showMiddle3 && !showMiddle4 ? 'block' : 'none' }}>
        <img src={image} className="Building-img" alt="Building-img" />
        <div className="Building-Middle-Btn">
          {/*건물 외관div를 숨긴 후 내부 평면도 및 슬라이드div 표출버튼*/}
          <button onClick={() => setShowMiddle2(true)}>
            <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-double-up-40.png" alt="BtnImg" />
          </button>
        </div>
      </div>
      <div className="Building-Middle-2floor" style={{ display: showMiddle2 && !showMiddle3 ? 'block' : 'none' }}>
        {/*건물 외관 div를 숨긴 후, 2층 div 표출*/}
        <img src={floor2} className="Building-img" alt="Building-img" />
        <div className="Slide2floor">
          <Slide2floor />
        </div>
        <button className="upBtn-2to3" onClick={handleUpClick}>
          {/*2층 div를 숨긴 후, 3층 진입 버튼*/}
          <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-double-up-25.png" alt="upBtnImg" />
        </button>
      </div>
      <div className="Building-Middle-3floor" style={{ display: !showMiddle2 && showMiddle3 ? 'block' : 'none' }}>
        {/*2층 div를 숨긴 후, 3층 div 표출*/}
        <img src={floor3} className="Building-img" alt="Building-img" />
        <div className="Slide3floor">
          <Slide3floor />
        </div>
        <button className="upBtn-3to4" onClick={handleUpClick2}>
          {/*3층 div를 숨긴 후, 4층 진입 버튼*/}
          <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-double-up-25.png" alt="upBtnImg" />
        </button>
        <button className="downBtn-3to2" onClick={handleDownClick2}>
          {/*3층 div를 숨긴 후, 2층 진입 버튼*/}
          <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-double-down-25.png" alt="downBtnImg" />
        </button>
      </div>
      <div className="Building-Middle-4floor" style={{ display: !showMiddle3 && showMiddle4 ? 'block' : 'none' }}>
        {/*3층 div를 숨긴 후, 4층 div 표출*/}
        <img src={floor4} className="Building-img" alt="Building-img" />
        <div className="Slide4floor">
          <Slide4floor />
        </div>
        <button className="downBtn-4to3" onClick={handleDownClick3}>
          {/*4층 div를 숨긴 후, 3층 진입 버튼*/}
          <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-double-down-25.png" alt="downBtnImg" />
        </button>
      </div>
      {/*층별 주요학과 표시*/}
      <div className="Building-Bottom">
      <table className='Building-Bottom-Table'>
        <tbody>
          <tr>
            <td>1층</td>
            <td>자동차학과(통제구역)</td>
          </tr>
          <tr>
            <td>2층</td>
            <td>기계자동차학부</td>
          </tr>
          <tr>
            <td>3층</td>
            <td>로봇공학과</td>
          </tr>
          <tr>
            <td>4층</td>
            <td>사이버보안학과</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Building;