package com.green.TeamProject1.patient;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/patient")
@RestController
public class PatientController {
    @Resource(name = "patientService")
    private PatientServiceImpl patientService;
    /*환자 한명에 대한 정보를 얻는 기능*/

    @GetMapping("/getOne/{patNum}")
    PatientVO getPatientOne(@PathVariable(name = "patNum") int patNum){
        return patientService.getPatientOne(patNum);
    }
}
