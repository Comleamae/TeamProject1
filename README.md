# 프로젝트 - 병원 증명서 간편 출력 서비스

1. [목 차](#-목차)
    - [프로젝트 설명](#프로젝트-설명)   
    - [주요 기능 소개](#주요-기능-소개)   
    - [Text Stlye2](#text-style2)   
    - [List](#list)      
    - [Link](#link)   
    - [Code Block](#code-block)   
    - [Table](#table)   
   

# 프로젝트 설명
병원에 방문한 환자가 간편하게 진료 증명서 내역을 출력할 수 있게 만드는 기능을 구현했습니다.

### 개발 환경

### 개발 기간


# 주요 기능 소개
## 회원가입 
<details><summary>기능 확인</summary>

![메인화면](https://github.com/user-attachments/assets/ea622c5d-47c8-400e-8c2e-473bc045d539)

메인화면에서 회원가입을 누르면 회원가입 페이지로 이동합니다.


![회원가입 화면](https://github.com/user-attachments/assets/e97b0a2a-8377-49b9-9f6d-ea679df98470)

회원가입 방식은 모두 동일 시 되기에 일반인 회원가입 방식으로 진행하여 일반인 회원가입을 누르면


![찐회원가입 화면](https://github.com/user-attachments/assets/60d5430a-d5fd-4f61-9e6b-423ddad34056)

회원가입에 필요한 정보 제공 동의 페이지가 나옵니다.

모두 동의를 눌러야지만 다음 페이지로 진행이 가능합니다.

모두 동의한 뒤 진행하면 회원가입에 필요한 정보를 입력하는 페이지가 나옵니다.

![회원가입 정보 입력](https://github.com/user-attachments/assets/e13efaa1-eef8-448a-a1b8-8c4035bc7401)

![주소 검색 api](https://github.com/user-attachments/assets/ea8349e1-5e12-4a36-a96a-fed1365716c1)

해당 페이지에서는 아이디와 비밀번호 중복 검사 기능과 유효성 검사 기능을 넣어놨으며,

해당 중복 기능을 거치지 않고서는 회원가입이 불가능합니다.

또한, 주민등록번호 입력란에는 정규식을 적용하여 올바른 주민등록번호를 입력해야만 진행이 가능합니다.

주소 검색 기능은 다음 API를 활용하여 적용하였습니다.

![모든 정보 입력](https://github.com/user-attachments/assets/ca473607-8320-40fb-9fa8-f3773b69fc1a)

정보를 올바르게 다 입력하고 확인을 누르면

![회원가입 완료](https://github.com/user-attachments/assets/093ee8c4-69b3-457c-a5e9-62fd9b12dd48)

회원가입이 완료되었다는 창이 나오며

페이지의 이동 여부를 선택할 수 있습니다.

메인페이지로 가기를 누르면 처음 보았던 메인 페이지로 이동합니다.


</details>
