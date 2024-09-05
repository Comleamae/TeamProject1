package com.green.TeamProject1.doctor;

import com.green.TeamProject1.patient.PatientVO;
import com.green.TeamProject1.patient.RecepVO;
import lombok.Data;

import java.util.List;

@Data
public class DoctorVO {
    private int docLinum;
    private String docName;
    private String dept;
    private RecepVO recepVO;
}
