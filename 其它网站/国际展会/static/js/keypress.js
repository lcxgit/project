/**
    IE8下使用event.keyCode 非IE8使用event.which 
*/ 

function keyIsNumber(){
    if(navigator.userAgent.indexOf("MSIE 8.0")>0 || navigator.userAgent.indexOf("MSIE 9.0")>0 || navigator.userAgent.indexOf("MSIE 10.0")>0){
        return event.keyCode>=48&&event.keyCode<=57||event.keyCode==8
      }else{
        return event.which>=48&&event.which<=57||event.which==8
      }
}