package com.green.TeamProject1.order.service;

import com.green.TeamProject1.order.vo.OrderVO;
import com.green.TeamProject1.order.vo.SupplyVO;

import java.util.List;

public interface OrderService {
    List<SupplyVO> selectAllSupply();

    boolean checkSupply(String supplyName);

    void registSupply(SupplyVO supplyVO);

    List<OrderVO> getAllOrder();

}
