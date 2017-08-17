// var config = require('../../config.json');
var pages = ["/","/about","/portfolio","/contact"];
var i = 0;
var url = "";

$(function(){

    smoothScroll(750);
    bottomChevron (1100);
    sectionScroll(1000);
    showMenuIconOnScroll();
    clientStuff();
    workStuff();
    $('.soc').children().last().addClass('soc-icon-last');
});


function workStuff(){
    

    $('.thumbnail-unit').click(function(){
        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);

        console.log(position);

        $.getJSON('../../../config.json', function(json){
            console.log('JSON: ' + json.site_info.portfolio.projects[position].name);
        });
        
    });

}

function showMenuIconOnScroll(){

    $(window).scroll(function(){
        if(!($('.Hamburger').is(':visible'))){
            if($(window).scrollTop > 60){
                $('.Hamburger').show();
                // $('.Hamburger').css('display','block');
            }
        }
    });
}



function clientStuff(){
    $('.client-mobile-nav-icon').first().addClass('active-client');
    $('.client-unit').first().addClass('active-client');

    $('.client-mobile-nav-icon').click(function(){
        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);
            console.log(position);
        $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
        $siblings.removeClass('active-client');
        $this.addClass('active-client');
    });
}

$('.nav-menu-item').click(function(){
    $('.nav-menu-container').hide();
    $('.bar2').animate({
            opacity:1
        },250).css('display','block');

        $('.bar1').css({
            'transform':'rotate(0deg)',
            'transition':'transform 250ms',
            'marginBottom':10
        });

        $('.bar3').css({
            'transform':'rotate(0deg)',
            'transition':'transform 250ms',
            'marginTop':10
            
        });
});



$('.nav-menu-item').hover(
    function(){
        
        $(this).stop().animate({
            flexGrow:1.2
        },250,function(){
            console.log('growing...');

        });
        console.log('hover in');
    },
    function(){
        $(this).stop().animate({
            flexGrow:1
        },250,function(){
            console.log('shrinking...')

        });
        console.log('hover out');
    }
);

$('#hamburger').click(function(){

    if($('.nav-menu-container').is(':visible')){
        console.log('visible');
        $('.nav-menu-container').animate({
            opacity:0
        },250,
        function(){
            $('.nav-menu-container').css('display','none');
        });
        $('.bar2').animate({
            opacity:1
        },250).css('display','block');

        $('.bar1').css({
            'transform':'rotate(0deg)',
            'transition':'transform 250ms',
            'marginBottom':10
        });

        $('.bar3').css({
            'transform':'rotate(0deg)',
            'transition':'transform 250ms',
            'marginTop':10
            
        });
    }
    else{
         $('.nav-menu-container').css('display','flex').animate({
            opacity:1
        },250);
        $('.bar2').animate({
            opacity:0,
            'margin':0
        },250,function(){
            // $('.bar2').css('display','none');
        });

        $('.bar1').css({
            'transform':'rotate(45deg) translate(10px,10px)',
            'transition':'transform 250ms',
            'margin':0
        });

        $('.bar3').css({
            'transform':'rotate(-45deg) translate(-1px,4px)',
            'transition':'transform 250ms',
            'margin':0
        });
    }

    console.log('clicked');
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top - ($(window).height() * 0.078)
	        }, duration);
	    }
	});
}

$(window).scroll(function(){

    if($(window).scrollTop() > $(window).height()){
        $('#header').css('box-shadow','4px 4px 10px #888');
        console.log('kbdfijvbef');
    }
    else{
        $('#header').css('box-shadow','');
    }

    // console.log($(window).scrollTop());
    // var top = $(window).scrollTop() + ($(window).height() * 0.08);
    // console.log(top);
    // console.log(top - $('#about').offset().top);
    // var offset = ($(window).scrollTop() - $('#about').offset().top);
    // if(offset < 200 || offset > -200){
    //     $('#header').css('background', '#000').css('color','white');
    // }
    // else{
    //     $('#header').css('background', '#fff').css('color','#333');
    // }
    
});






//test stuff

function test_portfolio(){

    var mq = window.matchMedia('@media all and (max-width: 750px)');
        if(mq.matches) {
            // the width of browser is more then 750px
            console.log('')
        } else {
            // the width of browser is less then 750px
    }
    $('.chevRight').click(
        function(){
           var right = $('.half-overlay').css('right');
           if(right==='0px'){

               $('.half-overlay').animate(
                {
                   "right":"50%" 
                }, 1000,function(){
                    console.log('going left');
                });

           }else{
               $('.half-overlay').animate(
                {
                   "right":"0%" 
                }, 1000,function(){
                    console.log('going right');
                });
           }
            
        }
    );

     $('.chevLeft').click(
        function(){
           var right = $('.half-overlay').css('right');
           if(right==='0px'){

               $('.half-overlay').animate(
                {
                   "right":"50%" 
                }, 1000,function(){
                    console.log('going left');
                });

           }else{
               $('.half-overlay').animate(
                {
                   "right":"0%" 
                }, 1000,function(){
                    console.log('going right');
                });
           }
            
        }
    )
}


function bottomChevron (duration) {
	$('.chevBottom').on('click', function(event) {
        console.log('clicked');
        $('html, body').animate({
            scrollTop: $('.port-item').offset().top
        }, duration);

	});
}

function sectionScroll(duration){
    $('.port').on('scroll',function(event){
        console.log('scroll');
    })
}
