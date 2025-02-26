jQuery(document).ready(function($) {

	$('.sidebarBtn').click(function(){
		$('.sidebarBtn').toggleClass('toggle');
	})

	//Comportamento do menu na rolagem da página
	  $(window).bind('scroll', function () {
	    if($(window).scrollTop() < 100){
	      $('.navbar-custom').removeClass('fixed-top');
	      $('.navbar-custom').removeClass('sticky-header');
	    }
	      else{
	      $('.navbar-custom').addClass('fixed-top');
	      $('.navbar-custom').addClass('sticky-header');
	    }
	  });

	// Máscara Telefone

	   $("#telefone").inputmask({
        mask: ["(99) 9999-9999", "(99) 99999-9999", ],
        keepStatic: true
      });
      
    // Redirecionamento Forms
    
    document.addEventListener( 'wpcf7mailsent' , function( event ){
		if (window.location.href.indexOf("individual") > -1) {
     		window.open('https://api.whatsapp.com/send?phone=5511944744999&text=Ol%C3%A1%20AUTORIZADA%20AMIL%20DENTAL%2011%20944744999', '_self');
    	}
    	if (window.location.href.indexOf("familiar") > -1) {
     		window.open('https://api.whatsapp.com/send?phone=5511944744999&text=Ol%C3%A1%20AUTORIZADA%20AMIL%20DENTAL%2011%20944744999', '_self');
    	}
    	if (window.location.href.indexOf("empresarial") > -1) {
     		window.open('https://api.whatsapp.com/send?phone=5511944744999&text=Ol%C3%A1%20AUTORIZADA%20AMIL%20DENTAL%2011%20944744999', '_self');
    	}
    	if (window.location.href.indexOf("protese") > -1) {
     		window.open('https://api.whatsapp.com/send?phone=5511944744999&text=Ol%C3%A1%20AUTORIZADA%20AMIL%20DENTAL%2011%20944744999', '_self');
    	}
    	if (window.location.href.indexOf("ortodontia") > -1) {
     		window.open('https://api.whatsapp.com/send?phone=5511944744999&text=Ol%C3%A1%20AUTORIZADA%20AMIL%20DENTAL%2011%20944744999', '_self');
    	}
    	if (window.location.href.indexOf("kids") > -1) {
     		window.open('https://api.whatsapp.com/send?phone=5511944744999&text=Ol%C3%A1%20AUTORIZADA%20AMIL%20DENTAL%2011%20944744999', '_self');
    	}
	}, false );
	
});