import React from 'react'
import './JoinStep2.css'
import { useNavigate } from 'react-router-dom'
import { FaPeopleGroup } from "react-icons/fa6"; //사람아이콘
import { FaChildren } from "react-icons/fa6"; //어린이 아이콘


const JoinStep1 = () => {

  const navigate = useNavigate();

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
          <div className='join-checklist-div'><p>약관동의 및 본인인증</p> <span>01</span></div>
          <div><p>회원정보입력</p> <span>02</span></div>
          <div><p>회원가입완료</p> <span>03</span></div>
        </div>
        <div className='join-imgdiv'>
          <img src='http://localhost:8080/images/bg_bar.gif' />
          <h5>통합회원기본 정보</h5>
        </div>
        <h1>회원 가입</h1>
        <div className='join-agree'>
          <div onClick={(e) => { navigate('/joinStep2') }}>
            <h3>일반인 회원가입</h3>
            <p>만 14세 이상 내국인</p>
            <FaPeopleGroup className='icon'/>
          </div>
          <div onClick={(e) => { navigate('/joinStep2') }}>
            <h3>어린이 회원가입</h3>
            <p>만 14세 미만 내국인</p>
            <FaChildren className='icon'/>
          </div>
          <div onClick={(e) => { navigate('/admin/join') }}>
            <h3>직원용 회원가입</h3>
            <p>준비중</p>
            {/* < className='icon'/> */}
          </div>
        </div>
        <div>
          <h2>이용 약관(*필수 사항)</h2>
          <textarea>
            제1장 총칙
            제1조 목적
            이 약관은 그린대학교병원(이하 "병원"이라 한다)에서 운영하는 인터넷 홈페이지의 서비스(이하 "서비스"라 한다)를
            이용함에 있어 사이트와 이용자의 권리 의무 및 책임사항을 규정함을 목적으로 합니다.

            제2조 용어정의
            이 약관에서 사용하는 용어의 정의는 다음과 같습니다.

            (1)"사이트"라 함은 병원이 컴퓨터 등 정보통신 설비를 이용하여 제공할 수 있도록 설정한 가상의 공간을 말합니다.
            (2)"서비스"라 함은 병원의 홈페이지 및 병원이 운영하는 인터넷사이트 등에서 제공하는 인터넷상의 모든 서비스를
            말합니다.
            (3)"회원(이용자)"이라 함은 본 약관에 동의하고, 인터넷 홈페이지에 로그인하여 본 약관에 따라 병원이 제공하는
            서비스를 받는 자를 말합니다.
            (4)"운영자"라 함은 서비스의 전반적인 관리와 원활한 운영을 위하여 병원에서 선정한 사람을 말합니다.
            (5)"ID"라 함은 회원이 서비스에 제공받기 위하여 본 사이트로 접속할 수 있는 Login 명을 의미하며 한글, 영문과 숫자의
            조합으로 6자에서 15자 사이로 하고 한글은 3글자에서 8글자 사이로 합니다.
            (6)"비밀번호"라 함은 회원의 비밀보호 및 회원 본인임을 확인하고 서비스에 제공되는 각종 정보의 보안을 위해 회원
            자신이 설정하며 회사가 승인하는 영문소문자, 대문자, 숫자의 혼합 등으로 9자에서 16자 사이로 표기한 암호문자를 말합니다.
            (7)"개인정보"라 함은 당해 정보에 포함되어 있는 성명, 연락처, 주민등록번호 등의 사항에 의하여 특정 개인을 식별할 수 있는 정보를 말합니다.
            (8)회원은 웹회원, 진료회원, 직원/동문회원, 운영자로 구분되며, 각 회원은 다음과 같은 권한을 가지고 있습니다.
          </textarea>
        </div>
        <span><input type='checkbox' />이용 약관에 동의합니다</span>
        <div>
          <h2>개인 정보 수집 이용 목적(*필수 사항)</h2>
          <textarea>
            이용목적
            홈페이지 회원관리, 진료예약 및 증명서 발급 등 각종 서비스

            수집 항목
            -필수항목:

            성명, 성별, 국적, 생년월일, 자택주소, ID/비밀번호, e-mail, 휴대전화번호, CI, DI
            (만14세 미만 아동의 경우 법정대리인 정보(성명, 생년월일, 휴대전화번호, CI, DI, 환자와의 관계),환아 주민등록번호)
            (진료회원의 경우 주민등록번호 또는 진찰권번호(환자번호))
            (직원의 경우 사번, 주민등록번호)

            -선택항목:

            네이버 아이디
            보유 및 이용기간
            홈페이지 회원가입 탈퇴시까지 혹은 회원가입 시 선택한 보유기간(2/3/5년)까지
            단, 진료서비스 제공을 위하여 수집된 경우 의료법 기준에 준함(의료법 시행규칙 제15조에 명시된 기간)
          </textarea>
        </div>
        <span><input type='checkbox' />개인정보 수집에 동의합니다</span>
      </div>
    </div>
  )
}

export default JoinStep1