$(window).load(function() {

	/// 讓頁面跳轉接過場柔順一點
	$('body').removeClass('hide')
	$('#nav').on('click', 'a', function() {
		$('body').addClass('hide')
	})

	/// 載入 partial 們
	// $('#nav').load('../../partail/_nav.html');
	$('#header').load('../../partail/_header.html');
	$('#footer').load('../../partail/_footer.html');

	/// 漢堡包
	$('#mobile-nav').click(function() {
		$('.mobile-nav-btn').toggleClass('active');
		$('#nav').toggleClass('active');
	})



	/// video 對應不同的 detail 頁面
	/// 因為不想讓 iframe 一開始全部都載入，所以用 data-src 去識別做控制
  $('.video-box').click(function(){
    var t = $(this).data('pop')
    var $content = $('#video-pop .content[data-pop="' + t + '"]')
    var $src = $content.find('iframe').data('src')
    $('#video-pop').fadeIn(300);
    $content.addClass('active');
    $content.find('iframe').attr('src', $src)
    $('.container').css('overflow', 'hidden');
  })

  $('.go-back-btn').click(function(){
  	$('#video-pop').fadeOut(300);
  	$('.container').css('overflow', 'auto');
  })

  //FAQ展開的部分
	$(".faq-q").click( function () {
	  var container = $(this).parents(".faq-c");
	  var answer = container.find(".faq-a");
	  var trigger = container.find(".faq-t");
	  
	  answer.slideToggle(200);
	  
	  if (trigger.hasClass("faq-o")) {
	    trigger.removeClass("faq-o");
	  }
	  else {
	    trigger.addClass("faq-o");
	  }
	});

	// CommunityPartner
	let target 
	$(window).bind('resize', function () {
		target = $('#partner_link').offset().top
	}).resize()
	$(window).bind('scroll', function () {
		let whereAmI = $(this).scrollTop()
		if ( whereAmI < target ) {
			$('#partner_link').removeClass('fixed')
		}
		else if ( whereAmI > target ) {
			$('#partner_link').addClass('fixed')
		}
	}).scroll()

})



// new Vue({
// 	el: '#shift'
// 	data: {
// 		videos: [],
// 		photos: [],
// 		files: []
// 	}
// })