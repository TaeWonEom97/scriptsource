$(function () {
  $("#signupForm").validate({
    //검증 규칙 명시 - rules에 추가
    //규칙을 적용할 요소는 이름 사용
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 4,
      },
      password: {
        required: true,
        rangelength: [8, 15],
      },
      confirm_password: {
        required: true,
        rangelength: [8, 15],
        equalTo: "#password",
      },
      email: {
        required: true,
        email: true,
      },
      policy: {
        required: true,
      },
      topic: {
        required: "#newsletter:checked",
        minlength: 2,
      },
    },
    //검증 규칙과 맞지 않는 경우
    messages: {
      username: {
        required: "이름은 필수요소입니다.",
        minlength: "이름은 최소 2자리여야 합니다.",
        maxlength: "이름은 최대 4자리여야 합니다.",
      },
      password: {
        required: "비밀번호는 필수요소입니다.",
        rangelength: "비밀번호는 최소8자리에서 최대 15자리입니다.",
      },
      confirm_password: {
        required: "비밀번호는 필수요소입니다.",
        rangelength: "비밀번호는 최소8자리에서 최대 15자리입니다.",
        equalTo: "이전 비밀번호와 다릅니다.",
      },
      email: {
        required: "이메일은 필수요소입니다.",
        email: "이메일 형식에 맞지 않습니다.",
      },
      policy: {
        required: "우리 사이트 정책에 동의를 필요로 합니다.",
      },
      topic: "관심사를 적어도 2개는 선택해야 합니다.",
    },
  });

  $("#newsletter").click(function () {
    let topics = $("#newsletter_topics");

    if (topics.css("display") == "none") {
      topics.css("display", "block");
    } else {
      topics.css("display", "none");
    }
  });
});
