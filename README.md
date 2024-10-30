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
<details><summary>전체 기능</summary>

<details><summary>회원가입</summary>

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


<details><summary>회원 증명서 출력</summary>

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


<details><summary>비회원 증명서 출력</summary>
    
![비회원 메인](https://github.com/user-attachments/assets/92c05ccf-cf31-4711-9cf4-b7a0c3323d68)

메인화면에서 증명서 발급 메뉴를 선택합니다.

![입력값 넣기](https://github.com/user-attachments/assets/ca5c249e-44d7-40b8-baef-a65c7574316c)

비회원인 상태에서는 주민등록번호와 이메일 인증을 받을 정보를 입력합니다.

![이메일 발송](https://github.com/user-attachments/assets/0e694d43-0a8c-4c4b-92a8-8951232011b2)

이메일이 발송되면,

![인증번호 확인](https://github.com/user-attachments/assets/e272032b-28c6-47b1-9ef3-58ab1740e709)

해당 이메일이 도착했는지 확인한 후에

![인증번호 입력](https://github.com/user-attachments/assets/be993c22-c0ed-4701-b2a4-b1adc2b6e98d)

인증번호를 입력합니다.

![인증번호 인증됨](https://github.com/user-attachments/assets/51a9e69d-8085-4161-b1e9-b7027afb7a0d)

인증번호가 정상적으로 확인되면 아래의 증명서 선택화면으로 넘어갑니다.

![증명서 선택화면](https://github.com/user-attachments/assets/6e6daedc-7683-415c-9c18-63596c947f1d)

증명서 선택화면에서 진료 확인서를 선택하면, 회원과 동일한 프로세스로 작동됩니다.

</details>


<details><summary>진료 기록이 없는 경우</summary>
    ![인증이 되었지만 해당 환자의 진료 정보가 없음](https://github.com/user-attachments/assets/a4d83007-2f9e-4c13-85c5-ede21d4f1df2)

</details>

<details><summary>진료 기록이 있는 경우</summary>
    
![해당 환자의 첫 번째 진료에 대한 진료 확인서](https://github.com/user-attachments/assets/0de3f503-61f9-4a84-8bef-35bc88fdf0e0)

해당 환자의 진료 내역이 표시됩니다.

![해당 환자의 이름과 진료 날짜가 파일명에 들어오는지 확인](https://github.com/user-attachments/assets/21c8aa6e-532a-4b00-9efa-0e7413be73a9)

출력 버튼을 누르면 이미지를 저장할 수 있는 창이 뜨며, 파일창에 해당 증명서의 이름이 제대로 입력되어있는지 확인합니다.

![출력버튼 누르고 pdf저장 화면](https://github.com/user-attachments/assets/cee0ea69-2b92-4702-8c20-8c53584d6156)

마지막으로 저장을 누르면 PDF 형식으로 저장됩니다.

![프린트 화면](https://github.com/user-attachments/assets/2542c33d-79fe-4210-b95e-13442b322cd2)

저장한 PDF를 프린트 할 수 있는 화면

![인쇄 화면](https://github.com/user-attachments/assets/bf4b8a82-c246-4900-ba6d-9a24a6973070)

저장한 PDF를 인쇄할 수 있는 화면

</details>


<details><summary>신규 접수 등록</summary>
    
![메인화면](https://github.com/user-attachments/assets/9eea6627-ffac-4771-8c68-39953b166e49)

![접수 페이지](https://github.com/user-attachments/assets/25e51965-018f-4a7c-b266-108aa8dba62a)

![신규 접수](https://github.com/user-attachments/assets/af01dd48-6492-45d8-b0e5-3161f425db83)

![신규 접수 정보 입력](https://github.com/user-attachments/assets/fc517a0d-c46b-4e33-8af3-db32f2de23c9)

![접수 완료](https://github.com/user-attachments/assets/d2e7baef-fa84-4a9d-af79-a623f524cdf4)


</details>

<details><summary>재방문 접수 등록</summary>
![기존 방문환자가 재방문 한 경우 동일한 정보이면 재방문 환자](https://github.com/user-attachments/assets/0926ca50-dab5-4a3f-8c83-5ea8ebe416a1)
    
![재방문 얼럿](https://github.com/user-attachments/assets/8ab4676f-19ad-42de-8357-63a90ebf3d67)

![재방문 접수 완료](https://github.com/user-attachments/assets/a2773e4d-b9d0-4dac-bc04-56e9ac4dd9df)


</details>

<details><summary>의사 관점 환자 진료</summary>

![관리자 로그인](https://github.com/user-attachments/assets/e38093e4-c000-48bb-b912-cae929bf6f68)
![의사 환여 ㅇ얼럿](https://github.com/user-attachments/assets/d5943b4f-e4d4-4a4e-9fa0-1e44230f4ed9)
![환자 차트 조회 가능](https://github.com/user-attachments/assets/ffc6b070-e22b-4375-99cd-e25dd04b5ffc)
![진료 시작 누르면](https://github.com/user-attachments/assets/fb6b26e9-b12b-4d33-bb28-298adc886cdd)
![환자 기본 정보 출력 및 접수 대기 명단 삭제](https://github.com/user-attachments/assets/38b75390-787c-4907-8a89-d801465af73e)
![처방내역 등록](https://github.com/user-attachments/assets/25ae0cd7-4716-4a2b-b527-2c540601f26d)
![진료 기록 등록](https://github.com/user-attachments/assets/7f1ac151-cf27-49d7-b83e-a64175b9543c)
![접수했던 기존 내역이 존재하는 환자는 이전 진료내역도 조회 가능함](https://github.com/user-attachments/assets/6f796836-0505-465a-abc1-9d2ffc90ac20)
![진단명 클릭 시 진료 상세 내역 출력](https://github.com/user-attachments/assets/e74449b9-40af-4380-8f38-6c8c7d38ce67)

</details>



