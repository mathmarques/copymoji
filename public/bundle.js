!function(){"use strict";function e(){document.querySelectorAll(".btn").forEach(e=>{e.addEventListener("click",e=>{!function(e){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(e.currentTarget.textContent)})})}"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?e():document.addEventListener("DOMContentLoaded",e,!1),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").then(null,function(e){console.log("ServiceWorker registration failed: ",e)})})}();
