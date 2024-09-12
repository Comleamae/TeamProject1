package com.green.TeamProject1.member.service;

import com.green.TeamProject1.member.vo.MemberVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("memberService")
public class MemberServiceImpl implements MemberService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public boolean checkId(String memId) {
        String selectedId = sqlSession.selectOne("memberMapper.checkId",memId);
        return selectedId == null;
    }

    @Override
    public void join(MemberVO memberVO) {
        sqlSession.insert("memberMapper.join", memberVO);
    }

    @Override
    public MemberVO login(MemberVO memberVO) {
        return sqlSession.selectOne("memberMapper.login", memberVO);
    }

    @Override
    public List<MemberVO> isCitizens(String citizenNum) {
        return sqlSession.selectList("memberMapper.isCitizen", citizenNum);
    }

    @Override
    public String findId(MemberVO memberVO) {
        return sqlSession.selectOne("memberMapper.findId", memberVO);
    }
    @Override
    public String findPw(MemberVO memberVO) {
        return sqlSession.selectOne("memberMapper.findPw", memberVO);
    }
}
