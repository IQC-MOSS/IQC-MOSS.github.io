var h = window.innerHeight,w=window.innerWidth;  
////禁用右键 （防止右键查看源代码）  
window.oncontextmenu=function(){return false;}  
////在本网页的任何键盘敲击事件都是无效操作 （防止F12和shift+ctrl+i调起开发者工具）  
window.onkeydown = window.onkeyup = window.onkeypress = function () {  
  window.event.returnValue = false;  
  return false;  
}