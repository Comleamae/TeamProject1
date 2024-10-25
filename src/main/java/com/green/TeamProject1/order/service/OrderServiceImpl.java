package com.green.TeamProject1.order.service;

import com.green.TeamProject1.order.vo.OrderVO;
import com.green.TeamProject1.order.vo.OrderedSupplyVO;
import com.green.TeamProject1.order.vo.SupplyVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("orderService")
public class OrderServiceImpl implements OrderService {
    @Autowired
    private SqlSessionTemplate sqlSession;

    // 재고 조회 시 모든 물품 조회
    @Override
    public List<SupplyVO> selectAllSupply() {
        return sqlSession.selectList("orderMapper.selectAllSupply");
    }

    //재고 조회 시 현재 발주한 물품량 조회
    @Override
    public int getOrderAmount(int orderNum) {
        return sqlSession.selectOne("orderMapper.getOrderAmount", orderNum);
    }

    //물품 등록 시 중복 확인
    @Override
    public boolean checkSupply(String supplyName) {

        //중복 물품 없다면 가능
        if (sqlSession.selectOne("orderMapper.checkSupply", supplyName) == null){
            return true;
        }
        else{
            return false;
        }
    }

    // 새로운 물품 등록
    @Override
    public void registSupply(SupplyVO supplyVO) {
        sqlSession.insert("orderMapper.registSupply", supplyVO);
    }

    // 모든 주문 내역 조회(발주 내역 페이지)
    @Override
    public List<OrderVO> getAllOrder() {
        return sqlSession.selectList("orderMapper.getAllOrder");
    }

    //발주 버튼 눌렀을 때 commitOrder 2개 실행
    @Override
    public void commitOrder(OrderVO orderVO) {
        sqlSession.insert("orderMapper.commitOrder", orderVO);
    }

    //발주 내용 채우기
    @Override
    public void commitOrderedSupply(List<OrderedSupplyVO> orderedSupply) {
        for (OrderedSupplyVO supply : orderedSupply) {
            // 각 supply에 대해 INSERT 실행
            sqlSession.insert("orderMapper.commitOrderedSupply", supply);
        }
    }

    //주문서 내용 불러오기(발주내역 -> 상세버튼)
    @Override
    public List<SupplyVO> getOrderSupplyList(int orderNum) {
        return sqlSession.selectList("orderMapper.getOrderSupplyList", orderNum);
    }

    //주문서 내용 변경 시
    @Override
    public void updateOrderSupply(List<OrderedSupplyVO> orderedSupply) {
        for (OrderedSupplyVO supply : orderedSupply) {
            //각 supply에 대해 update진행
        sqlSession.update("orderMapper.updateOrderSupply", supply);
        }
    }

    //입고 버튼 클릭시 상태 변경
    @Override
    public void updateOrderStatus(int orderNum) {
        sqlSession.update("orderMapper.updateOrderStatus", orderNum);
    }

    //입고 버튼 클릭 시 현재 남아있는 재고 변경
    @Override
    public void updateSupplyAmount(int orderNum) {
        sqlSession.update("orderMapper.updateSupplyAmount", orderNum);
    }

    //취소 버튼 클릭 시 상태 변경
    @Override
    public void cancelOrder(int orderNum) {
        sqlSession.update("orderMapper.cancelOrder", orderNum);
    }


}
