import React from 'react'
import '../reset.css'
import './Footer.css'
import { BiSolidPhoneCall } from "react-icons/bi"; //대표전화 아이콘

const Footer = () => {
  return (
  <div id='footer' class="footer">
    <div>
      <div className='footer-content'>
        <div className='call-div'>
          <BiSolidPhoneCall className='icon-1'/>
          <h1>대표전화 : 1588-1234</h1>
        </div>
        <ul class="f_mark">
          <li><img src="http://localhost:8080/images/f_mark_isms.png" class="markImg" />
          <span>인증범위 : 의료정보시스템 (OCS, EMR) 및 홈페이지 서비스 운영<br/>유효기간 : 2024.01.20 ~ 2027.01.19</span>
          </li>
          <li><img src="http://localhost:8080/images/f_mark_alio.png" alt="공공기관 채용정보 시스템" class="markImg"/><span>ALIO JOB-ALIO</span>
          </li>
          <li><img src="http://localhost:8080/images/f_mark_koiha.png" alt="HEALTHCARE QUALITY PATIENT SAFETY 보건복지부 인증 의료기관" class="markImg"/><span>보건복지부 의료기관 평가인증</span>
          </li>
        </ul>
      </div>
      <div>
        <ul class="f_menu">
          <li><a class="point" href="/">개인정보처리방침</a></li>
          <li><a href="/">영상정보처리기기 설치운영방침</a></li>
          <li><a href="/pnuh/etc/refusal.do">이메일주소수집거부</a></li>
          <li><a href="/pnuh/etc/right.do">환자권리장전</a></li>
          <li><a href="/pnuh/etc/charter.do">고객헌장</a></li>
          <li><a href="http://gw.pnuh.co.kr" target="_blank">그룹웨어</a></li>
          <li><a href="https://gwo.pnuh.co.kr" target="_blank">그룹웨어(외부접속용)</a></li>
        </ul>
        
        <address>
          <span>(49241) 울산광역시 서구 구덕로 179 그린대학교병원</span>
          <em>대표전화 : 052.240.7000</em>
        </address>
        <p class="copyright">
          Copyright 2020 Pusan National University Hospital. All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Footer