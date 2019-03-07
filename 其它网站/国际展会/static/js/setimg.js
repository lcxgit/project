

var  flag=false;  
function  SetImage(ImgD,width,Height){  
     var  image=new  Image();  
     image.src=ImgD.src;  
     if(image.width>0 && image.height>0){  
       flag=true;  
       if(image.width/image.height>=width/Height){  
         if(image.width>width){      
         ImgD.width=width;  
         ImgD.height=(image.height*width)/image.width;  
         }else{  
         ImgD.width=image.width;      
         ImgD.height=image.height;
         }  
         }  
       else{  
         if(image.height>Height){      
         ImgD.height=Height;  
         ImgD.width=(image.width*Height)/image.height;            
         }else{  
         ImgD.width=image.width;      
         ImgD.height=image.height; 

         }  
         }  
       }  
}

function ResizePic(ImgTag,w,h)
{
 var image = new Image();
 var FitWidth = w;
 var FitHeight = h;
 image.src = ImgTag.src;
 if(image.width>0 && image.height>0){
  if(image.width/image.height >= FitWidth/FitHeight){
   if(image.width > FitWidth){
    ImgTag.width = FitWidth;
    ImgTag.height = (image.height*FitWidth)/image.width;
   }
   else{
    ImgTag.width = image.width;
    ImgTag.height = image.height;
   }
  }
  else{
   if(image.height > FitHeight){
    ImgTag.height = FitHeight;
    ImgTag.width = (image.width*FitHeight)/image.height;
   }
   else{
    ImgTag.width = image.width;
    ImgTag.height = image.height;
   }
  }
 }
}

