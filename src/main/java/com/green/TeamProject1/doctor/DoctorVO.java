package com.green.TeamProject1.doctor;

import com.green.TeamProject1.patient.MedicineVO;
import com.green.TeamProject1.patient.PatientService;
import lombok.Data;

import java.util.List;

@Data
public class DoctorVO {
    private int docLinum;
    private String docName;
    private String dept;
}
