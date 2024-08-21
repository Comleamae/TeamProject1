import React from 'react'
import './ClinicPrint.css'

const ClinicPrint = () => {
  // 증명서를 뽑기위해서 창에 접근했을때 로그인 상태가 아니라면 
  return (
    <div className='app-content-div'>

      <table className='print-table'> 
        <tr>
          <td colSpan={6}>진료확인서</td>
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
            </table>
          </td>
        </tr>
      </table>

    </div>
  )
}

export default ClinicPrint
