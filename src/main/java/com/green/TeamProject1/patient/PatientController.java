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
    @GetMapping("/getOne/{patNum}/{treNum}")
    List<PatientVO> getPatientOne(@PathVariable(name = "patNum") int patNum, @PathVariable(name = "treNum") int treNum){
        return patientService.getPatListAll(patNum, treNum);
    }

    /*환자 한명의 진료 기록 리스트*/
    @PostMapping("/treDateList")
    List<TreatVO> getOneTreDate(@RequestBody Map<String, Integer> recoData){
        return patientService.getOneTreDate(recoData.get("patNum"));
    }


    // 신규 방문자 예약 등록
    @PostMapping("/regInsert")
    public void regInsert(@RequestBody PatientVO patientVO){
        //생성되는 환자번호
        int  patNum = patientService.getNextPatNum();
        patientVO.setPatNum(patNum);
        patientService.regInsert(patientVO);
        patientService.recepInsert(patientVO);
    }

    // 신규 방문자 접수 등록
    @PostMapping("/recepInsert")
    public void recepInsert(@RequestBody PatientVO patientVO){
        patientService.recepInsert(patientVO);
    }

    // 재방문 - 기존 방문자 기록 조회 및 접수
    @PostMapping("/regCheckInsert")
    public void regCheckInsert(@RequestBody PatientVO patientVO){
        patientService.regCheckInsert(patientVO);
    }

    // 예약자 조회(전체)
    @GetMapping("/checkList")
    public List<PatientVO> checkList(){
        return patientService.checkList();
    }

}