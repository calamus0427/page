// JavaScript Document
window.onload=function(){
	var getTypeElement=function(es,type){
		var esLen=es.length,i=0,eArr=[],esl=null;
		for(;i<esLen;i++){
			esl=es[i];
			if(esl.nodeName.replace("#","").toLocaleLowerCase()==type){eArr.push(esl);}
			}
			return eArr;
		},navs=getTypeElement(document.getElementById("pullDownNav").childNodes,"div"),i=0,l=navs.length,targetID=null;
		for(;i<l;i++){
			navs[i].onmousemove=function(){
				targetID=this.getAttribute("data-targetID");
				document.getElementById(targetID).style.display="block";
				}
				navs[i].onmouseout=function(){document.getElementById(targetID).style.display="none"}
			}
	}
