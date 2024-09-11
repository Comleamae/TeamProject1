import React from 'react'
import './Notice.css'

const Notice = () => {


  return (
    <div className='notice-container'>
      <h1>공지사항 페이지</h1>

      <div className='notice-table'>
        <table className='table-div'>
          <colgroup>
            
          </colgroup>
          <tr>
            <td>No</td>
            <td>카테고리</td>
            <td>제목</td>
            <td>작성일</td>
            <td>조회수</td>
          </tr>
          {
            <tr>
              <td>12</td>
            </tr>
          }
        </table>
      </div>
    </div>
  )
}

export default Notice