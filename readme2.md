
# 프로젝트 - 병원 내 발주 시스템 ( 공급사 연동 )

* [목 차](#-목-차)
    - [프로젝트 설명](#프로젝트-설명)   
    - [주요 기능 소개](#주요-기능-소개)   
    - [프로젝트 구조](#프로젝트-구조)   
    - [테이블 구조](#테이블-구조)
    - [팀원 소개](#팀원-소개)
 

# 프로젝트 설명
* 프로젝트 주제
    * 병원 내 모든 의료용품, 비품을 발주 시스템을 이용하여 효율적인 관리 및 비용 절감
    * 인적 오류 최소화를 위하여 해당 기능을 구현하게 됨.
* 프로젝트 목표
    * 발주한 물품의 재고 관리 기능
    * 발주한 물품 주문 내역 수정, 취소 기능
    * 발주한 물품 공급사 입고 기능
 
### 개발 환경
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node-dot-js&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ_IDEA-000000?style=for-the-badge&logo=intellij-idea&logoColor=white)
![HeidiSQL](https://img.shields.io/badge/HeidiSQL-006400?style=for-the-badge&logo=heidisql&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)


### 개발 기간
2024.08.23 ~ 2024.09.06

# 주요 기능 소개
<details><summary>구현 완료된 기능 목록</summary><br>

<details><summary>관리자 로그인 및 재고관리 페이지</summary>
    
![1-1](https://github.com/user-attachments/assets/67306f0e-2db6-41d3-814d-1c96c703edf5)

</details>


<details><summary>신규 물품 등록</summary>
    
![21-1](https://github.com/user-attachments/assets/f6834279-a2f1-436b-9799-6b9f4b61ca03)
![22-2](https://github.com/user-attachments/assets/cc4c2840-0395-421c-b4cc-c79c5afe9bd2)

</details>


<details><summary>발주 신청</summary>
    
![3-1](https://github.com/user-attachments/assets/93a3eb7b-0301-4766-ba5d-edb29679eb5e)

</details>


<details><summary>발주 내역 관리</summary>
    
![4-1](https://github.com/user-attachments/assets/2b20c1c2-40f7-4abb-a166-013d3a9953e7)

</details>


# 프로젝트 구조
<details><summary>구조도 보기</summary>

```plaintext
src
 ┣ pages
 ┃ ┣ admin
 ┃ ┣ order (다른 프로젝트와 겹침)
 ┃ ┃ ┗ kth
 ┃ ┃ ┃ ┣ ManageSupply.css
 ┃ ┃ ┃ ┣ ManageSupply.js
 ┃ ┃ ┃ ┣ OrderLayout.css
 ┃ ┃ ┃ ┣ OrderLayout.js
 ┃ ┃ ┃ ┣ OrderList.css
 ┃ ┃ ┃ ┣ OrderList.js
 ┃ ┃ ┃ ┣ RegistSupply.css
 ┃ ┃ ┃ ┣ RegistSupply.js
 ┃ ┃ ┃ ┣ RequestOrder.css
 ┃ ┃ ┃ ┗ RequestOrder.js
 ┣ App.css
 ┣ App.js
 ┣ App.test.js
 ┣ index.css
 ┣ index.js
 ┣ logo.svg
 ┣ reportWebVitals.js
 ┣ reset.css
 ┗ setupTests.js
```
</details>



# 테이블 구조
<details><summary>구조도 보기</summary>
    
![테이블 구조](https://github.com/user-attachments/assets/06576686-188e-4b92-a473-2e34688de019)

</details>


# 팀원 소개
| 팀원    |박주원         | 김탁현              | 김세훈           | 최윤형         |
|---------|--------------------|---------------------|------------------|-----------------|
| 담당기능     | 증명서 출력 기능 | 회원가입 및 로그인 기능 | 진료 예약 / 환자 진료 기능 | 웹페이지 제작 및 PPT 제작 |
