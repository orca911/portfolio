'use strict';

//＝＝＝＝＝＝＝＝＝
//vegasここから
//＝＝＝＝＝＝＝＝＝


var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: 'images/pc-vegas/main1.jpg'},
				{ src: 'images/pc-vegas/neko.jpg'},
				{ src: 'images/pc-vegas/twilight.jpg'},
				{ src: 'images/pc-vegas/matu.jpg'}
			];
		} else {
			var responsiveImage = [//600px以下用の画像
				{ src: 'images/sp-vegas/SPmain1.jpg'},
				{ src: 'images/sp-vegas/SPmain2.jpg'},
				{ src: 'images/sp-vegas/SPmain3.jpg'}
			];
		}

$(function () {
	$('#vegas').vegas({
		slides: responsiveImage,//画像設定を読む
		animation: 'kenburns',
		transition: 'blur', //切り替わりのアニメーション。
		transitionDuration: 2000, //切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 5000, //スライド間の遅延をミリ秒単位で。
		animationDuration: 20000, //スライドアニメーション時間をミリ秒単位で設定
		timer: false, // プログレスバー
	});
});



//＝＝＝＝＝＝＝＝＝＝
//header出現ここから
//＝＝＝＝＝＝＝＝＝＝

$(function () {
	let target = $(".profile").offset().top;
	$(window).on("scroll", function () {
		let currentPos = $(window).scrollTop() + 50;
		if (currentPos >= target) {
			$(".header").addClass('active');
			$(".openbtn").addClass('scroll');
		} else {
			$(".header").removeClass('active');
			$(".openbtn").removeClass('scroll');
		}
	});
});



//＝＝＝＝＝＝＝＝＝＝
//ハンバーガーここから
//＝＝＝＝＝＝＝＝＝＝

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});




//＝＝＝＝＝＝＝＝＝＝
//スクロールここから
//＝＝＝＝＝＝＝＝＝＝


function scroll_effect() {
	var element = document.getElementsByClassName('scroll-up');
	if(!element) return;
						
	var scrollY = window.pageYOffset;
	var windowH = window.innerHeight;
	var showTiming = 200; // 要素を表示するタイミング
	for(var i = 0; i < element.length; i++) { 
	  var elemClientRect = element[i].getBoundingClientRect(); 
	  var elemY = scrollY + elemClientRect.top; 
	  if(scrollY > elemY - windowH + showTiming) {
		element[i].classList.add('is-show');
	  }
	}
  }

  window.addEventListener('scroll', scroll_effect); // スクロール時に実行

  $('.view-in').on('inview', function() {
	//ブラウザの表示域に表示されたときに実行する処理
	$(this).addClass('is-show');
});


//＝＝＝＝＝＝＝＝＝＝
//swiperここから
//＝＝＝＝＝＝＝＝＝＝


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  loop:"true",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "1",
  loopedSlides: null,
  coverflowEffect: {
	rotate: 50,
	stretch: 0,
	depth: 100,
	modifier: 1,
	slideShadows: false,
  },
  pagination: {
	el: ".swiper-pagination",
  },
});
