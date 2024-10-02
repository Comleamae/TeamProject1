package com.green.TeamProject1.desk;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/desk")
public class DeskController {

    @Resource(name = "deskService")
    private DeskServiceImpl deskService;

}
