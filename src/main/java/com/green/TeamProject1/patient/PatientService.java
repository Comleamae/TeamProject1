package com.green.TeamProject1.patient;

import java.util.List;

public interface PatientService {
    /*전체 환자 중에 해당 주민번호를 가지고 있는 사람이 있는지*/
    List<PatientVO> getPatListWhereEmail(String citizenNum);
    /*환자 한명의 정보를 얻어*/
    PatientVO getPatientOne(int patNum);
    /*전체 진료 기록 중 해당 환자 번호를 가진 진료기록 리스트*/
    List<TreatVO> getTreatListWhenPatOne(int patNum);
}
