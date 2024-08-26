package com.green.TeamProject1.patient;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/patient")
@RestController
public class PatientController {
    @Resource(name = "patientService")
    private PatientServiceImpl patientService;

    /*환자 전체 중에 해당 이메일 가진 사람이 있는가*/
    @PostMapping("/getList/{patEmil}")
    List<PatientVO> getPatientList(@PathVariable(name = "patEmail") String patEmail){
        return patientService.getPatListWhereEmail(patEmail);
    }

    /*환자 한명에 대한 정보를 얻는 기능*/
    @GetMapping("/getOne/{patNum}")
    PatientVO getPatientOne(@PathVariable(name = "patNum") int patNum){
        return patientService.getPatientOne(patNum);
    }


}
