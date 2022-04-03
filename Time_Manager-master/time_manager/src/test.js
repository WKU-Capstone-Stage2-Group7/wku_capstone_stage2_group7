function on()
{
　　　　var elementnode = document.createElement("li");
　　　　//var elementnode.setAttribute("id","text");
　　　　var context = document.createTextNode("新建文本内容节点");
　　　　elementnode.appendChild(context);
　　　　var list = document.getElementById("list")
　　　　list.insertBefore(elementnode,list.childNodes[2]);
}
