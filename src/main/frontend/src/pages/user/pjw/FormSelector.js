import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const FormSelector = ({recoData, setRecoData}) => {

  //환자의 진료 기록 날짜를 저장 받을 변수
  const[treDateList, setTreDateList] = useState([])

  //선택한 날짜를 담을 변수
  const[selectData, setSelectData]=useState({
    patNum:recoData.patNum
    , treNum:0
  })

  
  const[isShow, setIsShow] = useState(false)

  //선택된 날짜를 변경할 함수
  function handleChangeData(e){
    setSelectData({
      ...selectData,
      treNum:parseInt(e.target.value, 10)
    })
    console.log(selectData)
  }

  const navigate = useNavigate()
  //해당 환자가 받았던 진료 기록의 리스트를 받아올것
  useEffect(()=>{
    axios
    .post(`/patient/treDateList`, recoData)
    .then((res)=>{
      setTreDateList(res.data)
      setIsShow(true)
    })
    .catch((error)=>{
      console.log('진료기록리스트에서 에러', error)
    })
  },[])

  useEffect(() => {
    if (treDateList.length > 0) {
      // treList가 업데이트된 후에 selectData의 treDate를 설정
      setSelectData(prevState => ({
        ...prevState,
        treNum: treDateList[0].treNum
      }));
      console.log(selectData)
    }
  }, [treDateList]);

  return (
    <>
      <div className='form-selector'>
        <div onClick={(e)=>{navigate(`/user/clinicPrint/printForm/${selectData.patNum}/${selectData.treNum}`)}}>
          진료확인서
        </div>
        <div onClick={(e)=>{navigate(`/user/clinicPrint/printForm2/${selectData.patNum}/${selectData.treNum}`)}}>
          수술확인서
        </div>
        <div onClick={(e)=>{navigate(`/user/clinicPrint/printForm3/${selectData.patNum}/${selectData.treNum}`)}}>
          처방전
        </div>
        <div onClick={(e)=>{navigate(`/user/clinicPrint/printForm4/${selectData.patNum}/${selectData.treNum}`)}}>
          영수증
        </div>
      </div>
        {
          isShow==false
          ?
          null
          :
          <div className='date-selector'>
            {/* 반복돌려서 하나씩 진료 날짜를 넣어줄 것*/}
            <p>출력을 원하는 진료 날짜</p>
            {/* 선택된 날짜의 데이터를 변수에 넣어서 outlet으로 보내자*/}
            <select name='treDate' value={selectData.treDate} onChange={(e)=>{handleChangeData(e)}}>
              {
                treDateList.length > 0 
                ?
                treDateList.map((dateOne, i)=>{
                  return(
                    <option key={i} value={dateOne.treNum}>
                      {dateOne.treDate}
                    </option>
                  )
                })
                : 
                (
                  <option disabled>진료 기록이 없습니다</option>
                )
              }
            </select>
          </div>
        }
        <Outlet/>
      
    </>
  )
}

export default FormSelector
