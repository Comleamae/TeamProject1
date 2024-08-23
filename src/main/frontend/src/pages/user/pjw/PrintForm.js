import React from 'react'
import { useNavigate } from 'react-router-dom'
//진료확인서
const PrintForm = () => {
  
  const navigate = useNavigate()

  return (
    <div>
      <table className='print-table'> 
          <tr>
            <td colSpan={6}><h2>진료확인서</h2></td>
          </tr>
          <tr>
            <td>성명</td>
            <td>박주원</td>
            <td>성별</td>
            <td>남</td>
            <td>연령</td>
            <td>30</td>
          </tr>
          <tr>
            <td>주민등록번호</td>
            <td colSpan={5}>940420-1********</td>
          </tr>
          <tr>
            <td>주소</td>
            <td colSpan={5}>울산광역시</td>
          </tr>
          <tr>
            <td>병명</td>
            <td colSpan={3}>코로나</td>
            <td colSpan={2}>질병코드</td>
          </tr>
          <tr>
            <td colSpan={6}>
              <div>
                <div>
                  <table className='in-date-table'>
                    <tr>
                      <td rowSpan={2}>입 원</td>
                      <td colSpan={5}>년 월 일 부터</td>
                    </tr>
                    <tr>
                      <td colSpan={5}>년 월 일까지( 일간)</td>
                    </tr>
                    <tr>
                      <td rowSpan={3}>통 원</td>
                      <td colSpan={5}>년 월 일까지( 일간)</td>
                    </tr>
                    <tr>
                      <td colSpan={5}>년 월 일까지( 일간)</td>
                    </tr>
                    <tr>
                      <td>총 일간</td>
                    </tr>
                  </table>
                </div>
                <div>
                  <table>
                    
                  </table>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td rowSpan={3}>실 통원일자</td>
            <td> :월</td>
            <td colSpan={4}>:</td>
          </tr>
          <tr>
            <td> :월</td>
            <td colSpan={4}>:</td>
          </tr>
          <tr>
            <td> :월</td>
            <td colSpan={4}>:</td>
          </tr>
          <tr>
            <td colSpan={6}>
              <table className='in-text-table'>
                <tr>
                  <td colSpan={6}>상기와 같이 진료 받았음을 확인함</td>
                </tr>
                <tr>
                  <td></td>
                  <td>발행일:</td>
                </tr>
                <tr>
                  <td>요양기관명:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>주소:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>의사 면허번호:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>전문의면허번호:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>원 장:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>전화번호:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <h2>그린대학병원</h2>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <div className='btn-div'>
          <button type='button' className='btn' onClick={navigate('/user')}>출력</button>
        </div>
    </div>
  )
}

export default PrintForm
