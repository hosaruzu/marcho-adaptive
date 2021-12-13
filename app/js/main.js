$(function () {

    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');

    });

    $('.footer-top__title').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });


    $('.star').rateYo({
        starWidth: '17px',
        normalFill: '#ccccce',
        ratedFill: '#ffc35b',
        readOnly: true,
        starSvg: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
    });

    $('.filter-price__input').ionRangeSlider({
        prefix: '$',
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        }
    });

    $('.select-jq-style, .product-element__num').styler();

    $('.shop-content__filter-btn').on('click', function () {
        $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
        $(this).addClass('shop-content__filter-btn--active');
    });

    $('.js-button-list').on('click', function () {
        $('.product-item').addClass('product-item--list');
        $('.shop-content__inner').addClass('shop-content--no-grid');
    });

    $('.js-button-grid').on('click', function () {
        $('.product-item').removeClass('product-item--list');
        $('.shop-content__inner').removeClass('shop-content--no-grid');
    });

    $('.product-slide__thumb').slick({
        asNavFor: '.product-slide__main',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
    });

    $('.product-slide__main').slick({
        asNavFor: '.product-slide__thumb',
        draggable: false,
        arrows: false,
        fade: true,
        responsive: [{
            breakpoint: 1051,
            settings: {
                draggable: true,
            }
        }, ]
    });

    $('.product-tabs__top-item').on('click', function (e) {
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });

    $('.blog-page__slider').slick({
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g><path d="M 1.113281 6.535156 L 5.894531 2.816406 C 6.226562 2.558594 6.761719 2.558594 7.085938 2.816406 L 7.882812 3.433594 C 8.210938 3.691406 8.210938 4.105469 7.882812 4.359375 L 4.496094 7 L 7.886719 9.636719 C 8.214844 9.894531 8.214844 10.308594 7.886719 10.5625 L 7.089844 11.183594 C 6.761719 11.441406 6.226562 11.441406 5.898438 11.183594 L 1.117188 7.464844 C 0.785156 7.207031 0.785156 6.792969 1.113281 6.535156 Z M 1.113281 6.535156"/></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g><path d="M 7.886719 7.464844 L 3.105469 11.183594 C 2.773438 11.441406 2.238281 11.441406 1.914062 11.183594 L 1.117188 10.566406 C 0.789062 10.308594 0.789062 9.894531 1.117188 9.640625 L 4.507812 7.003906 L 1.117188 4.367188 C 0.789062 4.109375 0.789062 3.695312 1.117188 3.441406 L 1.910156 2.816406 C 2.238281 2.558594 2.773438 2.558594 3.101562 2.816406 L 7.882812 6.535156 C 8.214844 6.792969 8.214844 7.207031 7.886719 7.464844 Z M 7.886719 7.464844 "/></g></svg></button>',
        infinite: false,
    });

    $('.shop__filter-btn').on('click', function () {
        $('.shop__filters').slideToggle();
    });

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function initializeClock(id, endtime) {
        const clock = document.querySelector('.promo__clock');
        const daysSpan = clock.querySelector('.promo__days');
        const hoursSpan = clock.querySelector('.promo__hours');
        const minutesSpan = clock.querySelector('.promo__minutes');
        const secondsSpan = clock.querySelector('.promo__seconds');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

    const deadline = $('.promo__clock').attr('data-time');
    initializeClock('.promo__clock', deadline);

});