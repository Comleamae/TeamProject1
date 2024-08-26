package com.green.TeamProject1.doctor;

import jakarta.annotation.Resource;
import org.springframework.boot.autoconfigure.amqp.RabbitProperties;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/doctor")
@RestController
public class DoctorController {
    @Resource(name = "doctorService")
    private DoctorServiceImpl doctorService;

    @PostMapping("/getOne/{docLinum}")
    DoctorVO getOneDoc(@RequestBody DoctorVO doctorVO){
        return doctorService.getOneDoc(doctorVO);
    }
}
