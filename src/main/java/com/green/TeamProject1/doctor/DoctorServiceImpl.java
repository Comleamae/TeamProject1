package com.green.TeamProject1.doctor;

import com.green.TeamProject1.patient.RecipeVO;
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
    public void insertRecipeInfo(RecipeVO recipeVO) {
        sqlSession.insert("doctorMapper.insertRecipeInfo", recipeVO);
    }

    @Override
    public DoctorVO doctorLogin(DoctorVO doctorVO) {
        return sqlSession.selectOne("doctorMapper.doctorLogin", doctorVO);
    }

    // 환자 한명의 진료정보 가져오기
    @Override
    public List<TreatVO> treOneSelect(int patNum) {
        return sqlSession.selectList("doctorMapper.treOneSelect", patNum);
    }

    // 이름으로 의료진 검색 (리턴 자료형이 list인 이유는 동명이인이 존재할 경우를 위해서
    // 진료과도 함께 보여줌으로써 사용자가 직접 구분하도록 유도)
    @Override
    public List<DoctorVO> searchStaffByName(String docName) {
        return sqlSession.selectList("doctorMapper.searchStaffByName", docName);
    }

    // 진료 내역에서 진단명 클릭 시 처방전 상세 내역 보여주기
    @Override
    public TreatVO detailDisease(int treNum) {
        return sqlSession.selectOne("doctorMapper.detailDisease", treNum);
    }

    // 진료 시작 버튼 누르면 해당 환자의 상태가 대기중 -> 진료중으로 변경되어야함.
    @Override
    public void statusChange(int patNum) {
        sqlSession.update("doctorMapper.statusChange", patNum);
    }

    // 진료 등록 누르면 대기자 목록에서 삭제
    @Override
    public void waitListDelete(int patNum) {
        sqlSession.delete("doctorMapper.waitListDelete", patNum);
    }

    @Override
    public List<String> getDeptNames() {
        return sqlSession.selectList("doctorMapper.getDeptNames");
    }


    // 질병 코드 번호 조회
    @Override
    public List<DiseaseVO> diseaseCode(DiseaseVO diseaseVO) {
        return sqlSession.selectList("doctorMapper.diseaseCode");
    }

    // 수납 정보 등록
    @Override
    public void payMoney(TreatVO treatVO) {
        sqlSession.insert("doctorMapper.payMoney", treatVO);
    }



    // 수납 대기자 조회
    @Override
    public List<DeskVO> payDesk(DeskVO deskVO) {
        return sqlSession.selectList("doctorMapper.payDesk", deskVO);
    }



}
