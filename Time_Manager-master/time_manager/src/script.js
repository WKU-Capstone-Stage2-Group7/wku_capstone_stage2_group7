
function showList(o) {
    hideList("dropdown-content" + o.id);
    document.getElementById("dropdown-" + o.id).classList.toggle("show");
}
 
 
function hideList(option) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
     
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.id != option) {
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
 
 
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        hideList("");
    }
}

function jump()
{
    window.location.href="new.html";
    
}   
var curIndex = 0;
var arr = new Array();
arr[0] = "6.jpg";
arr[1] = "1.jpg";
arr[2] = "7.jpg";
arr[3] = "4.jpg";
arr[4] = "5.jpg";
arr[5] = "2.jpg";
arr[6] = "3.jpg";
function switchbg () {
 
    //时间间隔(单位毫秒)，每秒钟显示一张，数组共有3张图片放在img文件夹下
    // var timeInterval = 10000;
                            //定义一个存放照片位置的数组，可以放任意个，在这里放3个
    if (curIndex == arr.length - 1) {
    curIndex = 0;
    } else {
    curIndex += 1;
    }
    
                                      //设置body的背景图片
    document.body.style.backgroundImage = "URL("+arr[curIndex]+")";  //显示对应的图片
    // document.body.style=" background-repeat:no-repeat ;background-size:100% 100%;background-attachment: fixed;"
}

function OnLoad(){
    var tab="";
//     var url=window.location.href;
//     var a=url.indexOf('=');
  
//   if (aa == -1)
//     {return "";

// }
//     url=url.substring(aa+1);
//     window.alert(url);
/*对穿传过来的参数进行处理*/
   var url = window.location.search;

   var request = new Object();

      if(url.indexOf("?")!=-1){  ///<!--判断是否存在，如果返回-1，则表明不存在-->

      var str = url.substr(1);   //<!--从第1个字符开始截取-->

      var strs = str.split("&");//·<!--表示以“&’”为分隔符进行分隔，返回的是一个数组-->

      for(var i=0;i<strs.length;i++){

request[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);

      }

   }

 var date_year=request["date_value"].substring(0,4);
 var date_month=request["date_value"].substring(5,7);
 var date_day=request["date_value"].substring(8,10);
 var date_hour=request["date_value"].substring(11,13);
 var date_minute=request["date_value"].substring(14,16);
// var date_text=document.createTextNode(date_year);

//(parseInt(date_month)-1)
console.log(parseInt(date_year),4,parseInt(date_day),parseInt(date_hour),parseInt(date_minute),0);

console.log(date_month);
console.log(date_day);
console.log( date_hour);
console.log(date_minute);
time=new Date(parseInt(date_year),parseInt(date_month)-1,parseInt(date_day),parseInt(date_hour),parseInt(date_minute));
console.log(time);
var nowTime=new Date();//获取当前时间
console.log(nowTime); 
var timeDifference=time.getTime()-nowTime.getTime();//时间差的毫秒数 
console.log(timeDifference);
if(timeDifference<0)
{ 
//return “超过规定处理时间”; 
}else{ 
var days=Math.floor(timeDifference/(24*3600*1000));//计算出相差天数 
var leave1=timeDifference%(24*3600*1000); //计算天数后剩余的毫秒数 
var hours=Math.floor(leave1/(3600*1000)); //计算出小时数 
var leave2=leave1%(3600*1000); //计算小时数后剩余的毫秒数 
var minutes=Math.floor(leave2/(60*1000));//计算相差分钟数 
var leave3=leave2%(60*1000); //计算分钟数后剩余的毫秒数 
var seconds=Math.round(leave3/1000); //计算相差秒数 

//return days+”天 “+hours+”小时 “+minutes+” 分钟”+seconds+” 秒”; 

div1 = document.getElementById('div1');
                //Dynamically add a favorite image table
tab+='<div >DDL: '+ date_year+'/'+date_month+'/'+date_day+'  '+date_hour+':'+date_minute+' Task Name: ' +request["tit_value"]+' '+' You have:  '+days+' Days '+hours+' Hours '+minutes+ ' Minutes '+seconds+' Seconds '+'</div>';
console.log(tab);
div1.innerHTML=tab
}

}

window.onload = function () {
    //         var elementnode = document.createElement("li");
    // 　　　　//var elementnode.setAttribute("id","text");
    // 　　　　var context = document.createTextNode("新建文本节点");
    // 　　　　elementnode.appendChild(context);
    // 　　　　var list = document.getElementById("subject")
    // 　　　　list.insertBefore(elementnode,list.childNodes[2]);
}

setInterval("OnLoad()", 1000)
