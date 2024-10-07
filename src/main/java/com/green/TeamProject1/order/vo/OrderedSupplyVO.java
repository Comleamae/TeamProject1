package com.green.TeamProject1.order.vo;

import lombok.Data;

@Data
public class OrderedSupplyVO {
    private int orderSupplyNum;
    private int supplyNum;
    private int orderAmount;
    private int orderNum;
    private SupplyVO supply;
}