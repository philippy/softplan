window.mobilecheck = function() {	
	var check = false;
	(function(a){
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
			check = true
	})(navigator.userAgent||navigator.vendor||window.opera);
	return check; 
};
jQuery(document).ready(function ($) {

	window.ScrollStart = function(){

		if( $(document).scrollTop() > 0 ){
			$('.breadcrumbs-struct-mobile').hide();
		};
		setTimeout(function(){
			if( $(document).scrollTop() < 20 ){	
					$('.breadcrumbs-struct-mobile').show();
				$('.breadcrumbs-struct-mobile').show();
			};
		},50);
	};
	if( window.isIpad() ){
		document.addEventListener("touchmove", window.ScrollStart, false);
		window.orientationOps = function(e){
			if( window.slider_motivos != undefined ){
				window.slider_motivos.reInit();
			};
			if( window.slider_infostoknow != undefined ){
				window.slider_infostoknow.reInit();
				setTimeout(function(){window.slider_infostoknow.swipePrev();},200);
			};
			if( window.slider_produtos_home != undefined ){
				window.slider_produtos_home.reInit();
				setTimeout(function(){window.slider_produtos_home.swipePrev();},200);
			};
		};
		document.addEventListener("orientationchange", window.orientationOps, false);
	};

	window.memoBubbleTopText = "";
	window.memoBubbleBotText = "";
	window.registerMobileClasses = function(){
		$(".home_bubbles").addClass("mobile");
		$(".bubble_image").hide();
		$('.home-produtos-wrapper').hide();
		$('.sp-home-gestao-wrapper').show();

		$('.breadcrumb-str').addClass('breadcrumb-str-1024');

		if( $(window).width() < 481 ){
			$('.responsive-layout .papo-softplan-struct.responsive-center .btright.fluid .bg-papo .papo-content .text').addClass('bubble_overflow_text');
			$('.responsive-layout .papo-softplan-struct.responsive-center .btright.fluid .bg-papo .papo-content .text').addClass('multiline');			
		}else{
			$('.responsive-layout .papo-softplan-struct.responsive-center .btright.fluid .bg-papo .papo-content .text').removeClass('bubble_overflow_text');
			$('.responsive-layout .papo-softplan-struct.responsive-center .btright.fluid .bg-papo .papo-content .text').removeClass('multiline');
		};

		if( window.slider_produtos_home.wrapper != undefined ){
			setTimeout(function(){				
				window.slider_produtos_home.reInit();
				window.slider_produtos_home.swipeTo(0);
			},150);
		};
	};
	window.unregisterMobileClasses = function(){
		$(".home_bubbles").removeClass("mobile");
		$(".bubble_image").show();
		$('.home-produtos-wrapper').show();
		$('.sp-home-gestao-wrapper').hide();
		$('.breadcrumb-str').removeClass('breadcrumb-str-1024');
	};

	window.IE9functions = function(){
		if( (BrowserDetect.version == 9 || BrowserDetect.version == 10)  && BrowserDetect.browser == "Explorer" ){
			$('.sp-home-gestao-slider-struct').css('height','220px');
			$(window).bind('load',function(){$('.sp-home-gestao-slider-struct .sp-gestao-slider .swiper-slide').css('height','160px');});
			$('.sp-home-gestao-slider-struct .sp-gestao-slider .swiper-slide a').css('width','55%');

			if( jQuery(window).width() < 602 ){
				$('.gcss-mobile-layout .sidebarcustom-struct .right').addClass('ie9-classes-menu-range-one');
				$('.gcss-mobile-layout .sidebarcustom-struct .left').removeClass('ie9-classes-menu-range-two-left');
				$('.gcss-mobile-layout .sidebarcustom-struct .right').removeClass('ie9-classes-menu-range-two-right');
			};
			if( jQuery(window).width() < 524 ){
				$('.gcss-mobile-layout .sidebarcustom-struct .right').removeClass('ie9-classes-menu-range-one');
				$('.gcss-mobile-layout .sidebarcustom-struct .left').addClass('ie9-classes-menu-range-two-left');
				$('.gcss-mobile-layout .sidebarcustom-struct .right').addClass('ie9-classes-menu-range-two-right');
			};
			if( jQuery(window).width() > 602 ){
				$('.sidebarcustom-struct .right').removeClass('ie9-classes-menu-range-one');
				$('.sidebarcustom-struct .left').removeClass('ie9-classes-menu-range-two-left');
				$('.sidebarcustom-struct .right').removeClass('ie9-classes-menu-range-two-right');
			};
		};
	};

	window.ipadinterval = undefined;
	window.checkMobileClasses = function(){

		if( !window.isLowerThanIE9() ){
			if( $(window).width() < 1007 ){
				window.registerMobileClasses();
			}else{
				window.unregisterMobileClasses();
			};	
		}else{
			/* IE7 e IE8 */
			window.menuIE8();
			$('.papo-softplan-wrapper.responsive-layout').css('margin-top','-150px');
			if( $(window).width() < 1024 ){
				$('.responsive-layout .responsive-center').css('width','auto');
				if( $(window).width() < 797 ){
					$('.main_slide .ms_item .content .text').css({'font-size':'38px','width':'100%'});
					$('.home-main-struct.main_slide .ms_item .content').style('top','135px','important'); 

					$('.responsive-layout .papo-softplan-struct.responsive-center .btleft.fluid').hide();
					$('.responsive-layout .papo-softplan-struct.responsive-center .bbright.fluid').hide();
				}else{
					$('.main_slide .ms_item .content .text').css({'font-size':'48px','width':'50%'});
					$('.home-main-struct.main_slide .ms_item .content').style('top','150px','important'); 

					$('.responsive-layout .papo-softplan-struct.responsive-center .btleft.fluid').show();
					$('.responsive-layout .papo-softplan-struct.responsive-center .bbright.fluid').show();
				};
			}else{
				$('.responsive-layout .responsive-center').css('width','1024px');
			};
		};

		if( window.isIpad() ){
			if( jQuery(window).width() < jQuery(window).height() ){
				//window.renderMobile();
				window.renderDesktop();
			}else{
				window.renderDesktop();
			};
		}else{
			if( !window.isLowerThanIE9() ){
				if( $(window).width() < 602 || window.mobilecheck() ){
					window.renderMobile();
				}else{
					window.renderDesktop();
				};
			};
			window.IE9functions();
			clearInterval(window.ipadinterval);
			window.FFspecials();
		};

	};

	window.renderBubbleText = function(){
		$('.responsive-layout .papo-softplan-struct.responsive-center.one .btright.fluid .bg-papo .papo-content .text').html(window.memoBubbleTopText);
		$('.responsive-layout .papo-softplan-struct.responsive-center.two .btright.fluid .bg-papo .papo-content .text').html(window.memoBubbleBotText);
		var ws = jQuery(window).width();		
		if( ws < 550 ){
			setTimeout(function(){
				jQuery('.multiline').ellipsis();
			},500);
		};
	};
	window.renderMobile = function(){
		if( !$('.menu-root-struct').hasClass('gcss-mobile') ){	

			$('.menu-root-struct').addClass('gcss-mobile');
			$('.menu-root-struct').removeClass('gcss-desktop');	

			if( window.mobilecheck() || window.isIpad() )
				$('.desktop-context').addClass('gcss-mobile-layout');

			if( $(window).width() < 602 )
				$('.desktop-context').addClass('gcss-mobile-layout');

			$('.breadcrumb-str').hide();
			$('.breadcrumbs-struct-mobile').show();

			$('.menu-glyph').attr('is-open','false');
			$('.gcss-mobile .menu-struct').hide();
			
			$('.menu-root-struct').removeClass('short');

			$('.footer').hide();
			$('.footer-mobile-struct').show();
			
			$('.solucoes-desktop-struct').hide();
			$('.solucoes-mobile-struct').show();
			if( window.solucoes_slider != undefined ){				
				window.solucoes_slider_reInit();
				//window.solucoes_slider.reInit();
				//window.solucoes_slider.swipeTo(0);
			};
			if( window.slider_produtos != undefined ){
				window.slider_produtos.reInit();
				//window.slider_produtos.swipeTo(0);
			};

			if( window.history_slider != undefined ){
				window.history_slider.reInit();
				window.history_slider.swipeTo(0);
			};

			$('#filter').hide();
			$('.responsa-filter-struct').show();
			$('.paposoft-filter-struct').show();

			/*if( $('#menu-item-271-clone').size() == 0 ){
				var vt = $('#menu-item-271').clone();
				vt.attr('id','menu-item-271-clone');
				vt.insertAfter('#menu-item-294');
			};*/
			if( $('#visita-tecnica-menu-item').size() == 0 ){
				var vt = $('.visita-tecnica-menu-item').clone();
				vt.attr('id','visita-tecnica-menu-item');
				vt.insertAfter('.a-softplan-menu-item');
			};			
			
			if( $(window).width() < 801 ){
				$('.motivos-struct').show();
				$('.reasonsdiv').hide();
				$('.navbar').hide();


			}else{
				$('.motivos-struct').hide();
				$('.reasonsdiv').show();
				if(  $(document).scrollTop()>reason[totaldivs+1]  )
					$('.navbar').show();
			};

			if( window.opera !== undefined ){
				setTimeout(function(){
					jQuery('.gcss-mobile-layout .sidebarcustom-struct .left').addClass('operaPadding');
				},500);
			};
		};		
	};	

	window.renderDesktop = function(){
		$('.menu-root-struct').removeClass('gcss-mobile');
		$('.menu-root-struct').addClass('gcss-desktop');
		$('.gcss-desktop .menu-struct').show();	
		$('#visita-tecnica-menu-item').remove();
		$('.desktop-context').removeClass('gcss-mobile-layout');
		if( $(document).scrollTop() < 1 )
			$('.breadcrumb-str').show();
		$('.breadcrumbs-struct-mobile').hide();
		$('.footer').show();
		$('.footer-mobile-struct').hide();
		$('#filter').show();
		$('.responsa-filter-struct').hide();
		$('.paposoft-filter-struct').hide();

		if( $(window).width() < 1100 ){
			window.adjustTrackSize(7);
		}else{
			window.adjustTrackSize(9);
		};
		if( $(window).width() < 1034 ){
			if( window.playerQuemSomos != undefined ){
				window.closeQuemSomos();
				window.playerQuemSomos.stopVideo();
			};
		};

		if( $(window).width() < 801 ){
			$('.motivos-struct').show();
			$('.reasonsdiv').hide();
			$('.navbar').hide();
		}else{
			$('.motivos-struct').hide();
			$('.reasonsdiv').show();
			if(  $(document).scrollTop()>reason[totaldivs+1]  )
				$('.navbar').show();
		};	
		if( $(window).width() < 602 ){
			
			$('.solucoes-desktop-struct').hide();
			$('.solucoes-mobile-struct').show();
			
			if( window.solucoes_slider != undefined ){
				window.solucoes_slider.reInit();
				window.solucoes_slider.swipeTo(0);
			};

		}else{
			$('.solucoes-mobile-struct').hide();
			$('.solucoes-desktop-struct').show();
		};	
	};

	window.isLowerThanIE9 = function(){
		if( BrowserDetect.browser == 'Explorer' && BrowserDetect.version < 9 ){
			return true;
		};
		return false;
	};
	window.menuIE8 = function(){
		if( BrowserDetect.browser == 'Explorer' && BrowserDetect.version == 8 ){
			if( $(window).width() < 1024 ){
				if( !$('.menu-root-struct').hasClass('gcss-mobile') ){	
					$('.menu-root-struct').addClass('gcss-mobile');
					$('.menu-root-struct').addClass('gcss-mobile-ie8');
					$('.menu-root-struct').removeClass('gcss-desktop');	
					$('.menu-glyph').attr('is-open','false');
					$('.gcss-mobile .menu-struct').hide();
				};
			}else{
				$('.menu-root-struct').removeClass('gcss-mobile');
				$('.menu-root-struct').removeClass('gcss-mobile-ie8');
				$('.menu-root-struct').addClass('gcss-desktop');
				$('.gcss-desktop .menu-struct').show();	
			};	
			$('.desktop-context').addClass('gcss-ie8');
		};
	};

	window.FFspecials = function(){
		if( BrowserDetect.browser == "Firefox" || BrowserDetect.browser == "Safari" || BrowserDetect.browser == "Opera" ){		
			var w = $(window).width();
			if( w < 641 ){
				$('.a-softplan-video-struct .page-desc').addClass('ff-correct-asoftplan');
			}else{
				$('.a-softplan-video-struct .page-desc').removeClass('ff-correct-asoftplan');
			};
		};
	};
	window.FFspecials();

	window.stopResizing = true;
	window.timer_stopResizing = true;
	window.resizeQueue = [];
	window.runQueue = function(){
		var queue = window.resizeQueue;
		var qtqueue = queue.length;
		for( var i = 0 ; i < qtqueue ; i++ ){
			window.resizeQueue[ i ]();
		};
		window.clearQueue();
	};
	window.enQueue = function(fn_){
		window.resizeQueue[ window.resizeQueue.length ] = fn_;
	};
	window.clearQueue = function(){
		window.resizeQueue = [];
	};
	$(window).resize(function(e){
		window.stopResizing = false;
		clearInterval( window.timer_stopResizing );
		window.timer_stopResizing = setTimeout(function(){
			window.stopResizing = true;
			window.enQueue(window.renderBubbleText);
			window.runQueue();
		},500);
		window.checkMobileClasses();
	});
	window.checkMobileClasses();

	$('.menu-glyph').attr('is-open','false');
	$('.gcss-mobile .menu-struct').hide();
	$('.menu-glyph').click(function(e){

		var ua = navigator.userAgent.toLowerCase(); 
		if (ua.indexOf('safari') != -1) { 
			if (ua.indexOf('chrome') > -1) {
				// Chrome
			}else{
				// Safari
				if( window.navigator.platform == 'Win32' ){
					jQuery('html,body').animate({scrollTop:1},10);
					jQuery('html,body').animate({scrollTop:0},10);
				};
			};
		};

		var isopen = $('.menu-glyph').attr('is-open');
		if( isopen == 'true' ){
			$('.menu-glyph').attr('is-open','false');
			$('.gcss-mobile .menu-struct').hide();
		}else{
			$('.menu-glyph').attr('is-open','true');
			$('.gcss-mobile .menu-struct').show();
		};
	});

	$('.policy-mobile').click(function( e ){
		$('.policy_pop_up.mobile').show("fast");
	});

});

(function($) {    
  if ($.fn.style) {
    return;
  }

  // Escape regex chars with \
  var escape = function(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };

  // For those who need them (< IE 9), add support for CSS functions
  var isStyleFuncSupported = !!CSSStyleDeclaration.prototype.getPropertyValue;
  if (!isStyleFuncSupported) {
    CSSStyleDeclaration.prototype.getPropertyValue = function(a) {
      return this.getAttribute(a);
    };
    CSSStyleDeclaration.prototype.setProperty = function(styleName, value, priority) {
      this.setAttribute(styleName, value);
      var priority = typeof priority != 'undefined' ? priority : '';
      if (priority != '') {
        // Add priority manually
        var rule = new RegExp(escape(styleName) + '\\s*:\\s*' + escape(value) +
            '(\\s*;)?', 'gmi');
        this.cssText =
            this.cssText.replace(rule, styleName + ': ' + value + ' !' + priority + ';');
      }
    };
    CSSStyleDeclaration.prototype.removeProperty = function(a) {
      return this.removeAttribute(a);
    };
    CSSStyleDeclaration.prototype.getPropertyPriority = function(styleName) {
      var rule = new RegExp(escape(styleName) + '\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?',
          'gmi');
      return rule.test(this.cssText) ? 'important' : '';
    }
  }

  // The style function
  $.fn.style = function(styleName, value, priority) {
    // DOM node
    var node = this.get(0);
    // Ensure we have a DOM node
    if (typeof node == 'undefined') {
      return;
    }
    // CSSStyleDeclaration
    var style = this.get(0).style;
    // Getter/Setter
    if (typeof styleName != 'undefined') {
      if (typeof value != 'undefined') {
        // Set style property
        priority = typeof priority != 'undefined' ? priority : '';
        style.setProperty(styleName, value, priority);
      } else {
        // Get style property
        return style.getPropertyValue(styleName);
      }
    } else {
      // Get CSSStyleDeclaration
      return style;
    }
  };
})(jQuery);