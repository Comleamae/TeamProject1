package com.green.TeamProject1.order.controller;

import com.green.TeamProject1.order.service.OrderService;
import com.green.TeamProject1.order.vo.OrderVO;
import com.green.TeamProject1.order.vo.SupplyVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.sql.SQLOutput;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api_order")
public class OrderController {
    @Resource(name = "orderService")
    private OrderService orderService;


    // 재고조회 시 모든 물품 조회
    @GetMapping("/selectAllSupply")
    public List<SupplyVO> selectAllSupply(){
        return orderService.selectAllSupply();
    }



    // 물품 등록 시 중복 확인
    @PostMapping("/checkSupply")
    public boolean checkSupply(@RequestBody Map<String, String> supplyName){
        return orderService.checkSupply(supplyName.get("supplyName"));
    }


    // 중복 아니라면 물품 신규 등록
    @PostMapping("/registSupply")
    public void registSupply(SupplyVO supplyVO,
                             @RequestParam("supplyImage1") MultipartFile supplyImage1
    ){
        System.out.println(supplyVO);
        //파일 업로드 될 경로
        String uploadPath = "D:\\01-STUDY\\dev\\TeamProject1\\src\\main\\resources\\static\\upload\\";

        //첨부될 파일 원래명
        String imageName = supplyImage1.getOriginalFilename();

        //첨부 파일명 랜덤으로 생성
        String uuid = UUID.randomUUID().toString();

        //원본파일에서 확장자만 추출
        int dotIndex =imageName.lastIndexOf(".");
        String extension = imageName.substring(dotIndex);

        // 첨부될 파일명
        String afftachedFileName = uuid + extension;

        //첨부될 파일 생성
        File file = new File(uploadPath + afftachedFileName);

        try {
            supplyImage1.transferTo(file);
            supplyVO.setSupplyImage(afftachedFileName);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        orderService.registSupply(supplyVO);
    }

    @GetMapping("/getAllOrder")
    public List<OrderVO> getAllOrder(){
        return orderService.getAllOrder();
    }


}
