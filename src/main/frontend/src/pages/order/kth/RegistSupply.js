import React, { useState } from 'react';
import './RegistSupply.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistSupply = () => {
  const navigate = useNavigate();

  //등록할 물품의 데이터 입력값 저장할 변수
  const [supplyInfo, setSupplyInfo] = useState({
    supplyName: '',
    supplyPrice: 0,
    supplyStandard: '',
    supplier: '',
    supplyCaution: '',
    supplyMinAmount: 0,
    supplyImage: null,
  });

  const [fileName, setFileName] = useState(''); // 선택한 파일 이름 저장

  //내용 바뀔때마다 저장
  const changeSupplyInfo = (e) => {
    const newInfo = {
      ...supplyInfo,
      [e.target.name]: e.target.value,
    };
    setSupplyInfo(newInfo);
  };

  //이미지
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSupplyInfo({
      ...supplyInfo,
      supplyImage: file,
    });
    if (file) {
      setFileName(file.name); // 선택한 파일 이름 설정
    }
  };

  //물품 등록 시 
  const registSupply = () => {
    axios.post('/api_order/checkSupply', { supplyName: supplyInfo.supplyName })
      .then((res) => {
        //이미지 저장을 위해 content-type : multipart/form-data로 변경
        if (res.data) {
          const fileConfig = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          };
          //supplyForm에 입력값과 이미지 저장
          const supplyForm = new FormData();
          supplyForm.append('supplyName', supplyInfo.supplyName);
          supplyForm.append('supplyPrice', supplyInfo.supplyPrice);
          supplyForm.append('supplyStandard', supplyInfo.supplyStandard);
          supplyForm.append('supplier', supplyInfo.supplier);
          supplyForm.append('supplyCaution', supplyInfo.supplyCaution);
          supplyForm.append('supplyMinAmount', supplyInfo.supplyMinAmount);
          supplyForm.append('supplyImage1', supplyInfo.supplyImage);

          axios.post('/api_order/registSupply', supplyForm, fileConfig)
            .then(() => {
              alert('물품 등록 완료');
              navigate('/order/registSupply');
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          alert('중복된 물품입니다.');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='container'>
      <h1 className='title-div'>신규 물품 등록</h1>
      <table className='regist-table-div'>
        <tbody>
          <tr>
            <td>물품명</td>
            <td><input type='text' name='supplyName' onChange={changeSupplyInfo} /></td>
          </tr>
          <tr>
            <td>가격</td>
            <td><input type='number' name='supplyPrice' onChange={changeSupplyInfo} /></td>
          </tr>
          <tr>
            <td>규격</td>
            <td><input type='text' name='supplyStandard' onChange={changeSupplyInfo} /></td>
          </tr>
          <tr>
            <td>제조사</td>
            <td><input type='text' name='supplier' onChange={changeSupplyInfo} /></td>
          </tr>
          <tr>
            <td>주의사항</td>
            <td><input type='text' name='supplyCaution' onChange={changeSupplyInfo} /></td>
          </tr>
          <tr>
            <td>최소수량</td>
            <td><input type='number' name='supplyMinAmount' onChange={changeSupplyInfo} /></td>
          </tr>
          <tr>
            <td>이미지</td>
            <td>
              <input
                type='file'
                className='fileButton'
                name='supplyImage'
                accept='image/*'
                onChange={handleImageChange}
                id='fileInput'
              />
              <label htmlFor='fileInput' className='custom-button'>
                이미지 선택
              </label>
              {fileName && <span>선택한 파일: {fileName}</span>} {/* 선택한 파일 이름 표시 */}
            </td>
          </tr>
        </tbody>
      </table>
      <button type='button' className='reg-button' onClick={registSupply}>
        물품 등록
      </button>
    </div>
  );
};

export default RegistSupply;
