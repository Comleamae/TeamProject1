import React, { useState } from 'react'
import './ChartEat.css';

const ChartEat = () => {

  // 약품명 저장할 state 변수
  const [medicalName, setMedicalName] = useState();

  return (
    <div>
      <div className='main-div'>
        <h1>처방전</h1>
        <div className='pres-div'>
          <table>
            <thead>
              <tr>
                <td>병원명</td>
                <td>그린병원</td>   
                <td>진료과</td>
                <td>신경과</td>
                <td>담당의</td>
                <td>뿡빵띠</td>      
              </tr>
              <tr>
                <td></td>
                <td>환자 이름</td>
                <td>김세훈</td>   
                <td>환자 나이</td>
                <td>33</td>   
              </tr>
              </thead>   
          </table>
          
        </div>

        <div className='medical-div'>
          <div>기존 처방 내역</div>
          <div><textarea rows={4} cols={50}></textarea></div>
        </div>
  
        <div className='medical-div'>
          <div>진단명 및 진단소견</div>
          <div><textarea rows={4} cols={50}></textarea></div>
        </div>
  
        <div className='medical-posion'>
          <h1>처방전 의약품 목록</h1>


        </div>

        약명 : <input type='text'/>
        <button type='button' onClick={(e)=>{alert(1)}} >약품 추가</button>    

        <div>처방전 발급일자 <input type='data'/></div>
        <button type='button'>처방전 발급</button>
      </div>
      
    </div>
  )
}

export default ChartEat