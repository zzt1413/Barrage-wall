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
	fs.click(function(){
		var txt=document.createElement("div");   
	    txt.className="txtl";
	    var wall=document.getElementById("danmuqiang");
	    wall.appendChild(txt);	
	    var wz=$(".txtl");
		var value = $( "#info" ).val();
	    if(value !=""){
	    	wz.text(value);
			wz.animate({
				left: "-230px"
			}, 10000,function(){
				wz.remove();
			});
			$("#info").val("");
		   }
	    else {
	    	alert("请输入内容");
	    }
	});
	document.onkeydown=Enter;
	function Enter(e){
		var value = $( "#info" ).val();
	    var wz=$("#wenzi");
	 if(e.keyCode == 13&&value != ""){
	 	wz.text(value);
		wz.animate({
			left: "-230px"
		}, 10000,function(){
			wz.empty();
			wz.animate({left:"100%"});
		});
	 }
	 else if (e.keyCode == 13&&value == "") {
	    	alert("请输入内容");
	    }
	}
	qing.click(function(){
		var wz=$(".txtl");
		wz.remove();
	});
	an.click(function(){
		var wz=$(".txtl");
	    wz.toggle();
	});
})

	
