import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { generatePDF } from './utils/pdfUtils'; // 유틸리티 파일을 

const PrintForm = () => {
  const { patNum, treNum, selectData } = useParams();
  const navigate = useNavigate();

  const [patientOne, setPatientOne] = useState([]);
  const [doctorOne, setDoctorOne] = useState({});
  const [isShow, setIsShow] = useState(false);

  // PDF 생성을 위해 참조할 요소
  const printRef = useRef();

  // 환자 정보 불러오기
  useEffect(() => {
    axios
      .get(`/patient/getOne/${patNum}/${treNum}`)
      .then((res) => {
        console.log(res);
        setPatientOne(res.data);
        setIsShow(true);
        const docLinum = res.data[0].treatVO.docLinum;
        if (docLinum) {
          axios
            .get(`/doctor/getOne/${docLinum}`)
            .then((docRes) => {
              console.log(docRes);
              setDoctorOne(docRes.data);
            })
            .catch((error) => {
              console.log('의사 정보 받기 에러', error);
            });
        }
      })
      .catch((error) => {
        console.log('환자정보 받아오는데서 에러', error);
      });
  }, [treNum, selectData]);

  // PDF 생성 함수
  const handlePrint = () => {
    if (printRef.current) {
      generatePDF(printRef.current, '진료확인서.pdf')
        .then(() => console.log('PDF 생성 성공'))
        .catch((error) => console.error('PDF 생성 오류:', error));
    }
  };

  return (
    isShow === false
      ? null
      : <div className='result'>
        {/* PDF로 변환할 콘텐츠 */}
        <div ref={printRef}>
          <table className='print-table'>
            <thead>
              <tr>
                <td colSpan={6}><h2>진료확인서</h2></td>
              </tr>
              <tr>
                <td>성명</td>
                <td>{patientOne[0].patName}</td>
                <td>성별</td>
                <td>{patientOne[0].gender}</td>
                <td>연령</td>
                <td>{patientOne[0].age}</td>
              </tr>
              <tr>
                <td>주민등록번호</td>
                <td colSpan={5}>{patientOne[0].citizenNum}</td>
              </tr>
              <tr>
                <td>주소</td>
                <td colSpan={5}>{patientOne[0].address}</td>
              </tr>
              <tr>
                <td>병명</td>
                <td colSpan={6}>{patientOne[0].treatVO.disease}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6}>
                  <div>
                    <div>
                      <table className='in-date-table'>
                        <tr>
                          <td rowSpan={2}>입 원</td>
                          <td colSpan={5}>{patientOne[0].treatVO.dateVO==null?'N/A':patientOne[0].treatVO.dateVO.inHopi}부터</td>
                        </tr>
                        <tr>
                          <td colSpan={5}>{patientOne[0].treatVO.dateVO==null?'N/A':patientOne[0].treatVO.dateVO.outHopi}까지(일간)</td>
                        </tr>
                        <tr>
                          <td rowSpan={3}>마지막 통 원 일자</td>
                          <td colSpan={5}>{patientOne[0].treatVO.dateVO==null?patientOne[0].treatVO.treDate:'입원환자'}</td>
                        </tr>
                        <tr>
                          <td>총 일간</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6}>
                  <table className='in-text-table'>
                    <tr>
                      <td colSpan={6}>상기와 같이 진료 받았음을 확인함</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>발행일: {new Date().toLocaleDateString()}</td>
                    </tr>
                    <tr>
                      <td>요양기관명:</td>
                      <td>그린 대학 병원</td>
                    </tr>
                    <tr>
                      <td>주소:</td>
                      <td>울산광역시 남구 삼산동 000 000</td>
                    </tr>
                    <tr>
                      <td>의사 면허번호:</td>
                      <td>{doctorOne.docLinum}</td>
                    </tr>
                    <tr>
                      <td>발행인:</td>
                      <td>{doctorOne.docName}</td>
                    </tr>
                    <tr>
                      <td>전화번호:</td>
                      <td>052-111-2222</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <h2>그린대학병원</h2>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className='btn-div'>
          {/* PDF 출력 버튼 */}
          <button type='button' className='btn' onClick={(e)=>{handlePrint(e)}}>출력</button>
        </div>
      </div>
  );
};

export default PrintForm;
