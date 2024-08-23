package com.green.TeamProject1.member.controller;

import com.green.TeamProject1.member.service.MemberService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api_member")
public class MemberController {
    @Resource(name = "memberService")
    private MemberService memberService;

    @GetMapping("/checkId/{memId}")
    public boolean checkId(@PathVariable("memId") String memId){
        boolean result = memberService.checkId(memId);
        return result;
    }
}
