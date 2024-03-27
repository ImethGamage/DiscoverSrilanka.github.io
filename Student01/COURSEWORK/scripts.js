window.addEvenrListner('load', function(){
	setTimeout(function(){
		document.querySelector('.splash').style.display='none';
		document.querySelector('.main-page').style.display = 'block';
    }, 4000);
}