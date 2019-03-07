var register_popup_alert_box = '<div class="pop_up" id="regist_popup_show">\
  <div class="p_u_tit">\
    <span>参观展报名</span>\
	<div class="p_u_colse"><a href="javascript:void(0);" onclick="regist_popup_colse()"><img src="static/images/showg_64.png" /></a></div>\
    <div class="clear"></div>\
  </div>\
  <div class="clear"></div>\
  <div class="regist">\
    <div class="regist_sx">\
      <span id="expoSubmitTitle"></span>\
      <div class="clear"></div>\
	  <ul class="reg_sx">\
	    <li id="expoSubmitTime"></li><li>&nbsp;</li>\
	    <div class="clear"></div>\
	  </ul>\
	  <div class="clear"></div>\
    </div>\
	<div class="clear"></div>\
    <div class="regist_nr">\
      <input type="text" class="input_k" placeholder="公司名称(必填)" value="" id="bm_company" />\
	  <div class="clear"></div>\
	  <div class="space4">\
	    <input type="text" class="input_k" placeholder="联系人(必填)" value="" style="width:120px" id="bm_contact" /><input type="text" class="input_k" placeholder="联系电话(必填)" value="" onkeypress="return keyIsNumber()" ng-pattern="/[^a-zA-Z]/" style="width:202px; margin-left:10px;" id="bm_tel"  />\
	  </div>\
	  <div class="clear"></div>\
	  <div class="space4">\
	    <input type="text" class="input_k" placeholder="联系QQ(选填)" value="" onkeypress="return keyIsNumber()" id="bm_qq"   />\
	  </div>\
	  <div class="clear"></div>\
	  <div class="space4">\
			<input type="text" class="input_k" placeholder="推荐人(选填)" value="" id="bm_referee"  />\
		</div>\
	   <div class="clear"></div>\
	  <div class="space4">\
	    <textarea name="" class="textarea_k" placeholder="请输入内容(选填)" value="" id="bm_content"></textarea>\
	  </div>\
	  <div class="clear"></div>\
	</div>\
	<div class="clear"></div>\
	<div class="p_u_cz">\
	  <div class="floatleft">\
          <a href="javascript:void(0);" id="bm" >\
          	<input type="button" onclick="apply.sendMessage(); try{ga(\'send\', \'event\', \'报名登记\', \'提交报名\', \'列表页\')}catch(e){}" value="提交报名" id="sub_cs" name="">\
          </a>\
		  <input type="submit" class="marl1" value="取消" id="sub_hs" name="" onclick="regist_popup_colse()">\
	  </div>\
	  <div class="floatright">\
	      <p class="bol f14 space2"><font class="col2">全球展览咨询电话：</font><font class="cs f16">400-8855-088</font></p>\
	  </div>\
	  <div class="clear"></div>\
	</div>\
	<div class="clear"></div>\
  </div>\
  <div class="clear"></div>\
	</div>\
</div>\
<div id="grey_back2">&nbsp;</div>\
<!-- 弹窗登录 -->\
<div class="tc_dlbb" id="popUpLogin" style="display: none;">\
  <iframe class="tab-content-iframe" id="loginAlertIframe" frameborder="0" scrolling="no" width="340" height="390" src=""></iframe>\
</div>\
<div class="r_freeyy_ts prompt" id="bm_prompt">\
  <div id="tj_success_bm"><i class="fa fa-check-circle green"></i>提交成功</div>\
  <div id="tj_error1_bm"><i class="fa fa-info-circle cs"></i>请填写公司名称</div>\
  <div id="tj_error2_bm"><i class="fa fa-info-circle cs"></i>请填写联系人</div>\
  <div id="tj_error3_bm"><i class="fa fa-info-circle cs"></i>请填写正确电话</div>\
  <div id="tj_error4_bm"><i class="fa fa-info-circle cs"></i>请填写联系QQ</div>\
  <div id="tj_error5_bm"><i class="fa fa-info-circle cs"></i>请填写内容</div>\
  <div id="tj_wrong_bm"><i class="fa fa-check-circle red"></i>提交失败</div>\
  <div class="clear"></div>\
</div>'
document.write(register_popup_alert_box)