<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link type="text/css" rel="stylesheet" href="/Public/web/css/lib.css?2">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1, minimum-scale=1.0"/>
	<meta content="telephone=no" name="format-detection">
    <title>帮助</title>
    <script src="/Public/web/js/jquery-1.8.3.min.js"></script>
    <link rel="stylesheet" href="/Public/web/css/weui.min.css"/>
    <link rel="stylesheet" href="/Public/web/css/jquery-weui.min.css">
    <link href="/Public/web/css/font-awesome.min.css" rel="stylesheet">
    <link href="/Public/web/fonts/iconfont.css" rel="stylesheet">
    <link rel="stylesheet" href="/Public/web/css/stylef.css"/>
    <script src="/Public/web/js/layer.js"></script>

</head>
<body>
<!--顶部开始-->
<!--顶部开始-->
<div class="header">
    <span class="header_l"><a href="javascript:history.go(-1);"><i class="fa fa-chevron-left"></i></a></span>
    <span class="header_c">帮助中心</span>
    <span class="header_r"><a href="/Index.php/Home/Index/index/"><i class="fa fa-user"style="margin-right: -20px"></i></a></span>
</div>
<div class="height40"></div>
<!--顶部结束-->
<!--顶部结束-->
<div class="container">

    <div class="accordion">
        <dl>
		<?php if(is_array($info)): foreach($info as $key=>$v): ?><dt>
                <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" class="accordion-title accordionTitle js-accordionTrigger"><?php echo ($v["if_theme"]); ?></a>
            </dt>
            <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                
                <p><?php echo ($v["if_content"]); ?></p>
              <!--   <p>Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.</p> -->
            </dd><?php endforeach; endif; ?>	
          <!--   <dt>
                <a href="#accordion2" aria-expanded="false" aria-controls="accordion2" class="accordion-title accordionTitle js-accordionTrigger">什么是算力？</a>
            </dt>
            <dd class="accordion-content accordionItem is-collapsed" id="accordion2" aria-hidden="true">
                <p><?php echo ($info2["if_theme"]); ?></p>
                <p><?php echo ($info2["if_content"]); ?></p>
            </dd>
            <dt>
                <a href="#accordion3" aria-expanded="false" aria-controls="accordion3" class="accordion-title accordionTitle js-accordionTrigger">有关莱肯币转出？</a>
            </dt>
            <dd class="accordion-content accordionItem is-collapsed" id="accordion3" aria-hidden="true">
                <p><?php echo ($info3["if_theme"]); ?></p>
                <p><?php echo ($info3["if_content"]); ?></p>
            </dd> -->
        </dl>
    </div>

</div>

<script type="text/javascript">
    //uses classList, setAttribute, and querySelectorAll
    //if you want this to work in IE8/9 youll need to polyfill these
    (function(){
        var d = document,
                accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
                setAria,
                setAccordionAria,
                switchAccordion,
                touchSupported = ('ontouchstart' in window),
                pointerSupported = ('pointerdown' in window);

        skipClickDelay = function(e){
            e.preventDefault();
            e.target.click();
        }

        setAriaAttr = function(el, ariaType, newProperty){
            el.setAttribute(ariaType, newProperty);
        };
        setAccordionAria = function(el1, el2, expanded){
            switch(expanded) {
                case "true":
                    setAriaAttr(el1, 'aria-expanded', 'true');
                    setAriaAttr(el2, 'aria-hidden', 'false');
                    break;
                case "false":
                    setAriaAttr(el1, 'aria-expanded', 'false');
                    setAriaAttr(el2, 'aria-hidden', 'true');
                    break;
                default:
                    break;
            }
        };
//function
        switchAccordion = function(e) {
            console.log("triggered");
            e.preventDefault();
            var thisAnswer = e.target.parentNode.nextElementSibling;
            var thisQuestion = e.target;
            if(thisAnswer.classList.contains('is-collapsed')) {
                setAccordionAria(thisQuestion, thisAnswer, 'true');
            } else {
                setAccordionAria(thisQuestion, thisAnswer, 'false');
            }
            thisQuestion.classList.toggle('is-collapsed');
            thisQuestion.classList.toggle('is-expanded');
            thisAnswer.classList.toggle('is-collapsed');
            thisAnswer.classList.toggle('is-expanded');

            thisAnswer.classList.toggle('animateIn');
        };
        for (var i=0,len=accordionToggles.length; i<len; i++) {
            if(touchSupported) {
                accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
            }
            if(pointerSupported){
                accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
            }
            accordionToggles[i].addEventListener('click', switchAccordion, false);
        }
    })();
</script>
<style>
    .footer ul li{
        width: 25%;
    }
</style>
<div class="footer">
     <ul>
        
        <li><a href="/Index.php/Shop/Index/" class="block"><i class="iconfont">&#xe604;</i>矿机商城</a></li>
		<li><a href="/Index.php/Home/Info/mykuangche/" class="block"><i class="iconfont">&#xe601;</i>我的矿机</a></li>
		<li><a href="/Index.php/Home/Info/Index/" class="block"><i class="iconfont">&#xe645;</i>交易中心</a></li>
        <li style="width:24%" ><a href="/Index.php/Home/Index/Index/" class="block"><i class="iconfont">&#xe684;</i>个人中心</a></li>
   
    </ul>
</div>
<script src="/Public/web/js/jquery-weui.min.js"></script>
</body>
</html>