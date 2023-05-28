import React, { useState } from 'react';
import image from '../image/noimage-w-900.png';
import Header from '../header/header';
import '../main/main';
import '../main/main.css';
import '../building/building.css';
import Slide from '../slide/slide';

function Building() {
    const [isHidden, setIsHidden] = useState(false);
    const toggleDiv = () => {
        setIsHidden(!isHidden);
    };
    return (
        <div className="Building">
            <Header />
            <h1>6 호관</h1>
            <div className="Building-Middle" style={{ display: isHidden ? 'none' : 'block' }}>
                <img src={image} className="Building-img" alt="Building-img" />
                <div className='Building-Middle-Btn'>
                    <button onClick={toggleDiv}>
                        <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-double-up-40.png" alt="BtnImg" />
                    </button>
                </div>
            </div>
            <div className='Building-Middle2' style={{ display: isHidden ? 'block' : 'none' }}>
                <img src={image} className="Building-img" alt="Building-img" />
                <Slide className="Building-img2" />  
                <button className='upBtn'>
                    <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-double-up-25.png" alt="upBtnImg" />
                </button>
                <button className='downBtn'>
                    <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-double-down-25.png" alt="downBtnImg" />
                </button>
            </div>
            <div className="Building-Bottom">
                <table className='Building-Bottom-Table'>
                    <tr>
                        <td>1층</td>
                        <td>ㄱㄱ과</td>
                    </tr>
                    <tr>
                        <td>2층</td>
                        <td>ㄴㄴ과</td>
                    </tr>
                    <tr>
                        <td>3층</td>
                        <td>ㄷㄷ과</td>
                    </tr>
                    <tr>
                        <td>4층</td>
                        <td>ㄹㄹ과</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
    
export default Building;