
//유효성 검사 결과
const resultArr = [
  false, //아이디
  false, //비밀번호
  false, //이름
  false, //연락처
  false //주민번호
];

let result_pw1 = false;
let result_pw2 = false;

let citizenNum1 = false;
let citizenNum2 = false;

export const joinValidate = (newData, valid_tag, tagName) => {

  //글자 지우기
  const erase = () => {
    console.log(valid_tag)
    valid_tag.forEach((tag, i) => {
      console.log(tag)
      sendFeedbackMsg(tag, '', 'none');
    }
    )
  }

  switch (tagName) {
    case 'memId':

      //id가 영문만 포함하는지 검사하는 정규식
      const regex_memId = /^[a-z|A-Z]{4,12}$/;


      //test() : 매개변수로 들어온 데이터가 조건에 부합하면 리턴 true
      if (regex_memId.test(newData.memId)) {
        sendFeedbackMsg(valid_tag[0], '사용 가능한 아이디입니다.', 'good');
        resultArr[0] = true;
      }
      else {
        sendFeedbackMsg(valid_tag[0], '아이디는 영문이며 4~12자여야 합니다.', 'error');
        resultArr[0] = false;
      }
      break;

    case 'memPw':
    case 'confirmPw':

      //비밀번호 검사 정규식
      const regex_memPw =  /^[A-Za-z0-9]{4,12}$/;

      if (regex_memPw.test(newData.memPw)) {
        sendFeedbackMsg(valid_tag[1], '사용 가능한 비밀번호입니다.', 'good');
        result_pw1 = true;
      }
      else {
        sendFeedbackMsg(valid_tag[1], '비밀번호는 4~12자 영문,숫자로 이루어져야 합니다.', 'error');
        result_pw1 = false;
      }

      //입력한 두 비밀번호가 같으면
      if (newData.memPw == newData.confirmPw) {
        sendFeedbackMsg(valid_tag[2], '비밀번호가 일치합니다', 'good');
        result_pw2 = true;
      }
      else {
        sendFeedbackMsg(valid_tag[2], '비밀번호가 일치하지 않습니다.', 'error');
        result_pw2 = false;
      }
      resultArr[1] = result_pw1 && result_pw2 ? true : false
      break;

    case 'memName':

      //이름 검사 정규식
      const regex_memName = /^[ㄱ-ㅎ|가-힣]{2,10}$/;

      //이름 유효성 검사
      if (regex_memName.test(newData.memName)) {
        // memName_valid_tag.current.className = 'feedback good';
        // memName_valid_tag.current.textContent = '사용 가능한 이름입니다.';

        sendFeedbackMsg(valid_tag[3], '사용 가능한 이름입니다.', 'good');
        resultArr[2] = true;

      }
      else {
        // memName_valid_tag.current.className = 'feedback error';
        // memName_valid_tag.current.textContent = '이름은 한글이며 2~10자여야 합니다.';

        sendFeedbackMsg(valid_tag[3], '이름은 한글이며 2~10자여야 합니다.', 'error');
        resultArr[2] = false;

      }
      break;

    case 'memTel':
      // erase();
      //전화번호 검사 정규식
      // const regex_memTel = /^(01[016789]{1})-[0-9]{4}-[0-9]{4}$/;
      const regex_memTel = /^\d{2,3}-\d{3,4}-\d{4}$/;

      if (regex_memTel.test(newData.memTel)) {
        sendFeedbackMsg(valid_tag[4], '사용 가능한 전화번호입니다.', 'good');
        resultArr[3] = true;

      }
      else {
        sendFeedbackMsg(valid_tag[4], '연락처를 확인하세요.', 'error');
        resultArr[3] = false;

      }
      break;
    case 'citizenNum':
      const regex_citizenNum = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-8][0-9]{6}$/;

      // 주민번호 유효성 검사
      if (regex_citizenNum.test(newData.citizenNum) ) {
        sendFeedbackMsg(valid_tag[5], '올바른 주민번호입니다.', 'good');
        resultArr[4] = true;
      }
      else {
        sendFeedbackMsg(valid_tag[5], '잘못된 주민번호입니다.', 'error');
        resultArr[4] = false;
      }

  }

  //유효성검사 메세지 띄우기
  function sendFeedbackMsg(feedbackTag, msg, type) {
    feedbackTag.current.className = `feedback ${type}`;
    feedbackTag.current.textContent = msg;
  }

  console.log(resultArr)
  //resultArr의 모든 데이터가 true일 때만 리턴 true
  for (const e of resultArr) {
    if (!e) {
      return false;
    }
  }
  return true;
}
