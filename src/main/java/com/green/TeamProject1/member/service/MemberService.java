package com.green.TeamProject1.member.service;

import com.green.TeamProject1.member.vo.MemberVO;

import java.util.List;

public interface MemberService {

    boolean checkId(String memId);

    void join(MemberVO memberVO);

    MemberVO login(MemberVO memberVO);

    List<MemberVO> isCitizens(String citizenNum);
}
