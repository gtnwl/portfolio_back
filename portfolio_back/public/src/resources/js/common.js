/* common.js */
$(function(){
	$('.datepicker_p04').datepicker({
	});
	
	$('.datepicker_p03').datepicker({
		showOn: "button",
		buttonImageOnly: true,
		buttonImage: "../resources/images/p03/btn/btn_datepicker.png",
		buttonText: "달력선택"
	});
})
/*스와이퍼 */
$(function(){
	var swiper = new Swiper(".mainSwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
})
$(function(){
	var swiper = new Swiper(".bannerWrap_p05", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
})
$(function(){
    var swiper = new Swiper(".visual_p05FullL", {
		slidesPerView: 'auto',
        spaceBetween: 4,
      });
})
$(function(){
    var swiper = new Swiper(".visual_p05FullS", {
		slidesPerView:'auto',
        spaceBetween: 2,
      });
})
$(function(){
    var swiper = new Swiper(".small_p05Swiper", {
		slidesPerView:'auto',
        spaceBetween: 0,
      });
})
/* 뒤로가기 히스토리 */
window.addEventListener('load',()=>{
	const prevBtn = document.querySelector('.prevBtn')

	prevBtn.addEventListener('click',function(){
		window.history.back();
	})
})


var ui = {
	init: function() {
		var _this = this;

		_this.header();
		// _this.sideMenu();
		// _this.tmp();
		_this.header_p05();
		_this.hScroll_p05();
		_this.inputFocus_p05();
		_this.appbar_p05();
		//탭메뉴
        $(document).ready(function(){
            $('.tabList li').on('click', function(){
    
                var tabId = $(this).attr('data-tab');
    
                $('.tabList li').removeClass('on');
                $('.tabContent').removeClass('current');
    
                $(this).addClass('on');
                $("#"+tabId).addClass('current');
            });	
        })


		//체크박스 전체선택
        $(document).ready(function() {
			$("#chkAll").click(function() {
				if($("#chkAll").is(":checked")) $("input[type=checkbox]").prop("checked", true);
				else $("input[type=checkbox]").prop("checked", false);
			});
			
			$("input[type=checkbox]").click(function() {
				var total = $("input[type=checkbox]").length;
				var checked = $("input[type=checkbox]:checked").length;
				
				if(total != checked) $("#chkAll").prop("checked", false);
				else $("#chkAll").prop("checked", true); 
			});
		});

		
		//체크박스 전체선택 _p05
        $(document).ready(function() {
			$("#chkAll_p05").click(function() {
				if($("#chkAll_p05").is(":checked")) $("input[type=checkbox]").prop("checked", true);
				else $("input[type=checkbox]").prop("checked", false);
			});
			
			$("input[type=checkbox]").click(function() {
				var total = $("input[type=checkbox]").length;
				var checked = $("input[type=checkbox]:checked").length;
				
				if(total != checked) $("#chkAll").prop("checked", false);
				else $("#chkAll_p05").prop("checked", true); 
			});
		});
		
		//달력 _p05
		$('.datepicker_p05').datepicker({
			showMonthAfterYear:true,
			changeMonth: true,
      		changeYear: true,
			yearSuffix: "년",
			  dayNamesMin: ['월','화','수','목','금','토','일'] 
			// dayNamesMin: [ '','','','','','',''] 
			// showOn: "button",
			// buttonImageOnly: true,
			// buttonImage: "../../resources/images/btn/btn_datepicker.png",
			// buttonText: "달력선택"
		});
		// 팝업 열기 버튼
		$('.layerCall_p05').off('click').on('click', function() {
			var target = $(this).attr('href');
			_this.popup.open(target, $(this));
			return false;
		});
		
		
		// 달력
		// $('.datepicker').datepicker({
		// 	showOn: "button",
		// 	buttonImageOnly: true,
		// 	buttonImage: "../../resources/images/btn/btn_datepicker.png",
		// 	buttonText: "달력선택"
		// });
		// 달력
        // $(function(){
        //     $('.datepicker, .datepicerS').datepicker()
           
        // })



		
		// 팝업 열기 버튼
		$('.layerCall').off('click').on('click', function() {
			var target = $(this).attr('href');
			_this.popup.open(target, $(this));
			return false;
		});

		//첨부파일
		var $uploadFile = $('.fileF .upload');
		$uploadFile.on('change', function(){
			var fileName = (window.FileReader) ? $(this)[0].files[0].name : $(this).val().split('/').pop().split('\\').pop();
			$(this).parents('.fileF').find('.fileName').val(fileName);

			//첨부파일 용량
			if (this.files && this.files[0]) {

				var maxSize = 10 * 1024 * 1024;
				var fileSize = this.files[0].size;

				if(fileSize > maxSize){
					alert("첨부파일 사이즈는 10MB 이내로 등록 가능합니다.");
					$(this).parents('.fileF').find('.fileName').val('선택된 파일 없음');
					return false;
				}
			}
		});
	},
	



	header: function() {
        var $btnAllMenu = $('.header .hamBtn button'),
            $btnAllMenuClose = $('.header .allMenu .allMenuClose');

        $btnAllMenu.on('click', function(){
            $('body').addClass('allMenuOpen');
        });

        $btnAllMenuClose.on('click', function(){
            $('body').removeClass('allMenuOpen');
        });
    },

	//p05
	header_p05: function() {
        $(window).scroll(function() {
            var $header_p05 = $('.headerFixed_p05'),
				$headerTit_p05 = $('headerTit_p05'),
                scrollTop = $(window).scrollTop(),
                scrollLeft = $(window).scrollLeft();                
            if ($header_p05.length) {
                if (scrollTop > $header_p05.height()) {
                    $header_p05.addClass("fixed");
                } else {
                    $header_p05.removeClass("fixed");
                }
            }
            console.log(scrollTop);
            $header_p05.css({
                'margin-left': -scrollLeft
            });
        });
    },
	appbar_p05: function() {
		$(window).scroll(function(){
			   var $header_p05 = $('.header_p05'),
				   $appbar_p05 = $('.appbar_p05'),
				scrollTop = $(window).scrollTop(),
				scrollLeft = $(window).scrollLeft();
				
			if ($appbar_p05.length) {
				if (scrollTop > $header_p05.height() + 200 ) {
					$appbar_p05.addClass("fixed");
				} else{
					$appbar_p05.removeClass("fixed");
				}
			} 
		});
	},

	sideMenu: function() {


		$('#sideMenu .depth > a').off('click').on('click', function() {
			$(this).parent().toggleClass('active');

			var url = './AH/DSC-AH-003-02.html'

			if ($(this).hasClass('url')) {
				location.href('./AH/DSC-AH-003-02.html')
			}

			return false;
		});
	},
	popup: {
		zIndex: 1001,
		popCnt: 0,
		toast: function (msg) {
			var _this = this,
				$toastBox = $('#toastBox'),
				html = '';

			if ($toastBox.length == 0) {
				$toastBox = $('<article class="layerPopup_p04" id="toastBox" role="dialog">');
				$toastBox.append('<p class="toastMsg"></p>');
				$toastBox.data('effect', 'fade');
				$('body').append($toastBox);
			}

			$('.toastMsg', $toastBox).html(msg);
			ui.popup.open($toastBox);
			setTimeout(function() {ui.popup.close($toastBox);}, 1500);

			return false;
		},
		msg: function(option, popOpen, param) {
			var _this = this,
				$msgBox = $('#msgBox'),
				$btnConfirm = $('.btnConfirm', $msgBox),
				$btnClose = $('.btnClose', $msgBox);

			// 제목
			$('.tltW h1', $msgBox).html(option.tlt == '' ? '알림' : option.tlt);

			// 메세지
			$('.msg', $msgBox).html(option.msg == '' ? '' : option.msg);

			// 콜백
			if (option.callback == '' || option.callback == null) {
				$msgBox.data('callback', null);
			} else {
				$msgBox.data('callback', option.callback);
			}

			// type
			if (option.type == 'alert') {
				$btnClose.removeClass('lastFocus').hide();
				$btnConfirm.addClass('lastFocus');
			} else {
				$btnClose.addClass('lastFocus').show();
				$btnConfirm.removeClass('lastFocus');
			}

			if (option.cancleBtnHide) $('.tltW .popClose', $msgBox).hide();
			else $('.tltW .popClose', $msgBox).show();

			// 새창열림
			if (option.comfirmBtn == 'blank') $btnConfirm.attr('title', '새창열림');
			else if (option.comfirmBtn == 'move') $btnConfirm.attr('title', '바로가기');
			else if (option.comfirmBtn != '') $btnConfirm.attr('title', option.comfirmBtn);
			else $btnConfirm.attr('title', '확인');

			ui.popup.open($msgBox, popOpen, param);
		},
		open: function(target, popOpen, param) {
			console.log('팝업열기 : ' + target || target.selector);

			var _this = this,
				$layerW = $(target),
				$layer = $('.layerPopup_p04,.layerPopup_p05, .fullPopup', $layerW),
				effect = $layerW.data('effect'),
				view = $layerW.data('view'),
				callback = $layerW.data('callback'),
				tmpAppend = '<a href="javascript:void(0);" class="tmpAppend"></a>';

			if (view) {
				$('body').addClass('popupViewOpen');
				$('.popupOpen').css('overflow','auto')
				
			} else {
				_this.popCnt++;
				$('body').addClass('popupOpen');
				$('.popupOpen').css('overflow','hidden')
			}

			$layerW.css('z-index', _this.zIndex++);
			$layer.attr('tabindex', '0');

			$('.popClose', $layer).off('click').on('click', function() {
				_this.close(target, popOpen);
				if (this.tagName == 'A') return false;
			});

			$('.popConfirm', $layer).off('click').on('click', function() {
				if (callback) {
					console.log('callback함수 실행');
					window[callback](target, popOpen, param);
				} else {
					_this.close(target, popOpen);
				}
				if (this.tagName == 'A') return false;
			});

			$('.btnLayer .popClose', $layer).off('focus').on('focus', function(){
				$layer.append(tmpAppend);
				$('.tmpAppend', $layer).focus(function(){
					$layer.attr('tabindex', '0').focus();
				});
			});

			$layer.off('focus').on('focus', function() {
				//console.log('focus');
				$('.tmpAppend', $layer).remove();
				$(document).on('keydown', function(e) {
					if (e.keyCode == 9 && e.shiftKey) {
						$layer.append(tmpAppend);
						$('.tmpAppend', $layer).focus();
					}
				});
			}).blur(function() {
				$(document).off('keydown');
			});


			$layerW.show();
			

			if (!$layer.hasClass('toastMsg') && !view) $layer.focus();

			if (effect == 'fade') {
				$layer.hide().fadeIn();
			}

			return false;
		},
		close: function(target, popOpen) {
			console.log('팝업닫기 : ' + target || target.selector);
			var _this = this,
				$layerW = $(target),
				view = $layerW.data('view');

			if (view) {
				$('body').removeClass('popupViewOpen');
			} else {
				_this.popCnt--;
				if (_this.popCnt == 0) $('body').removeClass('popupOpen');
			}

			$('.layerPopup_p04', target).removeAttr('tabindex')
			$(target).hide();
			//$('body').removeClass('popupOpen');
			$(popOpen).focus();
		}
	},
	tmp: function() {
		$(function(){
			$(document).on("focus", ".tabUiArea dt a", function(e){
				var obj = $(this),
				activeTab = obj.attr("href");
				e.preventDefault();
				obj.parent().addClass("on").siblings().removeClass("on");
				obj.parents(".tabUiArea").find("dd").removeClass("on");
				$(activeTab).addClass("on");
			}).on("click", ".tabUiArea dt a", function(e){
				var obj = $(this),
				activeTab = obj.attr("href");
				e.preventDefault();
				obj.parent().addClass("on").siblings().removeClass("on");
				obj.parents(".tabUiArea").find("dd").removeClass("on");
				$(activeTab).addClass("on");
			});
		});
		$('.schMoreBtn .btn').off('click').on('click', function(){

			var $btn = $(this);

			$btn.toggleClass('open');
			
			if ($btn.hasClass('open') == false) {
				$($btn).attr('title', '상세검색옵션 열기');
				$('.schTabMenuW').stop().slideUp(500);
			} else {
				$($btn).attr('title', '상세검색옵션 닫기');
				$('.schTabMenuW').stop().slideDown(500);
			}
			return false;
		})
		// textarea 자동 height (max-height 값까지)
		$('.autoTextarea').off('keydown keyup').on('keydown keyup', function(){
			$(this).height(1).height($(this).prop('scrollHeight')+3);
			console.log($(this).prop('scrollHeight'));
		})
	}
};








/*p05 */
// 외부영역 클릭 시 팝업 닫힘
$(document).mouseup(function (e){
	var LayerPopup = $(".layerPopW_p05");
	if(LayerPopup.has(e.target).length === 0){
	  LayerPopup.hide();
	  $('.popupOpen').css('overflow','auto')
	}
});


$(function(){
	$('.starRev_p05 span').click(function(){
		$(this).parent().children('span').removeClass('on');
		$(this).addClass('on').prevAll('span').addClass('on');
		return false;
	})
})

//wish 버튼(찜하기 버튼)
$(function(){
	$('.heart_big').click(function(){
		$('.icon_heart').toggleClass('on_big')
		
	});
})
$(function(){
	$('.heart_big').click(function(){
		$('.icon_heartBig').toggleClass('on_big')
		
	});
})
$(function(){
	$('.heart_small').click(function(){
		$('.icon_heartSmall').toggleClass('on_small')
	});
})    

//탭메뉴 _p05
$(document).ready(function(){
	$('.tabList_p05 li').on('click', function(){

		var tabId = $(this).attr('data-tab');

		$('.tabList_p05 li').removeClass('on');
		$('.tabContent_p05').removeClass('current');

		$(this).addClass('on');
		$("#"+tabId).addClass('current');
	});	
})

$(document).ready(function() {
	ui.init();
});
