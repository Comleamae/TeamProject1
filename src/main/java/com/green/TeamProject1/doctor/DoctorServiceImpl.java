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
    public void insertDoctor(DoctorVO doctorVO) {
        sqlSession.insert("doctorMapper.insertDoctor", doctorVO);
    }

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

    // 진료 정보 넘겨주기 위한 번호 생성
    @Override
    public int getNextTreNum() {
        return sqlSession.selectOne("doctorMapper.getNextTreNum");
    }

    // 진료 정보 등록
    @Override
    public void insertTreatInfo(TreatVO treatVO) {
        sqlSession.insert("doctorMapper.insertTreatInfo", treatVO);
    }

    // 진료정보에 처방전 정보 추가 등
    @Override
    public void insertRecipeInfo(TreatVO treatVO) {
        sqlSession.insert("doctorMapper.insertRecipeInfo", treatVO);
    }

    // 환자 한명의 진료정보 가져오기
    @Override
    public  List<TreatVO> treOneSelect(int patNum) {
        return sqlSession.selectList("doctorMapper.treOneSelect", patNum);
    }


}
