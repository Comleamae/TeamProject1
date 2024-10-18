import React, { useRef } from 'react'
import { IoMdClose } from "react-icons/io";


// 매개변수 : (띄워질 여부, 모달의 내용, 닫혔을 때 실행될 내용)
// 매개변수로 전달된 함수의 결과값은 각 컴포넌트에서 입력 후 받아오기만 함.
const Modal = ({content, setIsShow, clickCloseBtn, handleSave}) => {
  const modalContainer = useRef();

  return (
    <div className='modal-container show' ref={modalContainer}>
      <div className='modal'>
        <div className='modal-header'>
          <span onClick={() => {
            modalContainer.current.className = 'modal-container';
            setTimeout(() => {
              setIsShow(false)
              clickCloseBtn();
            }, 300);
          }}>
            <i className="bi bi-x-lg"></i>
          </span>
        </div>
        <div className='modal-content'>
          {
            content()
          }
        </div>
        <div className='modal-footer'>
          <button type='button' className='btn btn-primary'
          onClick={()=>{
            modalContainer.current.className = 'modal-container';
            setTimeout(()=>{
              setIsShow(false)
              handleSave()
              //일단은 alert지만 update axios 실행
              clickCloseBtn();
            }, 300)
          }}>변경</button>
          <button type='button' className='btn btn-primary'
            onClick={() => {
              modalContainer.current.className = 'modal-container';
              setTimeout(() => {
                //모달창 닫기
                setIsShow(false)
              }, 300);
            }}>취소</button>
        </div>
      </div>
    </div>
  )
}

export default Modal