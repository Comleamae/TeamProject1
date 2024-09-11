package com.green.TeamProject1.doctor;

import com.green.TeamProject1.patient.PatientVO;
import com.green.TeamProject1.patient.TreatVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("doctorService")
public class DoctorServiceImpl implements DoctorService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public DoctorVO getOneDoc(int docLinum) {
        return sqlSession.selectOne("doctorMapper.getOneDoc", docLinum);
    }

    @Override
    public List<DoctorVO> getAllDoc() {
        return sqlSession.selectList("doctorMapper.getAllDoc");
    }


    // 진료과 정보 얻어오기
    @Override
    public List<MediDeptVO> getDeptList() {
        return sqlSession.selectList("doctorMapper.getDeptList");
    }

    // 진료과에 소속된 의사 정보 받아오기
    @Override
    public List<DoctorVO> getDoctorList(int deptNum) {
        return sqlSession.selectList("doctorMapper.getDoctorList", deptNum);
    }

    @Override
    public void insertTreatInfo(TreatVO treatVO) {
        sqlSession.insert("doctorMapper.insertTreatInfo", treatVO);
    }


}
