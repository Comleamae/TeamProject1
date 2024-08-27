import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PrintForm3 = ({patNum}) => {
  const navigate = useNavigate()

  //불러온 환자 정보를 저장할 변수
  const[patientOne, setPatientOne] = useState({})

  useEffect(()=>{
    axios
    .get(``)
    .then((res)=>{
      setPatientOne(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  //불러온 의사 정보를 저장할 변수
  const[doctorOne, setDoctorOne] = useState({})

    useEffect(()=>{
      axios
      .get(``)
      .then((res)=>{
        setDoctorOne(res.data)
      })
      .catch((error)=>{
        console.log(error)
      })
    }, [])
  //처방전
  return (
    <div>
      <table className='print-table'> 
          <tr>
            <td colSpan={6}><h2>처방전</h2></td>
          </tr>
          <tr>
            <td>교부번호</td>
            <td>{}</td>
            <td>제 {}호</td>
            <td rowSpan={3}>의료기관</td>
            <td>명칭</td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}>환자</td>
            <td>성명</td>
            <td></td>
            <td>전화</td>
            <td></td>
          </tr>
          <tr>
            <td>주민등록번호</td>
            <td></td>
            <td>email</td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}>질병코드</td>
            <td></td>
            <td rowSpan={2}>처방의료인 성명</td>
            <td>의사 이름</td>
            <td>면허종별</td>
            <td>진료과이름</td>
          </tr>
          <tr>
            <td></td>
            <td>서명또는 날인</td>
            <td>면허번호</td>
            <td>제 면허번호 호</td>
          </tr>
          <tr>
            <td colSpan={6}><h4>*환자의 요구가 있는 때에는 질병분류기호를 기재하지 아니합니다.</h4></td>
          </tr>
          <tr>
            <td colSpan={2}>처방 의약품의 명칭</td>
            <td>1회 투여량</td>
            <td>1회 투여횟수</td>
            <td>투약일수</td>
            <td colSpan={2}>용별</td>
          </tr>
          {/* 반복문으로 약 정보를 가져와서 넣어줘 */}
          <tr>
            <td>사용기간</td>
            <td colSpan={2}>교부일로부터 3일간</td>
            <td colSpan={4}>*사용기간내에 약국에 제출하여야 합니다</td>
          </tr>
          <tr>
            <td colSpan={6}>의약품 조재 내역</td>
          </tr>
          <tr>
            <td rowSpan={4}>조제내역</td>
            <td>조제기관의 명칭</td>
            <td></td>
            <td colSpan={4} >처방의 변경.수정.확인대체세 그 내용 등</td>
          </tr>
          <tr>
            <td>조제약사 성명</td>
            <td></td>
            <td rowSpan={3} colSpan={5}></td>
          </tr>
          <tr>
            <td>조 제 량</td>
            <td></td>
          </tr>
          <tr>
            <td>조 제 년 월 일</td>
            <td></td>
          </tr>

        </table>
        <div className='btn-div'>
          <button type='button' className='btn' onClick={(e)=>{navigate('/user')}}>출력</button>
        </div>
    </div>
  )
}

export default PrintForm3
