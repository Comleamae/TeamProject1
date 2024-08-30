package com.green.TeamProject1.patient;

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
    private List<TreatVO> treatList; // 진료정보를 전부
}
