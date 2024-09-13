package com.green.TeamProject1.doctor;

import com.green.TeamProject1.patient.PatientVO;
import com.green.TeamProject1.patient.TreatVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/doctor")
@RestController
public class DoctorController {
    @Resource(name = "doctorService")
    private DoctorServiceImpl doctorService;

    //관리자 페이지를 통한 의사 등록
    @PostMapping("/insertDoctor")
    void insertDoctor(@RequestBody DoctorVO doctorVO){
        doctorService.insertDoctor(doctorVO);
    }

    @GetMapping("/getOne/{docLinum}")
    public DoctorVO getOneDoc(@PathVariable (name = "docLinum") int docLinum){
        return doctorService.getOneDoc(docLinum);
    }

    @GetMapping("/getList")
    public List<DoctorVO> getAllDoc(){
        return doctorService.getAllDoc();
    }

    // 진료과 정보 가져오기(모두)
    @GetMapping("/getDeptList")
    public List<MediDeptVO> getDeptList() {
        return doctorService.getDeptList();
    }

    // 진료과 선택 시 해당 진료과의 의사 목록 조회
    @GetMapping("/getDoctorList/{deptNum}")
    public List<DoctorVO> getDoctorList(@PathVariable("deptNum") int deptNum) {
        return doctorService.getDoctorList(deptNum);
    }

    // 선택한 환자 진료정보 삽입
    @PostMapping("/insertTreatInfo")
    public void insertTreatInfo(@RequestBody TreatVO treatVO) {

        // 신규 진료 번호 생성
        int treNum = doctorService.getNextTreNum();
        treatVO.setTreNum(treNum);

        // 진료 기록 접수
        doctorService.insertTreatInfo(treatVO);

        // 처방전 정보 같이 접수
        doctorService.insertRecipeInfo(treatVO);
    }

//    // 선택한 환자 진료정보 한개 가져오기
    @GetMapping("/treOneSelect/{patNum}")
    public List<TreatVO> treOneSelect(@PathVariable(name = "patNum") int patNum) {
        return doctorService.treOneSelect(patNum);
    }


    //이름으로 의료진 검색
    @GetMapping("/searchStaffByName/{docName}")
    public List<DoctorVO> searchStaffByName(@PathVariable(name = "docName") String docName){
        return doctorService.searchStaffByName(docName);
    }
}
