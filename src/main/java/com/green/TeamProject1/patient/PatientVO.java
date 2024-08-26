package com.green.TeamProject1.patient;

import lombok.Data;

@Data
public class PatientVO {
    private int patNum;
    private String patName;
    private int age;
    private String gender;
    private String address;
    private String disease;
    private int docLinum;
    private String aboutPat;
    private int patPrice;
    private String patDate;
    private String inHopi;
    private String medicine;
    private DateVO dateVO;
    private MedicineVO medicineVO;
}
