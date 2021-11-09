//아이디 유효성 검증
//영어 대소문자,숫자만 허용 6~12자리 길이
function idCheck(userid) {
  let regid = /^(?=.*[A-Za-z])(?=.*[\d])[A-Za-z\d!$#]{6,12}$/;
  //userid 사용자 입력값 가져오기
  //   let userid = document.querySelector("#userid").value;
  //유효성 검증 - 메세지 띄우기

  if (!regid.test(userid)) {
    alert("아이디를 확인해주세요");
    document.querySelector("#userid").select();
    return;
  }
}
function pwdCheck(userpw) {
  let regid = /^(?=.*[A-Za-z])(?=.*[\d])(?=.*[!$#@*])[A-Za-z\d!$#@*]{8,15}$/;
  if (!regid.test(userpw)) {
    alert("비밀번호를 확인하시오.");
    document.querySelector("#userpw").select();
    return;
  }
}
function conpwdCheck(confirmpwd) {
  let regid = /^(?=.*[A-Za-z])(?=.*[\d])(?=.*[!$#@*])[A-Za-z\d!$#@*]{8,15}$/;
  if (!regid.test(confirmpwd)) {
    alert("비밀번호를 확인하시오.");
    document.querySelector("#confirmpwd").select();
    return;
  }
  if (
    document.querySelector("#userpw").value !==
    document.querySelector("#confirmpwd").value
  ) {
    alert("재비밀번호를 확인하시오.");
    document.querySelector("#confirmpwd").select();
    return;
  }
}
function genderCheck() {
  //성별 : 둘 중 무조건 하나 선택
  // 제일 첫번째 요소
  let gender = document.querySelector("[name='gender']");
  if (!gender.checked) {
    alert("성별을 확인하세요.");
  }
}
//   let genders = document.querySelectorAll("[name='gender']");
//   genders.forEach((element) => {
//     if (!element.checked) {
//       alert(element.value);
//     }
//   });

function emailCheck(email) {
  let regid = /\w+@[A-za-z]+\.(com|org|edu|ent)/;
  if (!regid.test(email)) {
    alert("이메일을 확인하시오.");
    document.querySelector("#email").select();
    return;
  }
}
function telCheck(mobile) {
  //핸드폰 번호 : 000-0000-0000
  let regid = /\d{3}\d{4}\d{4}$/;
  if (!regid.test(mobile)) {
    alert("핸드폰 번호를 확인하시오. ");
    document.querySelector("#mobile").select();
    return;
  }
}
function hobbyCheck() {}
