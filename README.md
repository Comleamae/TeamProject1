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

## 로그인한 회원의 증명서 출력
<details><summary>기능 확인</summary>

![로그인 성공 화면](https://github.com/user-attachments/assets/9f1bd055-568e-45f4-89cc-d0591ef97c24)

기존에 회원가입한 아이디로 로그인에 성공한 경우

![초기화면](https://github.com/user-attachments/assets/89736dad-e610-4993-b07a-03b171b957a8)

로그인한 상태로 메인화면으로 돌아가며, 우측 상단에 로그인한 회원의 이름이 출력됨.

![로그인 인증 1단계](https://github.com/user-attachments/assets/09e2f6dd-0db1-4f91-86f3-b80c0a63518c)

로그인한 상태에서 증명서 발급을 누르면, 또 한번 더 주민등록번호 확인을 거침.

![주민번호가 맞아서 이메일 보내기](https://github.com/user-attachments/assets/e1ca6f39-37d9-4588-9594-a70d664c94f8)

가입한 회원의 주민번호와 일치하면, 로그인에 입력했던 이메일로 인증번호를 발송함.

![이메일로 인증번호가 온 화면](https://github.com/user-attachments/assets/5c2495c0-2194-4d06-ba28-19f5c89bdee4)

인증번호를 받은 이메일 화면

![인증번호 입력](https://github.com/user-attachments/assets/9c23b3cb-1812-4b14-9220-7756a00d71e9)

발급받은 인증번호를 입력하면

![인증된 화면](https://github.com/user-attachments/assets/f25bfb7e-8402-4b1e-b6f2-d31e65992a27)

인증되었다고 출력되면서 증명서를 발급받을 수 있는 상황이 됨

</details>

<details><summary>진료 기록이 없는 경우</summary>
    ![인증이 되었지만 해당 환자의 진료 정보가 없음](https://github.com/user-attachments/assets/a4d83007-2f9e-4c13-85c5-ede21d4f1df2)

</details>


