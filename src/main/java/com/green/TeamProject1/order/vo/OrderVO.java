package com.green.TeamProject1.order.vo;

import lombok.Data;

@Data
public class OrderVO {
    private int orderNum;
    private SupplyVO supplyVO;
    private String orderManager;
    private String orderDate;
    private int orderAmount;
    private String deliveryDate;
    private String orderNote;
}
