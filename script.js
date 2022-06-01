'use strict';

//＝＝＝＝＝＝＝＝＝
//vegasここから
//＝＝＝＝＝＝＝＝＝


var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768) {
	var responsiveImage = [ //PC用の画像
		{
			src: 'images/main1.jpg'
		},
		{
			src: 'images/neko.jpg'
		},
		{
			src: 'images/twilight.jpg'
		},
		{
			src: 'images/matu.jpg'
		}
	];
} else {
	var responsiveImage = [ //タブレットサイズ（768px）以下用の画像
		{
			src: 'images/SPmain1.jpg'
		},
		{
			src: 'images/SPmain2.jpg'
		},
		{
			src: 'images/SPmain3.jpg'
		}
	];
}

$(function () {
	$('#vegas').vegas({
		slides: responsiveImage, //画像設定を読む
		animation: 'kenburns',
		transition: 'blur', //切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
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

$(".openbtn").click(function () { //ボタンがクリックされたら
	$(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
	$("#g-nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () { //ナビゲーションのリンクがクリックされたら
	$(".openbtn").removeClass('active'); //ボタンの activeクラスを除去し
	$("#g-nav").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
});




//＝＝＝＝＝＝＝＝＝＝
//スクロールここから
//＝＝＝＝＝＝＝＝＝＝


function scroll_effect() {
	var element = document.getElementsByClassName('scroll-up');
	if (!element) return;

	var scrollY = window.pageYOffset;
	var windowH = window.innerHeight;
	var showTiming = 200; // 要素を表示するタイミング
	for (var i = 0; i < element.length; i++) {
		var elemClientRect = element[i].getBoundingClientRect();
		var elemY = scrollY + elemClientRect.top;
		if (scrollY > elemY - windowH + showTiming) {
			element[i].classList.add('is-show');
		}
	}
}

window.addEventListener('scroll', scroll_effect); // スクロール時に実行

$('.view-in').on('inview', function () {
	//ブラウザの表示域に表示されたときに実行する処理
	$(this).addClass('is-show');
});


//＝＝＝＝＝＝＝＝＝＝
//swiperここから
//＝＝＝＝＝＝＝＝＝＝


var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	loop: "true",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
	pagination: {
		el: ".swiper-pagination",
	},
});