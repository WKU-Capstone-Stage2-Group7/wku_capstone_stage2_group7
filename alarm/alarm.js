var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Alarm Professor");
    span.className = "alarm";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let data = {
    email:'724252669@qq.com',
}

var alarm = document.getElementsByClassName("alarm");
var i;
for (i = 0; i < alarm.length; i++) {
    alarm[i].onclick = function () {
		var div = this.parentElement;
		var tx=div.innerText;
		tx=tx.replace("Alarm Professor","");
		tx=tx.replace("\n","");
        var comf=window.confirm("Are you sure to alarm your professor to send the recommendation letter for "+tx+" ?");
		if (comf==true){
			sendEmail(data) 
		}
    }
}
