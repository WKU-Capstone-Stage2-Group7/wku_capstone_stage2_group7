
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
function return_jump()
{
    window.history.back();
}
function success()
{
    // var form1=document.getElementById("form1");
    // var field1=form1.elements[0];
    // alert(filed1.value)

    var tit=document.getElementById("input_title");
    tit_value=tit.value;
    var date=document.getElementById("date1")
    var date_value=date.value;

   // var url = "time.html?tit_value="+escape(tit_value);
    var url = "time.html?tit_value="+escape(tit_value);
    url +="&date_value="+escape(date_value); 
    //window.history.back();
    window.location = url ;
   // window.history.back();
    //window.location.href="time.html?a=tit_value";
}
//window.history.back();