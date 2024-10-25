package com.green.TeamProject1.order.service;

import com.green.TeamProject1.order.vo.OrderVO;
import com.green.TeamProject1.order.vo.OrderedSupplyVO;
import com.green.TeamProject1.order.vo.SupplyVO;

import java.util.List;

public interface OrderService {

    List<SupplyVO> selectAllSupply();

    int getOrderAmount(int orderNum);

    boolean checkSupply(String supplyName);

    void registSupply(SupplyVO supplyVO);

    List<OrderVO> getAllOrder();

    void commitOrder(OrderVO orderVO);

    void commitOrderedSupply(List<OrderedSupplyVO> orderedSupply);

    List<SupplyVO> getOrderSupplyList(int orderNum);

    void updateOrderSupply(List<OrderedSupplyVO> orderedSupplyList);

    void updateOrderStatus(int orderNum);

    void updateSupplyAmount(int orderNum);

    void cancelOrder(int orderNum);
}
