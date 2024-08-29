package com.green.TeamProject1.doctor;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import javax.naming.Name;
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
}
