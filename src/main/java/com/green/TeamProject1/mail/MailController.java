package com.green.TeamProject1.mail;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RequestMapping("/mail")
@RestController
public class MailController {
    @Resource(name = "mailService")
    private MailServiceImpl mailService;
    private int recoNum;

    //이메일 보내기
    @PostMapping("/sendMail")
    public void sendEmail(@RequestBody Map<String, String> emailData){
        //System.out.println(toSendM.replace("%40", "@"));=>보내온 파일의 특수문자가 깨지므로 replace 함수를 사용해서 1번 매개변수를 2번 매개변수로 바꾼다
        /*sendMail(인증번호를 받을 사람의 이메일)*/
        mailService.sendMail(emailData.get("email"));
        recoNum = mailService.sendMail(emailData.get("email"));
    }

    //인증번호 체크
    @PostMapping("/checkNum")
    boolean checkNum(@RequestBody Map<String, Integer> recoData){
        System.out.println(recoData.get("num"));
        System.out.println(recoNum);
        recoData.get("num");
        return true;
    }
}
