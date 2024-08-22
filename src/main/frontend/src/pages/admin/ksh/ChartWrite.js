import React from 'react'
import './ChartWrite.css';

const ChartWrite = () => {
  return (
    <div>
      <div className='main-chart-div'>
        <div className='left-chart-div'>
          <div>환자 검색</div>
          <div className='search-chart-div'>
            <select className='select-clinic-info'>
              <option>이름</option>
              <option>나이</option>
              <option>성별</option>
            </select>
            <input type='text' className='inp-clinic-info'/>
            <button type='button'>검색</button>
          </div>
          <div className='table-div'>
            <table>
              <thead>
                <tr>
                  <td>이름</td>
                  <td>나이</td>
                  <td>성별</td>
                  <td>날짜</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>김자바</td>
                  <td>30</td>
                  <td>남자</td>
                  <td>2024-09-01</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='right-chart-div'>
          <div>환자 데이터 관리</div>
          <div className='info-chart-div' >
            <span>진료일 <input type='date'/></span>
            <span>이름 <input type='text'/></span>
            <span>성별 <input type='text'/></span>
            <span>나이 <input type='text'/></span>
            <span>주소 <input type='text'/></span>
            <span>내용 <textarea></textarea></span>
          </div>
        </div>
      </div>
      <button type='button'>등록</button>
    </div>
  )
}

export default ChartWrite