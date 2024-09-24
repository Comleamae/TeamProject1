package com.green.TeamProject1.patient;

import javax.swing.*;
import java.util.List;
import java.util.Map;

public interface PatientService {
    /*전체 환자 중에 해당 주민번호를 가지고 있는 사람이 있는지*/
    List<PatientVO> getPatListWhereEmail(String citizenNum);
    /*환자 한명의 정보 리스트를 얻어*/
    List<PatientVO> getPatListAll(int patNum, int treNum);
    /*환자 한명의 진료 기록 날짜 리스트*/
    List<TreatVO> getOneTreDate(int patNum);

    //다음에 들어가는 환자 번호 조회
    int getNextPatNum();

    // 신규 환자 정보
    void regInsert(PatientVO patientVO);

    // 신규 진료 명단
    void recepInsert(PatientVO patientVO);


    // 재방문 환자 조회
    PatientVO reSelect(PatientVO patientVO);

    // 재방문이면 접수 바로 등록
    void reInsert(PatientVO patientVO);

    // 환자 대기 목록 조회
    List<PatientVO> waitList(int docLinum);

    // 대기 중인 환자 목록에서 환자 번호 기준으로 상세 정보 조회
    PatientVO getPatientInfo(int patNum);

}
