$(document).ready(function(){
  $(".tab-publica").mouseover(function(){
	 if ( $("body").hasClass( "bg-publica" ) ) {
      	  //Well Done!
	  }
	  else if ( $("body").hasClass( "bg-construcao" ) ) {
		  $('body').removeClass();
      	  $('body').addClass("bg-publica");
	  }
	  else {
		  $('body').removeClass();
      	  $('body').addClass("bg-publica");
	  }
  });
  $(".tab-publica").mouseout(function(){
	  if ( $(".tab-publica").hasClass( "active" ) ) {
      	//Well done Dude!
	  }
	  else if ( $(".tab-construcao").hasClass( "active" ) ) {
		  $('body').removeClass();
      	  $('body').addClass("bg-construcao");
	  }
	  else {
		  $('body').removeClass();
      	  $('body').addClass("bg-justica");
	  }
  });
  $(".tab-construcao").mouseover(function(){
	 if ( $("body").hasClass( "bg-construcao" ) ) {
      	  //Well Done!
	  }
	  else if ( $("body").hasClass( "bg-publica" ) ) {
		  $('body').removeClass();
      	  $('body').addClass("bg-construcao");
	  }
	  else {
		  $('body').removeClass();
      	  $('body').addClass("bg-construcao");
	  }
  });
  $(".tab-construcao").mouseout(function(){
	  if ( $(".tab-construcao").hasClass( "active" ) ) {
      	//Well done Dude!
	  }
	  else if ( $(".tab-publica").hasClass( "active" ) ) {
		  $('body').removeClass();
      	  $('body').addClass("bg-publica");
	  }
	  else {
		  $('body').removeClass();
      	  $('body').addClass("bg-justica");
	  }
  });
  $(".tab-justica").mouseover(function(){
	 if ( $("body").hasClass( "bg-construcao" ) ) {
      	  $('body').removeClass();
      	  $('body').addClass("bg-justica");
	  }
	  else if ( $("body").hasClass( "bg-publica" ) ) {
		  $('body').removeClass();
      	  $('body').addClass("bg-justica");
	  }
  });
  $(".tab-justica").mouseout(function(){
	  if ( $(".tab-construcao").hasClass( "active" ) ) {
      	  $('body').removeClass();
      	  $('body').addClass("bg-construcao active");
	  }
	  else if ( $(".tab-publica").hasClass( "active" ) ) {
		  $('body').removeClass();
      	  $('body').addClass("bg-publica active");
	  }
  });
})


window.solucoes_slider = undefined;
window.slider_produtos = undefined;
window.slider_produtos_home = undefined;
window.slider_motivos = undefined;
window.slider_infostoknow  = undefined;
window.history_slider = undefined;
window.memoBubbleTopText = "";
window.memoBubbleBotText = "";
jQuery(document).ready(function ($) {
	jQuery('.solucoes-mobile-struct').css('opacity',0);
	$(window).load(function(){
		if( $('.flexslider').size() > 0 ){

			window.st = jQuery('.flexslider').flexslider({
				animation: "slide",
				touch:true
			});

			window.memoBubbleTopText = $('.responsive-layout .papo-softplan-struct.responsive-center.one .btright.fluid .bg-papo .papo-content .text').html();
			window.memoBubbleBotText = $('.responsive-layout .papo-softplan-struct.responsive-center.two .btright.fluid .bg-papo .papo-content .text').html();

			jQuery('.multiline').ellipsis();
			window.st.data('flexslider').flexAnimate(0);
		};
		window.responsiveLayoutGridAdjust();
		if( jQuery('.swiper-container.slider-solucoes-container').size() > 0 ){
			window.solucoes_slider.reInit();
			window.solucoes_slider.swipeTo(0);
		}
		if( jQuery('.swiper-container.slider-solucoesprodutos-container').size() > 0 ){
			window.produtos_slider_preventResizeChangeURL = true;
			window.slider_produtos.reInit();
			var slug_active = jQuery(window.slider_produtos.container).attr("data-desktop-slug");
			var index_to = jQuery(window.slider_produtos.container).find("."+slug_active).attr("data-index")-1;
			if( index_to == undefined )
				index_to = 0;
			window.slider_produtos.swipeTo(index_to);
		};
			
		jQuery('.solucoes-mobile-struct').animate({'opacity':'1'},200,function(){
				window.solucoes_slider_reInit();
				window.solucoesprodutos_slider_reInit();
				window.dispatchCorrectSlider();
		});

		if( window.slider_infostoknow != undefined ){
			window.slider_infostoknow.reInit();
			//window.slider_infostoknow.moveTo(0);
		};

		if( BrowserDetect.browser == 'Explorer' && BrowserDetect.version < 9 ){
			setTimeout(function(){
				jQuery('.home-main-struct .ms_item').css({backgroundSize: "cover"});
				jQuery('.reasonsdiv div').css({backgroundSize: "cover"});
			},250);
		};

		if( $('.sp-home-gestao-slider-struct').size() > 0  && BrowserDetect.browser == "Explorer" && BrowserDetect.version == 8 ){
			jQuery('.sp-home-gestao-slider-struct .sp-gestao-slider .swiper-slide a').css({backgroundSize: "cover"});
			jQuery('.sp-home-gestao-slider-struct .sp-gestao-slider .swiper-slide a div img').css({'width':'auto','height':'100%'});
			window.slider_produtos_home.reInit();
		};

		if( $('.main_slide.main_slide2').size() > 0  && BrowserDetect.browser == "Explorer" && BrowserDetect.version == 8 ){
			$('.main_slide.main_slide2').css({backgroundSize: "cover"});
			$('.reasonsdiv div img').css({'width':'auto','height':'100%','margin-left':'0%'});
		};

		if( $('.motivos-infos-slide').size() > 0 && BrowserDetect.browser == "Explorer" && BrowserDetect.version == 8 ){
			window.slider_motivos.reInit();
			window.slider_motivos.swipeTo(0);
		};	

	});
	
	$(".main_slide2").height($(window).height());
	//$('.ms_item').children('.content').css("left",($(window).width()-944)/2+"px");
	$(window).resize(function(){
		window.hideIE8navbar();
		//$('.ms_item .content').css("left",($(window).width()-944)/2+"px");
		//$('.main_slide').width($(window).width());
		$(".flex-control-nav").width($(window).width());
		$(".policy_pop_up").width($(window).width());		
		$(".policy_pop_up").children("p").css("margin-left","10%");
		$(".policy_pop_up").children("p").css("width","90%");		
		$(".main_slide2").height($(window).height());
		//$('.ms_item').children('.content').css("left",($(window).width()-944)/2+"px");
	});
	/*$('.system_slides').flexslider({
		animation: "slide",
		animationLoop: true,
		itemWidth: 308,
		minItems: 1,
		maxItems: 3
	});*/
	$('.soft_slides').flexslider({
		animation: "slide",
		animationLoop: true,
		itemWidth: 231,
		minItems: 1,
		maxItems: 4,
		touch:true
	});
	$('.gallery_slides').flexslider({
		animation: "slide",
		animationLoop: true,
		itemWidth: 170,
		minItems: 1,
		maxItems: 5,
		touch:true
	});
	//$(".center_text").each(function(){
		//$(this).css("margin-top",($(this).parent().height()-$(this).height())/2+"px");
	//});
	$(".job").click(function(){
		if($(this).data("show")=="0"){
		$(this).data("show","1");
		}else{
		$(this).data("show","0");
		}
		$(this).toggleClass("opened");
		$(this).children(".hidden").slideToggle();
	});
	$(".home_bubbles .hb_item.right").hover(function(){
		$(".blue_bubble").toggleClass("selected");
		$(this).toggleClass("bluetext");
	});
	$(".home_bubbles .hb_item.left").hover(function(){
		$(".grey_bubble").toggleClass("selected");
		$(this).toggleClass("greytext");
	});	
	$( ".date" ).datepicker({
      showOn: "button",
      buttonImage: "../../wp-content/themes/softplan/images/calendar.png",
      buttonImageOnly: true,
	  dateFormat:"dd/mm/yy"
    });	


	window.playerQuemSomos = undefined;
	$('.video-play').click(function(e){		
		$('.video-play-cover').css('display','block');
		$('.video-play-container').css('display','block');
		if( !window.playerQuemSomos ){
			window.playerQuemSomos = new YT.Player('video-play-container',{width:'945px',height:'450px',videoId:'a5KFu3ofe0o',playerVars: { 'autoplay': 0 }});			
		}else{
			$('.video-play-container #video-play-container').remove();
			$('.video-play-container').append('<div id="video-play-container"></div>');
			window.playerQuemSomos = new YT.Player('video-play-container',{width:'945px',height:'450px',videoId:'a5KFu3ofe0o',playerVars: { 'autoplay': 0 }});			
			setTimeout(function(){window.playerQuemSomos.playVideo();},400);
		};
	});
	$('.video-play-cover').click(function(e){
		$('.video-play-container').css('display','none');
		$(this).css('display','none');
	});
	window.closeQuemSomos = function(){
		$('.video-play-cover').css('display','none');
		$('.video-play-container').css('display','none');
		if( $('.video-play-container').size() > 0 && jQuery(window).width() >= 960 )
			playerQuemSomos.stopVideo();
	};
	$('.video-close').click(function(e){
		window.closeQuemSomos();
	});

	window.solucoes_slider_reInit = function(){
		window.solucoes_slider_preventResizeChangeURL = true;
		if( window.solucoes_slider != undefined ){
			if(jQuery('.solucoes-mobile-struct').attr('data-current-index') != undefined ){
				clearInterval(window.tmp_timer)
				window.tmp_timer = setTimeout(function(){
					clearInterval(window.tmp_timer);
					window.solucoes_slider.reInit();
					window.changeSolutionURL = false;
					window.solucoes_slider.swipeTo(jQuery('.solucoes-mobile-struct').attr('data-current-index'));
					setTimeout(function(){
						window.changeSolutionURL = true;
						if( !window.mobilecheck )
							window.solucoes_slider.params.speed = 15000000;
					},500);
				},500);
			}else{
				window.solucoes_slider.reInit();
				window.solucoes_slider.swipeTo(0);
			};
		};	
	};
	window.solucoesprodutos_slider_reInit = function(){
		if( jQuery('.swiper-container.slider-solucoesprodutos-container').size() > 0 ){
			clearInterval(window.slider_produtos_timer);
			window.produtos_slider_preventResizeChangeURL = true;
			window.slider_produtos_timer = setTimeout(function(){
				clearInterval(window.slider_produtos_timer);
				window.slider_produtos.reInit();
				var slug_active = jQuery(window.slider_produtos.container).attr("data-desktop-slug");
				var index_to = jQuery(window.slider_produtos.container).find("."+slug_active).attr("data-index")-1;
				if( index_to == undefined )
					index_to = 0;
				window.slider_produtos.swipeTo(index_to);
			},500);
		};		
	};
	window.solucoesprodutos_slider_reInit();
	
	window.responsiveIE8vars_sliderCorrect = 0;
	window.responsiveIE8 = function(){

		var w = $(window).width();
		var h = $(window).height();

		if( BrowserDetect.browser == 'Explorer' && BrowserDetect.version == 8 ){
			if(w < 1024){
				$('.breadcrumbs-struct-mobile').show();
				$('.breadcrumb-str').hide();
				if( $(window).scrollTop() ==  0 ){
					$('.breadcrumbs-struct-mobile').show();
				}else{
					$('.breadcrumbs-struct-mobile').hide();
				};
			}else{
				$('.breadcrumb-str').show();
				$('.breadcrumbs-struct-mobile').hide();
			};
			$(window).scroll(function(e){
				if( $(this).scrollTop() > 0 ){
					$('.breadcrumb-str').hide();
					$('.breadcrumbs-struct-mobile').hide();
				}else{
					if(w < 1024){
						$('.breadcrumbs-struct-mobile').show();
						$('.breadcrumb-str').hide();
					}else{
						$('.breadcrumb-str').show();
						$('.breadcrumbs-struct-mobile').hide();
					};					
				};
			});

			if(w < 941){
				if( $('.video-play-cover').size() > 0 ){
					$('.video-play').hide();
					$('.video-play-cover').hide();
					$('.a-softplan-video-struct .page-desc').css({'margin-top':'0%','padding-top':'22%','position':'relative'});
					$('.a-softplan-video-struct .page-desc').style('top','0px','important');
					$('.a-softplan-video-struct img').css('display','none');
					$('.quem-somos-atributos .slides li').css({'width':'50%','margin-bottom':'4%'});
					$('.mvv-struct .slides li').css({'padding':'10% 0%','width':'100%'});
					$('.play-about-struct').show();
					$('.play-about-struct .play-about').css('padding-bottom','15%');
					window.closeQuemSomos();
				};
				$('.blue_itens').css({'width':'630px','padding-left':'2%'});
				$('.blue_itens a').removeClass('padding_zero');
				$('#filter').show();
				$('.responsa-filter-struct').hide();
				if( w < 630 ){
					$('.blue_itens').css({'width':'280px','padding-left':'0%'});
					$('.blue_itens a').addClass('padding_zero');
					$('#filter').hide();
					$('.responsa-filter-struct').show();
					
					$('.sp-home-gestao-wrapper').show();
					$('.home-slider-solucoes-struct').hide();
					$('.home-produtos-wrapper').hide();

					$('.slider-motivos-container').css('height','680px');
					$('.motivos-infos-slide img.bg').css('margin-left','0%');
					$('.motivos-struct').show();
					$('.navbar').hide();
					$('.reasonsdiv').hide();

					$('.reason_content').addClass('ie8-responsive-reasons-content');

					if( w < 530 ){
						$('.page-desc').css('padding-top','30%');
					}else{
						$('.page-desc').css('padding-top','22%');
					};

				}else if( w > 629 ){
					$('.sp-home-gestao-wrapper').hide();
					$('.home-slider-solucoes-struct').show();
					$('.home-produtos-wrapper').show();
					$('#filter').show();
					$('.responsa-filter-struct').hide();

					$('.motivos-struct').hide();
					$('.navbar').show();
					$('.reasonsdiv').show();
					$('.reasonsdiv div img').css({'width':'auto','height':'100%','margin-left':'0%'});
					$('.reason_content').removeClass('ie8-responsive-reasons-content');
				};

				$('.solucoes-mobile-struct').show();
				$('.solucoes-desktop-struct').hide();
				if( window.slider_produtos != undefined &&  $('.swiper-container.slider-solucoesprodutos-container').size() > 0 ){
					window.slider_produtos.swipeTo(1);
					setTimeout(function(){
						if( window.responsiveIE8vars_sliderCorrect == 0 ){
							window.responsiveIE8vars_sliderCorrect = 1;
							window.slider_produtos.swipeTo(0);
							window.slider_produtos.swipeTo(1);
							window.slider_produtos.swipeTo(2);
							console.log('teste');
						};
					},250);
				};
			}else{
				window.responsiveIE8vars_sliderCorrect = 0;
				if( $('.video-play-cover').size() > 0 ){
			 		$('.video-play').show();
					$('.a-softplan-video-struct .page-desc').css({'margin-top':'auto','padding-top':'auto','position':'absolute','top':'0px !important'});
					$('.a-softplan-video-struct img').css('display','block');
					$('.quem-somos-atributos .slides li').css('width','25%');
					$('.play-about-struct').hide();
			 	};

				$('.mvv-struct .slides li').css({'padding':'0% 0%','width':'25%'});

				$('.solucoes-mobile-struct').hide();
				$('.solucoes-desktop-struct').show();

				$('.blue_itens').css({'width':'940px'});
			};

		};
		if( window.history_slider != undefined ){
			window.history_slider.reInit();
			window.history_slider.swipeTo(0);
		};
		if( window.solucoes_slider != undefined ){			
			if( !window.mobilecheck() ){
				if(jQuery('.solucoes-mobile-struct').attr('data-current-index') != undefined ){
					clearInterval(window.tmp_timer)
					window.tmp_timer = setTimeout(function(){
						clearInterval(window.tmp_timer);
						window.solucoes_slider.reInit();
						window.solucoes_slider.swipeTo(jQuery('.solucoes-mobile-struct').attr('data-current-index'));	
					},500);
				}else{
					window.solucoes_slider.reInit();
					window.solucoes_slider.swipeTo(0);
				};
			};
		};
		if( jQuery('.swiper-container.slider-solucoesprodutos-container').size() > 0 ){
			clearInterval(window.slider_produtos_timer);
			window.slider_produtos_timer = setTimeout(function(){
				clearInterval(window.slider_produtos_timer);
				window.slider_produtos.reInit();
				var slug_active = jQuery(window.slider_produtos.container).attr("data-desktop-slug");
				var index_to = jQuery(window.slider_produtos.container).find("."+slug_active).attr("data-index")-1;
				if( index_to == undefined )
					index_to = 0;
				window.slider_produtos.swipeTo(index_to);
			},500);
		};		

		if( $(window).scrollTop() > 500 ){
			$('.back_to_top').show();
		}else{
			$('.back_to_top').hide();
		};

	};

	$(window).resize(function(e){
		window.responsiveIE8();
	});
	window.responsiveIE8();

	window.fallbackNotSupported_vars = 0;
	window.fallbackNotSupported = function(){
		if( window.fallbackNotSupported_vars == 0 ){
			if( BrowserDetect.browser == "Explorer" && BrowserDetect.version < 8 ){
				$('.desktop-context').hide();
				$('.fallback-message-struct').fadeIn("slow"); 
			};
			window.fallbackNotSupported_vars = 1;
		};
	};
	if( $('.home-main-struct').size() > 0 )
		window.fallbackNotSupported();

	$('.partners a .p_item').mouseenter(function(e){$(this).parent().addClass('hover');}).mouseleave(function(e){$(this).parent().removeClass('hover');});

});


jQuery(document).ready(function($){
	/* menu short version:i */
	if( window.isIpad() ){
		setInterval(function(){
			$('.breadcrumb-str').hide();
			if( $(window).scrollTop() > 0 ){
				$('.breadcrumbs-struct-mobile').hide();
			}else{
				$('.breadcrumbs-struct-mobile').show();
			};			
		},50);
	};	

	$(window).scroll(function(){
		var dtop = $(this).scrollTop();
		if( dtop > 0 ){
			$('.menu-root-struct').addClass('short');
			$('.breadcrumb-str').hide();
		}else{
			$('.menu-root-struct').removeClass('short');
			$('.breadcrumb-str').show();
			if( $('.gcss-mobile').size() > 0 )
				$('.breadcrumb-str').hide();
		};

		if( BrowserDetect.browser == "Explorer" && BrowserDetect.version < 9 ){
			$('.back_to_top').hide();
			if( $(window).scrollTop() > 500 ){
				$('.back_to_top').show();
			}else{
				$('.back_to_top').hide();
			};

			window.hideIE8navbar();
		};


	});
	/* menu short version:f */

	window.hideIE8navbar = function(){
		if( $(window).scrollTop() > window.reason[ 1 ] && $(window).scrollTop() < window.reason[ 11 ]){
			$('.navbar').show();
		}else{
			$('.navbar').hide();
		};
	};
	
	window.hideIE8navbar();

	/* menu overs:i */
	$('.range-one .right .menu li .sub-menu').css({'opacity':0,'display':'none'});

	$('.range-one .right .menu li')
	.mouseenter(function(e){
		var sm = $(this).find('.sub-menu');
		sm.css('display','block');
		sm.stop().animate({ opacity: 1 },150,'easeOutCubic');
	})
	.mouseleave(function(e){
		var sm = $(this).find('.sub-menu');
		sm.stop().animate({ opacity: 0 },150,'easeOutCubic',function(){
			$(this).css('display','none');
		});
	});

	$('.menu li .sub-menu li')
	.mouseenter(function(e){
		$(this).addClass('sub-menu-hover');
	})
	.mouseleave(function(e){
		$(this).removeClass('sub-menu-hover');
	});

	/*$('.menu .carreira-menu a').html(""+
        	           "<span>Faça aqui</span>"+
                       "sua carreira");*/
	jQuery('.menu .carreira-menu a').prepend($("#doithereflag"));
	$('.carreira-menu').addClass('last');
	$('.menu .menu-item').append("<div class='top-detail'></div>");
	$('.carreira-menu .top-detail').addClass('green');

	/* menu overs:f */

	/* papo effects:i */
	$('.responsive-layout .responsive-center.papo-softplan-struct .fluid.btright .bg-papo')
	.mouseenter(function(e){
		$(this).addClass('hover');
		$(this).parent().siblings().find('.cover_blue_right,.cover_blue_left').css('display','none');
	})
	.mouseleave(function(e){
		$(this).removeClass('hover');
		$(this).parent().siblings().find('.cover_blue_right,.cover_blue_left').css('display','block');
	});
	/* papo effects:f */

	$.datepicker.regional['pt'] = {
		dateFormat: 'dd/mm/yy',
		closeText: 'Fechar',
		prevText: '&#x3c;Anterior',
		nextText: 'Seguinte',
		currentText: 'Hoje',
		monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
		dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','S&aacute;bado'],
		dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','S&aacute;b'],
		dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','S&aacute;b'],
		weekHeader: 'Sem',
		firstDay: 0,	                
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['pt']);
	$.datepicker.setDefaults({
     	dateFormat: 'dd/mm/yy'
	});
	$('.wpcf7-form-control.date').datepicker({dateFormat: 'dd/mm/yy'});

	window.changeResponsabilidade = function( select_value ){
		$('.responsa-option,.dinablock').css('display','inline-block');
		$('.responsa-option:not([responsa-option*="'+select_value+'"])').css('display','none');
		$('.dinablock:not([dinablock-option*="'+select_value+'"])').css('display','none');
		if(select_value == "all")
			$('.responsa-option,.dinablock').css('display','inline-block');
	};

	window.changePapo = function(href){
		window.location.href=href;
	};

	window.responsiveLayoutGridAdjust = function(){
		var flag = 0;
		var memo = 0;
		var size = $('.blue_itens a').size();
		$('.blue_itens a:visible').css('padding','0px');
		var cutt = 3;
		for(var i=0; i < size; i++){
			if( ((i % cutt) == 0) ){
				flag = 0;
			}else{
				flag++;
			};
			if( flag == 2 ){
				$('.blue_itens a:visible:eq('+ (memo-1) +')').css('padding','0% 1.7%');
			};
			if( (flag == 1) && (i == size - 1)){
				$('.blue_itens a:visible:eq('+ (i) +')').css('padding','0% 1.7%');						
			};
			memo++; 
		}; 
	};
	jQuery('.solution_item .button,.bt-solut').mouseenter(function(e){jQuery(this).addClass('hover');});
	jQuery('.solution_item .button,.bt-solut').mouseleave(function(e){jQuery(this).removeClass('hover');});

	window.selectWebkit = function(){
		if( BrowserDetect.browser == "Safari" || BrowserDetect.browser == "Chrome" ){
			$('select').addClass('select-webkit-arrow');

			if( jQuery('.wpcf7 select').size() > 0 )
				jQuery('.wpcf7 select').addClass('select-webkit-form-visita');

			if( jQuery('#filter').size() > 0 )
				jQuery('#filter select').addClass('select-webkit-form-paporesp');
		};
	};
	window.selectWebkit();

	window.responsiveMenuIE = function(){
		if( (BrowserDetect.browser == "Explorer" && BrowserDetect.version > 8) || (BrowserDetect.browser == "Other" && BrowserDetect.version == "Unknown") ){
			console.log('teste');
			jQuery('.gcss-mobile-layout .sidebarcustom-struct .left').css('padding','0px','important');	
			jQuery('.gcss-mobile-layout .sidebarcustom-struct .right .right-mobile').css('padding','10% 0%','important');	
		};
	};
	setTimeout(function(){window.responsiveMenuIE();},500);

});