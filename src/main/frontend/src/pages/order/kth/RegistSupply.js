import React, { useState } from 'react'
import './RegistSupply.css'
import axios from 'axios'

const RegistSupply = () => {
  
  const [registSupply, setRegistSupply] = useState({
    supplyName : '',
    supplyPrice : 0,
    supplyStandard : '',
    supplier : '',
    supplyCaution : ''
  })

  // function registSupply(){
  //   axios.post('')
  // }

  return (
    <div>
      <h1>신규 물품 등록 페이지</h1>
      <table className='regist-table-div'>
        <tr>
          <td>물품명</td>
          <td><input type='text' name='supplyName' placeholder='물품명'></input></td>
        </tr>
        <tr>
          <td>가격</td>
          <td><input type='text' name='supplyPrice' placeholder='가격'></input></td>
        </tr>
        <tr>
        <td>규격</td>
        <td><input type='text' name='supplyStandard' placeholder='규격'></input></td>
        </tr>
        <tr>
          <td>제조사</td>
          <td><input type='text' name='supplier' placeholder='제조사'></input></td>
        </tr>
        <tr>
          <td>주의사항</td>
          <td><input type='text' name='supplyCaution' placeholder='주의사항'></input></td>
        </tr>
      </table>
      <button type='button' onClick={(e)=> registSupply()}>등록</button>
    </div>
  )
}

export default RegistSupply