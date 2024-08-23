package com.green.TeamProject1.doctor;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/doctor")
@RestController
public class DoctorController {

    @Resource(name = "doctorService")
    private DoctorServiceImpl doctorService;
}
