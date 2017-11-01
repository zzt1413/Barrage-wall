window.onload = function() {
	var div2 = document.getElementById("div2");
	var div1 = document.getElementById("div1");
	div2.onclick = function() {
		div1.className = (div1.className == "close1") ? "open1" : "close1";
		div2.className = (div2.className == "close2") ? "open2" : "close2";
	}
}
$(document).ready(function() {
	var fs=$("#fasong");
	var qing=$("#qing");
	var an=$("#div2");
	var value = $( "#info" ).val();
	var wz=$("#wenzi");
	fs.click(function(){
		var value = $( "#info" ).val();
	    var wz=$("#wenzi");
		wz.text(value);
		wz.animate({
			left: "0px"
		}, 10000,function(){
			wz.empty();
			wz.animate({left:"90%"});
		});
		
	});
	qing.click(function(){
		wz.empty();
		wz.animate({left:"90%"});
	});
	an.click(function(){
	    wz.toggle();
	});
})

	
