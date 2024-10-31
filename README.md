# 프로젝트 - 병원 증명서 간편 출력 서비스

* [목 차](#-목-차)
    - [프로젝트 설명](#프로젝트-설명)   
    - [주요 기능 소개](#주요-기능-소개)   
    - [프로젝트 구조](#프로젝트-구조)   
    - [테이블 구조](#테이블-구조)
    - [팀원 소개](#팀원-소개)
   

# 프로젝트 설명
* 프로젝트 주제
    * 병원 내 모든 환자들이 자신의 진료 증명서를 간편하게 출력할 수 있는 기능
* 프로젝트 목표
    * 병원에 방문한 환자가 손쉽게 간단한 인증만으로 진료 증명서를 출력할 수 있도록 기능 구현
    * 기본적인 회원, 비회원 기능 구분하여 진료 예약, 접수도 가능하게 만듬 

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

![가입 및 로그인](https://github.com/user-attachments/assets/7daba2b5-c121-4fd2-a6a3-fb9d663fde29)
![관리자 등록](https://github.com/user-attachments/assets/ae2fd98c-b1d8-454d-9665-b2bce895d56d)
![로그인 후 증명서 발급](https://github.com/user-attachments/assets/9a0b97b1-5e2f-4fa5-822e-951641531096)
![비회원 인증](https://github.com/user-attachments/assets/a4466bc7-aa29-43c7-afa3-e0ece9bd0c32)
![신규 접수](https://github.com/user-attachments/assets/02facf1f-7437-41a4-8e2d-e8b47995255e)
![신규 환자 진료](https://github.com/user-attachments/assets/cfa07f44-8ca9-4ee1-8ab1-0f1e2f7ed1f0)
![재방문 접수](https://github.com/user-attachments/assets/75c970ac-276b-4c3f-83c1-48b830f7e7d5)
![재방문 환자 진료](https://github.com/user-attachments/assets/58e7ef4a-31d9-4d69-bb83-04ec103f9c90)
![진료 기록이 없는 경우](https://github.com/user-attachments/assets/bb5697d0-6dd6-4bda-8d24-2fc97fb5620b)
![진료 기록이 있는 경우](https://github.com/user-attachments/assets/cddd4e89-16af-420f-9e4a-776b041486a3)



# 주요 기능 소개
<details><summary>전체 기능</summary><br>
<details><summary>회원가입</summary></details>








# 프로젝트 구조
<details><summary>구조도 보기</summary>

```plaintext
src
 ┣ pages
 ┃ ┣ admin
 ┃ ┃ ┣ ksh
 ┃ ┃ ┃ ┣ NewVisit.css
 ┃ ┃ ┃ ┣ NewVisit.js
 ┃ ┃ ┃ ┣ ReVisit.css
 ┃ ┃ ┃ ┣ ReVisit.js
 ┃ ┃ ┃ ┣ TreChart.css
 ┃ ┃ ┃ ┣ TreChart.js
 ┃ ┃ ┃ ┣ Visitant.css
 ┃ ┃ ┃ ┗ Visitant.js
 ┃ ┃ ┣ kth
 ┃ ┃ ┃ ┣ AdminJoin.css
 ┃ ┃ ┃ ┣ AdminJoin.js
 ┃ ┃ ┃ ┣ AdminLogin.css
 ┃ ┃ ┃ ┣ AdminLogin.js
 ┃ ┃ ┃ ┗ AdminMain.js
 ┃ ┃ ┣ pjw
 ┃ ┃ ┃ ┣ ClinicList.css
 ┃ ┃ ┃ ┗ ClinicList.js
 ┃ ┃ ┣ AdminLayout.css
 ┃ ┃ ┗ AdminLayout.js
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
 ┃ ┣ user
 ┃ ┃ ┣ cyh
 ┃ ┃ ┃ ┣ Loading.js
 ┃ ┃ ┃ ┣ MoneyIn.css
 ┃ ┃ ┃ ┣ MoneyIn.js
 ┃ ┃ ┃ ┣ PayLoading.js
 ┃ ┃ ┃ ┣ PayMoney.css
 ┃ ┃ ┃ ┣ PayMoney.js
 ┃ ┃ ┃ ┣ Spin@1x-1.8s-200px-200px.gif
 ┃ ┃ ┃ ┣ Styles.js
 ┃ ┃ ┃ ┗ SubMenu.js
 ┃ ┃ ┣ ksh
 ┃ ┃ ┃ ┣ KakaoMap.css
 ┃ ┃ ┃ ┗ KakaoMap.js
 ┃ ┃ ┣ kth
 ┃ ┃ ┃ ┣ Find.css
 ┃ ┃ ┃ ┣ FindId.js
 ┃ ┃ ┃ ┣ FindPw.js
 ┃ ┃ ┃ ┣ JoinSelect.js
 ┃ ┃ ┃ ┣ JoinStep1.js
 ┃ ┃ ┃ ┣ JoinStep1_1.js
 ┃ ┃ ┃ ┣ JoinStep2.css
 ┃ ┃ ┃ ┣ JoinStep2.js
 ┃ ┃ ┃ ┣ JoinStep3.js
 ┃ ┃ ┃ ┣ joinValidate.js
 ┃ ┃ ┃ ┣ Login.css
 ┃ ┃ ┃ ┣ Login.js
 ┃ ┃ ┃ ┣ Modal.js
 ┃ ┃ ┃ ┣ SearchStaff.css
 ┃ ┃ ┃ ┗ SearchStaff.js
 ┃ ┃ ┣ pjw
 ┃ ┃ ┃ ┣ utils
 ┃ ┃ ┃ ┃ ┗ pdfUtils.js
 ┃ ┃ ┃ ┣ ClinicPrint.css
 ┃ ┃ ┃ ┣ ClinicPrint.js
 ┃ ┃ ┃ ┣ FormSelector.js
 ┃ ┃ ┃ ┣ PrintForm.js
 ┃ ┃ ┃ ┣ PrintForm2.js
 ┃ ┃ ┃ ┣ PrintForm3.js
 ┃ ┃ ┃ ┗ PrintForm4.js
 ┃ ┃ ┣ UserLayout.css
 ┃ ┃ ┗ UserLayout.js
 ┃ ┣ Footer.css
 ┃ ┣ Footer.js
 ┃ ┣ Main.css
 ┃ ┣ Main.js
 ┃ ┣ MedicalCenter.css
 ┃ ┣ MedicalCenter.js
 ┃ ┣ SideList.css
 ┃ ┗ SideList.js
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
| 담당기능 | 증명서 출력 기능 | 회원가입 및 로그인 기능 | 진료 예약 / 환자 진료 기능 | 웹페이지 제작 및 PPT 제작 |
