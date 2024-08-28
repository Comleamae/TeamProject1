package com.green.TeamProject1.patient;

import java.util.List;

public interface PatientService {
    /*전체 환자 중에 해당 이메일을 가지고 있는 사람이 있는지*/
    List<PatientVO> getPatListWhereEmail(PatientVO patientVO);
    /*환자 한명의 정보를 얻어*/
    PatientVO getPatientOne(int patNum);
}
