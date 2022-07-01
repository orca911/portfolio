'use strict';


//vegas効果指定。

$(function () {
	$('#vegas').vegas({
		slides:  [
            { src: 'menu/manju.jpg' },
            { src: 'menu/ice.jpg' },
            { src: 'menu/agar.jpg' },
          ],
		animation: 'fade',
		transition: 'blur', //切り替わりのアニメーション。
		transitionDuration: 2000, //切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 5000, //スライド間の遅延をミリ秒単位で。
		animationDuration: 20000, //スライドアニメーション時間をミリ秒単位で設定
		timer: false, // プログレスバー
	});
});