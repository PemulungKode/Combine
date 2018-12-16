$("img").each(function(){$(this).attr("data-src",$(this).attr("src"));$(this).attr("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")});
function init(){var e=document.getElementsByTagName("img");for(var t=0;t<e.length;t++){if(e[t].getAttribute("data-src")){e[t].setAttribute("src",e[t].getAttribute("data-src"))}}}window.onload=init;
var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    images[i].src = images[i].src.replace(/.*?:\/\//g , "https://cdn.staticaly.com/img/");
  }