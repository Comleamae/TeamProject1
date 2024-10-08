import React, { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import './UserLayout.css'
import '../Footer.css'
import { MdMenu } from 'react-icons/md';
import { IoMdArrowDroprightCircle } from "react-icons/io"; // > 메뉴 화살표 
import Footer from '../Footer';



const UserLayout = ({loginInfo, setLoginInfo, setIsAdmin}) => {

  const location = useLocation();
  const showSubMenu = location.pathname !=='/';

  const navigate = useNavigate();

  return (
    <div className='layout-div'>
      <div className='header'>     
        <div className='header-index'>
          {/* 메뉴 목록들어갈 자리 길어요 접어주세요~ */}
          <div id='btn-top-menus' className='total_navi_div'>
            <button type='button' className='menu'>
              <MdMenu className='menu-icon' />
            </button>
            <ul className='sec_total_navi_ul'>
              <li>
                <Link to='/'>
                  나의 진료정보 
                  <IoMdArrowDroprightCircle className='menu_arrow' />
                </Link>
                <div className='total_navi_div2'>
                  <ul className='snb'>
                    <li class="sds_1">
                      <a tabindex="0" href="/"  >
                        예약                                  		
                      </a>
                    </li>

                  <li class="sds_2">
                    <a tabindex="0" href="/"  >
                      예약조회 및 취소                                  		
                    </a>
                  </li>

                  <li class="sds_3">
                    <a tabindex="0" href="/"  >
                      증명서/의무기록 발급                                  		
                    </a>
                  </li>
                  <li class="sds_4">
                    <a tabindex="0" href="/"  >
                      진료비 결제                                  		
                    </a>
                  </li>
                  <li class="sds_5">
                    <a tabindex="0" href="/"  >
                      Health4U                                  		
                    </a>
                  </li>
                  <li class="sds_6">
                    <a tabindex="0" href="/"  >
                      관심 콘텐츠                                  		
                    </a>
                  </li>
                  <li class="sds_7">
                    <a tabindex="0" href="/"  >
                      처방동영상                                  		
                    </a>
                  </li>
                  <li class="sds_8">
                    <a tabindex="0" href="/"  >
                      칭찬레터                                  		
                    </a>
                  </li>
                  <li class="sds_9">
                    <a tabindex="0" href="/"  >
                      개인정보                                  		
                    </a>
                  </li>
                  <li class="sds_10">
                    <a tabindex="0" href="/"  >
                      기부현황조회                                  		
                    </a>
                  </li>
                </ul>
                <div id="sub_s_1" class="snb_conts_wrap">
                  <div class="snb_conts_box">
                    <div class="snb_conts">
                      <ul class="bh_snb_ul">
                        <li class="bh_snb_li_1">
                          <a href="/reserve/onlineReserve.do">
                            <strong>온라인 예약</strong>
                          </a>
                        </li>
                        <li class="bh_snb_li_2">
                          <a href="/reserve/firstReserve.do">
                            <strong>첫 방문 예약상담</strong>
                          </a>
                        </li>
                        <li class="bh_snb_li_3">
                          <a href="/">
                            <strong>예약현황조회</strong>
                          </a>
                        </li>
                      </ul><br/>
                      <p class="bh_snb_desc">
                        📌그린대학교병원은 빠르고 편리한 <span>온라인 진료예약이 가능합니다.</span>
                      </p>
                      <form onsubmit="return chkPhone(this)">
                        <strong class="bh_snb_tit">첫 방문 예약상담</strong>
                        <div class="bh_snb_input fix">
                          <p class="f_left">
                            <input type="tel" tabindex="0" class="input_snb_text"  maxlength="12" name="phone"  title="연락처" placeholder="000 - 0000 - 0000"  />                                      
                          </p>
                          <p class="f_right">
                            <input class="btn_snb_blue" type="submit" value="예약상담" />
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </li>
              <li>
                <Link to='/'>진료안내
                <IoMdArrowDroprightCircle className='menu_arrow' />
                </Link>
                <div class="total_navi_div2">
                  <ul class="snb">
                    <li class="sds_1">
                      <a tabindex="0" href="/"  >
                        진료과                                  		
                      </a>
                    </li>
                
                    <li class="sds_2">
                      <a tabindex="0" href="/o"  >
                        진료지원부서                                  		
                      </a>
                    </li>
                
                    <li class="sds_3">
                      <a tabindex="0" href="/"  >
                        의료진                                  		
                      </a>
                    </li>
                
                    <li class="sds_4">
                      <a tabindex="0" href="/"  >
                        외래진료                                  		
                      </a>
                    </li>
                
                    <li class="sds_5">
                      <a tabindex="0" href="/"  >
                        외래진료일정표                                  		
                      </a>
                    </li>
                
                    <li class="sds_6">
                      <a tabindex="0" href="/"  >
                        당일수술센터                                  		
                      </a>
                    </li>
                
                    <li class="sds_7">
                      <a tabindex="0" href="/"  >
                        응급의료센터                                  		
                      </a>
                    </li>
                
                    <li class="sds_8">
                      <a tabindex="0" href="/"  >
                        가정간호                                  		
                      </a>
                    </li>
                
                    <li class="sds_9">
                      <a tabindex="0" href="/"  >
                        입원/퇴원                                  		
                      </a>
                    </li>
                
                    <li class="sds_10">
                      <a tabindex="0" href="/"  >
                        병문안(면회)                                  		
                      </a>
                    </li>
                
                    <li class="sds_11">
                      <a tabindex="0" href="" target='_blank' >
                        건강검진안내                                  		
                      </a>
                    </li>
                  </ul>
                  {/* 의료진/진료과찾기 */}
                  <div id="sub_s_2" class="snb_conts_wrap" >
                    <div class="snb_conts_box">
                      <div class="snb_conts">
                        <strong class="bh_snb_tit">의료진/진료과찾기</strong>
                        <form action="/search.do" onsubmit="return chkTxt( this );">
                          <div class="bh_snb_input">
                            <label for="search_txt" class="skip">의료진, 진료과 입력</label>
                            <input tabindex="0" class="input_snb_text" type="text" name="search_txt" id="search_txt" placeholder="의료진,진료과 입력" />
                            <input class="btn_snb_blue" type="submit" value="찾기" style={{marginLeft:'16px'}} />
                          </div>
                        </form>
                        
                        <p class="bh_snb_desc1">
                          대학교병원 <span>진료관련 절차에 대한 안내입니다.</span>
                        </p>
                        <ul class="bh_snb_ul">
                          <li class="bh_snb_li_4">
                            <a href="/">
                              <strong>외래진료</strong>
                            </a>
                          </li>
                          <li class="bh_snb_li_5">
                            <a href="/">
                              <strong>입원/퇴원</strong>
                            </a>
                          </li>
                          <li class="bh_snb_li_6">
                            <a href="/o">
                              <strong>면회</strong>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                {/* 의료진/진료과찾기 끝 */}
                </div>
              </li>
              <li>
                <Link to='/'>병원소개
                <IoMdArrowDroprightCircle className='menu_arrow' />
                </Link>
                <div class="total_navi_div2">
                  <ul class="snb">        
                    <li class="sds_1">
                      <a tabindex="0" href="/intro/hospital/introduce.do"  >
                        병원소개                                  		
                      </a>
                    </li>

                    <li class="sds_2">
                      <a tabindex="0" href="/intro/floor/guide.do"  >
                        층별안내                                  		
                      </a>
                    </li>
                
                    <li class="sds_3">
                      <a tabindex="0" href="/intro/news/hmbuss/list.do"  >
                        병원소식                                  		
                      </a>
                    </li>

                    <li class="sds_4">
                      <a tabindex="0" href="/intro/amenity/amenity01.do"  >
                        편의시설                                  		
                      </a>
                    </li>

                    <li class="sds_5">
                      <a tabindex="0" href="/intro/spaceU.do"  >
                        SPACE U(전시)                                  		
                      </a>
                    </li>

                    <li class="sds_6">
                      <a tabindex="0" href="https://www.snubh.org/dh/mc" target='_blank' >
                        공공부문                                  		
                      </a>
                    </li>

                    <li class="sds_7">
                      <a tabindex="0" href="/intro/supporters.do"  >
                        발전후원회                                  		
                      </a>
                    </li>

                    <li class="sds_8">
                      <a tabindex="0" href="/intro/tell.do"  >
                        주요전화번호안내                                  		
                      </a>
                    </li>

                    <li class="sds_9">
                      <a tabindex="0" href="/">찾아오시는길</a>
                    </li>
                  </ul>
                          
                  <div  id="sub_s_3" class="snb_conts_wrap">
                  <div class="snb_conts_box">
                    <div class="snb_conts">
                      <strong class="bh_snb_tit">찾아오시는길</strong>

                      <p class="bh_snb_desc2">
                        그린대학교병원에 <span>찾아오시는 길입니다.</span>
                      </p>

                      <div class="bh_snb_btn_wrap">
                        <a href="/intro/map/road.do" class="bh_btn_b1" tabindex="0">자세히 보기</a>
                      </div>
      
                      <div class="bh_snb_map_img">
                        <img src="http://localhost:8080/images/img_gnb_map.jpg" alt="그린대학교병원 찾아오시는 길 약도" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </li>
              <li>
                <Link to='/'>공지사항<IoMdArrowDroprightCircle className='menu_arrow' />
                </Link>
              </li>
              <li>
                <Link to='/'>건강정보
                <IoMdArrowDroprightCircle className='menu_arrow' />
                </Link>
              </li>
              <li>
                <Link to='/'>병원소개
                <IoMdArrowDroprightCircle className='menu_arrow' />
                </Link>
              </li>
              <li>
                <Link to='/'>바로가기
                <IoMdArrowDroprightCircle className='menu_arrow' />
                </Link>
              </li>
              <li>
                <Link to='/'>정보소개
                <IoMdArrowDroprightCircle className='menu_arrow' />
                </Link>
              </li>
              <li>
                <Link to='/'>고객의 소리
                <IoMdArrowDroprightCircle className='menu_arrow' />
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className='logo'>
            <img className='logo-img' src='http://localhost:8080/images/logo.png' />
            그린대학교병원
          </Link>
          {
            Object.keys(loginInfo).length != 0 ?
              //로그인 하였다면
              // 회원 이름 + 로그아웃 버튼
              <div className='loginout-div'>
                {loginInfo.memName}님 안녕하세요
                {/* Logout 글자에 손대면 cursor pointer 해주세요 - 완료🙆🏻‍♀️*/}

                {/* 클릭 시 로그아웃 */}
                <span className='btn2 ' onClick={(e) => {
                  window.sessionStorage.removeItem('loginInfo')
                  setLoginInfo({});
                  navigate('/')
                }}>로그아웃</span>

              </div>
              :
              //비로그인 상태라면
              //로그인 + 회원가입 + 관리자전용
              <div>
                <ul className='login-box'>
                  <li>
                    <Link to='/login' className='user-login'>로그인</Link>
                  </li>
                  <li>
                    <Link to ='/joinSelect'>회원가입</Link>
                  </li>
                  <li>
                    <Link to='/admin/login' className='admin-login'>
                      직원전용
                    </Link>
                  </li>
                  <li>
                    <select>
                      <option>KOR</option>
                      <option>ENG</option>
                    </select>
                  </li>
                </ul>
              </div>
          }
          </div>
        </div>
      
      <Outlet />
      <Footer/>
    </div>    
  )
}

export default UserLayout
