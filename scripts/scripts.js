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
    function from_elem() {
        $('.card_item._calc').children('input').on('change', function () {
            $(this).siblings('input').text($(this).val())
        })
        $('.minus').click(function () {
            if ($(this).siblings('input').val() > 1) {
                $(this).siblings('input').val($(this).siblings('input').val() - 1);
            }
        })
        $('.plus').click(function () {

            $(this).siblings('input').val($(this).siblings('input').val() - (-1));
        })
    }
    from_elem();
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
            if ($('.subscription_slider').length != 0) {
                $('.subscription_slider>.slider_body').slick('setPosition');
                slider.slick('setPosition');
            }
        }, 250)



    });
    $('.control_text').click(function () {
        $(this).siblings().removeClass('_active');
        $(this).addClass('_active');
    })
    $('#dowload_photo_caller').click(function () {
        $('.upload_photo_cont').addClass('_showed');
        $('.blue_href').addClass('_showed');

    })
    $('.blue_href').click(function () {
        $('.upload_photo_cont').removeClass('_showed');
        $('.blue_href').removeClass('_showed');
        $('.delete_popup').removeClass('_showed');
    })
    $('.cross').click(function () {
        $('.upload_photo_cont').removeClass('_showed');
        $('.blue_href').removeClass('_showed');
        $('.delete_popup').removeClass('_showed');

    })
    $('._delete_location').click(function () {
        $('.delete_popup').addClass('_showed');
        $('.blue_href').addClass('_showed');

    })
    let calendar = () => {
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
                $('.datepicker').eq(1).children('.text').text($('.number_item._active').eq(1).text() + '.' + t + '.' + $('.number_item._active').eq(0).parent().parent().siblings('.mounth_header').children('.year').text());
            } else {
                $('.datepicker').eq(1).children('.text').text('--.--.----')
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
            $('.datepicker').siblings().slideToggle();
            if ($('html').width() < 1030) {
                $('.calendar_black').addClass('_active');
            }
        })
        $('.calendar_black').click(function () {
            $('.calendar_black').removeClass('_active');
            $('.datepicker').siblings().slideUp();
        })



        function dayInMounth(year, number) {
            number++;
            return new Date(year, number, 0).getDate();
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
    // let town_serch = () => {
    //     let Data = ['Aбакан', 'Aбакан', 'Aбакан', 'Aбакан', 'Aбакан', 'Aбакан', 'Aбакан', 'Aбакан', 'Aбакан', 'Балаково', 'Балаково', 'Балаково', 'Балаково', 'Балаково', 'Балаково', 'Балаково', 'Балаково', 'Балаково', 'Балаково'];
    //     var k = Data.length / 4;
    //     let curr_letter = Data[0][0];
    //     for (let i = 0; i < k && i < Data.length; i++) {
    //         let html_block;
    //         html_block = [`<div class="town_item">
    // 					<div class="letter_title">${curr_letter}</div>
    //                 </div>`];
    //         html_block = html_block.join(' ');
    //         html_block = $(html_block);


    //         if (curr_letter != Data[i][0]) {
    //             curr_letter = Data[i][0];


    //             html_block.append(`<div class="town_name">${Data[i]}</div>`);
    //         } else { 
    //             html_block.append(`<div class="town_name">${Data[i]}</div>`);
    //         }
    //     }
    // }
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
    let search_messege = (text) => {
        $('.messege_item').removeClass('_founded');
        for (let i = 0; i < $('.messege_item').length; i++) {
            let index = $('.messege_item').eq(i).text().indexOf(text);
            if (index != -1) {
                $('.messege_item').eq(i).addClass('_founded');
            }
        }
    }
    let messege_block = () => {
        $('.search_messege>input').change(function () {
            search_messege($(this).val());
        })
        $('.search_messege').on('submit', function (e) {
            e.preventDefault();
            search_messege($(this).children('input').val());
        })

    }
    let submit_messege = () => {
        $('._messeg').on('click', function () {
            if ($('#messege').val().length != 0) {
                create_messege($('#messege').val(), $('#messege'));
            }
        });
        $('#messege').on('keydown', function (e) {

            if (e.keyCode === 13) {
                create_messege($('#messege').val(), $('#messege'));
            }
        });
    }
    let create_messege = (text, textarea) => {

        var messege = $('.messege_block._my').eq(0).clone();
        let html_item = [`<div class="messege_block _my">
										<div class="avatar">
											<img src="img/avatar.png" alt="">
										</div>
										<div class="text_content">
											<div class="type">Тип: позитив, гости [id 2342]</div>
											<div class="messege_item">Привет, Александр! Отличное начало, не забудь
												поставить им оценки</div>
											<div class="date">01.07.2020 14:22</div>
										</div>
                                    </div>`];
        html_item = html_item.join(' ');
        html_item = $(html_item);

        html_item.children('.text_content').children('.messege_item').text(text);
        $('.messege_body').append(html_item);

        $('.messege_body').scrollTop($('.messege_body').prop('scrollHeight'));
        $('.messege_item').removeClass('_founded');
        textarea.val('');
        textarea.focus();
    }
    let destroy_messege = () => {
        $('.dialog_item').on('click', function () {
            $('.dialog_item').not(this).removeClass('_current');
            $(this).addClass('_current');
            $('.messege_container').empty();
        });
    }
    let chart = () => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["28 май", "8 июн", "22 июн", '6 июл', "28 май", "8 июн", "22 июн", '6 июл',],

                datasets: [{
                    backgroundColor: 'rgba(72, 114, 242, 0.1)',
                    borderCapStyle: 'round',
                    borderColor: '#007AFF',
                    data: [1000, 2000, 3233, 1324, 1345, 3456, 1000, 2000, 3233, 1324, 1345, 3456],
                }]
            },
            options: {

                scales: {
                    yAxes: [{
                        stacked: true,

                        beginAtZero: false,
                        gridLines: {
                            display: false,
                        },
                        ticks: {
                            stepSize: 1000,
                            padding: 14,
                        },
                    }],
                    xAxes: [{
                        ticks: {
                            padding: 10,
                            maxTicksLimit: 6,
                            stepSize: 1,
                        },
                    }]
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: false,
                },
            }

        });
    }

    let addCalendarItem = () => {
        $('._add_calendar').on('click', function () {
            let html = `<div class="apend_body">
                            <div class="apend_header">Выберите тип дашборда</div>
                            <div class="apend_cont">
                                <div class="apend_item">Динамика просмотров2</div>
                                <div class="apend_item">Динамика просмотров3</div>
                                <div class="apend_item">Динамика просмотров4</div>
                                <div class="apend_item">Динамика просмотров5</div>
                                <div class="apend_item">Динамика просмотров6</div>	
                                <div class="apend_item">Динамика просмотров7</div>
                                <div class="apend_item">Динамика просмотров8</div>
                                <div class="apend_item">Динамика просмотров9</div>
                                <div class="apend_item">Динамика просмотров0</div>
                            </div>
                        </div>`
            html = $(html);
            if ($(this).siblings().length == 0) {
                $(this).parent().append(html);
                for (let i = 0; i < $(this).siblings().children().children().length; i++) {
                    addEventListener($(this).siblings().children().children().eq(i));

                }



            }
        })
        function addEventListener(par) {
            par.on('click', function () {


                let cloned = `<div class="graph_item">
							<div class="graph_header">
								Динамика просмотров
							</div>
							<div class="graph_body">
								<div class="chart_y">
									<div class="chart_item">5 000</div>
									<div class="chart_item">4 000</div>
									<div class="chart_item">3 000</div>
									<div class="chart_item">2 000</div>
									<div class="chart_item">1 000</div>
								</div>
								<div class="chart_x">
									<div class="chart_item">
										<p>28 май</p>
									</div>
									<div class="chart_item">
										<p>8 июн</p>
									</div>
									<div class="chart_item">
										<p>22 июн</p>
									</div>
									<div class="chart_item">
										<p>6 июл</p>
									</div>
									<div class="chart_item">
										<p>8 июн</p>
									</div>
									<div class="chart_item">
										<p>22 июн</p>
									</div>
									<div class="chart_item">
										<p>6 июл</p>
									</div>
								</div>
								<div class="img">
									<img src="img/chart.svg" alt="">
								</div>
							</div>
							<div class="cross">
								<img src="img/round_cross.svg" alt="">
							</div>
						</div>`;

                cloned = $(cloned);
                cloned.children('.graph_header').text($(this).text());

                cloned.insertAfter($('.graphics_cont').children().eq($('.graphics_cont').children().length - 2));


                $(this).parent().parent().remove();
                $('.graph_item').children('.cross').on('click', function () {
                    $(this).parent().remove();
                })
            });
        }
        $('.graph_item').children('.cross').on('click', function () {
            $(this).parent().remove();

        })

    }
    let chart_graph = () => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Прогулка', 'Морская', 'Рыбалка', 'Онлайн', 'Водная', 'Сочи'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 4, 3],
                    backgroundColor: '#EDF1FE',
                    borderWidth: 0,
                }]
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [{

                        display: false,
                        gridLines: {
                            display: false
                        }
                    }],
                    xAxes: [{


                        gridLines: {
                            display: false
                        }
                    }]
                }
            }
        });
    }
    let graph_col = () => {
        let arr = [];
        for (let i = 0; i < $('.graphic_column').length; i++) {
            arr.push(+$('.graphic_column').eq(i).children('.value').text());

        }
        let maxEl = getMaxValue(arr);
        console.log(maxEl);
        function getMaxValue(array) {
            var max = array[0]; // берем первый элемент массива
            for (var i = 0; i < array.length; i++) { // переберем весь массив
                // если элемент больше, чем в переменной, то присваиваем его значение переменной
                if (max < array[i]) max = array[i];
            }
            // возвращаем максимальное значение
            return max;
        }
        // for (let i = 0; i < $('.graphic_column').children().length; i++) {
        //     console.log(+$('.graphic_column').eq(i).children('.value').text() / maxEl * 70);
        //     $('.graphic_column').eq(i).css({
        //         'height': `${+$('.graphic_column').eq(i).children('.value').text() / maxEl * 70}%`
        //     })
        // }
    }
    //chart();
    //chart_graph();

    let do_resevie = () => {
        let btns = document.querySelectorAll('.do_resev');
        let popup = document.querySelector('.do_res_popup');
        let cross = document.querySelector('.form_cross')
        let back = document.querySelector('.do_res_blue_href');
        let form = 0;
        if (cross != null) {
            form = cross.parentElement;
        }
        if (back != null && popup != null && btns != null && cross != null) {
            function crosslistener(cross_) {
                cross_.addEventListener('click', function () {
                    popup.classList.remove('_active');
                    back.classList.remove('_showed');

                });
            }
            crosslistener(cross);
            back.addEventListener('click', function () {
                popup.classList.remove('_active');
                back.classList.remove('_showed');
            });
            for (let index = 0; index < btns.length; index++) {
                btns[index].addEventListener('click', create_resev);
            }

            function create_resev() {
                popup.classList.toggle('_active');
                back.classList.toggle('_showed');
            }
        }
        if (form != 0) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                let removes = [];
                for (let i = 1; i < this.children.length - 1; i++) {
                    removes.push(this.children[i]);
                }
                removes.forEach(element => {
                    element.remove();
                });

                this.querySelector('.popup_title').innerHTML = "Ваш отзыв принят в обработку";
                this.innerHTML += `<div class="img"><img src="img/sun.png" alt=""></div>
                                <p>Мы в ближайшее время опубликуем Ваш отзыв.</p>`;
                let cross = document.querySelector('.form_cross')
                crosslistener(cross)

            })
        }
    }
    let pay_for_tarif = () => {
        let big_pay_cont = document.querySelector('#buy_container');
        if (big_pay_cont != null) {
            big_pay_cont.querySelector('.add_option').addEventListener('click', appendSelectBlock);
        }

        function appendSelectBlock() {
            let component = `<div class="_pay_drop_drop_item">
                                <div class="icon">
                                    <img src="img/tick.svg" alt="">
                                </div>
                                <div class="text">Рассылка по базе, “База гостей”</div>
                            </div>`;
            big_pay_cont.innerHTML = `<div class="select_cont">
									<div class="pay_item">
										<div class="item_title">Выберите опцию</div>
										<div class="pay_drop_down">
											<div class="pay_drop_down_title">
												<div class="text">Все</div>
												<div class="arrow">
													<img src="img/arrow_down.svg" alt="">
												</div>
											</div>
											<div class="pay_drop_down_body">
												
											</div>
										</div>
									</div>
									<div class="go_to_pay _blue_btn">
										Перейти к оплате
									</div>
                                </div>`;

            for (let index = 0; index < 18; index++) {
                big_pay_cont.querySelector('.pay_drop_down_body').innerHTML += component;
            }
            $('.pay_drop_down_title').on('click', function () {
                $(this).siblings('.pay_drop_down_body').slideToggle();
                $(this).parent().toggleClass('_active');
            })
            let components = document.querySelectorAll('._pay_drop_drop_item');

            components.forEach(element => element.addEventListener('click', function () {
                this.classList.toggle('_active')
            }));

            let payBtn = big_pay_cont.querySelector('.go_to_pay');
            payBtn.addEventListener('click', cardPopup);
        }
        function cardPopup() {
            $('.pay_drop_down_title').siblings('.pay_drop_down_body').slideUp();
            $('.pay_drop_down_title').parent().removeClass('_active');
            let cardForm = `<form action="#" class="credit_card_cont">
									
									<div class="credit_card">
										<div class="front">
											<div class="input_row">
												<div class="input_title">
													Номер карты / Card number
												</div>
												<div class="input_cont">
													<div class="input">
														<input type="text" placeholder="0000 0000 0000 0000">
													</div>
												</div>
											</div>
											<div class="input_row">
												<div class="input_title">
													Срок дейсвия / Valig through
												</div>
												<div class="input_cont">
													<div class="input">
														<input type="text" placeholder="ММ">
													</div>
													<div class="input">
														<input type="text" placeholder="ГГ">
													</div>
												</div>
											</div>
											<div class="input_row">
												<div class="input_title">
													Владелец карты / Card holder name
												</div>
												<div class="input_cont">
													<div class="input">
														<input type="text" placeholder="Имя Фамилия / Name Surname">
													</div>
												</div>
											</div>
										</div>
										<div class="back">
											<div class="gray_strip"></div>
											<div class="input_row">
												<div class="input_title">
													CVV / CVC
												</div>
												<div class="input_cont">
													<div class="input">
														<input type="text" placeholder="000">
													</div>
												</div>
												<div class="input_sup_title">
													Последние 3 цифры на полосе подписи
												</div>
											</div>
										</div>
									</div>
									<button type="submit" class="pay_btn _blue_btn">
										Оплатить
									</button>
                                </form>
                                `;
            let card_popup = document.querySelector('.card_popup');
            let blue_href = document.querySelector('.card_popup_blue_href');



            if (card_popup.querySelector('.credit_card_cont') == null) {
                card_popup.querySelector('.content_box').innerHTML += cardForm;
            }
            let form_cross = document.querySelector('.form__cross');
            card_popup.classList.add('_active');
            blue_href.classList.add('_showed');
            blue_href.addEventListener('click', function () {
                this.classList.remove('_showed');
                card_popup.classList.remove('_active');
                if (card_popup.querySelector('.status_table') != null) {
                    card_popup.querySelector('.status_table').remove();
                    card_popup.querySelector('.pay_btn').remove();
                }
            })
            form_cross.addEventListener('click', function () {
                blue_href.classList.remove('_showed');
                card_popup.classList.remove('_active');
            })
            let finalPay = card_popup.querySelector('.pay_btn');
            finalPay.addEventListener('click', function (e) {
                e.preventDefault();

                card_popup.querySelector('.popup_title').textContent = `Оплата успешно произведена!`;
                card_popup.querySelector('.popup_sub_title').innerHTML = `Новая опция начнет действовать с сб, 19 сент. 2020г.<br>Удачных путешествий!`;

                if (card_popup.querySelector('form') != null)
                    card_popup.querySelector('form').remove();
                if (card_popup.querySelector('.status_table') == null)
                    card_popup.innerHTML += `<div class="status_table">
                                            <div class="stat_title">Рассылка по базе, “База гостей”</div>
                                            <div class="lower_part">
                                                <div class="activ_date">Дата активации</div>
                                                <div class="date">19 сент. 2020 г.</div>
                                            </div>
                                        </div>
                                        <button class="pay_btn _blue_btn">
                                            Готово
                                        </button>`;
                card_popup.querySelector('.pay_btn').addEventListener('click', function () {
                    blue_href.classList.remove('_showed');
                    card_popup.classList.remove('_active');

                    card_popup.querySelector('.status_table').remove();
                    card_popup.querySelector('.pay_btn').remove();
                });

                form_cross = document.querySelector('.form__cross');
                form_cross.addEventListener('click', function () {
                    blue_href.classList.remove('_showed');
                    card_popup.classList.remove('_active');
                    if (card_popup.querySelector('.status_table') != null) {
                        card_popup.querySelector('.status_table').remove();
                        card_popup.querySelector('.pay_btn').remove();
                    }
                })
            })
        }
    }
    //graph_col();
    pay_for_tarif();
    do_resevie();

    addCalendarItem();
    town_serch();
    destroy_messege();
    submit_messege();
    upload();
    calendar();
    messege_block();




});