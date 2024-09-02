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

    //아이디 중복 확인
    @GetMapping("/checkId/{memId}")
    public boolean checkId(@PathVariable("memId") String memId){
        //결과값이 null이라면 return true 가입 가능
        //결과값이 null이 아니라면 return false 가입 불가능
        boolean result = memberService.checkId(memId);
        return result;
    }

    // 회원가입
    @PostMapping("/join")
    public void join(@RequestBody MemberVO memberVO){
        memberService.join(memberVO);
    }

    // 로그인
    @PostMapping("/login")
    public MemberVO login(@RequestBody MemberVO memberVO){
        /*selectOne의 결과로 null이 나온다면 로그인 불가*/
        /*selectOne의 결과로 null이 아니라면 => 회원 정보가 나온다면 로그인 가능*/
        System.out.println(memberService.login(memberVO));
        return memberService.login(memberVO);
    }
    // 회원가입
    @PostMapping("/insertOne")
    public void insertOne(@RequestBody MemberVO memberVO){
        memberService.insertOne(memberVO);
    }
}