// JavaScript Document

function enterLeft(){
	var input = document.getElementById("input").value;
	var div = document.getElementById("number");
	var input_arr = input.split(/,|\n|\t|��|��|\s/);//split �ַ����ָ�Ϊ���� join ��������Ԫ�ط���һ���ַ���
	var firstSpan = div.firstChild;
	for(var i = 0;i<input_arr.length;i++){
		var span = document.createElement("span");
		var text = document.createTextNode(input_arr[i]);
		span.appendChild(text);
		div.insertBefore(span,firstSpan);
	}
}
function enterRight(){
	var input = document.getElementById("input").value;
	var div = document.getElementById("number");
	var input_arr = input.split(/,|\n|\t|��|��/);
	for(var i = 0;i<input_arr.length;i++){
		var span = document.createElement("span");
		var text = document.createTextNode(input_arr[i]);
		span.appendChild(text);
		div.appendChild(span);
		}
}
function exitLeft(){
	var div = document.getElementById("number");
	var firstSpan = div.firstChild;
	if(!firstSpan)
	alert("�޷�����ɾ��");
	else{
	div.removeChild(firstSpan);
	alert("���"+firstSpan.innerHTML+"��ɾ��");
	}
	}
		
function exitRight(){
	var div = document.getElementById("number");
	var lastSpan = div.lastChild;
	if(!lastSpan)
	alert("�޷�����ɾ��");
	else{
	div.removeChild(lastSpan);
	alert("�Ҳ�"+lastSpan.innerHTML+"��ɾ��");
	}
	}
function matchString(){
	var div = document.getElementById("number");
	var matchText = document.getElementById("matchText").value;
	var span_arr = [] ;
	var len =  document.getElementsByTagName("span").length;
	for(var i = 0;i<len;i++){
		span_arr[i] = document.getElementsByTagName("span")[i].innerHTML;//span���ݴ������
		var matchIndex = span_arr[i].search(matchText);
		if(matchIndex!=-1){
			document.getElementsByTagName("span")[i].innerHTML = span_arr[i].substr(0,matchIndex)+"<u>"+ matchText +"</u>"+span_arr[i].substr(matchIndex+matchText.length);
		}
		}
	}