import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminJoin = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>관리자 등록 페이지</h1>
      <div>
        <table>
          <tr>
            <td>아이디</td>
            <td>
              <input type='text'/> 
            </td>
            <td>
              <button type='button' className='btn'>중복확인</button>
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td colSpan={2}>
              <input type='password'/> 
            </td>
          </tr>
          <tr>
            <td>비밀번호 확인</td>
            <td colSpan={2}>
              <input type='password'/> 
            </td>
          </tr>
          <tr>
            <td>
              근무과
            </td>
            <td colSpan={2}>
              <select name='dept'>
                {/* 이 안의 내용은 과 테이블에서 받아서 셀렉트 박스안에 그려줄것 */}
                <option>내과</option>
                <option>외과</option>
                <option>신경과</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              직종
            </td>
            <td colSpan={2}>
              <select name='role'>
                {/* 여긴 어떻게 하지 */}
                <option>의사</option>
                <option>간호사</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>자격증 번호</td>
            <td>
              <input type='text'/>
            </td>
            <td>
              <button type='button' className='btn'>자격증 정보확인</button>
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td colSpan={2}>
              <input type='text'/>
            </td>
          </tr>
        </table>
        <div className='div-btn'>
          <button type='button' onClick={(e)=>{navigate(`/admin/login`)}}>뒤로가기</button>
          <button type='button'>등록하기</button>
        </div>
      </div>
    </div>
  )
}

export default AdminJoin
