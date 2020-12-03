$(function() {
    var navPos = jQuery( '.menu_bar' ).offset().top; // グローバルメニューの位置
    var navHeight = jQuery( '.menu_bar' ).outerHeight(); // グローバルメニューの高さ
    jQuery( window ).on( 'scroll', function() {
      if ( jQuery( this ).scrollTop() > navPos ) {
        jQuery( 'body' ).css( 'padding-top', navHeight );
        jQuery( '.menu_bar' ).addClass( '.m_fixed' );
      } else {
        jQuery( 'body' ).css( 'padding-top', 0 );
        jQuery( '.menu_bar' ).removeClass( '.m_fixed' );
      }
    });
    var pagetop = $('.page_top');
    // ボタン非表示
    pagetop.hide();
  
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 500) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
    });

   