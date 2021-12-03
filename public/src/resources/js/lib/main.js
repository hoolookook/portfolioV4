// circle chart
$(function () {
  $(window).ready(function () {
    draw(70, ".html", "#0b593d");
    draw(80, ".css", "#0b593d");
    draw(60, ".sass", "#0b593d");
    draw(50, ".js", "#0b593d");
    draw(60, ".jquery", "#0b593d");
    draw(60, ".ps", "#0b593d");
  });

  function draw(max, classname, colorname) {
    var i = 1;
    var func1 = setInterval(function () {
      if (i < max) {
        color1(i, classname, colorname);
        i++;
      } else {
        clearInterval(func1);
      }
    }, 10);
  }
  function color1(i, classname, colorname) {
    $(classname).css({
      background:
        "conic-gradient(" +
        colorname +
        " 0% " +
        i +
        "%, #1c1b18 " +
        i +
        "% 100%)",
    });
  }

  function replay() {
    draw(70, ".html", "#0b593d");
    draw(80, ".css", "#0b593d");
    draw(60, ".sass", "#0b593d");
    draw(50, ".js", "#0b593d");
    draw(60, ".jquery", "#0b593d");
    draw(60, ".ps", "#0b593d");
  }
});

// typing text 여러가지 문장
$(function () {
  var typingText = document.querySelector(".typeText");
  var textToBeTypingArr = [
    "열정적입니다.",
    "호기심이 많습니다.",
    "새로운 것을 좋아합니다.",
  ];
  var index = 0;
  var textTobeTypingIndex = 0;
  var isAdding = true;

  function playAnim() {
    setTimeout(
      function () {
        typingText.innerText = textToBeTypingArr[textTobeTypingIndex].slice(
          0,
          index
        );
        if (isAdding) {
          if (index > textToBeTypingArr[textTobeTypingIndex].length) {
            isAdding = false;
            typingText.classList.add("showAnim");
            setTimeout(function () {
              typingText.classList.remove("showAnim");
              playAnim();
            }, 1000);
            return;
          } else {
            index++;
          }
        } else {
          // 삭제할때 textTobeTypingIndex가 +1됨
          if (index == 0) {
            isAdding = true;
            textTobeTypingIndex =
              (textTobeTypingIndex + 1) % textToBeTypingArr.length;
            // console.log(textTobeTypingIndex);
          } else {
            index--;
          }
        }
        playAnim();
      },
      isAdding ? 120 : 60
    );
  }
  playAnim();
});
