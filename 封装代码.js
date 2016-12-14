               //重要的ajax代码
               $.extendget({
                url: CreateRequest("api/Order/GetOrderList?OpenId=" + localStorage.auth),
                success: function (data) {
                    $.each(data.Data, function (index, rows) {
                        if (rows.ProductId == "") {
                            rows.ProductPicture = "@Url.Content("~/Content/Images/Temp/iPhone7.png")";
                            rows.ProductName = "iphone7 预订";
                        }
                        if (rows.Price != "") {
                            if (rows.PayedMoney != 0) {
                                if (rows.OrderState < 2) {
                                    rows.PayMoney = "待付：" + (parseInt(rows.Price) - rows.PayedMoney) + "元";
                                    rows.Price = "总计：" + rows.Price + "元";
                                    rows.PayedMoney = "已付订金：" + rows.PayedMoney + "元";
                                }
                                else {
                                    rows.PayedMoney = "";
                                    rows.Price = "总计：" + rows.TotalPrice + "元";
                                }
                            }
                            else {
                                rows.PayedMoney = "";
                                rows.Price = "待付：" + parseInt(rows.Price) + "元";
                            }
                        }
                        else {
                            if (rows.PayedMoney != 0) {
                                rows.PayedMoney = "订金：" + rows.PayedMoney + "元";
                            }
                            else {
                                rows.PayedMoney = "订金：1000元";
                            }
                            rows.PayMoney = "";
                        }
                    })
                    $("#orderlist").bindData({ data: data.Data });
                }
            })



//TCSCD万能段落代码
                <div class="board margin">
                    <div class="board_c margin">
                        <ul class="margin_b over">
                            <li class="boarditem rows-margin-1 alignright" data-format="OrderHandler,{{OrderNumber}},{{ProductId}},{{CancelDeadline}},{{WaitingState}}" data-cell="{{OrderState}}">
                                <a href="{{Id}}" class="btn btnDefault radius margin_l"><span>加载中</span></a>
                            </li>
                        </ul>
                    </div>
                </div>


  //倒计时代码
            var timeout = 5;
            var buytime = setInterval(function () {
                $("#buytimeout").text("(" + timeout + "s)")
                if (timeout == 0) {
                    $("#buytimeout").remove();
                    $("#btnbuy").removeClass("btndisable");
                    $("#btnbuy").attr("href", "@Url.Content("~/Order/OrderConfirm?")om=YD");
                    clearInterval(buytime);
                }
                timeout--;
            }, 1000);

//99乘法表，想知道为什么for后面可以不用花括号
var table=new Array(10);
for(var i=0;i<table.length;i++)
	table[i]=new Array(10);
	for(var row=0;row<table.length;row++){
		for(var col=0;col<table.length;col++){
			table[row][col]=row*col;
		}
	}
alert(table[6][7]);

//封装乘法函数
function check(row,col){
alert(row*col);
}
check(7,8);

//在数组中查找所以出现的x,并返回一个包含匹配索引的数组
function findall(a,x){
var results=[];
len=a.length;//待搜索数组的长度
var pos=0;//开始搜索的位置
while(pos<len){
	pos=a.indexOf(x,pos);
	if(pos===-1){break;}
	else{
		results.push(pos);
		pos=pos+1;
}
}
return results;//返回包含索引的数组
};
//注意函数方法的调用，this的用法
var calculator={
operand1:1,
operand2:1,
add:function(){
	this.result=this.operand1+this.operand2;
	return this.result;
    }
}
calculator.add();
alert(calculator.result);

//将数字转换为大写的方法

function digit_uppercase(n) {
var digit = [
'零', '壹', '贰', '叁', '肆',
'伍', '陆', '柒', '捌', '玖'
];
var unit = [
['元', '万', '亿'],
['', '拾', '佰', '仟']
];

var s = '';
for (var i = 0; i < unit[0].length && n > 0; i++) {
var p = '';
for (var j = 0; j < unit[1].length && n > 0; j++) {
p = digit[n % 10] + unit[1][j] + p;
n = Math.floor(n / 10);
}
s = p.replace(/(零.)*零$/, '')
.replace(/^$/, '零')
+ unit[0][i] + s;
}
return s.replace(/(零.)*零元/, '元')
.replace(/(零.)+/g, '零')
.replace(/^$/, '零元') + '整';
}

//alert(100)

// !DOCTYPE html>
//     ml lang="en">
//  <head>
//      <meta charset="UTF-8">
//      <title>最简单的轮播广告</title>
//      <style>
//          body, div, ul, li {
//              margin: 0;
//              padding: 0;
//          }
 
//          ul {
//              list-style-type: none;
//          }
 
//          body {
//              background: #000;
//              text-align: center;
//              font: 12px/20px Arial;
//          }
 
//          #box {
//              position: relative;
//              width: 492px;
//              height: 172px;
//              background: #fff;
//              border-radius: 5px;
//              border: 8px solid #fff;
//              margin: 10px auto;
//          }
 
//          #box .list {
//              position: relative;
//              width: 490px;
//              height: 170px;
//              overflow: hidden;
//              border: 1px solid #ccc;
//          }
 
//          #box .list li {
//              position: absolute;
//              top: 0;
//              left: 0;
//              width: 490px;
//              height: 170px;
//              opacity: 0;
//              transition: opacity 0.5s linear
//          }
 
//          #box .list li.current {
//              opacity: 1;
//          }
 
//          #box .count {
//              position: absolute;
//              right: 0;
//              bottom: 5px;
//          }
 
//          #box .count li {
//              color: #fff;
//              float: left;
//              width: 20px;
//              height: 20px;
//              cursor: pointer;
//              margin-right: 5px;
//              overflow: hidden;
//              background: #F90;
//              opacity: 0.7;
//              border-radius: 20px;
//          }
 
//          #box .count li.current {
//              color: #fff;
//              opacity: 0.7;
//              font-weight: 700;
//              background: #f60
//          }
//      </style>
//  </head>
//  <body>
//  <div id="box">
//      <ul class="list">
//          <li class="current" style="opacity: 1;"><img src="img/images04/01.jpg" width="490" height="170"></li>
//          <li style="opacity: 0;"><img src="3.jpg" width="490" height="170"></li>
//          <li style="opacity: 0;"><img src="3.gif" width="490" height="170"></li>
//          <li style="opacity: 0;"><img src="8.png" width="490" height="170"></li>
//          <li style="opacity: 0;"><img src="3.jpg" width="490" height="170"></li>
//      </ul>
//      <ul class="count">
//          <li class="current">1</li>
//          <li class="">2</li>
//          <li class="">3</li>
//          <li class="">4</li>
//          <li class="">5</li>
//      </ul>
//  </div>
 
 
//  <script>
//      var box=document.getElementById('box');
//      var uls=document.getElementsByTagName('ul');
//      var imgs=uls[0].getElementsByTagName('li');
//      var btn=uls[1].getElementsByTagName('li');
//      var i=index=0;  //中间量，统一声明；
//      var play=null;
//      console.log(box,uls,imgs,btn);//获取正确
 
//      //图片切换, 淡入淡出效果我是用（transition: opacity 0.8s linear）做的,不纠结、简单 在css里面
//      function show(a){               //方法定义的是当传入一个下标时，按钮和图片做出对的反应
//          for(i=0;i<btn.length;i++ ){
//              btn[i].className='';       //很容易看懂吧？每个按钮都先设置成看不见，然后把当前按钮设置成可见。
//              btn[a].className='current';
//          }
//          for(i=0;i<imgs.length;i++){  //把图片的效果设置和按钮相同
//              imgs[i].style.opacity=0;
//              imgs[a].style.opacity=1;
//          }
//      }
//      //切换按钮功能，响应对应图片
//      for(i=0;i<btn.length;i++){
//          btn[i].index=i;    //不知道你有没有发现，循环里的方法去调用循环里的变量体i，会出现调到的不是i的变动值的问题。所以我先在循环外保存住
//          btn[i].onmouseover=function(){
//              show(this.index);
//              clearInterval(play); //这就是最后那句话追加的功能
//          }
//      }
 
//      //自动轮播方法
//  function autoPlay(){
//              play=setInterval(function(){  //这个paly是为了保存定时器的，变量必须在全局声明 不然其他方法调不到 或者你可以调用auto.play 也许可以但是没时间试了
//              index++;
//              index>=imgs.length&&(index=0);//可能有优先级问题，所以用了括号，没时间测试了。
//              show(index);
//          },1000)
//      }
//      autoPlay();//马上调用，我试过用window.onload调用这个方法，但是调用之后影响到了其他方法，使用autoPlay所以只能这样调用了
 
//      //div的鼠标移入移出事件
//      box.onmouseover=function(){
//          clearInterval(play);
//      };
//      box.onmouseout=function(){
//          autoPlay();
//      };
//      //按钮下标也要加上相同的鼠标事件，不然图片停止了，定时器没停，会突然闪到很大的数字上。 貌似我可以直接追加到之前定义事件中。
 
//  </script>
//  </body>
//  </html>
// <!DOCTYPE html>
选项卡
// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<title>Document</title>
// 		<script src="jquery1.11.js"></script>
// 	<style>
// .active{
// 	background: #f00;
// }
// div{
// 	width: 200px;
// 	height: 200px;
// 	background: #ccc;
// 	display: none;
// }
// .show{
// 	display: block;
// }



// 	</style>
// </head>
// <body>
// <input type="button" value="全选" id="button1" class="active">
// <input type="button" value="不选" id="button2">
// <input type="button" value="反选" id="button3">
// <div id="div1" class="show">
// fgsdfgs1111
// </div>
// <div id="div2">
// fgsdfgs2222222</div>
// <div id="div3">
// fgsdfgs333333
// </div>
// <div id="div4">
// fgsdfgs44444444
// </div>
// <script>
// var list=document.getElementsByTagName('input');
// var div=document.getElementsByTagName('div');
// for(var i=0;i<list.length;i++){
// 	list[i].index=i;
// 	list[i].onclick=function(){
// 		for(var i=0;i<list.length;i++){

// 		list[i].className="";
// 		div[i].style.display="none";	
// 		}
		
// 		this.className="active";
// 		div[this.index].style.display="block";
// 	}
// }

// </script>
	
// </body>
// </html>
悬浮窗 缓冲运动
// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<title>Document</title>

// 	<style>
// body{
// 	height: 2000px;
// }
// #div1{
// 	width: 150px;
// 	height: 200px;
// 	background: green;
// 	position:absolute;
// }
// #div1 span{
// position: absolute;
// width: 20px;
// height: 60px;
// right: -20px;
// top: 70px;
// background: blue;
// }

// 	</style>
// 	<script>
// window.onscroll=function(){
// var oDiv=document.getElementById('div1');
// var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;

// move(document.documentElement.clientHeight-oDiv.offsetHeight+scrollTop)
// }
// var timer=null;
// function move(iTarget){
// var oDiv=document.getElementById('div1');
// clearInterval(timer);
// timer=setInterval(function(){
// var speed=(iTarget-oDiv.offsetTop)/6;
// speed=speed>0?Math.ceil(speed):Math.floor(speed);
// if(oDiv.offsetTop==iTarget){
// 	clearInterval(timer)
// }else{
// 	oDiv.style.top=oDiv.offsetTop+speed+"px"
// }

// },30)

// }



// </script>
// </head>
// <body>
// <input type="button" value="添加" id="button1">
// <div id="div1">
// </div>
// <div id="div2"></div>
// <!-- <ul id="list">
// <li>dfdfad<a href="javascript:;">删除</a></li>
// <li>fadsfads<a href="javascript:;">删除</a></li>
// <li>fadsfads<a href="javascript:;">删除</a></li>
// <li>fadfasd<a href="javascript:;">删除</a></li>
// <li>fadfa<a href="javascript:;">删除</a></li>
// <li>dfadsa<a href="javascript:;">删除</a></li>
// </ul> -->

	
// </body>
// </html>
多物体运动框架 利用循环和参数给每个div一个定时器
// window.onload=function(){
// var oDiv=document.getElementsByTagName('div');
// for(var i=0;i<oDiv.length;i++){
// oDiv[i].timer=null;
// oDiv[i].onmouseover=function(){
// 	move(this,400)
// }
// oDiv[i].onmouseout=function(){
// 	move(this,100)
// }
// }

// }
// var timer=null;
// function move(obj,iTarget){

// clearInterval(obj.timer)
// obj.timer=setInterval(function(){
// var speed=(iTarget-obj.offsetWidth)/6;
// if(obj.offsetWidth==iTarget){
// clearInterval(obj.timer);}
// else{
// 	obj.style.width=obj.offsetWidth+speed+"px";
// }




// },30)

// }


// </script>
// </head>
// <body>
// <input type="button" value="添加" id="button1">
// <div id="div1">
// </div>
// <div></div>
// <div></div>

