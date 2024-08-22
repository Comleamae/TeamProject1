import React from 'react'
import './ChartCheck.css';

const ChartCheck = () => {
  return (
    <div>
      <div className='main2-chart-div'>
        <div className='left2-chart-div'>
          <div>기존 환자 정보</div>
          <span>진료일 <input type='date'/></span>
          <span>이름 <input type='text' value={'가져온이름'}/></span>
          <span>성별 <input type='text' value={'가져온성별'}/></span>
          <span>나이 <input type='text' value={'가져온나이'}/></span>
          <span>주소 <input type='text' value={'가져온주소'}/></span>
          <span>내용 <textarea value={'가져온내용'}></textarea></span>
          <span>처방전<textarea>ㅇㅇㅇㅇ</textarea></span>
  
        </div>
  
  
        <div className='right2-chart-div'>
        <div>기존 환자 정보</div>
          <span>진료일 <input type='date'/></span>
          <span>이름 <input type='text' value={'가져온이름'}/></span>
          <span>성별 <input type='text' value={'가져온성별'}/></span>
          <span>나이 <input type='text' value={'가져온나이'}/></span>
          <span>주소 <input type='text' value={'가져온주소'}/></span>
          <span>내용 <textarea value={'수정될내용'}></textarea></span>
          
        </div>
      </div>
      <button type='button'>등록</button>
    </div>
  )
}

export default ChartCheck