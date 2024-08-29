import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { generatePDF } from './utils/pdfUtils'

const PrintForm3 = () => {

  const {patNum, treDate} = useParams()

  const navigate = useNavigate()
  const [patientOne, setPatientOne] = useState([])
  const [doctorOne, setDoctorOne] = useState({})

  //
  const[isShow, setIsShow] = useState(false)

  // PDF 생성을 위해 참조할 요소
  const printRef = useRef();

  //불러온 한 환자의 전체 정보
  useEffect(()=>{
    axios
    .get(`/patient/getOne/${patNum}/${treDate}`)
    .then((res)=>{
      console.log(res)
      setPatientOne(res.data)
      setIsShow(true)
      const docLinum = res.data[0].treatList[0].docLinum
      if(docLinum){
        axios
        .get(`/doctor/getOne/${docLinum}`)
        .then((docRes)=>{
          console.log(docRes)
          setDoctorOne(docRes.data)
        })
        .catch((error)=>{
          console.log('의사 정보 받기 에러', error)
        })
      }
    })
    .catch((error)=>{
      console.log('환자정보 받아오는데서 에러', error)
      console.log(patNum)
    })
  }, [treDate])

   // PDF 생성 함수
   const handlePrint = () => {
    if (printRef.current) {
      generatePDF(printRef.current, '처방전.pdf')
        .then(() => console.log('PDF 생성 성공'))
        .catch((error) => console.error('PDF 생성 오류:', error));
    }
  };

  return (
    isShow==false
    ?
    null
    :
    <div className='result'>
       <div ref={printRef}>
          <table className='print-table'> 
            <tbody>
              <tr>
                <td colSpan={7}><h2>처방전</h2></td>
              </tr>
              <tr>
                <td>발행일/발행번호</td>
                <td>{new Date().toLocaleDateString()} / {}</td>
                <td>제 {/* 제 호 */}</td>
                <td rowSpan={3}>의료기관</td>
                <td>명칭</td>
                <td colSpan={2}>{/* 의료기관 명칭 */}</td>
              </tr>
              <tr>
                <td rowSpan={2}>환자</td>
                <td>성명</td>
                <td>{patientOne[0].patName}</td>
                <td>전화</td>
                <td colSpan={2}></td>
              </tr>
              <tr>
                <td>주민등록번호</td>
                <td colSpan={1}>{patientOne[0].citizenNum}</td>
              </tr>
              <tr>
                <td rowSpan={2}>질병명</td>
                <td>{patientOne[0].treatList[0].disease}</td>
                <td rowSpan={2}>처방의</td>
                <td></td>
                <td>{doctorOne.docName}</td>
                <td>면허종별</td>
                <td>{doctorOne.dept}</td>
              </tr>
              <tr>
                <td></td>
                <td>서명 또는 날인</td>
                <td></td>
                <td>면허번호</td>
                <td>{doctorOne.docLinum}</td>
              </tr>
              <tr>
                <td colSpan={7}><h4>*환자의 요구가 있는 때에는 질병분류기호를 기재하지 아니합니다.</h4></td>
              </tr>
              <tr>
                <td colSpan={2}>처방 의약품의 명칭</td>
                <td>1회 투여량</td>
                <td>1회 투여횟수</td>
                <td>투약일수</td>
                <td colSpan={2}>용별</td>
              </tr>
              
              <tr>
                <td>사용기간</td>
                <td colSpan={2}>교부일로부터 3일간</td>
                <td colSpan={5}>*사용기간내에 약국에 제출하여야 합니다</td>
              </tr>
              <tr>
                <td colSpan={7}>의약품 조재 내역</td>
              </tr>
              <tr>
                <td rowSpan={4}>조제내역</td>
                <td>조제기관의 명칭</td>
                <td>{/* 조제기관 명칭 */}</td>
                <td colSpan={4}>처방의 변경.수정.확인대체세 그 내용 등</td>
              </tr>
              <tr>
                <td>조제약사 성명</td>
                <td>{/* 조제약사 성명 */}</td>
                <td rowSpan={3} colSpan={5}></td>
              </tr>
              <tr>
                <td>조 제 량</td>
                <td>{/* 조제량 */}</td>
              </tr>
              <tr>
                <td>조 제 년 월 일</td>
                <td>{/* 조제 날짜 */}</td>
              </tr>
            </tbody>
          </table>
        
        <div className='btn-div'>
          <button type='button' className='btn' onClick={(e)=>{handlePrint(e)}}>출력</button>
        </div>
       </div>
    </div>
  )
}

export default PrintForm3
