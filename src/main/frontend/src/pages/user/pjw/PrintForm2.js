import { tab } from '@testing-library/user-event/dist/tab'
import React from 'react'
import { useNavigate } from 'react-router-dom'
//수술확인서
const PrintForm2 = () => {

  const navigate = useNavigate()

  return (
    <div>
      <table className='print-table'> 
          <tr>
            <td colSpan={8}><h2>수술확인서</h2></td>
          </tr>
          <tr>
            <td>진료과</td>
            <td colSpan={2}>내과</td>
            <td>작성자</td>
            <td>박주원</td>
            <td>일자</td>
            <td colSpan={2}>240822</td>
          </tr>
          <tr>
            <td colSpan={5}>병록번호</td>
            <td colSpan={3}>12313</td>
          </tr>
          <tr>
            <td>일련번호</td>
            <td>1675</td>
            <td>주민번호</td>
            <td colSpan={6}>940420-1********</td>
          </tr>
          <tr>
            <td>입원과</td>
            <td>내과</td>
            <td>202호실</td>
            <td>입원날짜</td>
            <td colSpan={4}>240802</td>
          </tr>
          <tr>
            <td>환자성명</td>
            <td>존도</td>
            <td>성별</td>
            <td>남</td>
            <td>생년월일</td>
            <td>931205</td>
            <td>연령</td>
            <td>만25세</td>
          </tr>
          <tr>
            <td>환자주소</td>
            <td colSpan={7}>울산광역시 남구 삼산동</td>
          </tr>
          <tr>
            <td>진단명</td>
            <td colSpan={7}>뇌졸증</td>
          </tr>
        </table>
        <div>
          위 환자는 뇌졸증으로 인해 24년 8월 2일부터 24년 8월 3일까지 수술을 시행하였음을 확인함.

          <p>수술명:</p>
          <p>수술일자:</p>

          <table>
            <tr>
              <td>
                발행일
              </td>
              <td></td>
            </tr>
            <tr>
              <td>의사성명</td>
              <td></td>
            </tr>
            <tr>
              <td>면허번호</td>
              <td></td>
            </tr>
          </table>
          <h2>그린대학병원장 제인도</h2>
        </div>
        <div className='btn-div'>
          <button type='button' className='btn' onClick={navigate('/user')}>출력</button>
        </div>
    </div>
  )
}

export default PrintForm2
