import React, { useRef } from 'react'
import { IoMdClose } from "react-icons/io";

const Modal = ({ setIsShow, content, clickCloseBtn}) => {

  const modalContainer = useRef();
  
  return (
    <div className='modal-container show' ref={modalContainer}>
      <div className='modal'>
        <div className='modal-header'>
            <span onClick={(e) => {
              setIsShow(false)
            }}>
              <IoMdClose />
            </span>
        </div>
        <div className='modal-content'>
          {
            content()
          }
        </div>
        <div className='modal-footer'>
          <button type='button' className='btn-div' onClick={(e) => {
            clickCloseBtn() }}>확인</button>
          <button type='button' className='btn-div' onClick={(e) => { setIsShow(false) }}>취소</button>
        </div>
      </div>
    </div>
  )
}

export default Modal