package com.green.TeamProject1.member;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/member")
@RestController
public class MemberController {
    @Resource(name = "memberService")
    private MemberServiceImpl memberService;

}
