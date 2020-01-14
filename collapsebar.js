// khe khe khe{chinese sarcastic laughter}
var btn = document.querySelector('button');
var menuList = document.querySelector(".hidden");
btn.onclick = function(){
//    var btnIni = btn.getAttribute("class");
   if(btn.textContent === "view"){
       btn.textContent = "X";
       menuList.className ="shown";
       menuList.style.listStyleType = 'none';
       menuList.style.textAlign = 'right';
   } else {
       btn.textContent = "view";
       menuList.className = "hidden";
   }
}