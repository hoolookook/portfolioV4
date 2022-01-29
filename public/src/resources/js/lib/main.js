// click & scroll event

var body = document.body,
  html = document.documentElement,
  intro = document.getElementById("intro"),
  footer = document.getElementById("footer"),
  contents = document.getElementById("contents");

var height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);

var introH = Math.max(intro.scrollHeight, intro.offsetHeight),
  footerH = Math.max(footer.scrollHeight, footer.offsetHeight),
  contentsH = Math.max(contents.scrollHeight, contents.offsetHeight);
var introHeight = height - (introH + introH / 1.5),
  footerHeight = height - (footerH + footerH / 1.5),
  contentsHeight = height - (contentsH + contentsH / 1.5);

// console.log(footerHeight);
// console.log(contentsHeight);
console.log(height);
//-------------------------------------------------------------------------------------------------

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
  //-------------------------------------------------------------------------------------------------

  // scroll event
  $(window).scroll(function () {
    var scrollNum = $(window).scrollTop();
    var footerNum = scrollNum >= footerHeight ? true : false;
    var $navbar = $(".navBar"),
      $navUI = $(".navBar .navUl");

    console.log("현재 스크롤 값은 " + $(window).scrollTop());

    function up(sel1, sel2) {
      sel1.stop().hide();
      sel2.stop().hide();
    }
    function down(sel1, sel2) {
      sel1.stop().show();
      sel2.stop().show();
    }
    if (scrollNum > 100) {
      down($navbar, $navUI);
    } else {
      up($navbar, $navUI);
    }
    if (footerNum) {
      if (circleBull) circleChart();
    } else {
      circleBull = true;
    }
  });
  function clickUpIcon() {
    $("#upicon").click(function () {
      $("html, body").filter(":not(:animated)").animate({ scrollTop: 0 }, 400);
      return false;
    });
  }

  function clickDwIcon() {
    $("#downicon").click(function () {
      $("html, body")
        .filter(":not(:animated)")
        .animate({ scrollTop: $(document).height() }, 400);
      return false;
    });
  }
  clickDwIcon();
  clickUpIcon();
  //-------------------------------------------------------------------------------------------------

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
  //-------------------------------------------------------------------------------------------------
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

// work changeText
$(function () {
  // 미디어쿼리 js 관리
  var mql = window.matchMedia(
    "screen and (min-width: 468px) and (max-width: 767px)"
  );

  // 복수의 h3 선택
  var h3List = document.querySelectorAll("#chanH3");
  // h3 태그 인덱스 확인
  var h3ListLength = h3List.length;

  function ChangeName(num, name) {
    return (h3List[num].innerHTML = name);
  }
  for (var i = 0; i < h3ListLength; i++) {
    console.log(h3List[i].innerText);
    mql.addListener(function (e) {
      if (e.matches) {
        ChangeName(0, "l");
        ChangeName(1, "n");
        ChangeName(2, "c");
        ChangeName(3, "n");
        ChangeName(4, "c");
        ChangeName(5, "c");
        ChangeName(6, "c");
        ChangeName(7, "c");
        ChangeName(8, "c");
      } else {
        ChangeName(0, "lotte");
        ChangeName(1, "naver");
        ChangeName(2, "coupang");
        ChangeName(3, "neungyule");
        ChangeName(4, "coming...");
        ChangeName(5, "coming...");
        ChangeName(6, "coming...");
        ChangeName(7, "coming...");
        ChangeName(8, "coming...");
      }
    });
  }
});
// hover
$(function () {
  $(".openPdf")
    .mouseover(function () {
      $("#chanH3").css({
        display: "none",
      });
    })
    .mouseout(function () {
      $("#chanH3").css({
        display: "block",
      });
    });
});
