(function ($) {


      jQuery('ul.date-list').each(function () {
      var LiN = jQuery(this).find('li').length;
      if (LiN > 3) {
      jQuery('li', this).eq(2).nextAll().hide().addClass('toggleable');
      jQuery(this).append('<a class="plusMinus">Show more...</a>');
      }
      });
      jQuery('ul.date-list').on('click', '.plusMinus', function () {
      if (jQuery(this).hasClass('active')) {
      jQuery(this).text('Show more...').removeClass('active');
      } else {
      jQuery(this).text('Show less...').addClass('active');
      }
      jQuery(this).siblings('li.toggleable').slideToggle();
      });



    
    //equal heights

        equalheight = function(container){

        var currentTallest = 0,
             currentRowStart = 0,
             rowDivs = new Array(),
             $el,
             topPosition = 0;
         $(container).each(function() {

           $el = $(this);
           $($el).height('auto')
           topPostion = $el.position().top;

           if (currentRowStart != topPostion) {
             for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
               rowDivs[currentDiv].height(currentTallest);
             }
             rowDivs.length = 0; // empty the array
             currentRowStart = topPostion;
             currentTallest = $el.height();
             rowDivs.push($el);
           } else {
             rowDivs.push($el);
             currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
          }
           for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
             rowDivs[currentDiv].height(currentTallest);
           }
         });
        }

        $(window).load(function() {
          equalheight('.equal-item');
        });


        $(window).resize(function(){
          equalheight('.equal-item');
        });
    
    //animated scroll
    
      jQuery(document).ready(function($) {
        $(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 1000);
        } );
      } );
    
    //feedback form
    
    //search toggle
    $('#site-search-reveal').click(function () {
        $('#site-search-wrapper').slideToggle("slow");
        $this.toggleClass('active');
    });
    
    //search toggle
    $('#feedback').click(function () {
        $('#feedback-form-content').slideToggle("slow");
        $('#feedback-form-content').focus();
    });
    
    //expand content
    
    $('.expand').click(function(){
		var $this = $(this);
		$this.toggleClass('active');
		if($this.hasClass('active')){
			$(".expand .sr-only").text('Click to hide');			
		} else {
			$(".expand .sr-only").text('Click to expand');
		}
	});
    
    //feedback form select
    
    $(document).ready(function() {
       $('input[type="radio"]').click(function() {
           if($(this).attr('id') == 'helpful_no') {
                $('#helpful_no_select').show();           
           }

           else {
                $('#helpful_no_select').hide();   
           }
       });
    });
    
        $(document).ready(function() {
       $('input[type="radio"]').click(function() {
           if($(this).attr('id') == 'helpful_maybe') {
                $('#helpful_maybe_select').show();           
           }

           else {
                $('#helpful_maybe_select').hide();   
           }
       });
    }); 
    
    
       //main menu
    $('a.main-menu').click(function() {
        $('#main-menu').toggleClass("active");
        $(this).toggleClass("active");
         $('#main-menu ul.root li:nth-child(1) a').addClass("firstItem");
        $('#main-menu ul.root li ul li a').removeClass("firstItem");
        $('#main-menu ul.root li a.firstItem').focus();
    });
    
    //search toggle
    $('a.search').click(function() {
        $('#nav-search').toggleClass("active");
        $(this).toggleClass("active");
        $('#nav-search input').focus();
    });


     $('.expandContent h3 ~ div').hide();

         $(".expandContent h3").on("click", function()
        {
		    $(this).toggleClass("active");
            var p = $(this).next('div').slideToggle();				
		    if ($(this).children().find('#tooltip').text() === "Click to expand")
		    {
		        $(this).children().find('#tooltip').text('Click to hide')
		    }
		    else
		    {
		        $(this).children().find('#tooltip').text('Click to expand')
		    }
		    return false;
		}); 




     
        $('#filterhide a').click(function (event) {
            event.preventDefault();
            $('.eventsFilter.col-md-3').toggleClass("active");
        });
        $('#filterCloseButton a').click(function (event) {
            event.preventDefault();
            $('.eventsFilter.col-md-3.active').removeClass("active");
        });
        $('#closeIcon').click(function (event) {
            event.preventDefault();
            $('.eventsFilter.col-md-3.active').removeClass("active");
        });
        $.resizeSearchResults = function () {
            var browserViewport = $(window).width();
            if (browserViewport <= 992) {
                $(".relDate").prependTo(".eventsFilterType.first");
            }
            if (browserViewport > 992) {
                $('.relDate').appendTo('.eventsSearchSort .pull-right');
            }
        }

        $.resizeSearchResults();

        $(window).resize(function () {
            $.resizeSearchResults();
        });    
 
    return {
        activate: activateResponsiveDesign
    }
    


    
}(jQuery));
