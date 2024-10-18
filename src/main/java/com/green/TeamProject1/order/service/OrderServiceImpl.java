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


    @Override
    public List<OrderVO> getAllOrder() {
        return sqlSession.selectList("orderMapper.getAllOrder");
    }

    //발주 버튼 눌렀을 때 confirmOrder 2개 실행
    @Override
    public void commitOrder(OrderVO orderVO) {
        sqlSession.insert("orderMapper.commitOrder", orderVO);
    }

    @Override
    public void commitOrderedSupply(List<OrderedSupplyVO> orderedSupply) {
        for (OrderedSupplyVO supply : orderedSupply) {
            // 각 supply에 대해 INSERT 실행
            sqlSession.insert("orderMapper.commitOrderedSupply", supply);
        }
    }

    @Override
    public List<SupplyVO> getOrderSupplyList(int orderNum) {
        return sqlSession.selectList("orderMapper.getOrderSupplyList", orderNum);
    }

    @Override
    public void updateOrderSupply(List<OrderedSupplyVO> orderedSupply) {
        for (OrderedSupplyVO supply : orderedSupply) {
            //각 supply에 대해 update진행
        sqlSession.update("orderMapper.updateOrderSupply", supply);
        }
    }


}
