$(document).ready(function(){
    SITE.init();
});


var SITE = {

    init: function(){
        this.parallax();
        this.scrollspy();
        this.menu_move();
        this.go_to_top();
        this.menu_opacity();
        this.header_opacity();
    },

    parallax: function(){
        $('.event-parallax').parallax("50%", 0.1);
        $('.local-parallax').parallax("50%", 0.1);
    },

    scrollspy: function(){
        $('#navbar-spy').scrollspy({});
    },

    menu_move: function(){
        $(".nav li a[href^='#']").on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top-50
            }, 1000);
        });
    },

    go_to_top: function(){
        $(".to-top").on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 2000);
        });
    },

    menu_opacity: function(){
        var navbar = $('#conference-navbar');
        var event_limit = $('#event').offset().top;
        $(window).on('scroll', function() {
            var st = $(this).scrollTop();
            var limit = event_limit/3
            debugger;
            if (st > limit) {
                navbar.animate({
                  top: 0,
                  opacity: 1
                }, {
                  queue: false,
                  duration: 200,
                  easing: 'linear'
                });
            } else {
                navbar.animate({
                  top: -navbar.height(),
                }, {
                  queue: false,
                  duration: 200,
                  easing: 'linear'
                });
            };
        });
    },

    header_opacity: function(){
        var header = $('#event-hero');
        var event_limit = $('#event').offset().top;
        $(window).on('scroll', function() {
            var st = $(this).scrollTop();
            var limit = event_limit/1.5
            if (st > limit) {
                header.animate({
                    opacity : 0
                }, {
                  queue: false,
                  duration: 200,
                  easing: 'linear'
                });
            } else {
                header.animate({
                    opacity : 1 - st/limit
                }, {
                  queue: false,
                  duration: 200,
                  easing: 'linear'
                });
            };
        });

    },

};
