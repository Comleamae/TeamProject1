package com.green.TeamProject1.patient;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("patientService")
public class PatientServiceImpl implements PatientService{
    @Autowired
    private SqlSessionTemplate sqlSession;


    @Override
    public List<PatientVO> getPatListWhereEmail(String citizenNum) {
        return sqlSession.selectList("patientMapper.getPatientList", citizenNum);
    }

    @Override
    public List<PatientVO> getPatListAll(int patNum, int treNum) {
        Map<String, Object> params = new HashMap<>();
        params.put("patNum", patNum);
        params.put("treNum", treNum);
        return sqlSession.selectList("patientMapper.getPatListAll", params);
    }

    @Override
    public List<TreatVO> getOneTreDate(int patNum) {
        return sqlSession.selectList("patientMapper.getOneTreDate", patNum);
    }

    @Override
    public int getNextPatNum() {
        return sqlSession.selectOne("patientMapper.getNextPatNum");
    }

    // 신규 예약 등록
    @Override
    public void regInsert(PatientVO patientVO) {
        sqlSession.insert("patientMapper.regInsert", patientVO);
    }

    // 신규 예약 등록 + 접수 정보 등록
    @Override
    public void recepInsert(PatientVO patientVO) {
        sqlSession.insert("patientMapper.recepInsert", patientVO);

    }




}
