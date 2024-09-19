package com.green.TeamProject1.patient;

import com.green.TeamProject1.doctor.DoctorVO;
import com.green.TeamProject1.member.vo.MemberVO;
import lombok.Data;

import java.util.List;

@Data
public class PatientVO {
    private int patNum;
    private String patName;
    private String patEmail;
    private int age;
    private String gender;
    private String address;
    private String citizenNum;

    //환자 등록에서 담당의 정보를 받기위한 변수
    private int docLinum;

    private TreatVO treatVO; // 진료정보 하나
    //private RecepVO recepVO;


}
