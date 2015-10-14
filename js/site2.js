// JavaScript Document
jQuery(document).ready(function ($) {

	window.BrowserDetect = 
	{
	    init: function () 
	    {
	        this.browser = this.searchString(this.dataBrowser) || "Other";
	        this.version = this.searchVersion(navigator.userAgent) ||       this.searchVersion(navigator.appVersion) || "Unknown";
	    },

	    searchString: function (data) 
	    {
	        for (var i=0 ; i < data.length ; i++)   
	        {
	            var dataString = data[i].string;
	            this.versionSearchString = data[i].subString;

	            if (dataString.indexOf(data[i].subString) != -1)
	            {
	                return data[i].identity;
	            }
	        }
	    },

	    searchVersion: function (dataString) 
	    {
	        var index = dataString.indexOf(this.versionSearchString);
	        if (index == -1) return;
	        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	    },

	    dataBrowser: 
	    [
	        { string: navigator.userAgent, subString: "Chrome",  identity: "Chrome" },
	        { string: navigator.userAgent, subString: "MSIE",    identity: "Explorer" },
	        { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
	        { string: navigator.userAgent, subString: "Safari",  identity: "Safari" },
	        { string: navigator.userAgent, subString: "Opera",   identity: "Opera" }
	    ]

	};
	BrowserDetect.init();

	$(".w_none").each(function(){
		var margin_left = ($(window).width()-1024)/2;
		if(margin_left>0){
			//$(".w_none").css("margin-left",margin_left+"px");
		}
	});
	
	window.isIpad = function(){
		return navigator.userAgent.match(/iPad/i) != null;
	};	

	window.isPortrait = function(){
		if(window.innerHeight > window.innerWidth){
    		return true;
		};
		return false;
	};

	window.ipadCarreiraBG = function(){
		$('.reasonsdiv').removeClass('reasonsdiv-portrait');
		$('.reasonsdiv').removeClass('reasonsdiv-landscape');
		if(window.isIpad()){
			if(window.isPortrait()){
				$('.reasonsdiv').addClass('reasonsdiv-portrait');
			}else{
				$('.reasonsdiv').addClass('reasonsdiv-landscape');
			};
		};
	};
	window.ipadCarreiraBG();

	window.getDocHeight = function() {
	    var D = document;
	    return Math.max(
	        D.body.scrollHeight, D.documentElement.scrollHeight,
	        D.body.offsetHeight, D.documentElement.offsetHeight,
	        D.body.clientHeight, D.documentElement.clientHeight
	    );
	};

	window.absoluteFooter = function(){
		var w = window,
		    d = document,
		    e = d.documentElement,
		    g = d.getElementsByTagName('body')[0],
		    x = w.innerWidth || e.clientWidth || g.clientWidth,
		    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

		if( jQuery(window).height() == getDocHeight()  ){
			$(".footer").addClass('absoluteFooter');
			//$(".footer").css('top','0px');
			//$(".footer").css('top',getDocHeight()-88);
		}else{
			$(".footer").removeClass('absoluteFooter');
			//if( BrowserDetect.browser == 'Explorer' && BrowserDetect.version < 9 )
			//	$(".footer").css('top','auto');
			//else
			//	$(".footer").css('top','100%');
		};
	};
	window.absoluteFooter();

	window.posNavbarLeft = function(){
		var w = jQuery(window).width();
		var left = (w-1024)/2;
		if( w < 1024 ){
			left = 0;
		};
		$(".navbar").css("left",left+"px");
	};
	window.posNavbarLeft();
 	
	window.posNavBarTop	= function(){
		$(".navbar").css("height",$(window).height()*.8);
		$(".navbar").css("top",($(window).height()-$('.navbar').height())/2+"px");
		$(".navbar").css("height",0);
	};
	window.posNavBarTop();

	window.updateReasonsHeight = function(){	
		$(".reasonsdiv").height($(window).height()*($(".reasonsdiv").children().length));
		$(".reasonsdiv").children("div").each(function(){
			$(this).height($(window).height());
		});	
	};
	window.updateReasonsHeight();

	window.removeAddThis = function(){
		if( (($(window).width() < 1220) && jQuery(document).scrollTop() >= (reason[reason.length-1] - (jQuery(window).height() * .5))) || ($(window).width() < 480) ){			
			$('.addthis_floating_style.addthis_counter_style').hide();
		}else{
			$('.addthis_floating_style.addthis_counter_style').show();
		};
	};


	/* slider de infos em carreira:i */
	if( $('.swiper-container.slider-curriculo-container').size() > 0 ){
		window.slider_infostoknow = $('.swiper-container.slider-curriculo-container').swiper({
			//Your options here:
			mode:'horizontal',
			loop: true,
			createPagination : true,
			pagination: '.slider-curriculo-paginator',
			paginationClickable :true
			//etc.. 
		});	
	};
	/* slider de infos em carreira:f */

	if( $('.sp-history-slider').size() > 0 ){
		 window.history_slider = $('.sp-history-slider').swiper({
			//Your options here:
			mode:'horizontal',
			loop: true,
			pagination : '.sp-paginator-history',
			createPagination : true,
			paginationClickable :true
			//etc..
		});
	};
	window.slider_produtos_home = $('.sp-gestao-slider').swiper({
		//Your options here:
		mode:'horizontal',
		loop: true,
		pagination : '.sp-paginator-gestao',
		createPagination : true,
		paginationClickable :true
		//etc..
	});
	if( $('.swiper-container.slider-motivos-container').size() > 0 ){
		window.slider_motivos = $('.swiper-container.slider-motivos-container').swiper({
			//Your options here:
			mode:'vertical',
			loop: false,
			createPagination : true,
			pagination: '.slider-motivos-paginator',
			paginationClickable :true
			//etc..
		});	
	};
	if( $('.swiper-container.slider-solucoes-container').size() > 0 ){
		window.changeSolutionURL = false;
		window.speedChangeSolution = (!window.changeSolutionURL) ? 120 : 15000000;
		window.updateSpeedChangeSolution = function(){
			window.speedChangeSolution = (window.solucoes_slider_preventResizeChangeURL) ? 120 : 15000000;
			window.solucoes_slider.params.speed = 15000000;
		};
		window.solucoes_slider = jQuery('.swiper-container.slider-solucoes-container').swiper({
			mode:'horizontal',
			loop: true,
			createPagination : true,
			DOMAnimation : false,
			speed: 120,
			paginationClickable :true,
			calculateHeight : true,
			simulateTouch : false,
			onTouchMove : function(){},
			onSlideChangeStart : function(swiper,direction){
				if( !window.mobilecheck() ){

					if( !window.solucoes_slider_preventResizeChangeURL ){
						if( window.changeSolutionURL  && !window.mobilecheck() ){
							window.changeSolutionURL = false;
							window.location.href = jQuery('.slider-solucoes-slide:eq('+(swiper.activeLoopIndex+1)+')').attr('data-href');
						};
					};

				};
			},
			onSlideChangeEnd : function(){
				if( window.mobilecheck() ){
					var str_crumb = jQuery('.slider-solucoes-slide:eq('+(window.solucoes_slider.activeLoopIndex+1)+') h3').html();
					jQuery('.breadcrumbs-struct-mobile').html(
										
				    	'<a href="https://www.softplan.com.br" title="Página Inicial">' + 
				    		'<div class="b_item">Home / </div>' + 
				    	'</a>' + 
				    	'<a href="https://www.softplan.com.br/solucoes/" title="Soluções">' + 
				    		'<div class="b_item">Soluções / </div>' + 
				    	'</a>' + 
				    	'<div class="b_item active">'+str_crumb+'</div>' +     
				    	'<div class="clear">'
					);
                                        if(str_crumb == "Justiça") {
                                            var linkJustica = "https://www.softplan.com.br/categoria-solucoes/justica/";
                                            if(location.href != linkJustica) {
                                                location.href = linkJustica;
                                            }
                                        }
                                        if(str_crumb == "Gestão Pública") {
                                            var linkGestao = "https://www.softplan.com.br/categoria-solucoes/gestao-publica/";
                                            if(location.href != linkGestao) {
                                                location.href = linkGestao;
                                            }
                                        }
				};
				if( jQuery(window).width() < 990 ) 
					jQuery('.slider-solucoes-slide h3').css('font-size','2.2em');

				jQuery('#categorias .produtos').hide();
				jQuery('#categorias .produtos:eq('+(window.solucoes_slider.activeLoopIndex)+')').show();
				window.dispatchCorrectSlider();
			}
		});
		window.correctBottomSliderBlock_timer = undefined;
		window.correctBottomSliderBlock = function( force_height ){
			var hg;	
			jQuery('#categorias .produtos').hide();
			jQuery('#categorias .produtos:eq('+(window.solucoes_slider.activeLoopIndex)+')').show();
			hg = jQuery('#categorias .produtos:eq('+(window.solucoes_slider.activeLoopIndex)+') .slider-solucoes-slide').height();
			if( jQuery('#categorias .produtos:eq('+(window.solucoes_slider.activeLoopIndex)+') .swiper-wrapper .swiper-slide').size() > 2 ){
                                hg = jQuery('#categorias .produtos:eq('+(window.solucoes_slider.activeLoopIndex)+') .slider-solucoes-slide.prod.swiper-slide-visible .produto').height();					
				jQuery('#categorias').css('height', hg + 60 );
			}else{				
				jQuery('#categorias').css('height', hg + 60 );		
			};
		};
		window.dispatchCorrectSlider = function(){
			clearInterval(window.correctBottomSliderBlock_timer);
			setTimeout(function(){
				window.correctBottomSliderBlock();
				window.correctBottomSliderBlock_timer = setInterval(function(){
					window.correctBottomSliderBlock();					
				},250);
				setTimeout(function(){
					clearInterval(window.correctBottomSliderBlock_timer);
				},1200);
			},250);
		};

		window.solucoes_slider_next = function(){
			if( !window.mobilecheck() ){
				window.solucoes_slider_preventResizeChangeURL = false;
				window.changeSolutionURL = true;
				window.solucoes_slider.params.speed = 15000000;
				window.updateSpeedChangeSolution();
			};
			solucoes_slider.swipeNext();
		};
		$('.slider_right').click(function(e){
			window.solucoes_slider_next();
		});
		window.solucoes_slider_prev = function(){
			if( !window.mobilecheck() ){
				window.solucoes_slider_preventResizeChangeURL = false;
				window.changeSolutionURL = true;
				window.solucoes_slider.params.speed = 15000000;
				window.updateSpeedChangeSolution();
			};
			solucoes_slider.swipePrev();
		};
		$('.slider_left').click(function(e){
			window.solucoes_slider_prev();
		});
		window.getSliderProdutosCurrentIndex = function(){
			return window.solucoes_slider.activeLoopIndex;
		};

		$('.produtos').hide();
		$('.produtos:eq('+window.solucoes_slider.activeLoopIndex+')').show();
	};

	if( $('.swiper-container.slider-solucoesprodutos-container').size() > 0 ){
		window.produtos_slider_preventResizeChangeURL = true;
		window.workaroundInit = false;
		window.slider_produtos = jQuery('.swiper-container.slider-solucoesprodutos-container').swiper({
			//Your options here:
			mode:'horizontal',
			loop: true,
			createPagination : true,
			paginationClickable :true,
			calculateHeight : false,
			simulateTouch : true,
			speed : 250,
			pagination : '.slider-solucoesprodutos-paginator',			
			onSwiperCreated : function(){
				setTimeout(function(){
					if( jQuery('.produtos:eq('+window.solucoes_slider.activeLoopIndex+') .prod .produto').size() > 1 ){
						if( !window.workaroundInit ){
							window.workaroundInit = true;
							window.slider_produtos.swipeTo(0);
						};
						//jQuery('.slider-solucoesprodutos-container').css('height',jQuery('.produtos:eq('+window.solucoes_slider.activeLoopIndex+') .prod.swiper-slide-active .produto').height() + 30);
					}else{
						//jQuery('.slider-solucoesprodutos-container').css('height',jQuery('.produtos:eq('+window.solucoes_slider.activeLoopIndex+') .prod .produto').height() + 30);
					};
				},250);				
			},
			onSlideChangeStart : function(swiper,direction){
				if( !window.mobilecheck() && !window.produtos_slider_preventResizeChangeURL ){
					window.slider_produtos.params.speed = 15000000;
					window.location.href = jQuery('.slider-solucoes-slide.prod:eq('+(swiper.activeLoopIndex+1)+')').attr('data-href');
					window.produtos_slider_preventResizeChangeURL = true;
				};
			},
			onSlideChangeEnd : function(){				
				setTimeout(function(){
					var hg = jQuery('.slider-solucoes-slide.prod.swiper-slide-visible .produto').height();				
					jQuery('#categorias').css('height', hg );
				},350);
			}
		});		
		jQuery('.slider-solucoesprodutos-paginator span').mousedown(function(){
			if( !window.mobilecheck() ){
				window.produtos_slider_preventResizeChangeURL = false;
				window.slider_produtos.params.speed = 15000000;
			};
		});
		window.updateSpeedChangeSolution = function(){
			window.speedChangeSolution = (window.produtos_slider_preventResizeChangeURL) ? 120 : 15000000;
			window.slider_produtos.params.speed = 15000000;
		};
		window.slider_produtos_next = function(){
			window.produtos_slider_preventResizeChangeURL = false;
			window.updateSpeedChangeSolution();
			window.slider_produtos.swipeNext();
		};
		window.slider_produtos_prev = function(){
			window.produtos_slider_preventResizeChangeURL = false;
			window.updateSpeedChangeSolution();
			window.slider_produtos.swipePrev();
		};
	};

	/*$('.swiper-container.slider-solucao-infos').swiper({
		//Your options here:
		mode:'horizontal',
		loop: true,
		createPagination : true,
		pagination: '.slider-solucao-info-struct-paginator',
		paginationClickable :true
		//etc..
	});*/

	window.toggleInfosToKnow = function(){
		if( $(window).width() < 1007 ){
			$('.infostoknow-wrapper').css('display','block');
			$('.infostoknowbig').css('display','none');
			$('.quem-somos-timeline-struct').css('display','none');
			$('.slider-history-struct').css('display','block');
		}else{
			$('.infostoknow-wrapper').css('display','none');
			$('.infostoknowbig').css('display','block');
			$('.quem-somos-timeline-struct').css('display','block');
			$('.slider-history-struct').css('display','none');
		};
	};
	window.toggleInfosToKnow();

	window.adjustBottomButtons = function(){

		if( $(window).width() < 480 ){
			$('.go_to_jobs').addClass('go_to_jobs_mini');
			$('.back_to_top').addClass('back_to_top_mini');
			jQuery('.addthis_toolbox.addthis_floating_style').hide();
		}else{
			$('.go_to_jobs').removeClass('go_to_jobs_mini');
			$('.back_to_top').removeClass('back_to_top_mini');
			jQuery('.addthis_toolbox.addthis_floating_style').show();
		};

	};
	window.adjustBottomButtons();

	$('.eicons-track').width($('.eicons-track .eicon,y_item').size() * 126);
	window.eiconTrackTotal_ = $('.eicons-track .eicon,.y_item').size();
	window.eiconTrackView_ = 10;
	
	if( $('.y_item').size() > 0 )
		window.eiconTrackView_ = 8;

	window.eiconTrackPosReg_ = 0;
	window.eiconTrackPosReg  = function( dir ){
		if( (window.eiconTrackTotal_ - window.eiconTrackView_) > 0 ){
			var diff = window.eiconTrackTotal_ - window.eiconTrackView_;
			if( dir < 0 ){
				if( Math.abs(window.eiconTrackPosReg_) < diff ){
					window.eiconTrackPosReg_ -= 1;
				};
			}else{
				if( window.eiconTrackPosReg_ < 0 ){
				
					window.eiconTrackPosReg_ += 1;
				};
			};
		};
		return window.eiconTrackPosReg_;
	};
	window.adjustTrackSize = function( ammount ){
		if( ammount == 7 ){
			$('.eicons').width( (ammount * 126) + 43 );
			$('.year_scroll').addClass('mini');
			jQuery('.y_item.selected').trigger('click');
			$('.eicons-arrow-left,.eicons-arrow-right').removeClass('big');
			window.eiconTrackView_ = 9;
			if( $('.y_item').size() > 0 )
				window.eiconTrackView_ = 7;
		}else{
			$('.eicons').css('width','auto');
			$('.year_scroll').removeClass('mini');
			jQuery('.y_item.selected').trigger('click')
			$('.eicons-arrow-left,.eicons-arrow-right').addClass('big');
			window.eiconTrackView_ = 10;
			if( $('.y_item').size() > 0 )
				window.eiconTrackView_ = 8;
		};
	};
	window.eiconTrackMove = function( dir ){
		var track_carre = $('.eicons-track');
		var track_years = $('.years-track');		
		if( dir < 0 || dir == 'left'){
			track_carre.animate({'left': (128 * window.eiconTrackPosReg(-1)) + (28 * Math.abs(window.eiconTrackPosReg_)) },500,'easeInOutCubic');
			track_years.animate({'left': (128 * window.eiconTrackPosReg(-1)) + (5 * Math.abs(window.eiconTrackPosReg_)) },500,'easeInOutCubic');
		}else if( dir > -1 || dir == 'right' ){
			track_carre.animate({'left': (126 * window.eiconTrackPosReg( 1)) + (28 * Math.abs(window.eiconTrackPosReg_)) },500,'easeInOutCubic');
			track_years.animate({'left': (126 * window.eiconTrackPosReg( 1)) + (5 * Math.abs(window.eiconTrackPosReg_)) },500,'easeInOutCubic');
		};
	};
	$('.eicons-arrow-left').click(function(e){
		window.eiconTrackMove('right');		
	});
	$('.eicons-arrow-right').click(function(e){
		window.eiconTrackMove('left');		
	});

	if( $('.y_item').size() > 0 ){
		if( $('.y_item').size() < 8 ){
			$('.eicons-arrow-left,.eicons-arrow-right').hide();
		};
	};

	if( $('.eicon').size() > 0 ){
		if( $('.eicon').size() < 9 ){
			$('.eicons-arrow-left,.eicons-arrow-right').hide();
		};
	};

	$(window).resize(function(){

		window.absoluteFooter();
		window.posNavbarLeft();
		window.posNavBarTop();
		window.updateReasonsHeight();
		window.updateNavbarData();
		window.removeAddThis();
		window.toggleInfosToKnow();
		window.ipadCarreiraBG();
		window.adjustBottomButtons();

		$(".w_none").each(function(){
			var margin_left = ($(window).width()-1024)/2;
			if(margin_left>0){
				//$(".w_none").css("margin-left",margin_left+"px");
			}
		});
	});


	var category = "";
	$(".opened_item").children(".close").click(function(){

		$(this).parent().slideUp();
		$(".bi_item").attr("data-visible","true");
		$(".bi_item").parent().slideDown();	

		if( window.isIpad() ){
			//$(".footer").addClass('absoluteFooter');
		};

		window.responsiveLayoutGridAdjust();

		var margin = 1;
		$(".bi_item").each(function(){
			if((category=="")||(category=="all")){
				if(margin%3==0){
					$(this).css("margin-right","0px");
				}else{
					$(this).css("margin-right","22px");
				}
				margin++;			
			}else{
				if(($(this).attr("data-visible")=="true")&&($(this).attr("data-categoria")==category)){
					if(margin%3==0){
						$(this).css("margin-right","0px");
					}else{
						$(this).css("margin-right","22px");
					}
					margin++;
				}else{
					$(this).parent().hide();
				}
			}
		});

	});
	$(".bi_item").click(function(){
		
		if( window.isIpad() ){
			$(".footer").removeClass('absoluteFooter');
		};

		$(".bi_item").parent().slideDown();
		$(".bi_item").attr("data-visible","true");
		$(this).parent().hide();
		$(this).attr("data-visible","false");		
		
		window.responsiveLayoutGridAdjust();

		var margin = 1;
		$(".bi_item").each(function(){
			if((category=="")||(category=="all")){
				if(margin%3==0){
					$(this).css("margin-right","0px");
				}else{
					$(this).css("margin-right","22px");
				}
				margin++;			
			}else{
				if(($(this).attr("data-visible")=="true")&&($(this).attr("data-categoria")==category)){
					if(margin%3==0){
						$(this).css("margin-right","0px");
					}else{
						$(this).css("margin-right","22px");
					}
					margin++;
				}else{
					$(this).parent().hide();
				}
			}
		});
		var master_id = $(this).data("id");
		$(".opened_item").each(function(){
			$(this).slideUp();
			if($(this).data("id") == master_id){
				if( $('#filter').css('display') != 'none' )  
					$(window).scrollTop($('#filter').offset().top);
				else
					$(window).scrollTop($('.responsa-filter-struct').offset().top);
				$(this).slideDown();
			}
		})

	});
	/*setInterval(function(){
		$("#at3win").css("z-index","9999999999999");
		$(".addthis_button_facebook_like").height("62px");
	},1000);*/
	setTimeout(function(){
	$(".phone").val("TELEFONE (DD) 0000-00000");
	$(".date").val("DATA DESEJADA");
	$(".phone").blur(function(){
		if($(this).val()==""){
			$(".phone").val("TELEFONE (DDD) 0000-00000");
		}
	});
	},2000);
	$(".years").width($(".y_item").length*134);
	/*$('input[placeholder]').each(function(){
		var ph = $(this).attr('placeholder')
		$(this).val(ph).focus(function(){
			if($(this).val() == ph) $(this).val('')
		}).blur(function(){
			if(!$(this).val()) $(this).val(ph)
		});
	});*/

	$(".f_item").click(function(){
		$(".f_item").removeClass("checked");
		category = $(this).attr("data-category");
		$(this).addClass("checked");
		$(".bi_item").css("margin-right","0px");
		var margin = 1;
		$(".bi_item").each(function(){
			if(((category=="")||(category=="all"))&&($(this).attr("data-visible")=="true")){
				if(margin%3==0){
					$(this).parent().slideDown();
					$(this).css("margin-right","0px");
				}else{
					$(this).parent().slideDown();
					$(this).css("margin-right","22px");
				}
				margin++;			
			}else{
				if(($(this).attr("data-visible")=="true")&&($(this).attr("data-categoria")==category)){
					if(margin%3==0){
						$(this).parent().slideDown();
						$(this).css("margin-right","0px");
					}else{
						$(this).parent().slideDown();
						$(this).css("margin-right","22px");
					}
					margin++;
				}else{
					$(this).parent().slideUp();
				}
			}
		});
		setTimeout(function(){window.responsiveLayoutGridAdjust();},550);
	});
	$(".job").children(".title").children("span").each(function(){
		if($(this).text().indexOf("Florianópolis") < 0){
			$(this).css("color","#00adbd");
		}
	});

	if($(".go_to_jobs").size() > 0) {
		$(".go_to_jobs").css("left",($(window).width()-$(".go_to_jobs").width())/2+"px");
		if( $(this).width() < 840 ){
			$(".go_to_jobs").css('left','0px');
		};
		$(window).resize(function(){
			$(".go_to_jobs").css("left",($(window).width()-$(".go_to_jobs").width())/2+"px");
			if( $(this).width() < 840 ){
				$(".go_to_jobs").css('left','0px');
			};
		});
	};

	$(".job").each(function(){
		if($(this).index()%2==0){$(this).css("background-color","#eeefee");}
	});
	if (( $.browser.mozilla )||($.browser.msie) ) {
		$(".empresa").children("input").css("margin-top","16px");
	}
	//$(".wpcf7-form-control").each(function(){
		//$(this).parent().removeClass("wpcf7-form-control-wrap");
	//});
	$(".wpcf7-form-control-wrap").each(function(){
		$(this).css("position","");
	})
	var arrow_counter = 0;
	$(".ss_item").each(function(){
		if($(this).attr("class")=="ss_item selected"){
			$(".changebackground").css("background","url("+$(this).attr("data-background")+") no-repeat 50% 50%");
			$(".arrows_div").children(".arrow:eq("+arrow_counter+")").css("top","0px"); 
			$(".changebackground").css("background-size","auto 100%");
		}
		arrow_counter++;
	});
	var randmin = 1;
	var randmax = 3;
	var randresult = Math.floor(Math.random() * (randmax - randmin + 1)) + randmin;
	$(".random_banner").css({
	"background":"url(../wp-content/themes/softplan/images/carreira"+randresult+".jpg) no-repeat 50% 50%",
	"background-size":"auto 100%"
	});
	/*setInterval(function(){
		$(".at4-recommended-outer-container").hide();
		$(".at4-whatsnext").hide();
		$(".at4-whatsnext-outer-container").hide();
	},100);*/
	$(window).scroll(function(){
		if( !$(".desktop-context").hasClass('gcss-mobile-layout') )
			$(".policy_pop_up").hide();
	});
	$(".policy").click(function(){
		$(".policy_pop_up").slideDown();
	});
	$(".policy_pop_up").children(".close").click(function(){
		$(this).parent().fadeOut();		
		if($(window).width()<619){
			//setTimeout(function(){$("ul#menu-menu-site").hide();},10);
		}
	});
	$(".policy_pop_up").children("p").css("margin-left",($(window).width()-990)/2+"px");
	$(".play").click(function(){
		$(this).parent().append('<iframe width="100%" height="100%" src="//www.youtube.com/embed/UUD2T-6oEuc?autoplay=1" style="position:absolute;top:0px;left:0px;" frameborder="0" allowfullscreen></iframe>');
		$(this).remove();
	});
	$(".social").children(".text3").click(function(){
		$(".languages_drop").slideToggle();
		$(this).toggleClass("selected");
	});
	$(".language").click(function(){
		$(".languages_drop").slideToggle();
	});
	$(".social").mouseleave(function(){
		$(".languages_drop").slideUp();
		$(".social").children(".text3").removeClass("selected");
	});
	$(".phone").mask("(99) 9999-9999?9");
	$(".form_submit").click(function(){
            $('.wpcf7-response-output').empty();
            setTimeout(function(){
                var returnForm = $('.wpcf7-response-output').html();
                if(returnForm == "") {
                    $(".success").fadeIn();
                    $("img.ajax-loader").css('visibility','hidden');
                }            
            }, 2000);
	});
	$(".close").click(function(){
		$(".success").fadeOut();
		$(".menu").slideDown();
		jQuery('select').each(function(){jQuery(this).attr('value',jQuery(this).find('option:eq(0)').attr('value'))});
	});
	$(".message").css("top",($(window).height()-$(".message").height())/2+"px");
	$(window).resize(function(){
		$(".message").css("top",($(window).height()-$(".message").height())/2+"px");
	});
	$(".new_gallery .img_gallery").click(function(){
		$(".new_video").children("iframe").remove();
		if($(this).children("div").attr("class")=="play"){
			$(".new_video").children("div").fadeIn();
			$(".new_video").children("div").attr("data-video",$(this).children("img").attr("data-video"));
		}else{
			$(".new_video").children("div").fadeOut();
		}
		$(".new_video").children("img").attr("src",$(this).children("img").attr("data-big"));
		$(".img_gallery").attr("class","img_gallery");
		$(this).addClass("selected");
	});
	$(".new_video").children("div").click(function(){
		$(this).parent().append('<iframe width="100%" height="100%" style="z-index:9999999;position:absolute;top:0px;left:0px;" src="//www.youtube.com/embed/'+$(this).attr("data-video")+'?autoplay=1" frameborder="0" allowfullscreen></iframe>');
	});
	$(".arrow.left").click(function(){
		$(".flex-prev").click();
	});
	$(".arrow.right").click(function(){
		$(".flex-next").click();
	});
	$(".y_item").click(function(){
		window.changeYear( this );
	});
	window.changeYear = function( el ){
		var epos2 = $(el).position();
		$(".year_drag,.year_dragged").animate({"left":epos2.left+"px"});
		$(".y_item").each(function(){
			$(this).removeClass("selected");
		});
		$(el).addClass("selected");
		$(".title_year").text($(el).text());
		$(".description").text($(el).data("text"));		
		if( $(el).data("pic") != "" ){
			$(".content").addClass("halfer");
			$(".picture").show();
			$(".picture").html("<img src='"+ $(el).data('pic') +"' />");
		}else{
			$(".content").removeClass("halfer");
			$(".picture").hide();
		};
	};
	if( $('.slider-history-struct').size() > 0 )
		window.changeYear( $('.y_item')[0] );

	$(".rs_item").click(function(){
		$(".rs_item").each(function(){
			$(this).removeClass("selected");
		});
		$(this).addClass("selected");
		$(".reason_title").text($(this).data("title"));
		$(".reason_desc").text($(this).data("text"));
	});
	$(".eicon").click(function(){
		var epos = $(this).position();
		$(".eioncs_drag,.dragged2").animate({"left":epos.left+"px"});
		$(".eicon").each(function(){
			$(this).removeClass("selected");
		});
		$(this).addClass("selected");
		$(".title.from_eicon").text($(this).data("title"));
		$(".text.from_eicon").text($(this).data("text"));
		$(".imagefrom_eicon").children().attr("src",$(this).data("pic"));
	});
	$(".content").each(function(){
		$(this).css("bottom",($(this).parent().height()-$(this).height())/2+"px");
	});
		
	$(window).resize(function(){
		$(this).css("bottom",($(this).parent().height()-$(this).height())/2+"px");
		$(".reasonsdiv").height($(window).height()*10);
	});
	$(".reasonsdiv").children("div").each(function(){
		$(this).css("background-attachment","fixed");
	});
	//$(".reasonsdiv").css("margin-top",$(window).height()-140+"px");


	window.reason = [];
	window.totaldivs = undefined;
	window.updateNavbarData = function(){

		totaldivs = $(".reasonsdiv").children("div").length;
		var i = 1;
		while( i <= totaldivs ){
			if(i==1){
				reason[i] = $(window).height()-100;
				i++;
			}else{
				reason[i] = $(window).height()*i-20;
				i++;
			};
		};
		reason[ totaldivs + 1 ] = $(window).height()*i-20;
	};
	window.updateNavbarData();
	
	/*var a1 = $(window).height()-100;
	var a2 = $(window).height()*2-20;
	var a3 = $(window).height()*3-20;
	var a4 = $(window).height()*4-20;
	var a5 = $(window).height()*5-20;
	var a6 = $(window).height()*6-20;
	var a7 = $(window).height()*7-20;
	var a8 = $(window).height()*8-20;
	var a9 = $(window).height()*9-20;
	var a10 = $(window).height()*10-20;*/
	
	window.controlFloatButtons = function(){
		if( $('.go_to_jobs').size() > 0 ){ 

			if( $('.gcss-mobile-layout').size() == 0  ){
				var limit_show_top = window.reason[1];
				var limit_show_bot = window.reason[window.reason.length-1];
				if( $(window).scrollTop() >= limit_show_bot || $(window).scrollTop() <= limit_show_top ){
					$('.bt-cadastro-oportunidades').hide();
				}else{
					$('.bt-cadastro-oportunidades').show();
				};
			}else{
				if( $(window).scrollTop() >= ($('#jobs').offset().top - 450) ){
					$('.go_to_jobs').addClass('force_hide');					
				}else{
					$('.go_to_jobs').removeClass('force_hide');
				};
			};

		};
	};

	var page = 0;
	var gotojobs = 0;
	$(window).scroll(function(){
		window.removeAddThis();
		window.adjustBottomButtons();


		if( jQuery(window).scrollTop() < 100){
			//$(".go_to_jobs").text("10 motivos para trabalhar na softplan");
			//$(".go_to_jobs").attr("class","go_to_jobs button-10-reasons");
			if(gotojobs==0){
				$('.seeopp').hide();
				$('.motivos10').show();
				$(".go_to_jobs").removeClass("bt-cadastro-oportunidades");
				$(".go_to_jobs").stop().animate({ "width": "238px" });
				gotojobs=1;
				//console.log(gotojobs);
			}
		}else{
			//$(".go_to_jobs").text("Veja nossas oportunidades");
			//$(".go_to_jobs").attr("class","go_to_jobs bt-cadastro-oportunidades");
			gotojobs = 1;
			if(gotojobs==1){
				$('.seeopp').show();
				$('.motivos10').hide();
				$(".go_to_jobs").addClass("bt-cadastro-oportunidades");
				$(".go_to_jobs").stop().animate({ "width": "170px" });
				gotojobs=0;
				//console.log(gotojobs);
			}
		}

		window.controlFloatButtons();

		$(".navbar").children("div").removeClass("selected");
		if($(document).scrollTop()>reason[totaldivs]){
			$(".go_to_top").hide();
		}else{
			$(".go_to_top").show();		
		};

		if( $(window).width() > 800){

			if($(document).scrollTop()>reason[totaldivs+1]){
				// console.log("Página 1");
				$(".navbar").fadeOut();
			}else if($(document).scrollTop()>reason[1]){
				if( $(".navbar").css('display') == 'none' )
					$(".navbar").fadeIn();			
			}else{
				$(".navbar").fadeOut();			
			};

		}else{

			$('.navbar').hide();

		};

		if($(document).scrollTop()>(totaldivs+1)*$(window).height()){
			//$(".back_to_top").css({"bottom":"100px"});
			$(".go_to_jobs").hide();
		}else{
			//$(".back_to_top").css({"bottom":"0px"});
			$(".go_to_jobs").show();	
		};
		
		var d_counter = totaldivs;
		while(d_counter>0){
			if($(document).scrollTop()>reason[d_counter]){
				if(d_counter==1){
					$("div[data-page="+d_counter+"]").addClass("selected");
					$(".navbar").children("div").css("top","126px");
					page = 1;
					d_counter = 0;
				}else{
					$("div[data-page="+d_counter+"]").addClass("selected");
					$(".navbar").children("div").css("top","-"+(d_counter-2)*126+"px");
					page = d_counter;
					d_counter = 0;
				};
			};
			d_counter--;
		};

		/*if($(document).scrollTop()>a10){
			$("div[data-page=10]").addClass("selected");
			$(".navbar").children("div").css("top","-"+8*126+"px");
			page = 10;
		}else if($(document).scrollTop()>a9){
			$("div[data-page=9]").addClass("selected");
			$(".navbar").children("div").css("top","-"+7*126+"px");
			page = 9;
		}else if($(document).scrollTop()>a8){
			$("div[data-page=8]").addClass("selected");
			$(".navbar").children("div").css("top","-"+6*126+"px");
			page = 8;
		}else if($(document).scrollTop()>a7){
			$("div[data-page=7]").addClass("selected");
			$(".navbar").children("div").css("top","-"+5*126+"px");
			page = 7;
		}else if($(document).scrollTop()>a6){
			$("div[data-page=6]").addClass("selected");
			$(".navbar").children("div").css("top","-"+4*126+"px");
			page = 6;
		}else if($(document).scrollTop()>a5){
			$("div[data-page=5]").addClass("selected");
			$(".navbar").children("div").css("top","-"+3*126+"px");
			page = 5;
		}else if($(document).scrollTop()>a4){
			$("div[data-page=4]").addClass("selected");
			$(".navbar").children("div").css("top","-"+2*126+"px");
			page = 4;
		}else if($(document).scrollTop()>a3){
			// console.log("Página 3");
			$("div[data-page=3]").addClass("selected");
			$(".navbar").children("div").css("top","-"+1*126+"px");
			page = 3;
		}else if($(document).scrollTop()>a2){
			$("div[data-page=2]").addClass("selected");
			$(".navbar").children("div").css("top","-"+0*126+"px");
			page = 2;
		}else if($(document).scrollTop()>a1){
			$("div[data-page=1]").addClass("selected");
			$(".navbar").children("div").css("top","126px");
			page = 1;
		}*/
		
		
	});




	$(".n_item").click(function(){
		$('html,body').animate({
          scrollTop: $(this).data("page")*$(window).height()
        }, 500);
	});

	window.tempScrollTop = 0;
	$(".dragger").draggable({ 
	axis: "y",
	//containment: "parent",
	start :function(){
		window.tempScrollTop = jQuery(document).scrollTop();
	},
	drag : function(){
		jQuery(document).scrollTop(window.tempScrollTop);
	},
	stop: function() {
		$('body').removeClass('overflow_hidden');
        $(".dragger").animate({"top":"126px"});
		var top = $(".dragger").css("top");
		top = parseInt(top);
		if(top>=900){
			page = page+5;
			$('html,body').animate({
			  scrollTop: page*$(window).height()
			}, 500);
		}else if(top>=700){
			page = page+4;
			$('html,body').animate({
			  scrollTop: page*$(window).height()
			}, 500);
		}else if(top>=500){
			page = page+3;
			$('html,body').animate({
			  scrollTop: page*$(window).height()
			}, 500);
		}else if(top>=300){
			page = page+2;
			$('html,body').animate({
			  scrollTop: page*$(window).height()
			}, 500);
		}else if(top>=100){
			page = page+1;
			$('html,body').animate({
			  scrollTop: page*$(window).height()
			}, 500);
		}else if(top>=0){
			page = page-1;
			$('html,body').animate({
			  scrollTop: page*$(window).height()
			}, 500);
		}else if(top>=-200){
			page = page-2;
			$('html,body').animate({
			  scrollTop: page*$(window).height()
			}, 500);
		}else if(top>=-400){
			page = page-3;
			$('html,body').animate({
			  scrollTop: page*$(window).height()
			}, 500);
		}else if(top>=-600){
			page = page-4;
			$('html,body').animate({
			  scrollTop: page*$(window).height()
			}, 500);
		}
			
      } });

	
	$(".reason_content").each(function(){
		//$(this).css("top",($(this).parent().height()-$(this).height())/2+"px");
		//$(this).css("left",($(this).parent().width()-$(this).width())/2+"px");
	});
	$(".eioncs_drag").mousedown(function(){
		$(".dragged2").addClass("hover");
	});
	$(".eioncs_drag").mouseup(function(){
		$(".dragged2").removeClass("hover");
	});
	$(".eioncs_drag").draggable({
		axis: "x",
		containment: "parent",
		drag:function(e,ui){
			$('.dragged2').css({"left":ui.position.left+"px"});
		},	
		stop: function(){
			var minor = 10000;
			var final = 0;
			var finaleq = 0;
			$(".eicon").each(function(){
				var left1 = $(this).position();
				var left2 = $(".eioncs_drag").position();
				// console.log(left2.left+"-"+left1.left);
				left2 = left2.left-left1.left			
				if(left2<0){left2=left2*-1;}	
				if(left2<minor){
					minor = left2;
					final = left1.left;
					finaleq = $(this).index()-2;
				}		
				// console.log(finaleq);		
			});
			$(".eioncs_drag").animate({"left":final+"px"});
			$(".eicon").removeClass("selected");
			$(".eicon:eq("+finaleq+")").addClass("selected");
			$(".title.from_eicon").text($(".eicon:eq("+finaleq+")").data("title"));
			$(".text.from_eicon").text($(".eicon:eq("+finaleq+")").data("text"));
			$(".imagefrom_eicon").children().attr("src",$(".eicon:eq("+finaleq+")").data("pic"));
			$('.dragged2').css({"left":final+"px"});
		}
	});
	$(".b_item").mouseenter(function(){
		$(this).children(".b_submenu").slideDown();
	});
	$(".b_item").mouseleave(function(){
		$(this).children(".b_submenu").hide();
	});
	$('.year_drag').css({'opacity':'0'});
	$(".year_drag").draggable({
		axis: "x",
		containment: "parent",
		drag:function(e,ui){
			$('.year_drag').css({"left":ui.position.left+"px",'opacity':'.5'});
		},
		stop: function(){
			var y_minor = 10000;
			var y_final = 0;
			var y_finaleq = 0;
			$(".y_item").each(function(){
				var y_left1 = $(this).position();
				var y_left2 = $(".year_drag").position();
				y_left2 = y_left2.left-y_left1.left			
				if(y_left2<0){y_left2=y_left2*-1;}	
				if(y_left2<y_minor){
					y_minor = y_left2;
					y_final = y_left1.left;
					y_finaleq = $(this).index()-2;
				}		
			});
			$(".year_drag").animate({"left":y_final+"px",'opacity':0});
			$(".y_item").removeClass("selected");
			var item = $(".y_item:eq("+y_finaleq+")");
			$(".y_item:eq("+y_finaleq+")").addClass("selected");			
			$(".title_year").text($(".y_item:eq("+y_finaleq+")").text());
			$(".description").text($(".y_item:eq("+y_finaleq+")").data("text"));
			$('.year_dragged').css({"left":y_final+"px"});			
			if( item.data('pic') ){
				$('.history .content').addClass('halfer');
				$(".picture").show();
				$(".picture").html("<img src='"+item.data('pic')+"'/>");
			}else{
				$('.history .content').removeClass('halfer');
				$(".picture").hide();
			};

		}
	});
	$(".align_solutions").css("margin-left",($(".align_solutions").parent().width()-$(".align_solutions").width())/2+"px");
	
	/*setInterval(function(){
		
	if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 //|| navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 || navigator.userAgent.match(/Windows Phone/i)
	 ){
	 }else{
		if($(document).scrollTop()>10){
			
			$(".menu").css("height","43px");
			$(".menu_desktop").css("height","43px");
			$(".logo").css({
				"width":"213px",
				"height":"43px",
				"background-color":"rgba(255,255,255)"
			});
			$(".logo").children("a").children("img").css({
				"height":"25px",
				"top":"10px"
			});
			$(".buttons").css({
				"height":"43px",
				"width":"812px",
				"background-color":"rgba(39,42,50,1)"
			});
			$(".buttons").children("a").children(".b_item").css({
				"left":"-60px",
				"line-height":"400%"
			});
			$(".buttons").children(".b_item").css({
				"left":"-60px",
				"line-height":"400%"
			});
			$(".b_submenu").css("top","4px");
			$(".b_item.selected").each(function(){
			if($(this).attr("class")=="b_item green_text "){
				$(this).css({"box-shadow":"inset 0px 0px 0px"});
			}else{
				$(this).css({"box-shadow":"inset 0px 0px 0px #3d45d7"});					
			}});
			$(".social").css({
				"top":"0px",
				"height":"43px",
				"width":"68px"
			});
			$(".social").children(".text3").hide();
			$(".social").children(".divisor").hide();
			$(".social").children(".links").hide();
			$(".breadcrumbs").hide();
			$(".here").hide();
			$(".social").children(".language").show();
			$(".languages_drop").css("right","0px");
			$(".b_item.selected").children(".blue_selected,.green_selected").height("3px");
			$(".social").hide();
		}else{
			$(".social").show();
			$(".b_item.selected").removeAttr("style");
			$(".logo").removeAttr("style");
			$(".b_item.selected").children(".blue_selected,.green_selected").removeAttr("style");
			$(".logo").children("a").children("img").removeAttr("style");
			$(".buttons").removeAttr("style");
			$(".buttons").children("a").children(".b_item").removeAttr("style");
			$(".buttons").children(".b_item").removeAttr("style");
			$(".social").removeAttr("style");
			//$(".social").children(".text3").show();
			//$(".social").children(".divisor").show();
			$(".social").children(".links").show();
			$(".social").children(".language").hide();
			$(".breadcrumbs").show();
			$(".here").removeAttr("style");
			$(".b_submenu").css("top","25px");
			$(".languages_drop").css("right","");
			$(".menu").removeAttr("style");
			$(".menu_desktop").removeAttr("style");
		}
	 }
	},100);	*/
	var y_scroll = 0;
	$(".year_scroll").scroll(function(){	

		if(($(this).scrollLeft()>y_scroll+20)||($(this).scrollLeft()<y_scroll-20)){
			y_scroll=$(this).scrollLeft();
			var y_minor = 10000;
			var y_final = 0;
			var y_finaleq = 0;
			$(".y_item").each(function(){
				var y_left1 = $(this).position();
				var y_left2 = $(".year_drag").position();
				y_left2 = y_left2.left-y_left1.left			
				if(y_left2<0){y_left2=y_left2*-1;}	
				if(y_left2<y_minor){
					y_minor = y_left2;
					y_final = y_left1.left;
					y_finaleq = $(this).index()-2;
				}		
			});
			$(".year_drag").stop().animate({"left":y_final+"px"});
			$(".y_item").removeClass("selected");
			$(".y_item:eq("+y_finaleq+")").addClass("selected");			
			$(".title_year").text($(".y_item:eq("+y_finaleq+")").text());
			$(".description").text($(".y_item:eq("+y_finaleq+")").data("text"));
			$(".picture").children().attr("src",$(".eicon:eq("+y_finaleq+")").data("pic"));
		
		};

		if( $(this).scrollTop() > 0 ){
			$(".back_to_top").show();
		}else{
			$(".back_to_top").hide();
		};

	});

	$(".back_to_top").click(function(){
		$('body,html').animate({scrollTop:0},600);
	});

	$('.button-cadastro-oportunidades').click(function(e){
		jQuery("html, body").animate({ scrollTop: jQuery('#jobs').offset().top }, "slow");
	});
	$('.go_to_jobs').click(function(e){
		if($(this).attr("class")=="go_to_jobs bt-cadastro-oportunidades"){
			jQuery("html, body").animate({ scrollTop: jQuery('#jobs').offset().top }, "slow");
		}else{
			if( jQuery('.reasonsdiv').css('display') != 'none'  )
				jQuery("html, body").animate({ scrollTop: $('.reasonsdiv .item1').offset().top }, "slow");
			else
				jQuery("html, body").animate({ scrollTop: $('.motivos-struct').offset().top }, "slow");
		};
		if(jQuery(this).hasClass("bt-cadastro-oportunidades")){
			var top = $("#jobs").offset().top;		
			$("html,body").animate({scrollTop:top},350);
		};
	});

});