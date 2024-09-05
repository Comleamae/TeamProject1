package com.green.TeamProject1.doctor;

import java.util.List;

public interface DoctorService {
    /*의사 한명의 정보를 얻어와*/
    DoctorVO getOneDoc(int docLinum);
    /*의사 전체 리스트*/
    List<DoctorVO> getAllDoc();

    // 모든 진료과 정보 받아오기
    List<MediDeptVO> getDeptList();

    //선택한 진료과에 소속된 의사 목록 조회
    List<DoctorVO> getDoctorList(int deptNum);
}
