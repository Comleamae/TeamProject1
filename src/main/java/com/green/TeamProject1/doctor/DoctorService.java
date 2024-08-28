package com.green.TeamProject1.doctor;

import java.util.List;

public interface DoctorService {
    /*의사 한명의 정보를 얻어와*/
    DoctorVO getOneDoc(DoctorVO doctorVO);
    /*의사 전체 리스트*/
    List<DoctorVO> getAllDoc();
}
