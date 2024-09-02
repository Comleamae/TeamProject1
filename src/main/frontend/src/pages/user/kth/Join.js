import React, { useRef, useState } from 'react'
import './Join.css'
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom'
import { joinValidate } from './joinValidate';
import axios from 'axios';

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
    memRole : 'user'
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
      newValue = citizenNum_1.current.value + '-' +citizenNum_2.current.value;
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
        if(res.data) {
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
        alert('회원가입이 완료되었습니다.')
        navigate('/user/login')
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
      navigate('/user/login')
    }
    //아니라면 그대로(공백)
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
                <div className='feedback' ref={memId_valid_tag}>아이디는 영문이며 4~12자여야 합니다.</div>
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <input type='password' name='memPw' placeholder='비밀번호' onChange={(e) => { changeJoinData(e) }} />
              <div className='feedback' ref={memPw_valid_tag}>비밀번호는 4~12자 영문,숫자로 이루어져야 합니다.</div>
            </tr>
            <tr>
              <td>비밀번호 확인</td>
              <input type='password' name='confirmPw' placeholder='비밀번호 확인' onChange={(e) => { changeJoinData(e) }} />
              <div className='feedback' ref={confirmPw_valid_tag}>비밀번호가 일치하지 않습니다.</div>
            </tr>
            <tr>
              <td>이름</td>
              <input type='text' name='memName' placeholder='이름' onChange={(e) => { changeJoinData(e) }} />
              <div className='feedback' ref={memName_valid_tag}>이름은 한글이며 2~10자여야 합니다.</div>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>
                <input type='text' name='memTel' placeholder='ex)010-0000-1111' onChange={(e) => { changeJoinData(e) }} />
                <div className='feedback' ref={memTel_valid_tag}>연락처를 확인하세요.</div>
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
                <div className='feedback' ref={citizenNum_valid_tag}>잘못된 주민번호입니다.</div>
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
    </div>
  )
}

export default Join