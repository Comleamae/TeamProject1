import React from 'react'


const NewVisit = () => {
  return (
    <div className='new-main-div'>
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
              name='patName' value={info.patName} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>
              <td>나 이</td>
              <td><input className='newInput' placeholder='나이를 입력해주세요.' type='text'
              name='age' value={info.age} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>
              <td>성 별</td>
              <td>
                <input type='radio' name='gender' value={'남'} checked={info.gender=='남'} 
                onChange={(e)=>{changeInfo(e)}}/>남
                <input type='radio' name='gender' value={'여'} checked={info.gender=='여'}
                onChange={(e)=>{changeInfo(e)}}/>여
              </td>
            </tr>
            <tr>
              <td>주민번호</td>
              <td><input className='newInput' placeholder='주민번호를 입력해주세요.' type='text'
              name='citizenNum' value={info.citizenNum} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>
              <td>이메일</td>
              <td><input className='newInput' placeholder='이메일을 입력해주세요.' type='text'
              name='patEmail' value={info.patEmail} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>
              <td>주소</td>
              <td><input className='newInput' placeholder='주소를 입력해주세요.' type='text'
              name='address' value={info.address} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>
              <td>진료과</td>
              <td>
                <select name='dept' value={info.dept} onChange={(e)=>{changeInfo(e)}}>
                  <option value={'외과'}>외과</option>
                  <option value={'내과'}>내과</option>
                  <option value={'신경과'}>신경과</option>
                  <option value={'산부인과'}>산부인과</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>담당의</td>
              <td>
                <select name='docLinum' value={info.docLinum} onChange={(e)=>{changeInfo(e)}}>
                  <option value={1}>외과의사</option>
                  <option value={2}>내과의사</option>
                  <option value={3}>신경과의사</option>
                  <option value={4}>산부인과의사</option>
                </select>
              </td>
            </tr>
            </tbody>
          </table>
          <div><button type='button' onClick={()=>{regInsert()}}>접수</button></div>
        </div> 
      </div>
    </div>
  )
}

export default NewVisit