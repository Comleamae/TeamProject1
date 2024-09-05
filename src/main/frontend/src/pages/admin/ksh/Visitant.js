import React from 'react'
import './Visitant.css';
import { useNavigate } from 'react-router-dom';

const Visitant = () => {

  const navigate = useNavigate();
  
  return (
    <div className='visitant-main-div'>
      <div onClick={()=>{navigate('/admin/newVisit')}}>New</div>
      <div onClick={()=>{navigate('/admin/reVisit')}}>Re</div>
    </div>
  )
}

export default Visitant