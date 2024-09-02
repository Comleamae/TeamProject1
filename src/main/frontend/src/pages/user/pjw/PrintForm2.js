import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { generatePDF } from './utils/pdfUtils'


const PrintForm2 = () => {
  const navigate = useNavigate()
  const [patientOne, setPatientOne] = useState([])
  const [doctorOne, setDoctorOne] = useState({})
  const {patNum, treNum} = useParams()

  // 환자 입원여부를 담을 
  const[noDate, setNoDate] = useState(false)

  // pdf 생성을 위해 참조
  const printRef = useRef()

  //useEffect의 실행 순서로 인해 발생하는 에러를 막기위한 상태변수
  const[isShow, setIsShow] = useState(false)


//불러온 한 환자의 전체 정보
 useEffect(()=>{
  axios
  .get(`/patient/getOne/${patNum}/${treNum}`)
  .then((res)=>{
    console.log(res)
    setPatientOne(res.data)
    setIsShow(true)
    const docLinum = res.data[0].treatVO.docLinum;
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
        // 입원 기록이 없는 경우 상태 업데이트
        if(res.data[0].treatVO.dateVO==null){
          setNoDate(true)
        }
      }
  })
  .catch((error)=>{
    console.log('환자정보 받아오는데서 에러', error)
  })
}, [treNum])

  // PDF 생성 함수
  const handlePrint = () => {
    if (printRef.current) {
      generatePDF(printRef.current, '수술확인서.pdf')
        .then(() => {
          console.log('PDF 생성 성공')
        })
        .catch((error) => {
          console.error('PDF 생성 오류:', error)
        });
    }
  };

  return (
    isShow==false
    ?
    null
    :
    <div className='result'>
      {noDate
      ?
      (<div>수술기록이 없는 환자입니다</div>)
      :
      (<div>
        <div className='printW' ref={printRef}>
          <div>
            <table className='print-table'> 
              <thead>
                <tr>
                  <td colSpan={8}><h2>수술확인서</h2></td>
                </tr>
                <tr>
                  <td>진료과</td>
                  <td colSpan={2}>{doctorOne.dept}</td>
                  <td>작성자</td>
                  <td>{doctorOne.docName}</td>
                  <td>작성일자</td>
                  <td colSpan={2}>{patientOne[0].treatVO.treDate}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5}>병록번호</td>
                  <td colSpan={3}>{patientOne[0].treatVO.treNum}</td>
                </tr>
                <tr>
                  <td>일련번호</td>
                  <td></td>
                  <td>주민번호</td>
                  <td colSpan={6}>{patientOne[0].citizenNum}</td>
                </tr>
                <tr>
                  <td>입원과</td>
                  <td>{doctorOne.dept}</td>
                  <td>{patientOne[0].treatVO.dateVO.roomNum}호실</td>
                  <td>입원날짜</td>
                  <td colSpan={4}>
                    {patientOne[0].treatVO.dateVO.inHopi}부터
                    {patientOne[0].treatVO.dateVO.outHopi}까지
                  </td>
                </tr>
                <tr>
                  <td>환자성명</td>
                  <td>{patientOne[0].patName}</td>
                  <td>성별</td>
                  <td>{patientOne[0].gender}</td>
                  <td>연령</td>
                  <td colSpan={3}>{patientOne[0].age}</td>
                </tr>
                <tr>
                  <td>환자주소</td>
                  <td colSpan={7}>{patientOne[0].address}</td>
                </tr>
                <tr>
                  <td>진단명</td>
                  <td colSpan={7}>{patientOne[0].treatVO.disease}</td>
                </tr>
              </tbody>
            </table>
            <table className='in-date-table'>
              <tbody>
                <tr>
                  <td colSpan={8}>
                    <div className='footer'>
                      <p>위 환자는 {patientOne[0].treatVO.disease}으로 수술을 시행하였음을 확인함</p>
                      <p>수술일자:{patientOne[0].treatVO.dateVO.operDate}</p>
                      <table className='footer-table'>
                        <tbody>
                          <tr>
                            <td>발행일</td>
                            <td>{new Date().toLocaleDateString()}</td>
                          </tr>
                          <tr>
                            <td>의사성명</td>
                            <td>{doctorOne.docName}</td>
                          </tr>
                          <tr>
                            <td>면허번호</td>
                            <td>{doctorOne.docLinum}</td>
                          </tr>
                        </tbody>
                      </table>
                      <h2>그린대학병원장 </h2>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
          <div className='btn-div'>
            <button type='button' className='btn' onClick={handlePrint}>출력</button>
          </div>
      </div>
    )
    }
    </div>
  )
}

export default PrintForm2

