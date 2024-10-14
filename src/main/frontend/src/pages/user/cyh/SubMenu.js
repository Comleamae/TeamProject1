import React from 'react'

const SubMenu = () => {
  return (
    <div className='twoMenu'>
      <ul className='twosub'>
        <li><Link to='/login'>로그인</Link></li>
        <li><Link to='/joinSelect'>통합회원가입</Link></li>
        <li><Link to='/findId'>아이디 찾기</Link></li>
        <li><Link to='/findPw'>비밀번호 찾기</Link></li>
      </ul>
    </div>
  )
}

export default SubMenu