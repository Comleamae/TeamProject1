import React from 'react'
import './Visitant.css';
import { useNavigate } from 'react-router-dom';

const Visitant = () => {

  const navigate = useNavigate();
  
  return (
    <div className='visitant-main-div'>
      <div onClick={()=>{navigate('/admin/newVisit')}}>신규방문</div>
      <div onClick={()=>{navigate('/admin/reVisit')}}>재방문</div>
    </div>
  )
}

export default Visitant