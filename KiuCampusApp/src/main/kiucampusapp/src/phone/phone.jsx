import React,{ useEffect, useState } from 'react';
import logo from '../image/logo_w.png';
import { Link } from 'react-router-dom';
import './phone.css';
import '../main/main.css';
import axios from 'axios';

function Phone() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedChildOption, setSelectedChildOption] = useState('');
  const [inputText, setInputText] = useState('');

  const [profData, setProfData] = useState([]);

  const handleParentSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedChildOption(''); // 부모 옵션 변경 시 자식 옵션 초기화
  };

  const handleChildSelectChange = (event) => {
    setSelectedChildOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  const getData = async () => {
    // 전송할 데이터
    const data = {
      'proCol' : selectedOption,
      'proMajor' : selectedChildOption,
      'proName' : inputText
    };

    // 데이터를 백엔드로 전송
    await axios({
      method:'get',
      url: '/api/submit',
      params: data
    }).then(res => {
      // 성공적으로 전송된 경우에 대한 처리
      if (res.status === 200) {
        setProfData(res.data);
        console.log('조회 성공');
      } else {
        console.log('조회 실패', res);
      }
    })
    .catch(err => {
      // 전송 중 오류가 발생한 경우에 대한 처리
      console.error(err);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return(
    
    <div className="Phone">
      <header className="Main-header">
        <div className='Main-Name'>
          <img src={logo} className="Main-logo" alt="logo" />
          <p>경일대 안내앱</p>
        </div>
        <ul className="Main-Top">
          <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>지도</Link></li>
          <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>내선번호</Link></li>
          <li><Link to="/phone" style={{ textDecoration: "none", color: "white" }}>학과 교수님</Link></li>
          <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>사무실</Link></li>
        </ul>
      </header>
      <form onSubmit={handleSubmit}>
      <select value={selectedOption} onChange={handleParentSelectChange} className='box'>
        <option value="">선택해주세요</option>
        <option value="엔지니어">SMART엔지니어링대학</option>
        <option value="라이프">SMART라이프대학</option>
        <option value="스포츠">SMART스포츠대학</option>
        <option value="후지오네칼리지">후지오네칼리지</option>
        <option value="기업인재">기업인재대학</option>
        <option value="미래융합">미래융합대학</option>
        <option value="신학인재교육원">산학인재교육원</option>
      </select>

      {selectedOption && (
        <select value={selectedChildOption} onChange={handleChildSelectChange} className='box2  '>
          {selectedOption === '엔지니어' && (
            <>
              <option value="">선택해주세요</option>
              <option value="스마트디자인공학부">스마트디자인공학부</option>
              <option value="전기전자에너지학부">전기전자에너지학부</option>
              <option value="철도학부">철도학부</option>
              <option value="소방방재학부">소방방재학부</option>
              <option value="건축디자인과">건축디자인과</option>
              <option value="건축토목공학과">건축토목공학과</option>
              <option value="스마트보안학과">스마트보안학과</option>
            </>
          )}

          {selectedOption === '라이프' && (
            <>
              <option value="">선택해주세요</option>
              <option value="만화애니메이션학부">만화애니메이션학부</option>
              <option value="게임엔터테인먼트학과">게임엔터테인먼트학과</option>
              <option value="K-방송예술학부">K-방송예술학부</option>
              <option value="사진영상학부">사진영상학부</option>
              <option value="콘텐츠디자인학과">콘텐츠디자인학과</option>
              <option value="상담심리학과">상담심리학과</option>
              <option value="경찰학과">경찰학과</option>
              <option value="부동산지적학과">부동산지적학과</option>
              <option value="사회복지학과">사회복지학과</option>
              <option value="글로벌비즈니스학부">글로벌비즈니스학부</option>
              <option value="뷰티학과">뷰티학과</option>
              <option value="항공서비스학과">항공서비스학과</option>
              <option value="응급구조학과">응급구조학과</option>
              <option value="간호학과">간호학과</option>
            </>
          )}

          {selectedOption === '스포츠' && (
            <>
              <option value="">선택해주세요</option>
              <option value="전문스포츠학부">전문스포츠학부</option>
              <option value="특수군사학과">특수군사학과</option>
              <option value="스포츠단">스포츠단</option>
            </>
          )}
          {selectedOption === '후지오네칼리지' && (
            <>
              <option value="">선택해주세요</option>
              <option value="교양학부">교양학부</option>
              <option value="자율전공학부">자율전공학부</option>
            </>
          )}
          {selectedOption === '기업인재' && (
            <>
              <option value="">선택해주세요</option>
              <option value="스마트팩토리융합학과">스마트팩토리융합학과</option>
              <option value="스마트전력인프라학과">스마트전력인프라학과</option>
              <option value="스마트푸드테크학과">스마트푸드테크학과</option>              
              <option value="스마트경영공학과">스마트경영공학과</option>
            </>
          )}
          {selectedOption === '미래융합' && (
            <>
              <option value="">선택해주세요</option>
              <option value="스마트산업학부">스마트산업학부</option>
              <option value="스마트경영학부">스마트경영학부</option>
              <option value="평생교육학부">평생교육학부</option>              
              <option value="평생KIUM학부">평생KIUM학부</option>                            
              <option value="기계자동화융합학과">기계자동화융합학과</option>
            </>
          )}
          {selectedOption === '신학인재교육원' && (
            <>
              <option value="">선택해주세요</option>
              <option value="스마트융합학부">스마트융합학부</option>
            </>
          )}
        </select>
      )}
      <input type="text" value={inputText} onChange={handleInputChange} id="name"/>
      <button type="submit">검색</button>
    </form>
      
        <div className='Phone_Table_Container'>
          <table className="Phone_Table">
            <tbody>
              {
                profData.length > 0 && profData.map((v, i) => {
                  return  <tr key={i}>
                            <td>
                              <img src={v.proImg} alt="image" height="200px" width="200px" />
                            </td>
                            <td><h2>{v.proName}</h2><br/><br/><br/><br/>
                              {
                                v.proAdd.split('-', 3).length > 2 ? v.proAdd.split('-', 3)[0] + '호관' + `${v.proAdd.split('-', 3)[1]}-${v.proAdd.split('-', 3)[2]}호실` : 
                                v.proAdd.split('-', 3)[0] + '호관' + `${v.proAdd.split('-', 3)[1]}호실`
                              }<br/>{v.proPhone}<br/></td>
                          </tr>
                })
              }
              
            </tbody>
          </table>
        </div>
      </div>
      
  );
  
}

export default Phone;
