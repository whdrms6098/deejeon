$(window).click(function () {
  $(".btn-select-sns").removeClass("active");
  $(".btn-select-sns").attr("aria-expanded", "false");

  $(".btn-select-lang").removeClass("active");
  $(".btn-select-lang").attr("aria-expanded", "false");

  $(".btn-select-sns").siblings().stop().slideUp("fast");
  $(".btn-select-lang").siblings().stop().slideUp("fast");
});

$(".btn-select-lang").click(function (e) {
  e.stopPropagation();
  if ($(this).attr("aria-expanded") === "false") {
    $(".btn-select-sns").siblings().stop().slideUp();

    $(this).siblings().stop().slideDown();
    $(this).attr("aria-expanded", "true");
    $(".btn-select-lang").addClass("active");

    //sns
    $(".btn-select-sns").removeClass("active");
    $(".btn-select-sns").attr("aria-expanded", "false");
  } else {
    $(this).siblings().stop().slideUp();
    $(this).attr("aria-expanded", "false");
    $(".btn-select-lang").removeClass("active");
  }
});

$(".btn-select-sns").click(function (e) {
  e.stopPropagation();
  if ($(this).attr("aria-expanded") === "false") {
    $(".btn-select-lang").siblings().stop().slideUp();

    $(this).siblings().stop().slideDown();
    $(this).attr("aria-expanded", "true");
    $(".btn-select-sns").addClass("active");

    $(".btn-select-lang").removeClass("active");
    $(".btn-select-lang").attr("aria-expanded", "false");
  } else {
    $(this).siblings().stop().slideUp();
    $(this).attr("aria-expanded", "false");
    $(".btn-select-sns").removeClass("active");
  }
});

$(".nav-item").hover(
  function () {
    $(".sub-nav-wrap-bg").addClass("active");
    $(this).find(".sub-nav-wrap").stop().slideDown(300);
  },
  function () {
    $(".sub-nav-wrap-bg").removeClass("active");
    $(this).find(".sub-nav-wrap").stop().slideUp("fast");
    // $(this).find(".sub-nav-wrap").stop().slideUp(100);
  }
);

$(".nav-item").focusin(function () {
  if ($(".sub-nav-wrap-bg").hasClass("active")) {
    return false;
  }

  $(".sub-nav-wrap-bg").addClass("active");
  $(this).find(".sub-nav-wrap").stop().slideDown();
});

$(".nav-item").focusout(function () {
  $(".sub-nav-wrap-bg").removeClass("active");
  $(this).find(".sub-nav-wrap").stop().slideUp();
});

const newsSlider = new Swiper(".sc-news-slide .swiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".sc-news-slide .btn-next",
    prevEl: ".sc-news-slide .btn-prev",
  },
  on: {
    init: function () {
      $(".sc-news-slide .total").text(this.slides.length-2);
    },
    slideChange: function () {
      console.log(this.realIndex);
      $(".sc-news-slide .current").text(this.realIndex + 1);
    },
  },
});

let newsPlaying = true;

$(".sc-news-slide .btn-play").click(function () {
  if (newsPlaying) {
    newsSlider.autoplay.stop();
    $(this).addClass("on");
  } else {
    newsSlider.autoplay.start();
    $(this).removeClass("on");
  }
  newsPlaying = !newsPlaying;
});

$(".sc-news-boadrd .tab-list li").click(function () {
  $(".sc-news-boadrd .tab-list li >a").attr("aria-selected", "false");
  $(".sc-news-boadrd .tab-list .tab-list-item-area").removeClass("active");
  $(this).find("a").attr("aria-selected", "true");
  $(this).find(".tab-list-item-area").addClass("active");
});

const board = new Swiper(".sc-news-boadrd .swiper", {
  loop: true,
  spaceBetween: 25,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".sc-news-boadrd .btn-next",
    prevEl: ".sc-news-boadrd .btn-prev",
  },
});

let clickCheck = true;
$(".sc-service .btn-more").click(function () {
  if (clickCheck) {
    $(this).find("span").text("닫기");
  } else {
    $(this).find("span").text("전체보기");
  }
  $(".service-list.more").toggleClass("active");
  $(".service-list .btn-more").toggleClass("active");
  $(".sc-service .btn-more.display-m").toggleClass("active");
  clickCheck = !clickCheck;
});

$(".sc-field .btn-next").click(function () {
  const current = $(
    ".tab-list li[role='presentation'] > a[aria-selected='true']"
  );
  const next = current.parent().next("li");

  if (next.length) {
    current.attr("aria-selected", "false");
    current.siblings(".tab-list-item-area").removeClass("active");

    next.find("> a").attr("aria-selected", "true");
    next.find(".tab-list-item-area").addClass("active");

    const container = $(".tab-list");
    const scrollTo = next.position().left;

    container.animate(
      {
        scrollLeft: scrollTo,
      },
      100
    );
  }
});

$(".sc-field .btn-prev").click(function () {
  const current = $(
    ".tab-list li[role='presentation'] > a[aria-selected='true']"
  );
  const prev = current.parent().prev("li");

  if (prev.length) {
    current.attr("aria-selected", "false");
    current.siblings(".tab-list-item-area").removeClass("active");

    prev.find("> a").attr("aria-selected", "true");
    prev.find(".tab-list-item-area").addClass("active");

    const container = $(".tab-list");
    const scrollTo = prev.position().left;

    container.animate(
      {
        scrollLeft: scrollTo,
      },
      100
    );
  }
});

$(".sc-field .tab-list li").click(function () {
  $(".sc-field .tab-list li > a").attr("aria-selected", "false");
  $(".sc-field .tab-list-item-area").removeClass("active");

  $(this).find("> a").attr("aria-selected", "true");
  $(this).find(".tab-list-item-area").addClass("active");
});

const storySlider = new Swiper(".sc-story .swiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".sc-story .btn-next",
    prevEl: ".sc-story .btn-prev",
  },
  on: {
    init: function () {
      $(".sc-story .total").text(this.slides.length);
    },
    slideChange: function () {
      $(".sc-story .current").text(this.realIndex + 1);
    },
  },
});

let storyPlaying = true;

$(".sc-story .btn-play").click(function () {
  if (storyPlaying) {
    storySlider.autoplay.stop();
    $(this).addClass("on");
  } else {
    storySlider.autoplay.start();
    $(this).removeClass("on");
  }
  storyPlaying = !storyPlaying;
});

const commSlider = new Swiper(".sc-comm .swiper", {
  loop: true,
  spaceBetween: 25,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".sc-comm .btn-next",
    prevEl: ".sc-comm .btn-prev",
  },
});

const bannerSlider = new Swiper(".sc-banner .swiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: "auto",
  autoplay: {
    delay: 5000,
  },

  navigation: {
    nextEl: ".sc-banner .btn-next",
    prevEl: ".sc-banner .btn-prev",
  },
});

let bannerPlaying = true;

$(".sc-banner .btn-play").click(function () {
  if (bannerPlaying) {
    bannerSlider.autoplay.stop();
    $(this).addClass("on");
  } else {
    bannerSlider.autoplay.start();
    $(this).removeClass("on");
  }
  bannerPlaying = !bannerPlaying;
});

let linkCheck = true;
$("#footer .f-menu-link button").click(function () {
  $(this).parent("li").toggleClass("active");
  if (linkCheck) {
    $(this).attr("aria-expanded", "false");
  } else {
    $(this).attr("aria-expanded", "true");
  }
  linkCheck = !linkCheck;
});

$(".btn-side-menu").click(function () {
  $("html").addClass("active");
  $(".side-menu").addClass("active");

  setTimeout(() => {
    $(".side-menu .group-side").addClass("active");
  }, 100);
});

$(".side-menu .gnb-list .gnb-item").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active").find(".gnb-dept2").stop().slideUp();
  } else {
    $(".side-menu .gnb-list .gnb-item")
      .removeClass("active")
      .find(".gnb-dept2")
      .stop()
      .slideUp();
    $(this).addClass("active").find(".gnb-dept2").stop().slideDown();
  }
});

$(document).click(function (e) {
  if (
    !$(".side-menu .group-side").is(e.target) &&
    !$(".side-menu .group-side").has(e.target).length &&
    !$(".btn-side-menu").is(e.target)
  ) {
    $("html").removeClass("active");
    $(".side-menu").removeClass("active");
    $(".side-menu .group-side").removeClass("active");
    $(".side-menu .gnb-list .gnb-item")
      .removeClass("active")
      .find(".gnb-dept2")
      .stop()
      .slideUp();
  }
});

$(".side-menu .btn-close").click(function () {
  $("html").removeClass("active");
  $(".side-menu").removeClass("active");
  $(".side-menu .group-side").removeClass("active");
  $(".side-menu .gnb-list .gnb-item")
    .removeClass("active")
    .find(".gnb-dept2")
    .stop()
    .slideUp();
});
