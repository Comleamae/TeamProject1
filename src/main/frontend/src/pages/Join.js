import React, { useRef, useState } from 'react'
import './Join.css'
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom'
import { joinValidate } from './joinValidate';
import axios from 'axios';
import { Modal } from 'bootstrap';
const Join = () => {

  const navigate = useNavigate()

  //다음 주소 api 사용
  const open = useDaumPostcodePopup()

  //주소 검색창 닫힐 때
  function handleComplete(data) {

    //검색 내용 input태그에 입력
    setJoinData({
      ...joinData,
      //우편번호
      post: data.zonecode,
      //도로명주소
      memAddr: data.roadAddress
    });
  }

  //주소 검색 버튼 & 주소 클릭 시 실행되는 함수 => 검색창 켜짐
  function handleClick() {
    open({ onComplete: handleComplete });
  }

  // 회원가입 성공 여부 state변수


  // 모달창이 띄워질 여부 state 변수(초기값 false)
  const [isShow, setIsShow] = useState(false)

  // 모달창의 내용을 설정할 함수
  function setModalContent() {
    {
      //중복 확인 버튼 눌렀을 때 되고 / 말고
      //회원가입 눌렀을 때 유효성 / 중복 버튼 여부 / 완료 시
      //이러한 조건을 만들기 위한 변수를 따로 지정해야한다. 혹은 case문을 사용한다.
      
      return (
        <div></div>
      )
    }
  }

  // 모달창 닫혔을 때 실행할 함수
  // func


  //id 중복 체크 여부를 저장할 변수
  const [isCheckId, setIsCheckId] = useState(false);

  //회원가입 쿼리 실행 시 가져갈 데이터
  const [joinData, setJoinData] = useState({
    memId: '',
    memPw: '',
    confirmPw: '',
    memName: '',
    memTel: '',
    memEmail: '',
    citizenNum: '',
    post: '',
    memAddr: '',
    addrDetail: '',
  })

  // 태그 참조
  const memId_valid_tag = useRef();
  const memPw_valid_tag = useRef();
  const confirmPw_valid_tag = useRef();
  const memName_valid_tag = useRef();
  const memTel_valid_tag = useRef();
  const email_1 = useRef();
  const email_2 = useRef();
  const citizenNum_1 = useRef();
  const citizenNum_2 = useRef();
  const citizenNum_valid_tag = useRef();

  const valid_tag = [
    memId_valid_tag,
    memPw_valid_tag,
    confirmPw_valid_tag,
    memName_valid_tag,
    memTel_valid_tag,
    citizenNum_valid_tag
  ]

  // 유효성 검사결과 받아올 state 변수
  const [validResult, setValidResult] = useState(false);


  //데이터 입력 때마다
  function changeJoinData(e) {

    //삼항연산자 사용을 위한 변수
    let newValue;
    if (e.target.name == 'citizenNum') {
      newValue = citizenNum_1.current.value + citizenNum_2.current.value;
    } else if (e.target.name == 'memEmail') {
      newValue = email_1.current.value + email_2.current.value;
    } else {
      newValue = e.target.value
    }



    const newData = {
      ...joinData,
      [e.target.name]: newValue
    }
    const result = joinValidate(newData, valid_tag, e.target.name);
    setValidResult(result);

    // //유효성 검사 끝난 데이터를 joinData에 저장
    setJoinData(newData);

  }


  //아이디 중복확인 버튼 클릭
  function idEnable() {
    axios.get(`/api_member/checkId/${joinData.memId}`)
      .then((res) => {
        if (res.data) {
          setIsCheckId(true)
        }
        else {
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  //회원 가입 버튼 누를 시
  function join() {
    // setIsShow(true)
    console.log(joinData)
    if (!validResult) {
      alert('입력 데이터 확인하세요')
      return;
    }
    if (!isCheckId) {
      alert('ID 중복 체크 하세요')
      return;
    }
    axios.post('api_member/join', joinData)
      .then((res) => {
        alert('회원가입 완료')
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // 가입 취소
  function joinCancel() {
    const cancelChk = window.confirm('가입을 취소하겠습니까?')
    if (cancelChk) {
      navigate('/loginForm')
    }
  }

  return (
    <div className='join-div'>
      <div><h3>회원가입 페이지</h3></div>
      <div>
        <table className='join-table'>
          {/* <colgroup>
            <col width='5%'></col>
            <col width='95%'></col>
          </colgroup> */}
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <div>
                  <input type='text' name='memId' placeholder='아이디'
                    onChange={(e) => {
                      changeJoinData(e);
                      setIsCheckId(false);
                    }} />
                  <button type='button' className='btn-div' onClick={(e) => { idEnable() }}>중복 확인</button></div>
                <div className='feedback' ref={memId_valid_tag}></div>
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td><input type='password' name='memPw' placeholder='비밀번호' onChange={(e) => { changeJoinData(e) }} /></td>
              <div className='feedback' ref={memPw_valid_tag}></div>
            </tr>
            <tr>
              <td>비밀번호 확인</td>
              <td><input type='password' name='confirmPw' placeholder='비밀번호 확인' onChange={(e) => { changeJoinData(e) }} /></td>
              <div className='feedback' ref={confirmPw_valid_tag}></div>
            </tr>
            <tr>
              <td>이름</td>
              <td><input type='text' name='memName' placeholder='이름' onChange={(e) => { changeJoinData(e) }} /></td>
              <div className='feedback' ref={memName_valid_tag}></div>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>
                <input type='text' name='memTel' placeholder='전화번호는 - 없이 입력하세요' onChange={(e) => { changeJoinData(e) }} />
                <div className='feedback' ref={memTel_valid_tag}></div>
              </td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>
                <input type='text' name='memEmail' placeholder='ex)abc123@naver.com' ref={email_1} onChange={(e) => { changeJoinData(e) }} />@
                <select name='memEmail' ref={email_2} defaultValue={'@naver.com'} onChange={(e) => { changeJoinData(e) }} >
                  <option value={'@naver.com'}>naver.com</option>
                  <option value={'@kakao.com'}>kakao.com</option>
                  <option value={'@gmail.com'}>gmail.com</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>주민번호</td>
              <td>
                <input type='text' name='citizenNum' placeholder='주민번호 앞자리' ref={citizenNum_1} onChange={(e) => { changeJoinData(e) }} /> -
                <input type='password' name='citizenNum' placeholder='주민번호 뒷자리' ref={citizenNum_2} onChange={(e) => { changeJoinData(e) }} />
                <div className='feedback' ref={citizenNum_valid_tag}></div>
              </td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                <div><input type='text' name='post' placeholder='우편번호' value={joinData.post} onClick={(e) => { handleClick() }} readOnly onChange={(e) => { changeJoinData(e) }} /><button type='button' onClick={(e) => { handleClick() }} >주소 검색</button></div>
                <div><input type='text' name='memAddr' placeholder='주소' value={joinData.memAddr} onClick={(e) => { handleClick() }} readOnly onChange={(e) => { changeJoinData(e) }} /></div>
                <div><input type='text' name='addrDetail' placeholder='상세주소' onChange={(e) => { changeJoinData(e) }} /></div>
              </td>
            </tr>
          </tbody>
        </table>

        <button type='button' name='join' className='btn-div' onClick={(e) => { join() }}>회원가입</button>
        <button type='button' name='join-cancel' className='btn-div' onClick={(e) => { joinCancel() }}>취소</button>
      </div>


      {
        isShow
        ?
        <Modal setIsShow={setIsShow}
        setModalContent={setModalContent}
        />
        :
        null
      }
    </div>
  )
}

export default Join