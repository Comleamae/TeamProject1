package com.green.TeamProject1.doctor;

import com.green.TeamProject1.patient.PatientVO;
import com.green.TeamProject1.patient.RecepVO;
import com.green.TeamProject1.patient.RecipeVO;
import com.green.TeamProject1.patient.TreatVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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
    public void insertTreatInfo(@RequestBody Map<String, Object> mapData) {
        //진료 중 명단에서 제외
        //의사번호 가져와서 등록할 수 있도록 수정


        //받아온 데이터 전체 출력
        System.out.println(mapData);

        // 신규 진료 번호 생성
        int treNum = doctorService.getNextTreNum();

        TreatVO treatVO = new TreatVO();
        treatVO.setTreNum(treNum);
        treatVO.setPatNum(Integer.parseInt(mapData.get("patNum").toString()));
        treatVO.setDisease(mapData.get("disease").toString());
        treatVO.setAboutPat(mapData.get("aboutPat").toString());
        treatVO.setTreDate(mapData.get("treDate").toString());

        // 진료 기록 접수
        doctorService.insertTreatInfo(treatVO);

        RecipeVO recipeVO = new RecipeVO();
        recipeVO.setTreNum(treNum);
        recipeVO.setMediName(mapData.get("mediName").toString());
        recipeVO.setEatCnt(mapData.get("eatCnt").toString());

        // 처방전 정보 같이 접수
        doctorService.insertRecipeInfo(recipeVO);
    }

//    // 선택한 환자 진료정보 한개 가져오기
    @GetMapping("/treOneSelect/{patNum}")
    public List<TreatVO> treOneSelect(@PathVariable(name = "patNum") int patNum) {
        //선택한 환자 진료상태 대기중->진료중

        return doctorService.treOneSelect(patNum);
    }


    //이름으로 의료진 검색
    @GetMapping("/searchStaffByName/{docName}")
    public List<DoctorVO> searchStaffByName(@PathVariable(name = "docName") String docName){
        return doctorService.searchStaffByName(docName);
    }

    // 환자 대기 목록 화면에서 삭제
    @PutMapping("/statusChange/{patNum}")
    public void statusChange(@PathVariable(name = "patNum") int patNum){
        doctorService.statusChange(patNum);
    }

    // 환자 진료 정보 등록 시 대기목록, DB 삭제
    @DeleteMapping("/waitListDelete/{patNum}")
    public void waitListDelete(@PathVariable(name = "patNum") int patNum){
        doctorService.waitListDelete(patNum);
    }
}
