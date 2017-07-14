$(document).ready(function() {
    /// 讓頁面跳轉接過場柔順一點
    $('body').removeClass('hide')
    $('#nav').on('click', 'a', function() {
        $('body').addClass('hide')
    })

    /// 載入 partial 們
    // $('#nav').load('../../partail/_nav.html');
    $('#header').load('../../partail/_header.html', function() {
        $('button.navbar-toggle').click(function() {
            $(this).closest('nav').toggleClass('toggled');
        });
    });
    $('#footer').load('../../partail/_footer.html');


    /// 載入 partial 們
    // $('#nav').load('../../partail/_nav.html');
    $('#header').load('../partail/_header.html');
    $('#footer').load('../partail/_footer.html');


    $('#header').on('click', '#mobile-nav', function() {
        $('.mobile-nav-btn').toggleClass('active');
        $('#mobile-nav-list').toggleClass('active');
    });


    //FAQ展開的部分
    $(".faq-q").click(function() {
        var container = $(this).parents(".faq-c");
        var answer = container.find(".faq-a");
        var trigger = container.find(".faq-t");

        answer.slideToggle(200);

        if (trigger.hasClass("faq-o")) {
            trigger.removeClass("faq-o");
        } else {
            trigger.addClass("faq-o");
        }
    });

    // CommunityPartner
    let target


    $(window).bind('resize', function() {
        target = $('#partner_link').offset().top
    }).resize()

    $(window).bind('scroll', function() {
        let whereAmI = $(this).scrollTop()
        if (whereAmI < target) {
            $('#partner_link').removeClass('fixed')
        } else if (whereAmI > target) {
            $('#partner_link').addClass('fixed')
        }
    }).scroll();

    //議程的tab
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    });
});

// new Vue({
//  el: '#shift'
//  data: {
//      videos: [],
//      photos: [],
//      files: []
//  }
// })
