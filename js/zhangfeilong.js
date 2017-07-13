
//头部部分的代码
var myheader = document.createElement( 'div' );
myheader.id = 'myheader';
var header = document.getElementById("header");
myheader.innerHTML = [
		'<div class="myheader_top">',
			'<a id="logo" href="https://www.baidu.com/">',
				'<img src="picture/baidu_jgylogo3.gif">',
			'</a>',
			'<span id="quick_search">',
				'<input id="fm" type="text" value=" " style="font-size:16px;font-weight:200px;">',
				'<span id="camera">',
				'</span>',
			'</span>',
			'<span id="btn_link">',
				'<input id="btn" type="submit" value="百度一下">',
			'</span>',
			'<div id="user_daohang">',
				'<a href="###" class="user_link">百度首页</a>',
				'<a  href="###" class="user_link">消息</a>',
				'<div class="user_link" id="set_link">',
					'设置',
					'<i class="c_icon">',
					'</i>',
					'<div id="hid_item1">',
					'<div class="conner_icon">',
					'</div>',
					'<a href="###" class="link_li">',
						'搜索设置',
					'</a>',
					'<a href="###" class="link_li">',
						'高级搜索',
					'</a>',
					'<a href="###" class="link_li">',
						'关闭预测',
					'</a>',
					'<a  href="###" class="link_li">',
						'搜索历史',
					'</a>',
				'</div>',
			'</div>',
			'<div class="user_link" id="name_link">',
				'rqdfgdfh',
				'<i class="c_icon">',
				'</i>',
				'<div id="hid_item2">',
					'<div class="conner_icon">',
					'</div>',
					'<a href="###" class="link_li">',
						'我的VIP',
					'</a>',
					'<a href="###" class="link_li">',
						'个人中心',
					'</a>',
					'<a href="###" class="link_li">',
						'账号设置',
					'</a>',
					'<a href="###" class="link_li">',
						'意见反馈',
					'</a>',
					'<a href="###" class="link_li">',
						'退出',
					'</a>',
				'</div>',
			'</div>',
			'</div>',
		'</div>',
		'<div id="myheader_item">',
			'<ul>',
				'<li id="first_item">',
					'<a href="###">网页</a>',
				'</li>',
				'<li>',
					'<a href="###">新闻</a>',
				'</li>',
				'<li>',
					'<a href="###">贴吧</a>',
				'</li>',
				'<li>',
					'<a href="###">知道</a>',
				'</li>',
				'<li>',
					'<a href="###">音乐</a>',
				'</li>',
				'<li>',
					'<a href="###">图片</a>',
				'</li>',
				'<li>',
					'<a href="###">视频</a>',
				'</li>',
				'<li>',
					'<a href="###">地图</a>',
				'</li>',
				'<li>',
					'<a href="###">文库</a>',
				'</li>',
				'<li>',
					'<a href="###">更多»</a>',
				'</li>',
			'</ul>',
		'</div>',
		'<div class="header_botom">',
			'<div id="message">',
			'<div id="result_nums">',
				'百度为您找到相关结果约96,000,000个',
				'<div id="icon_1">',
				'搜索工具',
				'<span class="search_tool1">',
				'<span/>',
				'</div>',
			'</div>',
			'<div id="tools">',
				'<span  class="result_tool">',
					'时间不限',
					'<i class="triangle">',
					'</i>',
				'</span>',
				'<span class="result_tool">',
					'所有网页和文件',
					'<i class="triangle">',
					'</i>',
				'</span>',
				'<span class="result_tool">',
					'站点内检索',
					'<i class="triangle">',
					'</i>',
				'</span>',
				'<div id="icon_2">',
				'收起工具',
				'<i class="search_tool2">',
				'<i/>',
				'</div>',
			'</div>',
			'</div>',
		'</div>',
].join('');
header.appendChild( myheader );


//侧栏部分代码
var my_side = document.createElement('div');
my_side.id = "my_side";
var side = document.getElementById("side");
my_side.innerHTML = [
	'<div class="side_item">',
			'今日生活指数',
		'</div>',
		'<div class="data">',
			'<table>',
				'<tr>',
					'<td>汽车指数：</td>',
					'<td>不宜</td>',
				'</tr>',
				'<tr>',,
					'<td>旅游指数：</td>',
					'<td>一般</td>',
				'</tr>',
				'<tr>',
					'<td>紫外线指数：</td>',
					'<td>弱</td>',
				'</tr>',
				'<tr>',
					'<td>感冒指数：</td>',
					'<td>少发</td>',
				'</tr>',
				'<tr>',
					'<td>运动指数：</td>',
					'<td>较不宜</td>',
				'</tr>',
			'</table>',
		'</div>',
		'<a href="###" id="more_link">查看更多>></a>',
		'<div class="side_all">',
		'<div class="tles">',
			'<span class="tle">世界上最热的地方</span>',
			'<a id="moer_pic" href="###">',
				'<span id="dianji">展开</span>',
				'<i class="icon"></i>',
			'</a>',
		'</div>',
		'<div class="ph_item">',
			'<div>',
				'<a href="###">',
					'<img src="picture/1.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'美国死亡谷',
				'</a>',
				'<p class="trans">最高气温可达56摄氏度</p>',
			'</div>',
			'<div>',
				'<a href="###">',
					'<img src="picture/2.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'埃塞俄比亚马萨瓦',
				'</a>',
				'<p class="trans">全年平均高达30摄氏度</p>',
			'</div>',
			'<div>',
			'<a href="###">',
					'<img src="picture/3.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'利比亚卢特沙漠',
				'</a>',
				'<p class="trans">最高气温可达71摄氏度</p>',
			'</div>',
			'<div id="last_item">',
			'<a href="###">',
					'<img src="picture/4.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'利比亚阿济济耶',
				'</a>',
				'<p class="trans">曾有58.8摄氏度的高温</p>',
			'</div>',
			'<div class="showpic">',
			'<a href="###">',
					'<img src="picture/5.jpg" />',
			'</a>',
				'<a id="tle_link" href="###">',
					'泰国曼谷',
				'</a>',
				'<p class="trans"></p>',
			'</div>',
			'<div class="showpic">',
			'<a href="###">',
					'<img src="picture/6.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'埃塞俄比亚达洛尔',
				'</a>',
				'<p class="trans"></p>',
			'</div>',
			'<div class="showpic">',
			'<a href="###">',
					'<img src="picture/7.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'索马里柏培拉',
				'</a>',
				'<p class="trans"></p>',
			'</div>',
			'<div id="last_item" class="showpic">',
			'<a href="###">',
					'<img src="picture/8.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'埃塞俄比亚达纳基尔...',
				'</a>',
				'<p class="trans"></p>',
			'</div>',
		'</div>',
		'<div class="tles">',
			'<span class="tle">世界上下雨最多的地方</span>',
			'<a id="moer_pic2" href="###">',
				'<span id="dianji2">展开</span>',
				'<i class="icon2"></i>',
			'</a>',
		'</div>',
		'<div class="ph_item">',
			'<div>',
				'<a href="###">',
					'<img src="picture/9.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'印度乞拉朋齐',
				'</a>',
				'<p class="trans">被称为世界雨极</p>',
			'</div>',
			'<div>',
				'<a href="###">',
					'<img src="picture/10.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'门的内哥罗',
				'</a>',
				'<p class="trans">首都年降水量超3.8米</p>',
			'</div>',
			'<div>',
			'<a href="###">',
					'<img src="picture/11.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'夏威夷考艾岛',
				'</a>',
				'<p class="trans">东北坡年降雨量超11米</p>',
			'</div>',
			'<div id="last_item">',
			'<a href="###">',
					'<img src="picture/12.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'加拿大亨德森湖',
				'</a>',
				'<p class="trans">年降水量6.5米</p>',
			'</div>',
			'<div class="showpic">',
			'<a href="###">',
					'<img src="picture/13.jpg" />',
			'</a>',
				'<a id="tle_link" href="###">',
					'加勒比海瓜德罗普',
				'</a>',
				'<p class="trans"></p>',
			'</div>',
			'<div class="showpic">',
			'<a href="###">',
					'<img src="picture/14.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'留尼汪',
				'</a>',
				'<p class="trans"></p>',
			'</div>',
			'<div class="showpic">',
			'<a href="###">',
					'<img src="picture/15.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'印度Mawsynram',
				'</a>',
				'<p class="trans"></p>',
			'</div>',
			'<div id="last_item" class="showpic">',
			'<a href="###">',
					'<img src="picture/16.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'澳大利亚贝伦登克尔岭',
				'</a>',
				'<p class="trans"></p>',
			'</div>',
		'</div>',
		'<div class="tles">',
			'<span class="tle">罕见的奇葩天气</span>',
			'<a id="moer_pic3" href="###">',
				'<span id="dianji3">展开</span>',
				'<i class="icon3"></i>',
			'</a>',
		'</div>',
		'<div class="ph_item">',
			'<div>',
				'<a href="###">',
					'<img src="picture/9.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'幡状云',
				'</a>',
				'<p class="trans">自然界的一个奇观</p>',
			'</div>',
			'<div>',
				'<a href="###">',
					'<img src="picture/10.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'空间天气',
				'</a>',
				'<p class="trans">主要由太阳活动引起</p>',
			'</div>',
			'<div>',
			'<a href="###">',
					'<img src="picture/11.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'空中降鱼',
				'</a>',
				'<p class="trans">一种天气现象</p>',
			'</div>',
			'<div id="last_item">',
			'<a href="###">',
					'<img src="picture/12.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'火旋风',
				'</a>',
				'<p class="trans">自然灾害来袭</p>',
			'</div>',
			'<div class="showpic kk">',
			'<a href="###">',
					'<img src="picture/13.jpg" />',
			'</a>',
				'<a id="tle_link" href="###">',
					'卡塔通博闪电',
				'</a>',
				'<p class="trans"></p>',
			'</div>',
			'<div class="showpic kk">',
			'<a href="###">',
					'<img src="picture/14.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'火彩虹',
				'</a>',
				'<p class="trans"></p>',
			'</div>',
			'<div class="showpic kk">',
			'<a href="###">',
					'<img src="picture/15.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'绿色闪光',
				'</a>',
				'<p class="trans"></p>',
			'</div>',
			'<div id="last_item" class="showpic kk">',
			'<a href="###">',
					'<img src="picture/16.jpg" />',
				'</a>',
				'<a id="tle_link" href="###">',
					'灰尘雷暴',
				'</a>',
				'<p class="trans"></p>',
			'</div>',
			'</div><a href="###" id="sugestions">给百度提供建议</a>',
		'</div>',
		'</div>',
].join('');
side.appendChild( my_side );

//下面更多搜索栏代码
var more_search = document.createElement('div');
more_search.id = "more_search";
var wrapper = document.getElementById("wrapper");
more_search.innerHTML = [
	'<div class="tt">',
		'相关搜索',
	'</div>',
	'<table >',
		'<tr>',
			'<td class="table2">',
				'<a href="###">',
					'天气预报',
				'</a>',
			'</td>',
			'<td>',
				'<a href="###">',
					'上海天气',
				'</a>',
			'</td>',
			'<td>',
				'<a href="###">',
					'北京天气',
				'</a>',
			'</td>',
		'</tr>',
		'<tr>',
			'<td>',
				'<a href="###">',
					'深圳天气',
				'</a>',
			'</td>',
			'<td>',
				'<a href="###">',
					'广州天气',
				'</a>',
			'</td>',
			'<td>',
				'<a href="###">',
					'武汉天气',
				'</a>',
			'</td>',
		'</tr>',
		'<tr>',
			'<td>',
				'<a href="###">',
					'杭州天气',
				'</a>',
			'</td>',
			'<td>',
				'<a href="###">',
					'南京天气',
				'</a>',
			'</td>',
			'<td>',
				'<a href="###">',
					'苏州天气',
				'</a>',
			'</td>',
		'</tr>',
	'</table>',
].join('');
wrapper.appendChild(more_search);


//网页页码显示代码
var pages = document.createElement("div");
pages.id ="pages";
pages.innerHTML = [
	'<div>',
		'<a class="page_item" href="###">',
			'<span class="foot_icon"></span>',
			'<span class="numbers1" >1</span>',
		'</a>',
		'<a class="page_item" href="###">',
			'<span class="foot_icon1"></span>',
			'<span class="numbers">2</span>',
		'</a>',
		'<a class="page_item" href="###">',
			'<span class="foot_icon2"></span>',
			'<span class="numbers">3</span>',
		'</a>',
		'<a class="page_item" href="###">',
			'<span class="foot_icon1"></span>',
			'<span class="numbers">4</span>',
		'</a>',
		'<a class="page_item" href="###">',
			'<span class="foot_icon2"></span>',
			'<span class="numbers">5</span>',
		'</a>',
		'<a class="page_item" href="###">',
			'<span class="foot_icon1"></span>',
			'<span class="numbers">6</span>',
		'</a>',
		'<a class="page_item" href="###">',
			'<span class="foot_icon2"></span>',
			'<span class="numbers">7</span>',
		'</a>',
		'<a class="page_item" href="###">',
			'<span class="foot_icon1"></span>',
			'<span class="numbers">8</span>',
		'</a>',
		'<a class="page_item" href="###">',
			'<span class="foot_icon2"></span>',
			'<span class="numbers">9</span>',
		'</a>',
		'<a class="page_item" href="###">',
			'<span class="foot_icon1"></span>',
			'<span class="numbers">10</span>',
		'</a>',
		'<a href="###" id="next_page">下一页></a>',
		'</div>',
 
].join('');
wrapper.appendChild(pages);

var quick_search = document.getElementById("quick_search");
quick_search.onmouseover = function () {
	quick_search.style.border ="1px solid #7b7b7b";
}
quick_search.onmouseout = function () {
	quick_search.style.border ="1px solid #b6b6b6";
}

//侧栏  点击事件（图片区域的展开与收缩）
var moer_pic = document.getElementById("moer_pic");
moer_pic.onclick = function (){
	var dianji = document.getElementById("dianji");
	if(dianji.innerText=="展开"){
		var moer_pic = document.getElementById("moer_pic");
		 moer_pic.innerHTML = [
			'<span id="dianji">收起</span>',
			'<i class="icon"></i>',
		].join('');
		var icon = document.getElementsByClassName("icon");
		icon[0].style.backgroundPosition = "-96px -168px";
		var showpic = document.getElementsByClassName("showpic");
		for(var i=0;i<showpic.length ;i++){
			showpic[i].style.display= "inline-block";
		}
	}
	if(dianji.innerText=="收起"){
		var moer_pic = document.getElementById("moer_pic");
		 moer_pic.innerHTML = [
			'<span id="dianji">展开</span>',
			'<i class="icon"></i>',
		].join('');
		var icon = document.getElementsByClassName("icon");
		icon[0].style.backgroundPosition = "-72px -168px";
			var showpic = document.getElementsByClassName("showpic");
		for(var i=0;i<4 ;i++){
			showpic[i].style.display = "none";
		}
	}	
}


var moer_pic2 = document.getElementById("moer_pic2");
moer_pic2.onclick = function (){
	var dianji2 = document.getElementById("dianji2");
	if(dianji2.innerText=="展开"){
		var moer_pic2 = document.getElementById("moer_pic2");
		 moer_pic2.innerHTML = [
			'<span id="dianji2">收起</span>',
			'<i class="icon2"></i>',
		].join('');
		var icon2 = document.getElementsByClassName("icon2");
		icon2[0].style.backgroundPosition = "-96px -168px";
		var showpic = document.getElementsByClassName("showpic");
		for(var i=4;i<8 ;i++){
			showpic[i].style.display= "inline-block";
		}
	}
	if(dianji2.innerText=="收起"){
		var moer_pic2 = document.getElementById("moer_pic2");
		 moer_pic2.innerHTML = [
			'<span id="dianji2">展开</span>',
			'<i class="icon2"></i>',
		].join('');
		var icon2 = document.getElementsByClassName("icon2");
		icon2[0].style.backgroundPosition = "-72px -168px";
			var showpic = document.getElementsByClassName("showpic");
		for(var i=4;i<8 ;i++){
			showpic[i].style.display = "none";
		}
	}	
}

var moer_pic3 = document.getElementById("moer_pic3");
moer_pic3.onclick = function (){
	var dianji3 = document.getElementById("dianji3");
	if(dianji3.innerText=="展开"){
		var moer_pic3 = document.getElementById("moer_pic3");
		 moer_pic3.innerHTML = [
			'<span id="dianji3">收起</span>',
			'<i class="icon3"></i>',
		].join('');
		var icon3 = document.getElementsByClassName("icon3");
		icon3[0].style.backgroundPosition = "-96px -168px";
		var showpic = document.getElementsByClassName("showpic");
		for(var i=8;i<12 ;i++){
			showpic[i].style.display= "inline-block";
		}
	}
	if(dianji3.innerText=="收起"){
		var moer_pic3 = document.getElementById("moer_pic3");
		 moer_pic3.innerHTML = [
			'<span id="dianji3">展开</span>',
			'<i class="icon3"></i>',
		].join('');
		var icon3 = document.getElementsByClassName("icon3");
		icon3[0].style.backgroundPosition = "-72px -168px";
			var showpic = document.getElementsByClassName("showpic");
		for(var i=8;i<12 ;i++){
			showpic[i].style.display = "none";
		}
	}	
}


var set_link =document.getElementById("set_link");
set_link.onmouseover = function () {
	var  hid_item1 = document.getElementById("hid_item1");
	hid_item1.style.display= "inline-block";
}
set_link.onmouseout = function () {
	var  hid_item1 = document.getElementById("hid_item1");
	hid_item1.style.display= "none";
}

var name_link =document.getElementById("name_link");
name_link.onmouseover = function () {
	var  hid_item2 = document.getElementById("hid_item2");
	hid_item2.style.display= "inline-block";
}
name_link.onmouseout = function () {
	var  hid_item2 = document.getElementById("hid_item2");
	hid_item2.style.display= "none";
}


var icon_1 = document.getElementById("icon_1");
icon_1.onclick = function(){
	var tools = document.getElementById("tools");
	var result_nums = document.getElementById("result_nums");
	var message = document.getElementById("message");
	move(message,-42,10);
	
}


var tools = document.getElementById("tools");
tools.onclick = function(){
	var tools = document.getElementById("tools");
	var result_nums = document.getElementById("result_nums");
	var message = document.getElementById("message");
	move(message,0,10);
	
}


function move(element,y,interval){
	var ele = document.getElementById("message");
	if(ele.movement){
		clearTimeout(ele.movement);
	}
	if(!ele.style.top){
		ele.style.top = "0px";
	}
	var ypos=parseInt(ele.style.top);
	var dist =0;
	if(ypos==y){
		return true;
	}
	if(ypos>y){
			dist = Math.ceil((ypos-y)/10);
			ypos = ypos-dist;
		}
	if(ypos<y){
		dist = Math.ceil((y-ypos)/10);
		ypos = ypos+dist;
	}
	ele.style.top = ypos + 'px';
		var repeat = "move('"+element+"',"+y+","+interval+")";
		ele.movement =setTimeout(repeat,interval);
}


