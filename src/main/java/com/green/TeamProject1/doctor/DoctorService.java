package com.green.TeamProject1.doctor;

import com.green.TeamProject1.patient.PatientVO;
import com.green.TeamProject1.patient.TreatVO;

import java.util.List;

public interface DoctorService {

    void insertDoctor(DoctorVO doctorVO);

    /*의사 한명의 정보를 얻어와*/
    DoctorVO getOneDoc(int docLinum);
    /*의사 전체 리스트*/
    List<DoctorVO> getAllDoc();

    // 모든 진료과 정보 받아오기
    List<MediDeptVO> getDeptList();

    //선택한 진료과에 소속된 의사 목록 조회
    List<DoctorVO> getDoctorList(int deptNum);

    // 진료 번호 넘겨주기 위해 새로 생성
    int getNextTreNum();


    // 선택한 환자 진료정보 삽입
    void insertTreatInfo(TreatVO treatVO);

    // 선택한 환자의 처방전 정보 삽입
    void insertRecipeInfo(TreatVO treatVO);

    // 선택한 환자 한명에 대한 진료정보 조회
    List<TreatVO> treOneSelect(int patNum);
}
