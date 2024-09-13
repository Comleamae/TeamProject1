import React, { useState } from 'react'
import './SearchStaff.css'
import axios from 'axios'


const SearchStaff = () => {

  // 검색창에 입력한 내용
  const [staffInfo, setStaffInfo] = useState({
    docName: '',
    deptName: ''
  })


  // 검색된 내용(여러명 조회 될 수 있으니 list 형태로 저장)
  const [searchResult, setSearchResult] = useState([])


  // 이름으로 조회
  function searchStaffByName() {
    axios.get(`/doctor/searchStaffByName/${staffInfo.docName}`)
      .then((res) => {
        setSearchResult(res.data)
        // res.data.map((staff, i)=>{
        //   console.log(staff.docName)
        // })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // 검색할 내용 state변수에 담기
  function changeSearchInfo(e) {
    setStaffInfo({
      ...staffInfo,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='search-staff-container'>

      <div className='searchStaff'>
        <h3>이름으로 검색</h3>
        <input type='text' placeholder='이름' name='docName' onChange={(e) => { changeSearchInfo(e) }}></input>
        <button type='button' onClick={(e) => { searchStaffByName() }}> 검색 </button>
        {/* <button type='button' onClick={(e)=>{console.log(searchResult.docName)}}></button> */}
        <div>
          <table>
            <tr>
              <td>의사명</td>
              <td>진료과</td>
            </tr>
            {
              // 여러명 나올 수도 있음
              // 여기를 '검색 결과는 ~~~입니다' 느낌으로
              searchResult.map((staff, i) => {
                console.log(staff)
                return (
                  <tr key={i}>
                    <td>{staff.docName}</td>
                    <td>{staff.mediDeptVO.deptName}</td>
                  </tr>
                )
              })}
          </table>
        </div>

      </div>


      <div className='searchSubject'>
        <h3>의료과로 검색</h3>
        {/* 메인 과 선택 (option값은 현재 임시입력 상태) */}
        <select className='mainSubject'>
          <option>외과</option>
          <option>내과</option>
          <option>소아과</option>
        </select>

        {/* 세부 과 선택 (option값은 현재 임시입력 상태) */}
        <select className='subSubject'>
          <option>흉부</option>
          <option>신경</option>
          <option>관절</option>
        </select>
        <button type='button'> 검색 </button>
      </div>
    </div>
  )
}

export default SearchStaff