import React from 'react'

const ReVisit = () => {
  return (
    <div className='re-main-div'>
      <h1>예약 등록</h1>
      <div>
        <div>접수를 위한 정보를 입력해주세요.</div>
        <div>
          <table>
          <thead></thead>
          <tbody>
            <tr> 
              <td>이 름</td>
                <td><input className='newInput' placeholder='이름을 입력해주세요.' type='text'
                  name='patName' value={reInfo.patName} onChange={(e)=>{changeReInfo(e)}}/></td>
            </tr>
            <tr>
              <td>주민번호</td>
              <td><input className='newInput' placeholder='주민번호를 입력해주세요.' type='text'
                name='citizenNum' value={reInfo.citizenNum} onChange={(e)=>{changeReInfo(e)}}/></td>
            </tr>
            </tbody>
          </table>
          <div><button type='button' onClick={()=>{regCheckInsert()}}>접수</button></div>
        </div>
      </div>
    </div>
  )
}

export default ReVisit