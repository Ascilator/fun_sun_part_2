jQuery(function () {
    function calendar() {
        remove_empty();
        var mounth_n_days = [
            [0, 'Январь'],
            [1, 'Февраль'],
            [2, 'Март'],
            [3, 'Апрель'],
            [4, 'Май'],
            [5, 'Июнь'],
            [6, 'Июль'],
            [7, 'Август'],
            [8, 'Сентябрь'],
            [9, 'Октябрь'],
            [10, 'Ноябрь'],
            [11, 'Декабрь'],
        ]
        function search_mon_num(mun) {
            for (var i = 0; i < mounth_n_days.length; i++) {
                if (mun == mounth_n_days[i][1]) {
                    return mounth_n_days[i][0];
                }
            }
        }

        function remove_empty() {
            for (var i = 0; i < 42; i++) {
                if ($('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).text().length == 0) {
                    $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).addClass('_none');
                } else {
                    $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).removeClass('_none');
                }
                if ($('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).text().length == 0) {
                    $('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).addClass('_none');
                } else {
                    $('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).removeClass('_none');
                }
            }
        }
        $('.number_item').click(function () {

            var part = $(this).parent().parent().parent().index() - 1;

            if ($(this).text().length != 0) {
                if ($('.numbers_body').children('._active').length < 2) {
                    $(this).toggleClass('_active');
                } else {
                    if ($(this).hasClass('_active')) {
                        $(this).toggleClass('_active');
                    }
                }
            }


            remove_empty();
            if ($('.number_item._active').length == 2) {
                if ($('.number_item._active').eq(0).parent().parent().parent().index() != $('.number_item._active').eq(1).parent().parent().parent().index()) {

                    for (var i = $('.numbers_body').eq(0).children('._active').index(); i < $('.numbers_body').eq(0).children().length; i++) {
                        $('.numbers_body').eq(0).children().eq(i).addClass('_blue');
                    }



                    for (var i = $('.numbers_body').eq(1).children('._active').index() - 1; i >= 0; i--) {
                        $('.numbers_body').eq(1).children().eq(i).addClass('_blue');
                    }
                } else {
                    for (var j = $('.numbers_body').eq(part).children('._active').eq(0).index(); j < $('.numbers_body').children('._active').eq(1).index(); j++) {
                        $('.numbers_body').eq(part).children().eq(j).addClass('_blue');
                    }
                }
            } else {
                $('.numbers_body').children().removeClass('_blue')
            }



            var t;
            if (search_mon_num($('.number_item._active').eq(0).parent().parent().siblings('.mounth_header').children('.mounth_name').text()) + 1 <= 9) {
                t = search_mon_num($('.number_item._active').eq(0).parent().parent().siblings('.mounth_header').children('.mounth_name').text()) + 1;
                t = '0' + t;
            }


            if ($('.number_item._active').eq(0).text().length != 0) {
                $('.datepicker').eq(0).children('.text').text($('.number_item._active').eq(0).text() + '.' + t + '.' + $('.number_item._active').eq(0).parent().parent().siblings('.mounth_header').children('.year').text());
            } else {
                $('.datepicker').eq(0).children('.text').text('--.--.----')
            }


            if (search_mon_num($('.number_item._active').eq(1).parent().parent().siblings('.mounth_header').children('.mounth_name').text()) + 1 <= 9) {
                t = search_mon_num($('.number_item._active').eq(1).parent().parent().siblings('.mounth_header').children('.mounth_name').text()) + 1;
                t = '0' + t;
            }

            if ($('.number_item._active').eq(1).text().length != 0) {
                $('.datepicker').eq(0).children('.text').text($('.datepicker').eq(0).children('.text').text() + '-' + $('.number_item._active').eq(1).text() + '.' + t + '.' + $('.number_item._active').eq(0).parent().parent().siblings('.mounth_header').children('.year').text());
            } else {
                //$('.datepicker').eq(0).children('.text').text('--.--.----')
            }

        });

        $('.caelndar_arrow._prev').click(function () {
            $('.numbers_body').children().removeClass('_blue');
            var mounth = $('.calendar_mounth').eq(0).children('.mounth_header').children('.mounth_name').text();
            var year = +$('.calendar_mounth').eq(0).children('.mounth_header').children('.year').text();

            var mounth_2 = $('.calendar_mounth').eq(1).children('.mounth_header').children('.mounth_name').text();
            var year_2 = +$('.calendar_mounth').eq(1).children('.mounth_header').children('.year').text();

            mounth = search_mon_num(mounth) - 1;
            mounth_2 = search_mon_num(mounth_2) - 1;

            if (mounth == -1) {
                $('.calendar_mounth').eq(0).children('.mounth_header').children('.mounth_name').text(mounth_n_days[11][1]);
                mounth = 11;
                year--;
                $('.calendar_mounth').eq(0).children('.mounth_header').children('.year').text(year);
            } else {
                $('.calendar_mounth').eq(0).children('.mounth_header').children('.mounth_name').text(mounth_n_days[mounth][1]);
            }

            if (mounth_2 == -1) {
                $('.calendar_mounth').eq(1).children('.mounth_header').children('.mounth_name').text(mounth_n_days[11][1]);
                year_2--;
                mounth_2 = 11;
                $('.calendar_mounth').eq(1).children('.mounth_header').children('.year').text(year_2);
            } else {
                $('.calendar_mounth').eq(1).children('.mounth_header').children('.mounth_name').text(mounth_n_days[mounth_2][1]);
            }



            var id_1 = -1;
            for (i = 0; i < $('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().length && id_1 == -1; i++) {
                if ($('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).text().length != 0) {
                    id_1 = i;

                }
            }

            for (var i = 0; i < 42; i++) {
                $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).text('');
            }
            var number_in_1 = dayInMounth(year_2, mounth_2);


            var j = 1;
            for (var i = id_1; j <= number_in_1; i++, j++) {
                $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).text(j);
            }




            var number_in_0 = dayInMounth(year, mounth);

            var k = number_in_0;

            console.log(id_1);
            for (var i = 0; i < 42; i++) {
                $('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).text('');
            }
            var x;
            if (27 + id_1 - number_in_0 < 0) {
                x = 34;
            } else {
                x = 27
            }
            for (var i = x + id_1; k >= 1; i--, k--) {
                $('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).text(k);
            }
            remove_empty();

        })


        $('.caelndar_arrow._next').click(function () {
            $('.numbers_body').children().removeClass('_blue')
            var mounth = $('.calendar_mounth').eq(0).children('.mounth_header').children('.mounth_name').text();
            var year = +$('.calendar_mounth').eq(0).children('.mounth_header').children('.year').text();

            var mounth_2 = $('.calendar_mounth').eq(1).children('.mounth_header').children('.mounth_name').text();
            var year_2 = +$('.calendar_mounth').eq(1).children('.mounth_header').children('.year').text();

            mounth = search_mon_num(mounth) + 1;
            mounth_2 = search_mon_num(mounth_2) + 1;

            if (mounth == 12) {
                $('.calendar_mounth').eq(0).children('.mounth_header').children('.mounth_name').text(mounth_n_days[0][1]);
                mounth = 0;
                year++;
                $('.calendar_mounth').eq(0).children('.mounth_header').children('.year').text(year);
            } else {
                $('.calendar_mounth').eq(0).children('.mounth_header').children('.mounth_name').text(mounth_n_days[mounth][1]);
            }

            if (mounth_2 == 12) {
                $('.calendar_mounth').eq(1).children('.mounth_header').children('.mounth_name').text(mounth_n_days[0][1]);
                year_2++;
                mounth_2 = 0;
                $('.calendar_mounth').eq(1).children('.mounth_header').children('.year').text(year_2);
            } else {
                $('.calendar_mounth').eq(1).children('.mounth_header').children('.mounth_name').text(mounth_n_days[mounth_2][1]);
            }



            var id_1 = -1;
            for (i = 0; i < $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().length && id_1 == -1; i++) {
                if ($('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).text().length != 0) {
                    id_1 = i;
                }
            }

            for (var i = 0; i < 42; i++) {
                $('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).text('');
            }
            var number_in_1 = dayInMounth(year, mounth);


            var j = 1;
            for (var i = id_1; j <= number_in_1; i++, j++) {
                $('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).text(j);
            }




            var id_1 = -1;
            for (i = 12; i < $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().length && id_1 == -1; i++) {
                if ($('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).text().length == 0) {
                    id_1 = i;
                }
            }


            var number_in_0 = dayInMounth(year_2, mounth_2);
            var k = 1;


            for (var i = 0; i < 42; i++) {
                $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).text('');
            }

            var x;
            if (id_1 - 28 < 7) {
                x = 28;
            } else {
                x = 35;
            }

            for (var i = id_1 - x; k <= number_in_0; i++, k++) {
                $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).text(k);
            }
            remove_empty()
        })




        $('.datepicker').click(function () {
            $(this).siblings('.calendar').slideToggle();
            if ($('html').width() < 1030) {
                $('.calendar_black').addClass('_active');
            }
        })
        $('.calendar_black').click(function () {
            $('.calendar_black').removeClass('_active');
            $('.datepicker').siblings('.calendar').slideUp();
        })



        function dayInMounth(year, number) {
            number++;
            return new Date(year, number, 0).getDate();
        }

    }
    let main_slider = () => {
        $('.back_slider_body').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            appendDots: $('.slider_main_dots>.wrapper'),
        })
    }
    function drop_down() {
        $('._drop_down_title').click(function () {
            $('.drop_down_title').not(this).parent().removeClass('_active');
            $('.drop_down_title').not(this).siblings().slideUp();
            $(this).siblings().slideToggle();
            $(this).parent().toggleClass('_active');
        });
        $('._drop_item').click(function () {
            $(this).parent().slideUp();
            $(this).parent().parent().removeClass('_active');
            $(this).parent().siblings().children('.text').text($(this).text());
        });
    }
    let index_sliders = () => {
        for (let i = 0; i < $('.empass_slider_body').length; i++) {
            $('.empass_slider_body').eq(i).slick({
                slidesToShow: 4,
                slidesToScroll: 2,
                nextArrow: $('.slider_empass_arrows').eq(i).children().eq(0),
                prevArrow: $('.slider_empass_arrows').eq(i).children().eq(1),
                dots: true,
                appendDots: $('.empass_slider_dots').eq(i),
                responsive: [
                    {
                        breakpoint: 1100,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ]
            })
        }
        $('.empass_slider_body_2').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            nextArrow: $('.slider_empass_type_2_arrows').children().eq(0),
            prevArrow: $('.slider_empass_type_2_arrows').children().eq(1),
            dots: true,
            appendDots: $('.empass_slider_dots_2'),
            responsive: [
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ]
        })
        $('.resevies_slider_body').slick({
            slidesToShow: 3,
            slidesToScroll: 2,
            nextArrow: $('.slider_empass_type_resevies_text').children().eq(0),
            prevArrow: $('.slider_empass_type_resevies_text').children().eq(1),
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ]
        })

        for (let i = 0; i < $('.res_slider_body').length; i++) {
            $('.res_slider_body').eq(i).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: $('.slider_empass_type_resevies').eq(i).children().eq(0),
                prevArrow: $('.slider_empass_type_resevies').eq(i).children().eq(1),
                dots: true,
                appendDots: $('.res_slider_dots').eq(i),
            })
        }
    }
    let town_serch = () => {
        $('.position').click(function () {
            $('.choose_town').addClass('_active');
        })

        $('#choose_town_cross').on('click', function () {
            $('.choose_town').removeClass('_active');
        })
        let listener = () => {
            $('.town').click(function () {
                $('.position').children().children('.text').text($(this).text());
                $('.choose_town').removeClass('_active');
            });
        }
        listener();
        let inside_body;
        let is_append = false;
        $('#search_town_input').on('focus', function () {
            $(this).addClass('_focused');
            inside_body = $('.search_town_body').children();
            $('.search_town_body').empty();
        })
        $('#search_town_input').on('keydown', function () {
            if ($(this).val().length != 0) {

                if (!is_append) {
                    $('.search_town_body').append('<div class="town_colum"></div>');
                    for (let i = 0; i < 5; i++) {
                        $('.town_colum').append(`<div class="search_result town">Абакан</div>`);
                        listener();
                    }
                    is_append = true;
                }

            }
        });

        $('#search_town_input').on('blur', function () {
            $(this).removeClass('_focused');
            setTimeout(function () {

                $('.search_town_body').empty();
                is_append = false;
                $('.search_town_body').append(inside_body);
                listener();
            }, 100);

        })
    }
    $('.arrow_up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.header').addClass('_transparent');



        } else {
            $('.header').removeClass('_transparent')

        }
    })
    let inputs_popup = () => {
        $('.where_to_search').on('focus', function () {
            $(this).parent().siblings('.town_list_main ').addClass('_active');

        })
        $('.where_to_search').on('blur', function () {
            $('.town_list_main').removeClass('_active');

        })
        $('.magic_filter_cont').siblings('.cross').on('click', function () {
            $('.magic_filter_cont').parent().removeClass('_active');
        });
        $('.town_item_main').click(function () {
            $('.town_list_main').removeClass('_active');
            $('.where_to_search').val($(this).text());
        })
        $('.search>.img').on('click', function () {
            $(".search_body").toggleClass('_active');
        })
        $('._magic_filter').on('focus', function () {
            $(this).parent().siblings('.drop_body_filter').addClass('_active');

        })
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $("._magic_filter"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $(".drop_body_filter").removeClass('_active'); // скрываем его
            }
        });

    }
    let reaction = () => {
        $('.like_btn').click(function () {
            if (!$(this).hasClass('_active')) {
                $(this).addClass('_active');
                $(this).empty();
                $(this).append('<img src="img/red_heart.svg" alt="">')
            } else {
                $(this).removeClass('_active');
                $(this).empty();
                $(this).append(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22"
											viewBox="0 0 24 22" fill="none">
											<path fill-rule="evenodd" clip-rule="evenodd"
												d="M12.0001 4.34726L11.0142 3.31546C8.70003 0.893467 4.45665 1.72926 2.92485 4.77425C2.20571 6.20645 2.04345 8.27424 3.35662 10.9132C4.62165 13.4542 7.25349 16.4978 12.0001 19.813C16.7468 16.4978 19.3772 13.4542 20.6436 10.9132C21.9568 8.27284 21.7959 6.20645 21.0754 4.77425C19.5436 1.72926 15.3002 0.892067 12.986 3.31406L12.0001 4.34726ZM12.0001 21.5C-9.08339 7.31525 5.50856 -3.75592 11.7581 2.10026C11.8406 2.17726 11.9218 2.25706 12.0001 2.33966C12.0777 2.25714 12.1584 2.17774 12.2421 2.10166C18.4903 -3.75872 33.0836 7.31385 12.0001 21.5Z"
												fill="#737373" stroke="#737373" stroke-width="0.3" />
										</svg>`)
            }
        })
    }
    let range = () => {
        $(".js-range-slider").ionRangeSlider({
            type: "double",
            min: 0,
            max: 10,
            from: 1,
            to: 7,
            step: 1,
            grid: true,
            grid_num: 10,
        });
        $('.js-range-slider-1').ionRangeSlider({
            type: "double",
            min: 0,
            max: 10,
            from: 1,
            to: 7,
            step: 1,
            grid: true,
            grid_num: 10,
        });
        $('.js-range-slider-2').ionRangeSlider({
            type: "double",
            min: 7000,
            max: 300000,
            from: 10000,
            to: 70000,
            step: 1,
            postfix: " ₽",
        });
        $('.js-range-slider-4').ionRangeSlider({
            type: "double",
            min: 30,
            max: 600,
            from: 40,
            to: 570,
            step: 1,
            postfix: " мин",
        });
    }

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
    $('.popup_caller.registration').click(function () {
        $('.popup_cont.registration_popup').toggleClass('_active');
        $('.blue_href').toggleClass('_active');
    })
    $('.popup_caller.enter_buy_phone').click(function () {
        $('.popup_cont.enter_buy_phone').toggleClass('_active');
        $('.blue_href').toggleClass('_active');
    })
    $('.popup_caller.write_code').click(function () {
        $('.popup_cont.write_code').toggleClass('_active');
        $('.blue_href').toggleClass('_active');
    })
    $('.popup_caller.enter_buy_mail').click(function () {
        $('.popup_cont.enter_buy_mail').toggleClass('_active');
        $('.blue_href').toggleClass('_active');
    })
    $('.popup_caller.write_code_mail').click(function () {
        $('.popup_cont.write_code_mail').toggleClass('_active');
        $('.blue_href').toggleClass('_active');
    })
    $('.popup_caller.enter_code').click(function () {
        $('.popup_cont.enter_code').toggleClass('_active');
        $('.blue_href').toggleClass('_active');
    })
    $('.popup_caller.accaunt_exist').click(function () {
        $('.popup_cont.accaunt_exist').toggleClass('_active');
        $('.blue_href').toggleClass('_active');
    })



    $('.blue_href').click(function () {
        $('.popup_cont').removeClass('_active');
        $('.blue_href').removeClass('_active');
    })
    $('.cross').click(function () {
        $('.popup_cont').removeClass('_active');
        $('.blue_href').removeClass('_active');
    })
    reaction();
    range();
    inputs_popup();
    town_serch();
    index_sliders();
    drop_down();
    main_slider();
    calendar();
});


