jQuery(function () {

    function sidebar() {
        $('.drop_down_title').click(function () {
            if (!$('.sidebar_menu_cont').hasClass('_active')) {
                $('.drop_down_title').not(this).parent().removeClass('_active');
                $('.drop_down_title').not(this).siblings().slideUp();
                $(this).siblings().slideToggle();
                $(this).parent().toggleClass('_active');
            }
        });
        $('._drop_item').click(function () {
            $(this).parent().slideUp();
            $(this).parent().parent().removeClass('_active');
            //$(this).parent().siblings().children('.text').text($(this).text());
        });


        if ($('html').width() > 700) {
            if ($('.sidebar_menu_cont').hasClass('_active')) {
                $('.side_bar_title').children('.text').toggle();
                setTimeout(function () {
                    $('.sidebar_menu_cont').addClass('_done');
                }, 150)
            }
        } else {
            $('.sidebar_menu_cont').removeClass('_active');
        }
        $('#sidebar_arrow').click(function () {
            if ($('html').width() > 700) {


                if ($(this).hasClass('_active')) {


                    $('.sidebar_menu_cont').removeClass('_done');


                    setTimeout(function () {

                        $('.side_bar_title').children('.text').toggle();
                    }, 250);

                } else {

                    $('.side_bar_title').children('.text').toggle();
                    setTimeout(function () {
                        $('.sidebar_menu_cont').addClass('_done');
                    }, 150)
                }
                $('.sidebar_menu_cont').toggleClass('_active');
                $(this).toggleClass('_active');
                $('.main_content_box').toggleClass('_active');
            } else {
                $('.sidebar_menu_cont').toggleClass('_active_2');
                $(this).toggleClass('_active');
                $('.main_content_box').toggleClass('_active');
            }
            if ($('html').width() > 1000) {
                rebuid_card();
            }
        })
        $('#sidebar_arrow_2').click(function () {
            $(this).toggleClass('_active');
            $('.sidebar_menu_cont').toggleClass('_active_2');
        })
    }
    function rebuid_card() {
        if (!$('.big_profile_card').hasClass('_employee')) {
            if ($('.big_profile_card').children('.action_column').length != 0) {
                $('.actions_container').append($('.big_profile_card').children('.action_column'));
            } else {
                $('.big_profile_card').append($('.actions_container').children('.action_column'));
            }
        }
    }
    function drop() {
        $('._drop_down_title').click(function () {
            $('.drop_down_title').not(this).parent().removeClass('_active');
            $('.drop_down_title').not(this).siblings().slideUp();
            $(this).siblings().slideToggle();
            $(this).parent().toggleClass('_active');
        });

    }
    function tabs() {
        $(".tab_body").not(":first").hide();
        $('.tab_link').click(function () {
            $('.tab_link').removeClass('_active');
            $(this).addClass('_active');
            $(".tab_body").hide().eq($(this).index()).fadeIn()
        });
    }
    drop();
    //tabs();
    sidebar();
    $('.search_row>input').on('focus', function () {
        $(this).parent().addClass('_active');

    })
    $('.search_row>input').on('blur', function () {
        $(this).parent().removeClass('_active');
    })

    $('.input_item>input').on('keyup', function () {

        if ($(this).val().length > 0) {
            $(this).parent().addClass('_cross');
            $(this).parent().removeClass('_error')
        }
    })
    $('.input_item>input').on('blur', function () {
        if ($(this).val().length != 0) {
            $(this).parent().addClass('_active');
            $(this).parent().removeClass('_cross');
        }
        if ($(this).val().length == 0) {
            $(this).parent().removeClass('_active');
            $(this).parent().removeClass('_cross');
            $(this).parent().addClass('_error')
        }
    })

    $(document).on('click', '.radio_item', function () {
        $(this).siblings().removeClass('_active');
        $(this).addClass('_active');
    });
    $(document).on('click', '.check_item', function () {

        $(this).toggleClass('_active');
    });
    function overrideDefaultDrop(e) {
        e.preventDefault();
        e.stopPropagation();
    }

});