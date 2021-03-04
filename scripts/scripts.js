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
    let slider = $('.subscription_slider>.slider_body')

    if (slider.length != 0) {
        slider.slick({
            infinite: false,
            arrows: false,
            speed: 300,
            easing: 'ease',
            waitForAnimate: false,
            touchMove: true,
            touchTreshhold: 50,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            appendDots: $('.slider_dots'),
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]
        });
    }


    $('#sidebar_arrow').click(function () {
        setTimeout(function () {
            $('.subscription_slider>.slider_body').slick('setPosition');
            slider.slick('setPosition');
        }, 250)



    });

    $('#dowload_photo_caller').click(function () {
        $('.upload_photo_cont').addClass('_showed');
        $('.blue_href').addClass('_showed');

    })
    $('.blue_href').click(function () {
        $('.upload_photo_cont').removeClass('_showed');
        $('.blue_href').removeClass('_showed');

    })
    $('.cross').click(function () {
        $('.upload_photo_cont').removeClass('_showed');
        $('.blue_href').removeClass('_showed');

    })
    let upload = () => {
        const form = $('#upload_img_form');

        let formImg = $('#upload_img');
        let imgCont = $('.uploaded_img');
        formImg.on("change", function (e) {
            var img = formImg[0].files[0];

            if ($('.uploaded_img').children('.back').children().length < 1) {

                var reader = new FileReader();
                reader.onload = function (e) {
                    $('.uploaded_img').addClass('_active');
                    $('.upload_photo_cont').addClass('_active');
                    $('.img_name').text(formImg[0].files[0].name)
                    $('.uploaded_img').children('.back').append(`<img src="${e.target.result}">`)
                    //$('.uploaded_img').children('.front').children().append(`<img src="${e.target.result}">`).children().css({
                    //    'height': '100%',
                    //    'width': $('.back').width() + 'px',
                    //    'object-fit': 'contain'
                    //})
                    $('.uploaded_img').children('.front').children('.img').attr('id', 'draggble')
                    $("#draggble").draggable({ containment: "parent" });
                    $('.label').css({
                        'display': 'none'
                    })
                    $('.tip').removeClass('_active');

                    move();
                }
                reader.readAsDataURL(img);

            }

        });
        let move = () => {
            let md = false;
            $('#draggble').mousedown(function () {
                md = true;
                $('.tip').addClass('_active');
            });
            $('html').mouseup(function () {
                md = false;
            });
            $('html').mousemove(function (e) {
                if (md) {
                    //if (X / w >= 0 && X / w <= 1 - $('#draggble').width() / w) {
                    $('#draggble>img').css({
                        'margin-left': `-${$('#draggble').css('left')}`
                        //'transform': `translate(-${$('#draggble').css('left')}, 0)`,
                    });
                    //}
                }
            })
        }

    }
    upload();
});