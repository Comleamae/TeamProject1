import React from 'react'
import './Visitant.css';
import { useNavigate } from 'react-router-dom';

const Visitant = () => {

  const navigate = useNavigate();
  
  return (
    <div className='visitant-main-div'>
      <div onClick={()=>{navigate('/admin/newVisit')}}>접수</div>
      <div onClick={()=>{navigate('/admin/reVisit')}}>재방</div>
      <div onClick={()=>{navigate()}}>수납</div>
    </div>
  )
}

export default Visitant