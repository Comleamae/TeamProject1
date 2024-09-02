package com.green.TeamProject1.member.service;

import com.green.TeamProject1.member.vo.MemberVO;

public interface MemberService {

    boolean checkId(String memId);

    void join(MemberVO memberVO);

    MemberVO login(MemberVO memberVO);

    void insertOne(MemberVO memberVO);
}
