document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label"),r=e.name;t.classList.add("field-label"),t.setAttribute("for",e.id),t.textContent=r;var a=r.charAt(0).toUpperCase()+r.slice(1).toLowerCase();e.placeholder=a,e.parentNode.insertBefore(t,e)});
//# sourceMappingURL=index.2e7898d5.js.map
