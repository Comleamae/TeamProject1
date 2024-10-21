package com.green.TeamProject1.order.vo;

import lombok.Data;

import java.util.List;

@Data
public class OrderVO {
    private int orderNum;
    private String orderManager;
    private String orderDate;
    private int orderAmount;
    private String deliveryDate;
    private String orderNote;
    private String orderStatus;
    private List<SupplyVO> supplyList;
}
