import React, { useRef, useState } from 'react'
import  './JoinStep2.css';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom'
import { joinValidate } from './joinValidate';
import axios from 'axios';

const JoinStep2 = () => {

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
    memRole: 'user'
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
      newValue = citizenNum_1.current.value + '-' + citizenNum_2.current.value;
    } else if (e.target.name == 'memEmail') {
      newValue = email_1.current.value + email_2.current.value;
    }

    else {
      newValue = e.target.value
    }

    //데이터 바꾸기
    const newData = {
      ...joinData,
      [e.target.name]: newValue
    }
    //유효성 검사 실행
    const result = joinValidate(newData, valid_tag, e.target.name);
    setValidResult(result);

    // //유효성 검사 끝난 데이터를 joinData에 저장
    setJoinData(newData);

  }


  //아이디 중복확인 버튼 클릭
  function idEnable() {
    axios.get(`/api_member/checkId/${joinData.memId}`)
      .then((res) => {
        // 사용 가능 아이디
        if (res.data) {
          setIsCheckId(true)
          alert('사용 가능한 ID입니다.')
        }
        //중복된 아이디
        else {
          setIsCheckId(false)
          alert('중복된 ID입니다.')
        }
      })
      .catch((error) => {
        console.log(error)
        alert('아이디를 입력하세요.')
      })
  }

  //회원 가입 버튼 누를 시
  function join() {
    //유효성 검사 불통과시
    if (!validResult) {
      alert('입력한 데이터를 확인해주세요.')
      return;
    }
    //아이디 중복확인 안했을 시
    if (!isCheckId) {
      alert('아이디 중복 확인은 필수입니다.')
      return;
    }
    //회원가입 완료 시
    axios.post('/api_member/join', joinData)
      .then((res) => {
        insertOne();
        alert('회원가입이 완료되었습니다.')
        console.log(joinData)
        navigate('/joinStep3')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function insertOne() {
    axios.post('/api_member/insertOne', joinData)
      .then((res) => {
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // 가입 취소
  function joinCancel() {
    const cancelChk = window.confirm('가입을 취소하겠습니까?')
    //가입 취소버튼 누를 시 로그인 화면으로
    if (cancelChk) {
      navigate('/login')
    }
    //아니라면 그대로(공백)
  }

  return (
    <div className='join-div'>
      <div className='user-div'>
        <h1>통합회원가입</h1>
        <p>그린대학교병원 통합회원가입을 환영합니다🎉🎉</p>
      </div>
      <div className='user-login-txt'>
        <h2>
          <strong>그린대학교병원 통합회원가입을 환영합니다.</strong><br />
          한 번의 통합회원 가입으로 모든 사이트 이용이 가능합니다.
        </h2>
      </div>

      <div className='join-box'>
        <div className='join-checklist'>
          <div><p>약관동의 및 본인인증</p> <span>01</span></div>
          <div className='join-checklist-div'><p>회원정보입력</p> <span>02</span></div>
          <div><p>회원가입완료</p> <span>03</span></div>
        </div>
        <div className='join-imgdiv'>
          <img src='http://localhost:8080/images/bg_bar.gif' />
          <h5>통합회원기본 정보</h5>
        </div>
        <table className='join-table'>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <input className='input-txt' type='text' name='memId' placeholder='아이디'
                  onChange={(e) => {
                    changeJoinData(e);
                    setIsCheckId(false);
                  }} />
                <button type='button' className='btn-1' onClick={(e) => { idEnable() }}> 중복 확인</button>
                <div className='feedback' ref={memId_valid_tag}> 아이디는 영문이며 4~12자여야 합니다.</div>
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input className='input-txt' type='password' name='memPw' placeholder='비밀번호' onChange={(e) => { changeJoinData(e) }} />
                <div className='feedback' ref={memPw_valid_tag}>비밀번호는 4~12자 영문,숫자로 이루어져야 합니다.</div>
              </td>
            </tr>
            <tr>
              <td>비밀번호 확인</td>
              <td>
                <input className='input-txt' type='password' name='confirmPw' placeholder='비밀번호 확인' onChange={(e) => { changeJoinData(e) }} />
                <div className='feedback' ref={confirmPw_valid_tag}>비밀번호가 일치하지 않습니다.</div>
              </td>
            </tr>
            <tr>
              <td>이름</td>
              <td>
                <input className='input-txt' type='text' name='memName' placeholder='이름' onChange={(e) => { changeJoinData(e) }} />
                <div className='feedback' ref={memName_valid_tag}>이름은 한글이며 2~10자여야 합니다.</div>
              </td>
            </tr>
            <tr>
              <td>주민번호</td>
              <td>
                <input className='input-txt2' type='text' name='citizenNum' placeholder='주민번호 앞자리' ref={citizenNum_1} onChange={(e) => { changeJoinData(e) }} /> -
                <input className='input-txt2' type='password' name='citizenNum' placeholder='주민번호 뒷자리' ref={citizenNum_2} onChange={(e) => { changeJoinData(e) }} />
                <div className='feedback' ref={citizenNum_valid_tag}>잘못된 주민번호입니다.</div>
              </td>
            </tr>
            <tr>
              <td>우편번호</td>
              <td>
                <input className='input-txt2' type='text' name='post' placeholder='우편번호' value={joinData.post} onClick={(e) => { handleClick() }} readOnly onChange={(e) => { changeJoinData(e) }} />
                <button className='btn-1' type='button' onClick={(e) => { handleClick() }} >주소 검색</button>
              </td>
            </tr>
            <tr>
              <td>주소</td>
              <td><input className='input-txt' type='text' name='memAddr' placeholder='주소' value={joinData.memAddr} onClick={(e) => { handleClick() }} readOnly onChange={(e) => { changeJoinData(e) }} /></td>
            </tr>
            <tr>
              <td>상세주소</td>
              <td><input className='input-txt' type='text' name='addrDetail' placeholder='상세주소' onChange={(e) => { changeJoinData(e) }} /></td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>
                <input className='input-txt' type='text' name='memTel' placeholder='010-0000-1111' onChange={(e) => { changeJoinData(e) }} />
                <div className='feedback' ref={memTel_valid_tag}>연락처를 확인하세요</div>
              </td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>
                <input className='input-txt2' type='text' name='memEmail' placeholder='abc123@naver.com' ref={email_1} onChange={(e) => { changeJoinData(e) }} /> @
                <select className='email-box' name='memEmail' ref={email_2} defaultValue={'@naver.com'} onChange={(e) => { changeJoinData(e) }} >
                  <option value={'@naver.com'}>naver.com</option>
                  <option value={'@kakao.com'}>kakao.com</option>
                  <option value={'@gmail.com'}>gmail.com</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <div className='join-btn-div'>
        <button type='button' name='join-cancel' className='btn-2' onClick={(e) => { joinCancel() }}>취소</button>
          <button type='button' name='join' className='btn-1' onClick={(e) => { join() }}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  )
}

export default JoinStep2