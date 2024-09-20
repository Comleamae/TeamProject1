import React, { useEffect, useState } from 'react'
import './SearchStaff.css'
import axios from 'axios'


const SearchStaff = () => {

  const deptList = [];

  // 검색창에 입력한 내용
  const [staffInfo, setStaffInfo] = useState({
    docName: '',
    deptName: ''
  })

  // 검색된 내용(여러명 조회 될 수 있으니 list 형태로 저장)
  const [searchResult, setSearchResult] = useState([])

  // 진료과 조회에 넣을 진료과 목록 STATE변수
  const [searchDept, setSearchDept] = useState([])

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

  // 진료과로 조회할 진료과 불러오기
  useEffect(() => {
    axios.get('/doctor/getDeptNames')
      .then((res) => {
        deptList = res.data;
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

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
          <h1>검색 결과</h1>
          <table>
            <tr>
              <td>의사명</td>
              <td>진료과</td>
            </tr>
            {
              // isResultShow(); 처음에는 검색 결과 안 보이도록
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

      <h3>의료과로 검색</h3>

      {/* 과 선택 (option값은 현재 임시입력 상태) */}
      <select className='searchDept'>
        {
          deptList.map((dept, i) => {            
            return(
              <option key={i}>{dept}</option>
            )
          })
        }
      </select>
      <button type='button'> 검색 </button>
    </div>
  )
}

export default SearchStaff