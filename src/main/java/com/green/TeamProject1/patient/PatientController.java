package com.green.TeamProject1.patient;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("/patient")
@RestController
public class PatientController {
    @Resource(name = "patientService")
    private PatientServiceImpl patientService;

    /*환자 전체 중에 해당 이메일 가진 사람이 있는가*/
    @PostMapping("/getList")
    List<PatientVO> getPatientList(@RequestBody Map<String, String> emailData){
        return patientService.getPatListWhereEmail(emailData.get("patEmail"));
    }

    /*환자 한명에 대한 정보를 얻는 기능*/
    @PostMapping("/getOne")
    PatientVO getPatientOne(@RequestBody Map<String, Integer> patientData){
        System.out.println(patientData.get("patNum"));
        return patientService.getPatientOne(patientData.get("patNum"));
    }
}
