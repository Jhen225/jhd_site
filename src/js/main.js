
$(document).ready(function(){

    // $(document).scroll(onScroll());
    smoothScroll(750);
    showMenuIconOnScroll();
    clientStuff();
    workStuff();
    navigationFunctionality();
    onScrollNavbarAnimation();
    $('.soc').children().last().addClass('soc-icon-last');
})

function workStuff(){

    $('.thumbnail-unit').click(function(){
        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);

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
    $('.client-mobile-nav-icon').hover(function(){
        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);
            console.log(position);
        $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
        $siblings.removeClass('active-client');
        $this.addClass('active-client');
    });
}

function navigationFunctionality(){

    $('#hamburger').click(function(){
        if($('.nav-menu-container').is(':visible')){
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
        } else{
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
    });

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

}





function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('.navbar-item').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('.navbar-item').removeClass("active-navbar-item");
            currentLink.addClass("active-navbar-item");
        } else{
            currentLink.removeClass("active-nav-item");
        }
    });
}

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );
        console.log($(this));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top - ($(window).height() * 0.078)
	        }, duration);
	    }
	});
}

function onScrollNavbarAnimation(){

    $(window).scroll(function(){
        if($(window).scrollTop() > ($(window).height() - 20)){
            $('#header').css('box-shadow','4px 4px 10px #888');
        } else{
            $('#header').css('box-shadow','');
        }
    });
}
