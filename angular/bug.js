(function() {

    var resize_flag = true;
    var flag1 = false;
    var now_width;
    function abc() {
         now_width = $('html').width();
        if (now_width < 374) {
            flag1 = true;
            var ss = $('meta[name=viewport]');
            ss.attr('content', 'width=375, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0');
            var ss = $('meta[name=viewport]');
            $('html').css({width: '100%', overflowX: 'hidden'});
            if (resize_flag) {
                $('.wrap').wrap('<div class="wrap_body">');
                $('.wrap_body').after($('.footerUl'));
            }
            if ($('.wrap').length) {
                $('.wrap')[0].style['transform-origin'] = 'left top';
                $('.wrap')[0].style['transform'] = 'scale(' + now_width / 375 + ')';
            }

            resize_flag = false;
        } else {
            flag1 = false;
            var ss = $('meta[name=viewport]');
            ss.attr('content', 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0');
            $('.wrap_body').css({height: 'auto'});
            if ($('.wrap').length) {
                $('.wrap')[0].style['transform-origin'] = 'left top';
                $('.wrap')[0].style['transform'] = 'none';
            }
        }
    };
    window.addEventListener("orientationchange", function() {
        abc();
    }, false);
    abc();
    setInterval(function() {
        if (flag1) {
            $('.wrap_body').height($('.wrap').height() * now_width / 375);
            $('.wrap_body').css('overflow' , 'hidden');
        } else {
            $('.wrap_body').css({height: 'auto'});
        }

    }, 1000)
})()
