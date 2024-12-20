package com.green.TeamProject1.doctor;

import com.green.TeamProject1.patient.RecipeVO;
import com.green.TeamProject1.patient.TreatVO;

import java.util.List;

public interface DoctorService {

    void insertDoctor(DoctorVO doctorVO);

    /*의사 한명의 정보를 얻어와*/
    DoctorVO getOneDoc(int docLinum);
    /*의사 전체 리스트*/
    List<DoctorVO> getAllDoc();

    // 모든 진료과 정보 받아오기
    List<MediDeptVO> getDeptList();

    // 선택한 진료과에 소속된 의사 목록 조회
    List<DoctorVO> getDoctorList(int deptNum);

    // 진료 번호 넘겨주기 위해 새로 생성
    int getNextTreNum();

    // 선택한 환자 진료정보 삽입
    void insertTreatInfo(TreatVO treatVO);

    // 선택한 환자의 처방전 정보 삽입
    void insertRecipeInfo(RecipeVO recipeVO);

    // 의료진 로그인
    DoctorVO doctorLogin(DoctorVO doctorVO);

    // 선택한 환자 한명에 대한 진료정보 조회
    List<TreatVO> treOneSelect(int patNum);

    // 진료 시작 누르면 대기중이 진료중으로 바뀌어야함.
    void statusChange(int patNum);

    // 진료 등록 누르면 대기중 목록에서 삭제
    void waitListDelete(int patNum);

    List<String> getDeptNames();

    // 의료진 검색기능 BY KTH
    List<DoctorVO> searchStaffByName(String docName);

    // 진료 내역에서 진단명 클릭 시 처방전 상세 내역 보여주기
    TreatVO detailDisease(int treNum);

    // 질병 코드 조회
    List<DiseaseVO> diseaseCode(DiseaseVO diseaseVO);

    // 수납 정보 등록
    void payMoney(TreatVO treatVO);

    // 수납 대기자 조회
    List<DeskVO> payDesk(DeskVO deskVO);



}
