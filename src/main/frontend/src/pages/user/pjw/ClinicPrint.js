import React, { useEffect, useState } from 'react';
import './ClinicPrint.css';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormSelector from './FormSelector';

const ClinicPrint = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const [inputNum, setInputNum] = useState('');
  const [isConfirm, setIsConfirm] = useState(false);
  const [inputMailAddress, setInputMailAddress] = useState('');
  const [inputStatus, setInputStatus] = useState(false);
  const [recoData, setRecoData] = useState({ recoNum: 0, patNum: 0 });

  const handleMailAddressChange = (e) => {
    setInputMailAddress(e.target.value);
  };

  const handleInputNumChange = (e) => {
    setInputNum(e.target.value);
  };

  const sendEmail = (email) => {
    if (!email) {
      alert('이메일을 입력하세요');
      return;
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
        if (res.data === true) {
          alert('인증번호가 일치하지 않습니다');
          setIsConfirm(false);
        } else {
          alert('인증되었습니다');
          const data = { recoNum: num, patNum: 1 };
          window.sessionStorage.setItem('recoData', JSON.stringify(data));
          setRecoData(data);
          setIsConfirm(true);
        }
      })
      .catch((error) => {
        console.error('인증번호 확인 중 오류 발생:', error);
      });
  };

  useEffect(() => {
    if (inputMailAddress) {
      axios.post('/patient/getList', { patEmail: inputMailAddress })
        .then((res) => {
          console.log(res.data);
          // 받아온 데이터로 상태 업데이트 또는 필요한 로직 추가
        })
        .catch((error) => {
          console.error('환자 정보 조회 중 오류 발생:', error);
        });
    }
  }, [inputMailAddress]);

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
          {!inputStatus ? (
            <div>
              이메일 입력:
              <input
                type='text'
                name='toSendM'
                onChange={handleMailAddressChange}
              />
              <button
                type='button'
                onClick={() => sendEmail(inputMailAddress)}>
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
