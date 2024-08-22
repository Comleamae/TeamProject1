package com.green.TeamProject1.mail;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/mail")
@RestController
public class MailController {
    @Resource(name = "mailService")
    private MailServiceImpl mailService;
    private int recoNum;

    @PostMapping("/sendMail")
    public void sendEmail(MailVO mailVO){
        /*sendMail(인증번호를 받을 사람의 이메일)*/
        recoNum = mailService.sendMail(mailVO.getMailAddress());
    }
    @GetMapping("/checkNum")
    boolean checkNum(@RequestParam int InputNum){
        boolean isMatch = InputNum==recoNum;
        return isMatch;
    }
}
