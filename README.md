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

# 주요 기능 소개
<details><summary>구현 완료된 기능 목록</summary><br>

<details><summary>회원가입 및 로그인</summary>
    
![가입 및 로그인](https://github.com/user-attachments/assets/7daba2b5-c121-4fd2-a6a3-fb9d663fde29)

* 회원가입 및 로그인 기능을 구현한 화면을 GIF로 보여드립니다.
* 해당 화면에서의 주요 기능은 유효성 검사 및 신상 정보 등록에 필요한 아이디, 비밀번호, 주민등록번호에 대한 중복 검사
* 주민등록번호의 경우 다른 테이블에서의 데이터 조회에 필요하여 UNIQUE값을 부여해줌.

</details>

<details><summary>회원 인증</summary>

![회원 인증](https://github.com/user-attachments/assets/9a0b97b1-5e2f-4fa5-822e-951641531096)

* 회원으로 로그인한 경우
* 회원 자격으로 주민등록번호가 동일한 경우 회원가입 시 등록했던 이메일로 인증을 받아 진료 내역 조회 및 증명서 출력 가능

</details>

<details><summary>비회원 인증</summary>

![비회원 인증](https://github.com/user-attachments/assets/a4466bc7-aa29-43c7-afa3-e0ece9bd0c32)

* 비회원으로 접근한 경우
* 비회원은 가입 내역이 없기 때문에 방문 내역과 비교하여 주민등록번호 조회 후 인증받을 이메일 입력하여 인증번호 발급 후 진료 내역 조회 및 증명서 출력 가능

</details>


<details><summary> 진료 기록 없는 경우 </summary>

![진료 기록이 없는 경우](https://github.com/user-attachments/assets/bb5697d0-6dd6-4bda-8d24-2fc97fb5620b)

* 회원, 비회원 모두 진료 내역이 없는 경우 인증받고 화면이 전환되지 않고 바로 아래에 내역이 없다고 표시되어짐.
  
</details>

<details><summary> 진료 기록 있는 경우 </summary>

![진료 기록이 있는 경우](https://github.com/user-attachments/assets/cddd4e89-16af-420f-9e4a-776b041486a3)

* 회원, 비회원 모두 진료 내역이 있는 경우 인증받고 화면이 전환되지 않고 바로 아래에
* 출력하고 싶은 증명서를 선택하는 창이 출력됨.
* 해당 창에서 출력하고 싶은 증명서 선택 후 -> 출력을 누르면
* 파일 창에 해당 날짜, 증명서 이름, 환자 이름 순으로 파일명이 정해짐
* 저장 완료 후 인쇄까지 누르면 증명서 출력 기능이 완전하게 구현되어짐.

</details>
<details><summary> 신규방문 접수 </summary>

![신규 접수](https://github.com/user-attachments/assets/02facf1f-7437-41a4-8e2d-e8b47995255e)

* 방문 기록이 아예 없는 경우
* 재방문 접수를 눌러도 조회되는 기록이 없다고 뜨며, 신규 접수하라는 안내 메시지 출력
* 신규 접수 시 진료과를 선택하지 않으면, 담당의가 출력되지 않도록 설정 ( 진료과를 무조건 선택해야지만, 해당과에 등록된 의사 목록이 나옴 )
* 신규 접수가 완료되면 메인 페이지로 이동
  
</details>


<details><summary> 재방문 접수 </summary>

![재방문 접수](https://github.com/user-attachments/assets/75c970ac-276b-4c3f-83c1-48b830f7e7d5)

* 재방문 접수의 경우 기존 정보 중 조회하기 간편한 이름, 주민등록번호로 방문 내역 조회
* 조회하지 않고, 접수를 먼저 누르면 접수 실패
* 조회 후, 재방문 환자라는 안내 메시지가 출력된 후에 접수를 눌러야 정상 등록 됨.

</details>

<details><summary> 관리자 등록 </summary>

![관리자 등록](https://github.com/user-attachments/assets/ae2fd98c-b1d8-454d-9665-b2bce895d56d)

* 관리자 등록에서 의사를 눌러야지만, 소속과를 적고 등록할 수 있음.
* 간호사, 관리자는 소속과 입력할 수 있지만, 등록되어지지 않음. -> 해당 기능에 대해서는 수정이 필요함.
* 관리자 번호는 AUTO_INCREMENT를 사용하여, 순차적으로 적용되는 방식 
* 현재는 IFNULL을 이용하여 증가시켰지만, 추후에 트랜지션을 이용하여 중복 방지 기능 추가가 필요해보임.

</details>


<details><summary> 신규방문 환자 진료 </summary>

![신규 환자 진료](https://github.com/user-attachments/assets/cfa07f44-8ca9-4ee1-8ab1-0f1e2f7ed1f0)

* 신규 환자로 등록된 경우, 환자가 등록한 진료과의 의사만 해당 환자의 진료가 가능하게 설정
* 진료 시작 클릭 후 해당 환자의 진료 내역 입력 후 등록을 누르면 정상적으로 환자의 진료 기록이 등록되어짐.
* 진료 날짜는 본인이 선택해야하지만, 해당 날짜 이전 날짜는 선택하지 못하도록 막아둠.

</details>

<details><summary> 재방문 환자 진료 </summary>

![재방문 환자 진료](https://github.com/user-attachments/assets/58e7ef4a-31d9-4d69-bb83-04ec103f9c90)

* 재방문 환자로 등록된 경우도 신규 환자와 마찬가지로 해당 진료과의 의사만 진료가 가능함.
* 진료 시작 클릭 후 기존의 진료 내역이 있다면 좌측에 모두 표시됨.
* 진단명을 클릭하게 되면 해당 환자의 진료 상세 내역 열람 가능.

</details>

</details>






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
