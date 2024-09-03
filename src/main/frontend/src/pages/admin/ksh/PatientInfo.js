import React, { useEffect, useState } from 'react'
import './PatientInfo.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const PatientInfo = () => {

  return (
      <div className='patient-main-div'>
        <div>
        <table>
          <thead>
            <tr>
              <td>대기순번</td>
              <td>이름</td>
              <td>나이</td>
              <td>진료현황</td>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      </div>        
  )
}

export default PatientInfo