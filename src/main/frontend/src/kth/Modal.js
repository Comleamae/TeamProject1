import React from 'react'
import { IoMdClose } from "react-icons/io";


// 매개변수 : (띄워질 여부, 모달의 내용, 닫혔을 때 실행될 내용)
// 매개변수로 전달된 함수의 결과값은 각 컴포넌트에서 입력 후 받아오기만 함.
const Modal = ({ setIsShow, content, clickCloseBtn }) => {

  return (
    <div className='modal-container'>

      {/* 모달의 X버튼 누르면 닫힘 */}
      <div className='modal-header'>
        <span onClick={() => {
          setIsShow(false)
          clickCloseBtn()
        }}>
          <IoMdClose />
        </span>
      </div>

      {/* 모달의 내용 */}
      <div className='modal-content'>
        {
          content()
        }
      </div>

      {/* 모달의 버튼(ex. 확인버튼) 을 눌렀을 때 모달이 닫힘 */}
      <div className='modal-footer'>
        <button type='button' onClick={(e) => {
          setIsShow(false)
          clickCloseBtn()
        }}>확인
        </button>
      </div>
    </div>
  )
}

export default Modal