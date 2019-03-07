


//栏目导航切换--开始

function chageIndex(indexNum, num, menuName, contentName, myClassName) {
    
    for (var i = 1; i <= num; i++) {
        document.getElementById(menuName + i).className = myClassName + "4"
        document.getElementById(contentName + i).style.display = "none"
    }
    var chooseNow = document.getElementById(menuName + indexNum)
    var isBlock = document.getElementById(contentName + indexNum)
    isBlock.style.display = "block"
    if(document.getElementById('willOpen')){
        document.getElementById('willOpen').setAttribute('id','')
    }
    isBlock.querySelector('ul').setAttribute('id','willOpen')
    chooseNow.className = myClassName + "1"
    if(indexNum == 1){
        var searchShow = document.getElementById('searchCountryResult')
        console.log(searchShow)
        if(searchShow){
            searchShow.parentNode.removeChild(searchShow)
            document.getElementById('willOpen').style.display = 'block'
        }
    }
    var liNum = isBlock.querySelectorAll('ul li')
    for(var i = 0, l = liNum.length, len = 0; i < l; i++){
        len += liNum[i].offsetWidth
    }
    console.log(len)
    if (len <= 1000) {
        document.getElementById('searchOpen2').style.display = 'none'
    } else {
        var open = document.getElementById('searchOpen2')
        open.querySelector('a').setAttribute('onclick','javascript:scrollUl(\'willOpen\',this);')
        open.style.display = 'block';
    }
    //isBlock.style.display = "block"
}

//移除没有展会数据的国家
function get_country_num(id) {
    var a = document.querySelectorAll('#' + id + ' ul li'),
            l = a.length;
    for (var i = 0; i < l; i++) {
        var b = document.querySelector('#' + a[i].getAttribute('data'));
        if (!b) {
            a[i].parentNode.removeChild(a[i]);
        } else {
            var c = a[i].querySelector('a');
            c.innerHTML = b.innerHTML;
            c.href = b.href;
        }
    }
}
//自动移除没有国家数据的字母 并计算行业 国家 年份 是否需要显示更多
function autoRemoveWord() {
    var industry = document.querySelectorAll('#ls_country li'),
        country = document.querySelectorAll('#ls_country2 li'),
        year = document.querySelectorAll('#ls_country3 li');
    for(var i = 0, l = industry.length, len = 0; i < l; i++){
        len += industry[i].offsetWidth;
    }
    len <= 1000 ? document.getElementById('searchOpen').style.display = 'none' : document.getElementById('searchOpen').style.display = 'block';
    for(var i = 0, l = country.length, len = 0; i < l; i++){
        len += country[i].offsetWidth;
        //console.log(country[i].offsetWidth);
    }
    len <= 1000 ? document.getElementById('searchOpen2').style.display = 'none' : document.getElementById('searchOpen2').style.display = 'block';
    for(var i = 0, l = year.length, len = 0; i < l; i++){
        len += year[i].offsetWidth;
    }
    len <= 1000 ? document.getElementById('searchOpen3').style.display = 'none' : document.getElementById('searchOpen3').style.display = 'block';
}
autoRemoveWord();

//栏目导航切换--结束



//鼠标滑过弹出--结束



//ajax 处理猜你喜欢
var youlike = {
    page: 0,
    show: function(data, i) {
        document.getElementById('youLikePic' + i).src = data.pic;
        document.getElementById('youLikePic' + i).alt = data.jltitle+data.entitle;
        document.getElementById('youLikeLogo' + i).src = data.litpic;
        document.getElementById('youLikeLogo' + i).alt = data.title+'logo';
        document.getElementById('youLikeTitle' + i).innerHTML = data.title;
        document.getElementById('youLikeTime' + i).innerHTML = '展会时间：' + data.stime + data.etime;
        document.getElementById('youLikeStar' + i).src = data.starImg;
        document.getElementById('youLikeStar' + i).alt = data.star+'星展会';
        document.getElementById('youLikeEcmTag' + i).innerHTML = data.ecm_tag;
        var a = $('.youLikeUrl' + i);
        for (var i = 0, l = a.length; i < l; i++) {
            a[i].href = data.url;
        }
    },
    getData: function() {
        var page = youlike.page;
        $.ajax({
            url: 'http://' + window.location.host + '/index_ajax.php',
            type: 'post',
            data: {'ajax': 'youlike', 'page': page},
            dataType: 'json',
            success: function(data) {
                youlike.save = data;
                var l = data.length;
                if (l == 4) {
                    for (var i = 0; i < 4; i++) {
                        youlike.show(data[i], i);
                    }
                    youlike.page++;
                } else {
                    for (var i = 0; i < l; i++) {
                        youlike.show(data[i], i);
                    }
                    youlike.page = 0;
                }
            },
            error: function(data) {
                //console.log(data);
            }
        });
    },
}

//去参展页面国家搜索框功能
$("#f_c_submit").click(function(){
    var a = document.getElementById('f_c_input'),
        allLi = document.getElementById('lfContent1'),
        d = allLi.getElementsByTagName('ul');
    if(!a.value){
        // 为空则恢复全部
        d[0].style.display = 'block'
        allLi.style.display = 'none'
    }
    if(a.getAttribute('search') == a.value){
        if(allLi.style.display == 'block'){
            if(d[1]){
                d[0].style.display = 'none';
                return false;
            }
        }
    } 
    a.setAttribute('search',a.value);
    var remove = document.getElementById('searchCountryResult');
    if(remove) remove.parentNode.removeChild(remove);
    var c = document.getElementById('lf1'),
        b = $('#lfContent1 li'),
        l = b.length,
        save = d[0].innerHTML,
        ul = document.createElement("ul");
        ul.id = 'searchCountryResult';
    for(var i = 0; i < l; i++){
        if(b[i].getElementsByTagName('a')[0].innerHTML.indexOf(a.value) != -1){
            var copy = b[i];
            ul.appendChild(copy);
        }
    }
    d[0].innerHTML = save;

    chageIndex(1,c.getAttribute('data-len'),'lf','lfContent','let');
    d[0].style.display = "none";
    document.getElementById('lfContent1').appendChild(ul);
});
$('#f_c_input').bind('keypress',function(event){ 
    console.log(123)
    if(event.keyCode == 13){  
        $("#f_c_submit").click()
    }
})

// 行业搜索
$("#f_c_submit2").click(function(){
    var a = document.getElementById('f_c_input2'),
        ul = document.getElementById('ls_country'),
        d = $('#ls_country li')
    if(!a.value || a.getAttribute('search') == a.value) return false
    // 先把原先的结果保存下来
    if(!a.getAttribute('search')){
        ScrollIndustry = a.innerHTML
    }
    a.setAttribute('search', a.value)
    var remove = document.getElementById('searchIndustryResult')
    if(remove) remove.parentNode.removeChild(remove)
    var l = d.length
    if(l > 0){
        var save = ul.innerHTML
        ulnew = document.createElement("ul")
        ulnew.id = 'searchIndustryResult'
        for(var i = 0; i < l; i++){
            console.log(d[i])
            if(d[i].getElementsByTagName('a')[0].innerHTML.indexOf(a.value) != -1){
                var copy = d[i]
                ulnew.appendChild(copy)
            }
        }
        ul.style.display = 'none'
        returnButton = document.createElement("li")
        returnButton.id = 'f_c_clearSearch'
        returnButton.setAttribute('class', 'floatleft')
        returnButton.innerHTML = '<a href="javascript:void(0)" onclick="industrySearchReturn()">返回全部</a>'
        if(!copy){
            ulnew.innerHTML = '<p class="lh28 floatleft" style="margin-left: 7px;">搜不到您要的行业</p>'
        }
        ulnew.appendChild(returnButton)
        document.getElementById('industry_filter').appendChild(ulnew)
        ul.innerHTML = save
    }
})
$('#f_c_input2').bind('keypress',function(event){
    if(event.keyCode == 13){
        $("#f_c_submit2").click()
    }
})

function industrySearchReturn(){
    document.getElementById('f_c_input2').setAttribute('search', '')
    var remove = document.getElementById('searchIndustryResult')
    if(remove) remove.parentNode.removeChild(remove)
    document.getElementById('ls_country').style.display = 'block'
}


