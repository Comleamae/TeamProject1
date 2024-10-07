package com.green.TeamProject1.doctor;

import com.green.TeamProject1.patient.PatientVO;
import com.green.TeamProject1.patient.RecepVO;
import com.green.TeamProject1.patient.TreatVO;
import lombok.Data;

import java.util.List;

@Data
public class DoctorVO {
    private int docLinum;
    private String docPw;
    private String docName;
    private String deptNum;
    private RecepVO recepVO;
    private MediDeptVO mediDeptVO;
    private PatientVO patientVO;
    private DeskVO deskVO;
    private TreatVO treatVO;
}
