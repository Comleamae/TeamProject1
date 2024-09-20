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


    // 재방문인지 조회
    @Override
    public PatientVO reSelect(PatientVO patientVO) {
        return sqlSession.selectOne("patientMapper.reSelect", patientVO);
    }


    // 재방문이면 접수
    @Override
    public void reInsert(PatientVO patientVO) {
        sqlSession.insert("patientMapper.reInsert", patientVO);
    }

    // 환자 대기 목록 조회
    @Override
    public List<PatientVO> waitList() {
        return sqlSession.selectList("patientMapper.waitList");
    }


    // 대기 중인 환자 목록에서 환자 번호 기준으로 상세 정보 조회
    @Override
    public PatientVO getPatientInfo(int patNum) {
        return sqlSession.selectOne("patientMapper.getPatientInfo", patNum);
    }

}
