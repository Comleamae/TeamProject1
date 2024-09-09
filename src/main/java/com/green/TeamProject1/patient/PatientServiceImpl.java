package com.green.TeamProject1.patient;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

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


    // 신규 환자 번호 생성
    @Override
    public int getNextPatNum() {
        return sqlSession.selectOne("patientMapper.getNextPatNum");
    }

    // 신규 환자 정보
    @Override
    public void regInsert(PatientVO patientVO) {
        sqlSession.insert("patientMapper.regInsert", patientVO);
    }

    // 신규 환자 진료 정보
    @Override
    public void recepInsert(PatientVO patientVO) {
        sqlSession.insert("patientMapper.recepInsert", patientVO);
    }

    // 재방문 조회
    @Override
    public int compareSelect(PatientVO patientVO) {
        return sqlSession.selectOne("patientMapper.compareSelect");
    }

    // 재방문 접수
    @Override
    public void compareInsert(RecepVO recepVO) {
        sqlSession.insert("patientMapper.compareInsert");
    }

}
