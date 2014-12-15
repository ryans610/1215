window.onload=function(){
	alert("鴨鴨");
	﻿console.log("呱");
	document.getElementById("cover").addEventListener("mouseover",function(){
		var alist=document.getElementsByTagName("li");
		for(var i=0;i<alist.length;i++){
			alist.item(i).style.display="block";
		}
	});
};
