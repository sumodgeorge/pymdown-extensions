!function(){"use strict";var e;e=function(){"undefined"!=typeof mermaid&&function(i){document.querySelector('[data-md-color-primary^="drac-"]')?mermaid.initialize({startOnLoad:!1,theme:"base",themeVariables:{darkMode:!0,background:"#323443",mainBkg:"#604b7d",textColor:"#bf95f9",lineColor:"#bf95f9",errorBkgColor:"#802c2c",errorTextColor:"#ff5757",primaryColor:"#604b7d",primaryTextColor:"#bf95f9",primaryBorderColor:"#bf95f9",secondaryColor:"#297d3e",secondaryTextColor:"#52fa7c",secondaryBorderColor:"#52fa7c",tertiaryColor:"#303952",tertiaryTextColor:"#6071a4",tertiaryBorderColor:"#6071a4",noteBkgColor:"#797d45",noteTextColor:"#f1fa89",noteBorderColor:"#f1fa89",edgeLabelBackground:"#604b7d",edgeLabelText:"#604b7d",actorLineColor:"#6071a4",activeTaskBkgColor:"#803d63",activeTaskBorderColor:"#ff7ac6",doneTaskBkgColor:"#297d3e",doneTaskBorderColor:"#52fa7c",critBkgColor:"#802c2c",critBorderColor:"#ff5757",taskTextColor:"#bf95f9",taskTextOutsideColor:"#bf95f9",taskTextLightColor:"#bf95f9",sectionBkgColor:"#bf95f9b3",sectionBkgColor2:"#bf95f966",altSectionBkgColor:"#323443",todayLineColor:"#ff7ac6",gridColor:"#6071a4",defaultLinkColor:"#8be8fd",altBackground:"#bf95f9",classText:"#bf95f9",fillType0:"#406080",fillType1:"#46747f",fillType2:"#297d3e",fillType3:"#805c36",fillType4:"#803d63",fillType5:"#604b7d",fillType6:"#802c2c",fillType7:"#797d45",fillType8:"#7c7c79"},flowchart:{htmlLabels:!1},sequence:{useMaxWidth:!1},class:{textHeight:16,dividerMargin:16}}):mermaid.initialize({startOnLoad:!1,theme:"base",flowchart:{htmlLabels:!1},sequence:{useMaxWidth:!1},class:{textHeight:16,dividerMargin:16}});for(var t=mermaid.mermaidAPI.getConfig(),o=document.querySelectorAll("pre.".concat(i)),d=document.querySelector("html"),e=function(e){var r=o[e],a=document.createElement("div");a.style.visibility="hidden",a.style.width="100%",a.style.minWidth="100%",a.style.fontSize=t.themeVariables.fontSize||"16px",d.appendChild(a),mermaid.mermaidAPI.render("_mermaind_".concat(e),function(e){for(var t="",o=0;o<e.childNodes.length;o++){var r=e.childNodes[o];if("code"===r.tagName.toLowerCase())for(var a=0;a<r.childNodes.length;a++){var i=r.childNodes[a];if("#text"===i.nodeName&&!/^\s*$/.test(i.nodeValue)){t=i.nodeValue;break}}}return t}(r),function(e){var t=document.createElement("div");t.className=i,t.innerHTML=e;var o=t.childNodes[0];!o.hasAttribute("height")&&o.hasAttribute("width")&&o.setAttribute("height",a.childNodes[0].getBoundingClientRect().height),r.parentNode.insertBefore(t,r),r.parentNode.removeChild(r)},a)},r=0;r<o.length;r++)e(r)}("mermaid")},document.addEventListener?(document.addEventListener("DOMContentLoaded",e),document.addEventListener("DOMContentSwitch",e)):document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e()})}();