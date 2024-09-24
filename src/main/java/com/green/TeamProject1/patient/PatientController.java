package com.green.TeamProject1.patient;

import jakarta.annotation.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    // 신규 방문자 진료 접수
    @PostMapping("/regInsert")
    public void regInsert(@RequestBody PatientVO patientVO){
        System.out.println(patientVO);

        //생성되는 환자번호
        int patNum = patientService.getNextPatNum();
        patientVO.setPatNum(patNum);

        //신규 환자 정보에 등록
        patientService.regInsert(patientVO);

        //진료 명단에 등록
        patientService.recepInsert(patientVO);
    }


        //환자 이름과 주민번호를 통해 환자번호 받기
        //환자가 번호가 있으면 react로 환자번호 전달
        //환자가 없으면 0을 전달
        @PostMapping("/reSelect")
        public int reSelect (@RequestBody PatientVO patientVO) {
            System.out.println(patientVO);
            PatientVO result = patientService.reSelect(patientVO);

            return result != null ? result.getPatNum() : 0;
        }

        // 재방문이면 접수 등록
        @PostMapping("/reInsert")
        public void reInsert(@RequestBody PatientVO patientVO) {
            patientService.reInsert(patientVO);
        }


        // 환자 대기 목록 조회
        @GetMapping("/waitList/{docLinum}")
        public List<PatientVO> waitList(@PathVariable("docLinum") int docLinum) {
           return patientService.waitList(docLinum);
        }

        // 대기 중인 환자 목록에서 환자 번호 기준으로 상세 정보 조회
        @GetMapping("/getPatientInfo/{patNum}")
        public PatientVO getPatientInfo(@PathVariable(name = "patNum") int patNum) {
            return patientService.getPatientInfo(patNum);
        }
}