// click & scroll event
// console.log("footer 스크롤 값은 " + $("#footer").offsetTop);
const target = document.getElementById("footer"); // 요소의 id 값이 target이라 가정
const clientRect = target.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
const relativeTop = clientRect.top; // Viewport의 시작지점을 기준으로한 상대좌표 Y 값.
const scrolledTopLength = window.pageYOffset; // 스크롤된 길이
//const scrolledTopLength = pageYOffset; // window 객체 없이 pageYOffset 메서드를 써도 가능하다.
const absoluteTop = scrolledTopLength + relativeTop; // 절대좌표
// const footerHeight = target.offsetHeight * 1.5;
var body = document.body,
  html = document.documentElement,
  footer = document.getElementById("footer");

var height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);
var footerH = Math.max(footer.scrollHeight, footer.offsetHeight);

var footerHeight = height - (footerH + footerH / 2);
console.log(footerHeight);

$(function () {
  // 변수
  var speed = 700;
  var circleBull = true;

  // click event
  function scrolling(obj) {
    if (!obj) {
      $("html,body").animate({ scrollTop: 0 }, speed);
    } else {
      var posTop = $(obj).offset().top;
      $("html,body").animate({ scrollTop: posTop }, speed);
    }
  }
  $("ul li a").click(function () {
    // 네비게이션 클릭시
    console.log("click!");
    var direction = $(this).attr("href"); // direction = 클릭한 요소의 href 속성
    scrolling(direction); // direction 을 인자로 함수 실행
    return false; // 본래 이벤트 방지
  });
  // scroll event
  $(window).scroll(function () {
    var scrollNum = $(window).scrollTop();
    var circleNum = scrollNum >= footerHeight ? true : false;

    console.log("현재 스크롤 값은 " + $(window).scrollTop());

    function up() {
      $("#header").css({
        display: "none",
      });
      $("#intro").css({
        "margin-top": 0,
        "border-top": "3px dashed #caa623",
      });
    }
    function down() {
      $("#header").css({
        display: "block",
      });
      $("#intro").css({
        "margin-top": "-75px",
      });
    }

    if (scrollNum >= 100) {
      down();
    } else {
      up();
    }
    if (circleNum) {
      if (circleBull) circleChart();
    } else {
      circleBull = true;
    }
  });

  // circle chart
  function circleChart() {
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
      circleBull = false;
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
  }

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
});
