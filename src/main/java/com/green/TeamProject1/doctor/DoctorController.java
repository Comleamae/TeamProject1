package com.green.TeamProject1.doctor;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/doctor")
@RestController
public class DoctorController {
    @Resource(name = "doctorService")
    private DoctorServiceImpl doctorService;

    @GetMapping("/getOne/{docLinum}")
    DoctorVO getOneDoc(@PathVariable (name = "docLinum") int docLinum){
        return doctorService.getOneDoc(docLinum);
    }

    @GetMapping("/getList")
    List<DoctorVO> getAllDoc(){
        return doctorService.getAllDoc();
    }

    // 진료과 정보 가져오기(모두)
    @GetMapping("/getDeptList")
    List<MediDeptVO> getDeptList() {
        return doctorService.getDeptList();
    }

    // 진료과 선택 시 해당 진료과의 의사 목록 조회
    @GetMapping("/getDoctorList/{deptNum}")
    List<DoctorVO> getDoctorList(@PathVariable("deptNum") int deptNum) {
        return doctorService.getDoctorList(deptNum);
    }
}
