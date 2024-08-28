package com.green.TeamProject1.member.controller;

import com.green.TeamProject1.member.service.MemberService;
import com.green.TeamProject1.member.vo.MemberVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/join")
    public void join(@RequestBody MemberVO memberVO){
        memberService.join(memberVO);
    }

    @PostMapping("/login")
    public MemberVO login(@RequestBody MemberVO memberVO){
        /*selectOne의 결과로 null이 나온다면 로그인 불가*/
        /*selectOne의 결과로 null이 아니라면 로그인 가능*/
        return memberService.login(memberVO);
    }
}
