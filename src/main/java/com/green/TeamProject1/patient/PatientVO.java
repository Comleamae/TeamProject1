package com.green.TeamProject1.patient;

import lombok.Data;

@Data
public class PatientVO {
    private int patNum;
    private String patName;
    private int age;
    private String gender;
    private String disease;
    private int docLinum;
    private String aboutPat;
    private String medicine;
    private int patPrice;
    private String inhopiDate;
    private String outhopiDate;
    private String operDate;
}
