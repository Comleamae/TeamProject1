package com.green.TeamProject1.mail;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/mail")
@RestController
public class MailController {
    @Resource(name = "mailService")
    private MailServiceImpl mailService;

    @PostMapping("/sendMail")
    public void sendEmail(){
        int recoNum = mailService.sendMail("lbcy00@gmail.com");
    }
}
