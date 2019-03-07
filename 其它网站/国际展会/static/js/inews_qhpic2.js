$(function() {
	var sWidth = $("#focus2").width(); //��ȡ����ͼ�Ŀ�ȣ���ʾ�����
	var len = $("#focus2 ul li").length; //��ȡ����ͼ����
	var index = 0;
	var picTimer;
	
	//���´���������ְ�ť�Ͱ�ť��İ�͸������������һҳ����һҳ������ť
	var btn = "<div class='btnBg'></div><div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	$("#focus2").append(btn);
	$("#focus2 .btnBg").css("opacity",0.5);

	//ΪС��ť�����껬���¼�������ʾ��Ӧ������
	$("#focus2 .btn span").css("opacity",0.4).mouseenter(function() {
		index = $("#focus2 .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");

	//��һҳ����һҳ��ť͸���ȴ���
	$("#focus2 .preNext").css("opacity",0.2).hover(function() {
		$(this).stop(true,false).animate({"opacity":"0.5"},300);
	},function() {
		$(this).stop(true,false).animate({"opacity":"0.2"},300);
	});

	//��һҳ��ť
	$("#focus2 .pre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});

	//��һҳ��ť
	$("#focus2 .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});

	//����Ϊ���ҹ�����������liԪ�ض�����ͬһ�����󸡶�������������Ҫ�������ΧulԪ�صĿ��
	$("#focus2 ul").css("width",sWidth * (len));
	
	//��껬�Ͻ���ͼʱֹͣ�Զ����ţ�����ʱ��ʼ�Զ�����
	$("#focus2").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},6000); //��6000�����Զ����ŵļ������λ������
	}).trigger("mouseleave");
	
	//��ʾͼƬ���������ݽ��յ�indexֵ��ʾ��Ӧ������
	function showPics(index) { //��ͨ�л�
	
		var nowLeft = -index*sWidth; //����indexֵ����ulԪ�ص�leftֵ
		$("#focus2 ul").stop(true,false).animate({"left":nowLeft},300); //ͨ��animate()����ulԪ�ع������������position
		//$("#focus2 .btn span").removeClass("on").eq(index).addClass("on"); //Ϊ��ǰ�İ�ť�л���ѡ�е�Ч��
		$("#focus2 .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //Ϊ��ǰ�İ�ť�л���ѡ�е�Ч��
	}
	
	
	//ͼƬһ��ʱ�л���ť����ʾ
	if(len == 1){
	  $(".ibk_left #focus2 .preNext").css("display","none");	
	}
	
});


//������ϣ������ҳ��߶��Զ������߶ȵ�iframe�����Ƶ��б� 
//�ö��Ű�ÿ��iframe��ID�ָ�. ����: ["myframe1", "myframe2"]������ֻ��һ�����壬���ö��š� 
//����iframe��ID 
var iframeids=["comment_iframe"]; 
//����û����������֧��iframe�Ƿ�iframe���� yes ��ʾ���أ�no��ʾ������ 
var iframehide="yes"; 
function dyniframesize() 
{ 
var dyniframe=new Array() 
for (i=0; i<iframeids.length; i++) 
{ 
if (document.getElementById) 
{ 
//�Զ�����iframe�߶� 
dyniframe[dyniframe.length] = document.getElementById(iframeids[i]); 
if (dyniframe[i] && !window.opera) 
{ 
dyniframe[i].style.display="block"; 
if (dyniframe[i].contentDocument && dyniframe[i].contentDocument.body.offsetHeight) //����û����������NetScape 
dyniframe[i].height = dyniframe[i].contentDocument.body.offsetHeight; 
else if (dyniframe[i].Document && dyniframe[i].Document.body.scrollHeight) //����û����������IE 
dyniframe[i].height = dyniframe[i].Document.body.scrollHeight; 
} 
} 
//�����趨�Ĳ���������֧��iframe�����������ʾ���� 
if ((document.all || document.getElementById) && iframehide=="no") 
{ 
var tempobj=document.all? document.all[iframeids[i]] : document.getElementById(iframeids[i]); 
tempobj.style.display="block"; 
} 
} 
} 
if (window.addEventListener) 
window.addEventListener("load", dyniframesize, false); 
else if (window.attachEvent) 
window.attachEvent("onload", dyniframesize); 
else 
window.onload=dyniframesize; 