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

    /*환자 전체 중에 해당 주민번호 가진 사람이 있는가*/
    @PostMapping("/getListCN")
    List<PatientVO> getPatientList(@RequestBody Map<String, String> inputData){
       return patientService.getPatListWhereEmail(inputData.get("citizenNum"));
    }

    /*환자 한명에 대한 정보를 얻는 기능 환자번호와 진료날짜를 받아서*/
    @GetMapping("/getOne/{patNum}/{treDate}")
    List<PatientVO> getPatientOne(@PathVariable(name = "patNum") int patNum, @PathVariable(name = "treDate") String treDate){
        return patientService.getPatListAll(patNum, treDate);
    }

    /*환자 한명의 진료 기록 리스트*/
    @PostMapping("/treList")
    List<TreatVO> getTreatList(@RequestBody Map<String,Integer> recoData){
        return patientService.getTreatListWhenPatOne(recoData.get("patNum"));
    }
}
