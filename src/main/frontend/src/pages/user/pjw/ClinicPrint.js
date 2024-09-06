import React, { useEffect, useRef, useState } from 'react';
import './ClinicPrint.css';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormSelector from './FormSelector';


// 매개변수로 로그인 여부 가져온다. (setIsLogin 제외 / 추가로 로그인 정보도 필요함.)
const ClinicPrint = ({isLogin, setIsLogin}) => {
  const navigate = useNavigate();

  //선택한 날짜를 담을 변수
  const [selectData, setSelectData] = useState(
    {patNum:0
    , treNum:0}
  )

  //인증번호 저장할state 변수
  const [inputNum, setInputNum] = useState('');

  //인증번호 확인여부 state변수
  const [isConfirm, setIsConfirm] = useState(false);
  
  //환자 전체 리스트
  const [patientList, setPatientList] = useState([])
  
  //인증에 필요한 정보 입력 한 여부 => 이메일과 주민번호 받은 지 확인할 state변수
  const [inputStatus, setInputStatus] = useState(false);

  //버튼의 상태를 저장할 변수
  const[buttonStatus, setButtonStatus] = useState(false)
  //입력받은 이메일 주민번호를 담을 객체
  const [inputData, setInputData] = useState({
    patEmail:''
    , citizenNum:''
  })

  //인증된 정보를 저장할 객체 
  const[recoData, setRecoData] = useState({
    patNum:0
  })

  // 주민번호 정보
  const citizenNum_1 = useRef()
  const citizenNum_2 = useRef()

  // 세션에 저장된 정보는 받아온 isLogin


  //인증번호 입력 시마다 state변수에 저장
  const handleInputNumChange = (e) => {
    setInputNum(e.target.value);
  };


  // 비동기 해결을 위한 useEffect 
  // *useEffect는 화면을 다시 그린다 그렇기에 다른 내용을 넣지 않아도 
  // 화면 전체를 다시 그리는 기능을 수행한다
  useEffect(()=>{
    if(inputData.patEmail != ''){
      sendEmail(inputData) 
    }
  },[inputData.patEmail])

  // 인증받을 이메일과 주민 번호 입력 시마다 state변수에 저장
  const handleInputData = (e)=>{
    const newData = {
      ...inputData,
      [e.target.name]:e.target.name!='citizenNum'
                                      ? e.target.value
                                      : citizenNum_1.current.value+'-'+citizenNum_2.current.value
    }
    setInputData(newData)
  }
  //환자 전체리스트 중 해당 주민번호를 가진 환자가 있는지 받아올 axios
  //비회원
  function unLoginAxios(){
    if(inputData.citizenNum.length!=14){
      alert('주민번호를 확인해주세요')
      return
    }
    axios
    .post(`/patient/getListCN`, inputData)
    .then((res)=>{
      if(res.data.length==0){
        alert('해당하는 주민번호의 환자가 없습니다')
        setButtonStatus(true)
      }
      else{
        setRecoData({
          ...recoData,
          patNum:res.data[0].patNum
        })
        setButtonStatus(false)
      }
    })
    .catch((error)=>{
      console.log('비회원 환자 전체리스트 불러오기 실패', error)
    })
  }

  //회원 전체리스트 중 해당 주민번호를 가진 환자가 있는지 받아올 axios
  //회원
  function onLoginAxios(){

  if(inputData.citizenNum.length!=14){
      alert('주민번호를 확인해주세요')
      return
    }

    axios
    .post(`/api_member/isCitizen`, inputData)
    .then((res)=>{
      if(res.data[0].citizenNum==isLogin.citizenNum){
        console.log('1차성공')
        const newData = ({
          citizenNum:res.data[0].citizenNum
        })
        axios
        .post('/patient/getListCN', newData)
        .then((dres)=>{
          console.log(dres)
          if(dres.length!=0){
            setRecoData({
              ...recoData,
              patNum:dres.data[0].patNum
            })
            setInputData(
              {
                ...inputData,
                patEmail:isLogin.memEmail
              })       
          }
          else{
            console.log(dres)
            alert('해당하는 환자가 없습니다')
          }
        })
        .catch((error)=>{
          console.log('2차 결과 에러', error)
        })
        
      }
    })
    .catch((error)=>{
      console.log('로그인한 회원 정보 불러오기 실패', error)
    })
  }

  const sendEmail = (mail) => {
    //이메일 미 입력시
    if(!inputData.patEmail){
      alert('이메일 확인부탁드립니다')
      return
    }
    //이메일 발송
    axios.post('/mail/sendMail', mail)
      .then(() => {
          alert('이메일을 발송했습니다');
          setInputStatus(true);
        })
      .catch((error) => {
        console.error('이메일 발송 중 오류 발생:', error);
      });
  };

  //인증번호가 맞는지 확인하고 recoData에 해당 정보를 저장
  const checkNum = (num) => {
    if (!num) {
      alert('인증번호를 입력하세요');
      return;
    }
    axios.post('/mail/checkNum', { num })
      .then((res) => {
        if (res.data == true) {
          alert('인증번호가 일치하지 않습니다');
          setIsConfirm(false);
        } else {
          alert('인증되었습니다');
          setIsConfirm(true);
          console.log(recoData)
        }
      })
      .catch((error) => {
        console.error('인증번호 확인 중 오류 발생:', error);
      });
  };

  return (
    // 로그인 상태에서 발급 받기
    <div className='app-content-div'>
      {sessionStorage.length!=0
        ? (
        <div className='selfDefWhenLogin'>
            <h2>회원 발급</h2>
            {/* 인증 단계별 화면 구현/ 주민번호 입력 확인 화면: 인증번호 입력 화면 */}
            {!inputStatus ?(
              <div className='recoP1'>
                <div className='numPress'>
                  <h4>주민번호</h4>
                  <input 
                    type='text' 
                    name='citizenNum'
                    onChange={(e)=>{handleInputData(e)}}
                    ref={citizenNum_1}/>
                  -
                  <input 
                    type='password'
                    name='citizenNum'
                    onChange={(e)=>{handleInputData(e)}}
                    ref={citizenNum_2}/>
                </div>
                <div className='btn-div-in'>
                  <button
                    type='button'
                    className='btn'
                    onClick={(e) => {
                      onLoginAxios()}}>
                    인증번호 얻기
                  </button>
                </div>
            </div>
              ):
            (
            <>
              <p>인증번호
                <input
                  type='number'
                  name='input'
                  onChange={(e)=>{handleInputNumChange(e)}}
                />
              </p>
              <div className='btn-div-in'>
                <button
                  type='button'
                  className='btn'
                  onClick={(e) => {checkNum(inputNum)}}>
                  인증하기
                </button>
              </div>
            </>
          )
          }
            
          {isConfirm && <FormSelector  recoData={recoData} setRecoData={setRecoData} selectData={selectData} setSelectData={setSelectData}/>}
        </div>
      ) : 
      // 비로그인 상태에서 발급받기
      (
        <div className='selfDefWhenLogin'>
          <div className='print-div'>
            <h1>비회원 발급</h1>
            <p>주민등륵번호와 이메일을 입력해주세요</p>
          </div>
          {/* 인증 단계별 화면 구현 /  주민번호와 이메일 입력 화면 : 인증번호 입력 화면  */}
          {!inputStatus ? (
            <div className='recoP1'>
              <div className='numPress'>
                <div>
                  <h4>주민번호</h4>
                  <input 
                    type='text' 
                    name='citizenNum'
                    onChange={(e)=>{handleInputData(e)}}
                    ref={citizenNum_1}/>
                  -
                  <input 
                    type='password'
                    name='citizenNum'
                    onChange={(e)=>{handleInputData(e)}}
                    ref={citizenNum_2}/>
                </div>
                <div>
                  <h4>이메일 입력</h4>
                  <input
                    type='text'
                    name='patEmail'
                    onChange={(e)=>{handleInputData(e)}}
                  />
                </div>
              </div>
              <div className='btn-div-in'>
                <button
                  type='button'
                  className='btn'
                  disabled={buttonStatus}
                  onClick={() => {
                    unLoginAxios()
                    }}>
                  인증번호 얻기
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className='numPress'>
                <h4>인증번호</h4>
                <input
                  type='number'
                  name='inputNum'
                  onChange={(e)=>{handleInputNumChange(e)}}
                />
              </div>
             <div className='btn-div-in'>
                <button
                  type='button'
                  className='btn'
                  onClick={() => checkNum(inputNum)}>
                  인증하기
                </button>
             </div>
            </div>
          )}
          {isConfirm && <FormSelector recoData={recoData} setRecoData={setRecoData} selectData={selectData} setSelectData={setSelectData}/>}
        </div>
      )}
      
    </div>
  );
};

export default ClinicPrint;
