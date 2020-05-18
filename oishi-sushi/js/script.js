//Main script file by: Katherine Scott

$(document).ready(function(){
    //Carousel settings
    $('.carousel').carousel({
        interval: 3000,
        wrap: true,
        pause: "hover",
        keyboard: true
    });
    //Mobile Nav Menu
    $(".hamburger").click(function(){
        $(".nav ul").slideToggle("swing");
    });

    //add and remove class active for corresponding ajax area
    $(".nav ul li a").click(function(){
        $(".nav ul li a").removeClass("navActive");
        $(this).addClass("navActive");
    });

    //Splash Page Index
    $(window).load(function() {
        $(".loader").fadeOut(2000, "swing");
    });

    //Ajax variables
    var loadContent = $('.loadContent');
    var home = $(".home");
    var about = $('.about');
    var sushi = $('.sushi');
    var hibachi = $('.hibachi');

    //button functions for loading each pages data into the loadContent div on the index page
    about.click(function(){
        $.ajax({
            url: 'data/about.html',
            data: $(this).text(),
            beforeSend: function(){
                $('.loadContent').fadeOut(10)
            },
            success: function(data){
                $('.loadContent').fadeOut(10, function(){
                    $(".loadContent").html(data).fadeIn(500);
                });
            }
        });
    });

    sushi.click(function(){
        $.ajax({
            url: 'data/sushi.html',
            data: $(this).text(),
            beforeSend: function(){
                $('.loadContent').fadeOut(10)
            },
            success: function(data){
                $('.loadContent').fadeOut(10, function(){
                    $(".loadContent").html(data).fadeIn(500);
                });
            }
        });
    });

    hibachi.click(function(){
        $.ajax({
            url: 'data/hibachi.html',
            data: $(this).text(),
            beforeSend: function(){
                $('.loadContent').fadeOut(10)
            },
            success: function(data){
                $('.loadContent').fadeOut(10, function(){
                    $(".loadContent").html(data).fadeIn(500);
                });
            }
        });
    });

    home.click(function(){
        $.ajax({
            url: 'data/home.html',
            data: $(this).text(),
            beforeSend: function(){
                $('.loadContent').fadeOut(10)
            },
            success: function(data){
                $('.loadContent').fadeOut(10, function(){
                    $(".loadContent").html(data).fadeIn(500);
                });
            }
        });
    });

});
