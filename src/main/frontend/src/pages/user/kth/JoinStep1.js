import React, { useState } from 'react'
import './JoinStep2.css'
import { useNavigate } from 'react-router-dom'


const JoinStep1 = () => {

  const navigate = useNavigate();
  function changeJoinAgree(e){
    
  }

  return (
    <div className='join-div12'>
      <div className='user-div'>
        <h1 className='joinh1'>통합회원가입</h1>
        <p>그린대학교병원 통합회원가입을 환영합니다</p>
      </div>
      <div className='user-login-txt'>
        <h2>
          <strong>그린대학교병원 통합회원가입을 환영합니다.</strong>
          <br />
          한 번의 통합회원 가입으로 모든 사이트 이용이 가능합니다.
        </h2>
      </div>

      <div className='join-box'>
        <div className='join-checklist'>
          <div className='join-checklist-div'><p>약관동의</p> <span>01</span></div>
          <div><p>회원정보입력</p> <span>02</span></div>
          <div><p>회원가입완료</p> <span>03</span></div>
        </div>
        <div class="btn_box_ar1 mb30">
          <p class="inline_box">
            <input id="agree05" class="radio" name="radio05" type="radio" value="Y" onclick="allAgreeCheck( 'ALL' )"/>
            <label for="agree05">전체 약관에 동의합니다.</label>
          </p>
          <p class="inline_box">
            <input id="agree06" class="radio" name="radio05" type="radio" value="Y" onclick="allAgreeCheck( 'CHECK' )"/>
            <label for="agree06">필수 약관에 동의합니다.</label>
          </p>
        </div>
        <div className='join-imgdiv'>
          <img src='http://localhost:8080/images/bg_bar.gif' />
          <h5>이용약관</h5>
        </div>
        <div>
          <section class="agreeCont" tabindex="0">
					<h1>제1장 총칙</h1>

					<h2>제1조 목적</h2>
					<p>이 약관은 분당서울대학교병원(이하 "병원"이라 한다)에서 운영하는 인터넷 홈페이지의 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이트와 이용자의 권리 의무 및 책임사항을 규정함을 목적으로 합니다.</p>

					<h2>제2조 용어정의</h2>
					<p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
					<ol>
						<li>"사이트"라 함은 병원이 컴퓨터 등 정보통신 설비를 이용하여 제공할 수 있도록 설정한 가상의 공간을 말합니다.</li>
						<li>"서비스"라 함은 병원의 홈페이지 및 병원이 운영하는 인터넷사이트 등에서 제공하는 인터넷상의 모든 서비스를 말합니다.</li>
						<li>"회원(이용자)"이라 함은 본 약관에 동의하고, 인터넷 홈페이지에 로그인하여 본 약관에 따라 병원이 제공 하는 서비스를 받는 자를 말합니다.</li>
						<li>"운영자"라 함은 서비스의 전반적인 관리와 원활한 운영을 위하여 병원에서 선정한 사람을 말합니다.</li>
						<li>"ID"라 함은 회원이 서비스에 제공받기 위하여 본 사이트로 접속할 수 있는 Login 명을 말하며, 주민등록번호를 사용합니다.</li>
						<li>"비밀번호"라 함은 회원의 비밀 보호 및 회원 본인임을 확인하고 서비스에 제공되는 각종 정보의 보안을 위해 회원 자신이 설정하며 회사가 승인하는 영문, 숫자, 영문과 숫자의 혼합 등으로 표기한 암호문자를 말합니다.</li>
						<li>"개인정보"라 함은 당해 정보에 포함되어 있는 성명, 주민등록번호 등의 사항에 의하여 특정 개인을 식별할 수 있는 정보를 말합니다.</li>
					</ol>

					<h2>제3조 약관의 게시 및 변경</h2>
					<ol>
						<li>이 약관은 병원이 서비스 화면에 공지하거나 기타의 방법으로 회원에게 통보함으로써 그 효력이 발생합니다.</li>
						<li>병원은 불가피한 사정이 있는 경우 관계법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</li>
						<li>병원은 사정상 변경의 경우와 영업상 중요사유가 발생한 경우에는 이 약관을 변경할 수 있으며, 변경된 약관은 전항과 같은 방법으로 공지 또는 통보함으로써 효력을 발생합니다.</li>
						<li>이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 관계법령 또는 상관례에 따릅니다.</li>
					</ol>
          </section>
        </div>
        <div class="btn_box_ar">
					<span>이용약관에 동의합니다.</span> 					
					<input id="agree01" class="radio" name="joinAgree1" type="radio" value="Y" onclick="checkAgree( 'access_terms', true )" /> 
					<label for="agree01">동의함</label>
					<input id="no-agree01" class="radio mgl10" name="joinAgree1" type="radio" value="N" onclick="" /> 
					<label for="no-agree01">동의안함</label>
				</div>

        <div class="agreen_section">
        <div className='join-imgdiv'>
          <img src='http://localhost:8080/images/bg_bar.gif' />
          <h5>개인정보의 수집·이용 동의<em style={{color:'#2d58b6', fontSize:'16px'}}>(필수사항)</em></h5>
        </div>
				<div class="agreeCont" tabindex="0">
					<p>
						분당서울대학교병원은 귀하의 개인정보보호법에 의거하여 개인정보를 수집함에 있어 아래의 내용을 안내하고 있습니다.<br/>
						분당서울대학교병원은 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.<br/>
					</p>
					
					<ol>
						<li>개인정보 수집 및 이용 목적
							<p style={{fontSize:'15px', color:'#2d58b6', fontWeight:'bold' ,textDecoration:'underline'}}>홈페이지 회원관리, 민원사무처리, 진료예약 및 각종 서비스, 개인건강기록서비스(Health4U)</p>
						</li>
						<li>수집하려는 개인정보의 항목
							<p>
								<a style={{fontSize:'15px', color:'#2d58b6', fontWeight:'bold' ,textDecoration:'underline'}}>
                  <strong>- 필수 항목 : </strong>
								아이디, 비밀번호, 성명, 생년월일, 주소, 핸드폰, E-Mail, 성별</a>
                <br/>
								*서비스 이용 과정이나 서비스 제공 업무처리 과정에서 다음과 같은 정보들이 자동으로 생성되어 수집될 수 있습니다. (서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보)
							</p>
						</li>
						<li>개인정보의 보유 이용기간
							<p style={{fontSize:'15px', color:'#2d58b6', fontWeight:'bold' ,textDecoration:'underline'}}>홈페이지 회원가입 탈퇴시까지 혹은 회원에서 제명 처리된 일까지 (즉시 파기 처리함) 단, 진료서비스 제공을 위하여 수집된 경우 의료법 기준에 준함 (의료법 시행규칙 제15조에 명시된 기간)
              </p>
						</li>
						<li>동의를 거부할 권리 / 동의거부에 따른 안내
							<p>고객께서는 본 안내에 따른 개인정보 수집에 대하여, 거부할 수 있는 권리가 있습니다. 본 개인정보에 대해 거부할 경우, 온라인 진료 예약, 진료 정보 확인 등의 서비스를 받으실 수 없습니다.

              </p>
						</li>
					</ol>
				</div>
        </div>

        <div class="btn_box_ar">
					<span>이용약관에 동의합니다.</span> 					
					<input id="agree01" class="radio" name="joinAgree2" type="radio" value="Y" onclick="checkAgree( 'access_terms', true )" /> 
					<label for="agree01">동의함</label>
					<input id="no-agree01" class="radio mgl10" name='joinAgree2' type="radio" value="N" onclick="" /> 
					<label for="no-agree01">동의안함</label>
				</div>

        <div class="agreen_section">
        <div className='join-imgdiv'>
          <img src='http://localhost:8080/images/bg_bar.gif' />
          <h5>개인정보의 수집·이용 동의<em style={{color:'#444', fontSize:'16px'}}>(선택사항)</em></h5>
        </div>
				
				<div class="agreeCont" tabindex="0">
					<p>
						분당서울대학교병원은 귀하의 개인정보보호법에 의거하여 개인정보를 수집함에 있어 아래의 내용을 안내하고 있습니다.<br/>
						분당서울대학교병원은 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.<br/>
					</p>
					
					<ol>
						<li>개인정보 수집 및 이용 목적
            <p style={{fontSize:'15px', color:'#2d58b6', fontWeight:'bold' ,textDecoration:'underline'}}>홈페이지 회원관리, 민원사무처리, 진료예약 및 각종 서비스, 개인건강기록서비스(Health4U)</p>
						</li>
						<li>수집하려는 개인정보의 항목
							<p>
              <p style={{fontSize:'15px', color:'#2d58b6', fontWeight:'bold' ,textDecoration:'underline'}}><strong>- 선택 항목 : </strong>집전화번호, E-Mail 수신 여부</p><br/>
								*서비스 이용 과정이나 서비스 제공 업무 처리 과정에서 다음과 같은 정보들이 자동으로 생성되어 수집될 수 있습니다. (서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보)
							</p>
						</li>
						<li>개인정보의 보유 이용기간
            <p style={{fontSize:'15px', color:'#2d58b6', fontWeight:'bold' ,textDecoration:'underline'}}>홈페이지 회원가입 탈퇴시까지 혹은 회원에서 제명 처리된 일까지 (즉시 파기 처리함) 단, 진료서비스 제공을 위하여 수집된 경우 의료법 기준에 준함 (의료법 시행규칙 제15조에 명시된 기간)</p>
						</li>
						<li>동의를 거부할 권리 / 동의거부에 따른 안내
							<p>고객께서는 본 안내에 따른 개인정보 수집에 대하여, 거부할 수 있는 권리가 있습니다. 본 개인정보에 대해 거부할 경우, 온라인 진료 예약에 대한 이메일 확인, 병원 이메일 확인 등의 서비스를 받으실 수 없습니다.</p>
						</li>
					</ol>
				</div>

				<div class="btn_box_ar">
					<span>개인정보 수집·이용처리(선택사항)에 동의합니다.</span>
					<input id="agree03" class="radio" name="radio03" type="radio" value="Y" onclick="checkAgree( 'access_per_chk', true )"/>
					<label for="agree03">동의함</label>
					<input id="no-agree03" class="radio mgl10" name="radio03" type="radio" value="N" onclick="checkAgree( 'access_per_chk', false )"/>
					<label for="no-agree03">동의안함</label>
				</div>
				
			</div>

      <div className='joinSelect-btn'>
        <button className='btn-2' type='button' onClick={(e)=>{navigate('/joinSelect')}}>이전
        </button>
        <button className='btn-1' type='button' onClick={(e)=>{navigate('/joinStep2')}}>다음
        </button>
      </div>


      </div>
    </div>
  )
}

export default JoinStep1