
var uploadedfiles = 0
var uploadConf = {
// General settings
// runtimes : 'silverlight,html4',
browse_button : 'pickfiles', // you can pass in id...
url : '/expoApi/Home/Uploader',
chunk_size : '5mb',
unique_names : true,
// Resize images on client-side if we can
// resize : { width : 320, height : 240, quality : 90 },   
resize : { quality : 80 },  
filters : {
  max_file_size : '5mb',
  // Specify what files to browse for
  mime_types: [
    {title : "Image files", extensions : "jpg,png"}
  ]
},
flash_swf_url : './Moxie.swf',
silverlight_xap_url : './Moxie.xap',     
// PreInit events, bound before the internal events
preinit : {
  Init: function(up, info) {
    // log('[Init]', 'Info:', info, 'Features:', up.features)
  },
  UploadFile: function(up, file) {
    // log('[UploadFile]', file)
    // You can override settings before the file is uploaded
    // up.setOption('url', 'upload.php?id=' + file.id);
    // up.setOption('multipart_params', {param1 : 'value1', param2 : 'value2'});
  }
},
// Post init events, bound after the internal events
init : {
  PostInit: function() {
    // Called after initialization is finished and internal event handlers bound
    // log('[PostInit]')
      
    // document.getElementById('uploadfiles').onclick = function() {
    //   uploader.start();
    //   return false;
    // };
  },
  Browse: function(up) {
    // Called when file picker is clicked
    // log('[Browse]')
    console.log(up)
  },
  Refresh: function(up) {
    // Called when the position or dimensions of the picker change
    // log('[Refresh]')
  },
  StateChanged: function(up) {
    // Called when the state of the queue is changed
    // log('[StateChanged]', up.state == plupload.STARTED ? "STARTED" : "STOPPED")
  },
  QueueChanged: function(up) {
    // Called when queue is changed by adding or removing files
    // log('[QueueChanged]')
  },
  OptionChanged: function(up, name, value, oldValue) {
    // Called when one of the configuration options is changed
    // log('[OptionChanged]', 'Option Name: ', name, 'Value: ', value, 'Old Value: ', oldValue)
  },
  BeforeUpload: function(up, file) {
    // Called right before the upload for a given file starts, can be used to cancel it if required
    // log('[BeforeUpload]', 'File: ', file)
  },
  UploadProgress: function(up, file) {
    // Called while file is being uploaded
    // log('[UploadProgress]', 'File:', file, "Total:", up.total)
  },
  FileFiltered: function(up, file) {
    console.log(file)
    // Called when file successfully files all the filters
    // log('[FileFiltered]', 'File:', file)
  },
  FilesAdded: function(up, files) {
    console.log(getUpdateNum())
    if(files.length > 1 || getUpdateNum() + files.length > 1){
      uploadError('上传图片不能超过1张')
      for(var i = 0; i < files.length; i++){
        uploader.removeFile(files[i])
      }
      return false
    }
    // Called when files are added to queue
    // log('[FilesAdded]')
    plupload.each(files, function(file) {
      // log('  File:', file)
    })
    uploader.start()
  },
  FilesRemoved: function(up, files) {
    // Called when files are removed from queue
    // log('[FilesRemoved]')
    plupload.each(files, function(file) {
      // log('  File:', file)
    })
  },
  FileUploaded: function(up, file, info) {
    // Called when file has finished uploading
    // log('[FileUploaded] File:', file, "Info:", info)
    if(info.status == 4001){
      uploadError('图片大小限制每张不超过5M')
      return false
    }else if(info.status == 8002){
      uploadError('图片格式错误，请重新上传')
      return false
    }
    var imgInfo = JSON.parse(info.response)
    var template = '<div class="jfr_pic" onclick="deleteImg(this)">\
          <img src="'+imgInfo.files[0].path+'">\
          <span><a href="javascript:void(0)">X</a></span>\
        </div>'
    document.getElementById('imgView').innerHTML += template
    updateNum()
  },
  ChunkUploaded: function(up, file, info) {
    // Called when file chunk has finished uploading
    // log('[ChunkUploaded] File:', file, "Info:", info)
  },
  UploadComplete: function(up, files) {
    // Called when all files are either uploaded or failed
    // log('[UploadComplete]')
  },
  Destroy: function(up) {
    // Called when uploader is destroyed
    // log('[Destroy] ')
  },
  Error: function(up, args) {
    // Called when error occurs
    console.log(args)
    if(args.code == -601){
      uploadError('图片格式错误，请重新上传')
    }else if(args.code == -600){
      uploadError('图片大小限制每张不超过5M');
    }
    // log('[Error] ', args)
  }
}
}
var uploader = new plupload.Uploader(uploadConf)
 
function log() {
    var str = ""
    plupload.each(arguments, function(arg){
        var row = ""
        if(typeof(arg) != "string"){
            plupload.each(arg, function(value, key){
                // Convert items in File objects to human readable form
                if(arg instanceof plupload.File){
                    // Convert status to human readable
                    switch (value) {
                        case plupload.QUEUED:
                            value = 'QUEUED'
                        break
                        case plupload.UPLOADING:
                            value = 'UPLOADING'
                        break
                        case plupload.FAILED:
                            value = 'FAILED'
                        break
                        case plupload.DONE:
                            value = 'DONE'
                        break
                    }
                }
                if(typeof(value) != "function"){
                    row += (row ? ', ' : '') + key + '=' + value;
                }
            })
            str += row + " "
        } else {
            str += arg + " "
        }
    })
    console.log(str)
}

uploader.init()

function deleteImg(that){
  that.parentNode.removeChild(that)
  updateNum()
}

function updateNum(){
  uploadedfiles = $('.jfr_pic').length
  document.getElementById('uploadedfiles').innerHTML = uploadedfiles
}

function getUpdateNum(){
  return $('.jfr_pic').length
}

function uploadError(str){
  document.getElementById('uploadError').innerHTML = '<i class="fa fa-minus-circle"></i> ' + str
}

function createTopic(){
	 setTimeout (function (){
	  var title = $('#topicTitle')
	  if(title.val().length == 0 || title.val() == title.attr('placeholder')){
  		// 标题为空处理
      uploadError('请用一句话概括主题')
  		return false
	  }
	  var content = $('#topicContent').val()
	  console.log(content)
	  if(content.length == 0){
  		// 内容为空处理
      uploadError('请填写主题内容')
  		return false
	  }
	  if(content.length > 140){
  		// 内容超出处理
      uploadError('内容不能超过140个文字')
  		return false
	  }
	  var img = $('.jfr_pic img')
	  var url = []
	  for(var i = 0; i < img.length; i++){
		  url.push(img[i].src)
	  }
    url = url.join(',')
    if(url == ''){
      uploadError('请上传图片')
      return false
    }
	  $.ajax({
		type: 'post',
		url: '/expoApi/Home/ExpoClient/createTopic',
		data: {
		  title: title.val(),
		  content: content,
		  img: url
		},
		success:function (res){
		  if(res == 'success'){
			alert('发布成功，审核后会显示在列表中')
			location.reload()
			close_fatie()
		  }else{
			alert('发布失败')
		  }
		}
	  });
  }, 0);
}

function editTopic(){
  var title = $('#topicTitle')
  if(title.val().length == 0 || title.val() == title.attr('placeholder')){
    // 标题为空处理
    uploadError('请用一句话概括主题')
    return false
  }
  var content = $('#topicContent').val()
  console.log(content)
  if(content.length == 0){
    // 内容为空处理
    uploadError('请填写主题内容')
    return false
  }
  if(content.length > 140){
    // 内容超出处理
    uploadError('内容不能超过140个文字')
    return false
  }
  var img = $('.jfr_pic img')
  var url = []
  for(var i = 0; i < img.length; i++){
    url.push(img[i].src)
  }
	$.ajax({
    type: 'post',
    url: '/expoApi/Home/ExpoClient/editTopic',
    data: {
      id: $('#topicId').val(),
      title: title.val(),
      content: content,
      img: url.join(',')
    },
    success: function(res){
      if(res == 'success'){
        alert('编辑成功，请耐心等待审核')
        location.reload()
      }else{
        alert('编辑失败')
      }
    }
  })
}