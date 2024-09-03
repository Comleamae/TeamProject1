import axios from 'axios'
import React, { useEffect, useRef, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { generatePDF } from './utils/pdfUtils'


const PrintForm4 = () => {
  const [patientOne, setPatientOne] = useState([])
  const [doctorOne, setDoctorOne] = useState({})
  const navigate = useNavigate()
  
  const {patNum, treNum} = useParams()

  //
  const[isShow, setIsShow] = useState(false)

  // PDF 생성을 위해 참조할 요소
  const printRef = useRef();

  //불러온 한 환자의 전체 정보
  useEffect(()=>{
    axios
    .get(`/patient/getOne/${patNum}/${treNum}`)
    .then((res)=>{
      console.log(res)
      setPatientOne(res.data)
      setIsShow(true)
      const docLinum = res.data[0].treatVO.docLinum
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
  }, [treNum])

  // PDF 생성 함수
  const handlePrint = () => {
    if (printRef.current) {
      generatePDF(printRef.current, `${patientOne[0].treatVO.treDate}${patientOne[0].patName} 진료비 영수증.pdf`)
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
            <thead>
              <tr>
                <td colSpan={11}><h2>진료비 영수증</h2></td>
              </tr>
              <tr>
                <td>성명</td>
                <td colSpan={2}>{patientOne[0].patName}</td>
                <td>입원기간</td>
                <td colSpan={3}>
                    {
                      patientOne[0].treatVO.dateVO==null
                      ?
                      '통원환자'
                      :
                      patientOne[0].treatVO.dateVO.inHopi+'~'+patientOne[0].treatVO.dateVO.outHopi
                    }
                 
                </td>
                <td>진료날짜</td>
                <td colSpan={3}>
                  {
                    patientOne[0].treatVO.treDate
                  }
                </td>
              </tr>
              <tr>
                <td>진료과</td>
                <td>{doctorOne.dept}</td>
                <td colSpan={3}>병실</td>
                <td>{
                      patientOne[0].treatVO.dateVO==null
                      ?
                      '통원환자'
                      :
                      patientOne[0].treatVO.dateVO.roomNum+'호'
                    }</td>
                <td>환자구분</td>
                <td colSpan={4}>
                  {
                    patientOne[0].treatVO.dateVO==null
                    ?
                    '통원'
                    :
                    '입원'
                  }
                </td>
              </tr>
              <tr>
                <td>영수증번호</td>
                <td colSpan={4}></td>
                <td>처방여부</td>
                <td colSpan={5}>
                  {
                    patientOne[0].treatVO.recipeVO==null
                    ?
                    '처방된 약 없음'
                    :
                    '처방된 약 있음'
                  }
                </td>
              </tr>
              <tr>
                <td colSpan={3} rowSpan={3}>항목</td>
                <td colSpan={3}>급여</td>
                <td colSpan={2}>비급여</td>
                <td colSpan={3}>급액산정내용</td>
              </tr>
              <tr>
                <td colSpan={2}>일부본인부담</td>
                <td rowSpan={2}>전액 본인부담</td>
                <td rowSpan={2}>선택 진료비</td>
                <td rowSpan={2}>선택 진료비 이외</td>
                <td rowSpan={2}>진료비총액</td>
                <td rowSpan={2} colSpan={2}></td>
              </tr>
              <tr>
                <td>본인부담</td>
                <td>공단부담</td>
              </tr>
              <tr>
                <td rowSpan={9}>기본항목</td>
                <td colSpan={2}>진찰료</td>
                <td>{patientOne[0].treatVO.priceVO.trePrice}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>환자부담총액</td>
                <td colSpan={2}></td>
              </tr>
              <tr>
                <td colSpan={2}>입원료</td>
                <td>{patientOne[0].treatVO.priceVO.datePrice}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>이미 납부한 금액</td>
                <td colSpan={2}></td>
              </tr>
              <tr>
                <td colSpan={2}>식대</td>
                <td>{patientOne[0].treatVO.priceVO.eatPrice}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td rowSpan={4}>납부한 금액</td>
                <td>카드</td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan={2}>투약 및 조제료</td>
                <td>행위료</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td rowSpan={2}>현금</td>
                <td rowSpan={2}></td>
              </tr>
              <tr>
                <td>약품비</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan={2}>주사료</td>
                <td>행위료</td>
                <td>{patientOne[0].treatVO.priceVO.shotPrice}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>합계</td>
                <td></td>
              </tr>
              <tr>
                <td>약품비</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan={2}>납부하지 않은 금액</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={2}>마취료</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan={3}>현금영수증 여부</td>
              </tr>
              <tr>
                <td colSpan={2}>검사료</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan={3} rowSpan={4}>발행일:{new Date().toLocaleDateString()}</td>
              </tr>
              <tr>
                <td rowSpan={2}>선택항목</td>
                <td>영상 진단료</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>기타</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>합계</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>사업자등록번호</td>
                <td colSpan={2}></td>
                <td>상호</td>
                <td colSpan={3}>그린 대학 병원</td>
                <td>전화번호</td>
                <td colSpan={3}>052-111-2222</td>
              </tr>
              <tr>
                <td>사업장 소재지</td>
                <td colSpan={6}>울산광역시 남구 삼산동 000-000</td>
                <td>대표자</td>
                <td colSpan={3}>JOHN DOE</td>
              </tr>
              <tr>
                <td colSpan={5}>항목별 설명</td>
                <td colSpan={6}>일반사항 안내</td>
              </tr>
              <tr>
                <td colSpan={5}></td>
                <td colSpan={6}></td>
              </tr>
            </thead>
          </table>
       </div>
      <div className='btn-div'>
        <button type='button' className='btn' onClick={(e)=>{handlePrint()}}>출력</button>
      </div>
    </div>
  )
}

export default PrintForm4

