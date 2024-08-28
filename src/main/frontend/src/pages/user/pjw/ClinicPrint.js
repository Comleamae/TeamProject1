import React, { useEffect, useRef, useState } from 'react';
import './ClinicPrint.css';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormSelector from './FormSelector';

const ClinicPrint = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const [inputNum, setInputNum] = useState('');
  const [isConfirm, setIsConfirm] = useState(false);
  //const [inputMailAddress, setInputMailAddress] = useState('');
  const [inputStatus, setInputStatus] = useState(false);
  const [inputCitizenNum, setInputCitiznenNum] = useState(0);
  

  //객체 이메일 주민번호
  const [inputData, setInputData] = useState({
    patEmail:''
    , citizenNum:''
  })

  // 주민번호 정보
  const citizenNum_1 = useRef()
  const citizenNum_2 = useRef()


  const handleInputNumChange = (e) => {
    setInputNum(e.target.value);
  };

  
  const handleInputData = (e)=>{
    const newData = {
      ...inputData,
      [e.target.name]:e.target.name!='citizenNum'
                                      ? e.target.value
                                      : citizenNum_1.current.value+citizenNum_2.current.value
    }
    console.log(newData)
    setInputData(newData)
  }
  //환자 전체리스트 중 해당 주민번호를 가진 환자가 있는지 받아올 axios
  useEffect(()=>{
    axios
    .post(`/patient/`, inputData.citizenNum)
    .then((res)=>{})
    .catch((error)=>{})
  }, [])

  const sendEmail = (email) => {
    if (!email) {
      alert('이메일을 입력하세요');
      return;
    }
    if(!inputData.citizenNum){
      alert('주민번호를 입력하세요')
      return
    }
    axios.post('/mail/sendMail', { email })
      .then(() => {
        alert('이메일을 발송했습니다');
        setInputStatus(true);
      })
      .catch((error) => {
        console.error('이메일 발송 중 오류 발생:', error);
      });
  };

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
        }
      })
      .catch((error) => {
        console.error('인증번호 확인 중 오류 발생:', error);
      });
  };

  return (
    <div className='app-content-div'>
      {isLogin ? (
        <div className='selfDefWhenLogin'>
          <div>
            <h2>회원 발급</h2>
            <button
              type='button'
              onClick={() => sendEmail('회원의 이메일')}>
              인증번호 얻기
            </button>
            <p>인증번호:
              <input
                type='number'
                name='input'
                onChange={handleInputNumChange}
              />
            </p>
          </div>
          <button
            type='button'
            onClick={() => checkNum(inputNum)}>
            인증하기
          </button>
          {isConfirm && <FormSelector />}
        </div>
      ) : (
        <div className='selfDefWhenLogin'>
          <h2>비회원 발급</h2>
          <button type='button' onClick={(e)=>{setInputStatus(!inputStatus)}}>이메일 인증 상태 변경</button>
          <button type='button' onClick={(e)=>{setIsConfirm(!isConfirm)}}>번호 인증 상태 변경</button>
          {!inputStatus ? (
            <div>
              주민번호:
              <input 
                type='text' 
                name='citizenNum'
                onChange={handleInputData}
                ref={citizenNum_1}/>
              -
              <input 
                type='password'
                name='citizenNum'
                onChange={handleInputData}
                ref={citizenNum_2}/>
              이메일 입력:
              <input
                type='text'
                name='patEmail'
                onChange={handleInputData}
              />
              <button
                type='button'
                onClick={() => sendEmail(inputData.patEmail)}>
                인증번호 얻기
              </button>
            </div>
          ) : (
            <div>
              인증번호:
              <input
                type='number'
                name='inputNum'
                onChange={handleInputNumChange}
              />
              <button
                type='button'
                onClick={() => checkNum(inputNum)}>
                인증하기
              </button>
            </div>
          )}
          {isConfirm && <FormSelector />}
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default ClinicPrint;
