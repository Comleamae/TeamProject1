import React, { useEffect, useRef, useState } from 'react';
import './ClinicPrint.css';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormSelector from './FormSelector';

const ClinicPrint = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();

  const [inputNum, setInputNum] = useState('');
  const [isConfirm, setIsConfirm] = useState(false);
  const [inputStatus, setInputStatus] = useState(false);

  //환자 전체 리스트
  const [patientList, setPatientList] = useState([])
  

  //입력받은 이메일 주민번호를 담을 객체
  const [inputData, setInputData] = useState({
    patEmail:''
    , citizenNum:''
  })

  //인증된 정보를 저장할 객체 
  const[recoData, setRecoData] = useState({
    patNum:1
    //, patNam:''
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
    setInputData(newData)
  }
  //환자 전체리스트 중 해당 주민번호를 가진 환자가 있는지 받아올 axios
  //*현재 데이터베이스에 있는 올바른 값을 넣을 경우 500번 에러로 데이터를 받아오지 못함 
  useEffect(()=>{
    axios
    .post(`/patient/getListCN`, inputData)
    .then((res)=>{
      if(res.data.length==0){
        console.log('데이터없음')
      }
      else{
        console.log('일치하는 데이터 있음')
        setPatientList(res.data)
      }
    })
    .catch((error)=>{
      console.log('환자 전체리스트 불러오기 실패', error)
    })
  }, [inputData])

  const sendEmail = (mail) => {
    if(inputData.patEmail==''){
      alert('이메일 입력바람')
      return
    }
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
          setRecoData({
            ...recoData,
            patNum:patientList[0].patNum
          })
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
                onChange={(e)=>{handleInputNumChange(e)}}
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
            <div className='recoP1'>
              <div>
                주민번호:
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
                이메일 입력:
                <input
                  type='text'
                  name='patEmail'
                  onChange={(e)=>{handleInputData(e)}}
                />
              </div>
              <div className='btn-div'>
                <button
                  type='button'
                  onClick={() => sendEmail(inputData)}>
                  인증번호 얻기
                </button>
              </div>
            </div>
          ) : (
            <div>
              인증번호:
              <input
                type='number'
                name='inputNum'
                onChange={(e)=>{handleInputNumChange(e)}}
              />
              <button
                type='button'
                onClick={() => checkNum(inputNum)}>
                인증하기
              </button>
            </div>
          )}
          {isConfirm && <FormSelector recoData={recoData} setRecoData={setRecoData}/>}
        </div>
      )}
      
    </div>
  );
};

export default ClinicPrint;
