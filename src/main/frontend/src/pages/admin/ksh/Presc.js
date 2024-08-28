import React from 'react'
import './Presc.css';

const Presc = () => {
  return (
    
    <div className='presc-main-div'>
      <h1>처방전</h1>
        <table>
          <thead>
          </thead>
          <tbody>
          <tr>
            <td rowSpan={3}>
              환자
            </td>
            <td>이름</td>
            <td>N/A</td>
            <td rowSpan={3}>의료기관</td>
            <td>기관명</td>
            <td colSpan={2}>1123123123</td>
          </tr>
          
          <tr>
            <td>주민등록번호</td>
            <td>N/A</td>
            <td>전화번호</td>
            <td colSpan={2}>4444444</td>
          </tr>
          <tr>
            <td>회원번호</td>
            <td>N/A</td>
            <td>E-MAIL</td>
            <td colSpan={2}>6666666</td>
          </tr>
          <tr>
            <td rowSpan={2}>질병코드</td>
            <td>N/A</td>
            <td>처방여부</td>
            <td>의사명</td>
            <td>N/A</td>
            <td>면허종별</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>N/A</td>
            <td>O</td>
            <td>서명날인</td>
            <td>!!</td>
            <td>면허번호</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td colSpan={7}>* 환자의 요청이 있는 경우에는 질병분류기호를 기재하지 않습니다.</td>
          </tr>
          <tr>
            <td colSpan={3}>조제 내역</td>
            <td colSpan={4}>안내 사항</td>
          </tr>
          <tr>
            <td>약국명</td>
            <td colSpan={2}>그린약국</td>
            <td colSpan={4} rowSpan={2}>안내사항 적는 곳</td>
          </tr>
          <tr>
            <td>약사명</td>
            <td colSpan={2}>그린약사</td>
          </tr>
          <tr>
            <td>조제량</td>
            <td colSpan={2}>30일분</td>
            <td colSpan={4} rowSpan={3}>처방 내역 들어오는 곳</td>
          </tr>
          <tr>
            <td>복용방법</td>
            <td colSpan={2}>매 아침 식후 30분</td>
          </tr>        
          <tr>
            <td>조제년월일</td>
            <td colSpan={2}>2024-08-27</td>
          </tr>
          </tbody>
        </table>
      
    </div>
    
  )
}

export default Presc