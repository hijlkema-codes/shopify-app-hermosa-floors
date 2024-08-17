(()=>{var c=(e,t="generic",r=void 0,...a)=>{let s=e.querySelector("[data-errors]"),i=s.content.querySelector(`[data-error="${t}"]`);i||(i=s.content.querySelector("[data-error='generic']"));let q=i.cloneNode(!0);e.appendChild(q),e.setAttribute("aria-invalid","true"),r&&console.warn(r,...a)},p=e=>{e.querySelectorAll("[data-error]").forEach(r=>{r.remove()}),e.setAttribute("aria-invalid","false")};var f={parse_float:e=>parseFloat(e),parse_boolean:e=>["true","1","on","yes"].includes(e.toLowerCase()),to_string:e=>new Intl.NumberFormat(void 0,{currency:"EUR",style:"currency"}).format(e/100)},n=(e,t)=>t.reduce((r,a)=>f[a]?f[a](r):r,e);var u=(e,t)=>{let r=document.querySelector(`[data-value-target="${e}"]`);if(r)if(r.hasAttribute("data-value-target-attribute")){let a=r.getAttribute("data-value-target-attribute");r.setAttribute(a,t);return}else r.innerHTML=t},o=(e,t,r=[])=>{let a="";return e.hasAttribute(t)&&(a=e.getAttribute(t)),e.dataset[t]&&(a=e.dataset[t]),n(a,r)},h=(e,t=[])=>{let r="";return e.tagName==="INPUT"&&(r=e.value),n(r,t)},m=(e,t)=>{t.forEach(r=>{e.addEventListener(r.type,r.handler)})},d=(e,t=!0)=>{t?(e.setAttribute("disabled",!0),e.classList.add("loading"),e.setAttribute("aria-busy","true")):(e.removeAttribute("disabled"),e.classList.remove("loading"),e.setAttribute("aria-busy","false"))};var b=(e,t)=>Math.ceil(e*(1+t/100)),g=(e,t)=>Math.ceil(e/t);var y=async(e,t)=>(await fetch(window.Shopify.routes.root+"cart/add.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:[{id:e,quantity:t}]})})).json();var v="cart-drawer",E=()=>{let e=document.querySelector(v);e&&(e.update?.(),e.purchaseHandler?.(),e.open?.())};var S="package-calculator";var l=class extends HTMLElement{connectedCallback(){super.connectedCallback?.(),this.addEventListener("input",this.#t.bind(this)),m(this.querySelector("form"),[{type:"submit",handler:this.#r.bind(this)}])}#t(t){t.preventDefault(),this.setAttribute("aria-expanded","true");let r=t.target.valueAsNumber;if(!this.#s(r)){this.#o(1);return}let a=this.#a(r);this.#e(a)}async#r(t){t.preventDefault(),p(this);let r=h(this.querySelector('input[name="square_meters"]'),["parse_int"]),a=o(this,"productId"),s=o(this.querySelector('input[name="quantity"]'),"value",["parse_int"]);if(!r){c(this,"missing-fields","Surface area is required.",{squareMeters:r});return}if(!a){c(this,"generic","Product ID not found.");return}if(!s){c(this,"missing-fields","Quantity is required.",{quantity:s});return}d(this),await y(a,s),d(this,!1),E()}#a(t){return b(t,o(this,"cutoffPercentage",["parse_float"]))}#e(t){let r=o(this,"squareMetersPerPackage",["parse_float"]),a=o(this,"productPrice",["parse_float"]),s=g(t,r),i=n(s*a,["to_string"]);u("selected-packs",s),u("entered-surface-area",t),u("totals",i),u("quantity",s)}#s(t){return!(!t||isNaN(t)||t<1)}#o(t=1){let r=this.querySelector('input[name="square_meters"]');r.value=t,this.#e(t)}};customElements.get(S)||customElements.define(S,l);})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vcmVzb3VyY2VzL2V4dGVuc2lvbnMvaGVybW9zYS1mbG9vcnMtdGhlbWUtYmxvY2tzL3V0aWxzL2Vycm9ycy5tanMiLCAiLi4vLi4vLi4vcmVzb3VyY2VzL2V4dGVuc2lvbnMvaGVybW9zYS1mbG9vcnMtdGhlbWUtYmxvY2tzL3V0aWxzL3RyYW5zZm9ybWVycy5tanMiLCAiLi4vLi4vLi4vcmVzb3VyY2VzL2V4dGVuc2lvbnMvaGVybW9zYS1mbG9vcnMtdGhlbWUtYmxvY2tzL3V0aWxzL2h0bWwubWpzIiwgIi4uLy4uLy4uL3Jlc291cmNlcy9leHRlbnNpb25zL2hlcm1vc2EtZmxvb3JzLXRoZW1lLWJsb2Nrcy91dGlscy9tYXRocy5tanMiLCAiLi4vLi4vLi4vcmVzb3VyY2VzL2V4dGVuc2lvbnMvaGVybW9zYS1mbG9vcnMtdGhlbWUtYmxvY2tzL3V0aWxzL3Nob3BpZnkubWpzIiwgIi4uLy4uLy4uL3Jlc291cmNlcy9leHRlbnNpb25zL2hlcm1vc2EtZmxvb3JzLXRoZW1lLWJsb2Nrcy91dGlscy90aGVtZS5tanMiLCAiLi4vLi4vLi4vcmVzb3VyY2VzL2V4dGVuc2lvbnMvaGVybW9zYS1mbG9vcnMtdGhlbWUtYmxvY2tzL3BhY2thZ2UtY2FsY3VsYXRvci5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBzaG93RXJyb3IgPSAoXG4gIHRhcmdldEVsZW1lbnQsXG4gIG1lc3NhZ2VUeXBlID0gXCJnZW5lcmljXCIsXG4gIGludGVybmFsRXJyb3IgPSB1bmRlZmluZWQsXG4gIC4uLmVycm9yQXJnc1xuKSA9PiB7XG4gIGNvbnN0IGVycm9yVGVtcGxhdGVzID0gdGFyZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZXJyb3JzXVwiKTtcbiAgbGV0IGVycm9yVGVtcGxhdGUgPSBlcnJvclRlbXBsYXRlcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLWVycm9yPVwiJHttZXNzYWdlVHlwZX1cIl1gXG4gICk7XG5cbiAgaWYgKCFlcnJvclRlbXBsYXRlKSB7XG4gICAgZXJyb3JUZW1wbGF0ZSA9IGVycm9yVGVtcGxhdGVzLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiW2RhdGEtZXJyb3I9J2dlbmVyaWMnXVwiXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGVycm9yRWxlbWVudCA9IGVycm9yVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGVycm9yRWxlbWVudCk7XG4gIHRhcmdldEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1pbnZhbGlkXCIsIFwidHJ1ZVwiKTtcblxuICBpZiAoaW50ZXJuYWxFcnJvcikge1xuICAgIGNvbnNvbGUud2FybihpbnRlcm5hbEVycm9yLCAuLi5lcnJvckFyZ3MpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJFcnJvcnMgPSAodGFyZ2V0RWxlbWVudCkgPT4ge1xuICBjb25zdCBlcnJvckVsZW1lbnRzID0gdGFyZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZXJyb3JdXCIpO1xuICBlcnJvckVsZW1lbnRzLmZvckVhY2goKGVycm9yRWxlbWVudCkgPT4ge1xuICAgIGVycm9yRWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG4gIHRhcmdldEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1pbnZhbGlkXCIsIFwiZmFsc2VcIik7XG59O1xuIiwgImNvbnN0IFRSQU5TRk9STUVSUyA9IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwcmljZSBpbiBjZW50c1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcHJpY2UgYXMgZmxvYXQuXG4gICAqL1xuICBwYXJzZV9mbG9hdDogKHZhbHVlKSA9PiBwYXJzZUZsb2F0KHZhbHVlKSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHBhcnNlX2Jvb2xlYW46ICh2YWx1ZSkgPT5cbiAgICBbXCJ0cnVlXCIsIFwiMVwiLCBcIm9uXCIsIFwieWVzXCJdLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkpLFxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gYSBjZW50cyBudW1iZXIgdmFsdWUgaW50byBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJpY2UuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgcHJpY2UgaW4gY2VudHNcbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHByaWNlIGFzIHN0cmluZy5cbiAgICovXG4gIHRvX3N0cmluZzogKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KHVuZGVmaW5lZCwge1xuICAgICAgY3VycmVuY3k6IFwiRVVSXCIsXG4gICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQodmFsdWUgLyAxMDApO1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybSA9ICh2YWx1ZSwgdHJhbnNmb3JtZXJzKSA9PiB7XG4gIHJldHVybiB0cmFuc2Zvcm1lcnMucmVkdWNlKChhY2MsIHRyYW5zZm9ybWVyKSA9PiB7XG4gICAgaWYgKFRSQU5TRk9STUVSU1t0cmFuc2Zvcm1lcl0pIHtcbiAgICAgIHJldHVybiBUUkFOU0ZPUk1FUlNbdHJhbnNmb3JtZXJdKGFjYyk7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIHZhbHVlKTtcbn07XG4iLCAiaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSBcIi4vdHJhbnNmb3JtZXJzLm1qc1wiO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlSHRtbFRhcmdldCA9ICh0YXJnZXQsIHZhbHVlKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS12YWx1ZS10YXJnZXQ9XCIke3RhcmdldH1cIl1gKTtcbiAgaWYgKCFlbGVtZW50KSByZXR1cm47XG5cbiAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS12YWx1ZS10YXJnZXQtYXR0cmlidXRlXCIpKSB7XG4gICAgY29uc3QgYXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlLXRhcmdldC1hdHRyaWJ1dGVcIik7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdmFsdWU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFbGVtZW50QXR0cmlidXRlID0gKGVsZW1lbnQsIG5hbWUsIHRyYW5zZm9ybWVycyA9IFtdKSA9PiB7XG4gIGxldCB2YWx1ZSA9IFwiXCI7XG5cbiAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpKSB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICBpZiAoZWxlbWVudC5kYXRhc2V0W25hbWVdKSB2YWx1ZSA9IGVsZW1lbnQuZGF0YXNldFtuYW1lXTtcblxuICByZXR1cm4gdHJhbnNmb3JtKHZhbHVlLCB0cmFuc2Zvcm1lcnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEVsZW1lbnRWYWx1ZSA9IChlbGVtZW50LCB0cmFuc2Zvcm1lcnMgPSBbXSkgPT4ge1xuICBsZXQgdmFsdWUgPSBcIlwiO1xuXG4gIGlmIChlbGVtZW50LnRhZ05hbWUgPT09IFwiSU5QVVRcIikge1xuICAgIHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB0cmFuc2Zvcm0odmFsdWUsIHRyYW5zZm9ybWVycyk7XG59O1xuXG5leHBvcnQgY29uc3QgYmluZEV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnQsIGV2ZW50cykgPT4ge1xuICBldmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQudHlwZSwgZXZlbnQuaGFuZGxlcik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEVsZW1lbnRMb2FkaW5nID0gKGVsZW1lbnQsIGlzTG9hZGluZyA9IHRydWUpID0+IHtcbiAgaWYgKGlzTG9hZGluZykge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ1wiKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtYnVzeVwiLCBcInRydWVcIik7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1idXN5XCIsIFwiZmFsc2VcIik7XG4gIH1cbn07XG4iLCAiZXhwb3J0IGNvbnN0IGFkZFBlcmNlbnRhZ2VDZWlsZWQgPSAodmFsdWUsIHBlcmNlbnRhZ2UpID0+XG4gIE1hdGguY2VpbCh2YWx1ZSAqICgxICsgcGVyY2VudGFnZSAvIDEwMCkpO1xuXG5leHBvcnQgY29uc3QgZGl2aWRlQ2VpbGVkID0gKHZhbHVlLCBkaXZpc29yKSA9PiBNYXRoLmNlaWwodmFsdWUgLyBkaXZpc29yKTtcbiIsICJleHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gYXN5bmMgKHZhcmlhbnRJZCwgcXVhbnRpdHkpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3aW5kb3cuU2hvcGlmeS5yb3V0ZXMucm9vdCArIFwiY2FydC9hZGQuanNcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHZhcmlhbnRJZCxcbiAgICAgICAgICBxdWFudGl0eSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gIH0pO1xuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuIiwgImNvbnN0IGNhcnREcmF3ZXJTZWxlY3RvciA9IFwiY2FydC1kcmF3ZXJcIjtcblxuZXhwb3J0IGNvbnN0IG9wZW5DYXJ0RHJhd2VyID0gKCkgPT4ge1xuICBjb25zdCBjYXJ0RHJhd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXJ0RHJhd2VyU2VsZWN0b3IpO1xuICBpZiAoY2FydERyYXdlcikge1xuICAgIGNhcnREcmF3ZXIudXBkYXRlPy4oKTtcbiAgICBjYXJ0RHJhd2VyLnB1cmNoYXNlSGFuZGxlcj8uKCk7XG4gICAgY2FydERyYXdlci5vcGVuPy4oKTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBjbGVhckVycm9ycywgc2hvd0Vycm9yIH0gZnJvbSBcIi4vdXRpbHMvZXJyb3JzLm1qc1wiO1xuaW1wb3J0IHtcbiAgYmluZEV2ZW50TGlzdGVuZXJzLFxuICBnZXRFbGVtZW50QXR0cmlidXRlLFxuICBnZXRFbGVtZW50VmFsdWUsXG4gIHNldEVsZW1lbnRMb2FkaW5nLFxuICB1cGRhdGVIdG1sVGFyZ2V0LFxufSBmcm9tIFwiLi91dGlscy9odG1sLm1qc1wiO1xuaW1wb3J0IHsgYWRkUGVyY2VudGFnZUNlaWxlZCwgZGl2aWRlQ2VpbGVkIH0gZnJvbSBcIi4vdXRpbHMvbWF0aHMubWpzXCI7XG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tIFwiLi91dGlscy9zaG9waWZ5Lm1qc1wiO1xuaW1wb3J0IHsgb3BlbkNhcnREcmF3ZXIgfSBmcm9tIFwiLi91dGlscy90aGVtZS5tanNcIjtcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gXCIuL3V0aWxzL3RyYW5zZm9ybWVycy5tanNcIjtcblxuY29uc3QgcGFja2FnZUNhbGN1bGF0b3JTZWxlY3RvciA9IFwicGFja2FnZS1jYWxjdWxhdG9yXCI7XG5jb25zdCBjYXJ0RHJhd2VyU2VsZWN0b3IgPSBcImNhcnQtZHJhd2VyXCI7XG5cbmNsYXNzIFBhY2thZ2VDYWxjdWxhdG9yIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaz8uKCk7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB0aGlzLiNoYW5kbGVDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgYmluZEV2ZW50TGlzdGVuZXJzKHRoaXMucXVlcnlTZWxlY3RvcihcImZvcm1cIiksIFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICAgICAgaGFuZGxlcjogdGhpcy4jaGFuZGxlU3VibWl0LmJpbmQodGhpcyksXG4gICAgICB9LFxuICAgIF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SW5wdXRFdmVudH0gZXZlbnRcbiAgICovXG4gICNoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XG5cbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZUFzTnVtYmVyO1xuXG4gICAgaWYgKCF0aGlzLiNpc1ZhbGlkRXZlbnRWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuI3Jlc2V0KDEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNxdWFyZU1ldGVycyA9IHRoaXMuI2NhbGN1bGF0ZVN1cmZhY2VXaXRoQ3V0b2ZmKHZhbHVlKTtcblxuICAgIHRoaXMuI3VwZGF0ZVZhbHVlcyhzcXVhcmVNZXRlcnMpO1xuICB9XG5cbiAgYXN5bmMgI2hhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xlYXJFcnJvcnModGhpcyk7XG5cbiAgICBjb25zdCBzcXVhcmVNZXRlcnMgPSBnZXRFbGVtZW50VmFsdWUoXG4gICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJzcXVhcmVfbWV0ZXJzXCJdJyksXG4gICAgICBbXCJwYXJzZV9pbnRcIl1cbiAgICApO1xuICAgIGNvbnN0IHZhcmlhbnRJZCA9IGdldEVsZW1lbnRBdHRyaWJ1dGUodGhpcywgXCJwcm9kdWN0SWRcIik7XG4gICAgY29uc3QgcXVhbnRpdHkgPSBnZXRFbGVtZW50QXR0cmlidXRlKFxuICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nKSxcbiAgICAgIFwidmFsdWVcIixcbiAgICAgIFtcInBhcnNlX2ludFwiXVxuICAgICk7XG5cbiAgICAvLyBWYWxpZGF0aW9uIGZpcnN0LlxuICAgIGlmICghc3F1YXJlTWV0ZXJzKSB7XG4gICAgICBzaG93RXJyb3IodGhpcywgXCJtaXNzaW5nLWZpZWxkc1wiLCBcIlN1cmZhY2UgYXJlYSBpcyByZXF1aXJlZC5cIiwge1xuICAgICAgICBzcXVhcmVNZXRlcnMsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF2YXJpYW50SWQpIHtcbiAgICAgIHNob3dFcnJvcih0aGlzLCBcImdlbmVyaWNcIiwgXCJQcm9kdWN0IElEIG5vdCBmb3VuZC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFxdWFudGl0eSkge1xuICAgICAgc2hvd0Vycm9yKHRoaXMsIFwibWlzc2luZy1maWVsZHNcIiwgXCJRdWFudGl0eSBpcyByZXF1aXJlZC5cIiwgeyBxdWFudGl0eSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBZGQgdG8gY2FydCBsb2dpYy5cblxuICAgIHNldEVsZW1lbnRMb2FkaW5nKHRoaXMpO1xuICAgIGF3YWl0IGFkZFRvQ2FydCh2YXJpYW50SWQsIHF1YW50aXR5KTtcbiAgICBzZXRFbGVtZW50TG9hZGluZyh0aGlzLCBmYWxzZSk7XG5cbiAgICAvLyBPcGVuIHRoZSBjYXJ0IGRyYXdlci5cbiAgICBvcGVuQ2FydERyYXdlcigpO1xuICB9XG5cbiAgI2NhbGN1bGF0ZVN1cmZhY2VXaXRoQ3V0b2ZmKHNxdWFyZU1ldGVycykge1xuICAgIHJldHVybiBhZGRQZXJjZW50YWdlQ2VpbGVkKFxuICAgICAgc3F1YXJlTWV0ZXJzLFxuICAgICAgZ2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLCBcImN1dG9mZlBlcmNlbnRhZ2VcIiwgW1wicGFyc2VfZmxvYXRcIl0pXG4gICAgKTtcbiAgfVxuXG4gICN1cGRhdGVWYWx1ZXMoc3F1YXJlTWV0ZXJzKSB7XG4gICAgY29uc3Qgc3F1YXJlTWV0ZXJzUGVyUGFja2FnZSA9IGdldEVsZW1lbnRBdHRyaWJ1dGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJzcXVhcmVNZXRlcnNQZXJQYWNrYWdlXCIsXG4gICAgICBbXCJwYXJzZV9mbG9hdFwiXVxuICAgICk7XG4gICAgY29uc3QgcGFja2FnZVByaWNlID0gZ2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLCBcInByb2R1Y3RQcmljZVwiLCBbXG4gICAgICBcInBhcnNlX2Zsb2F0XCIsXG4gICAgXSk7XG5cbiAgICBjb25zdCBwYWNrYWdlc05lZWRlZCA9IGRpdmlkZUNlaWxlZChzcXVhcmVNZXRlcnMsIHNxdWFyZU1ldGVyc1BlclBhY2thZ2UpO1xuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSB0cmFuc2Zvcm0ocGFja2FnZXNOZWVkZWQgKiBwYWNrYWdlUHJpY2UsIFtcInRvX3N0cmluZ1wiXSk7XG5cbiAgICB1cGRhdGVIdG1sVGFyZ2V0KFwic2VsZWN0ZWQtcGFja3NcIiwgcGFja2FnZXNOZWVkZWQpO1xuICAgIHVwZGF0ZUh0bWxUYXJnZXQoXCJlbnRlcmVkLXN1cmZhY2UtYXJlYVwiLCBzcXVhcmVNZXRlcnMpO1xuICAgIHVwZGF0ZUh0bWxUYXJnZXQoXCJ0b3RhbHNcIiwgdG90YWxQcmljZSk7XG4gICAgdXBkYXRlSHRtbFRhcmdldChcInF1YW50aXR5XCIsIHBhY2thZ2VzTmVlZGVkKTtcbiAgfVxuXG4gICNpc1ZhbGlkRXZlbnRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoaXNOYU4odmFsdWUpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHZhbHVlIDwgMSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAjcmVzZXQodG9WYWx1ZSA9IDEpIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInNxdWFyZV9tZXRlcnNcIl0nKTtcbiAgICBpbnB1dC52YWx1ZSA9IHRvVmFsdWU7XG4gICAgdGhpcy4jdXBkYXRlVmFsdWVzKHRvVmFsdWUpO1xuICB9XG59XG5cbi8vIERlZmluZSB0aGUgY3VzdG9tIGVsZW1lbnQuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldChwYWNrYWdlQ2FsY3VsYXRvclNlbGVjdG9yKSlcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHBhY2thZ2VDYWxjdWxhdG9yU2VsZWN0b3IsIFBhY2thZ2VDYWxjdWxhdG9yKTtcbiJdLAogICJtYXBwaW5ncyI6ICJNQUFPLElBQU1BLEVBQVksQ0FDdkJDLEVBQ0FDLEVBQWMsVUFDZEMsRUFBZ0IsVUFDYkMsSUFDQSxDQUNILElBQU1DLEVBQWlCSixFQUFjLGNBQWMsZUFBZSxFQUM5REssRUFBZ0JELEVBQWUsUUFBUSxjQUN6QyxnQkFBZ0JILENBQVcsSUFDN0IsRUFFS0ksSUFDSEEsRUFBZ0JELEVBQWUsUUFBUSxjQUNyQyx3QkFDRixHQUdGLElBQU1FLEVBQWVELEVBQWMsVUFBVSxFQUFJLEVBQ2pETCxFQUFjLFlBQVlNLENBQVksRUFDdENOLEVBQWMsYUFBYSxlQUFnQixNQUFNLEVBRTdDRSxHQUNGLFFBQVEsS0FBS0EsRUFBZSxHQUFH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LEVBQVdFLENBQVEsRUFDbkNFLEVBQWtCLEtBQU0sRUFBSyxFQUc3QkUsRUFBZSxDQUNqQixDQUVBVixHQUE0QkQsRUFBYyxDQUN4QyxPQUFPWSxFQUNMWixFQUNBTSxFQUFvQixLQUFNLG1CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUMvRCxDQUNGLENBRUFKLEdBQWNGLEVBQWMsQ0FDMUIsSUFBTWEsRUFBeUJQLEVBQzdCLEtBQ0EseUJBQ0EsQ0FBQyxhQUFhLENBQ2hCLEVBQ01RLEVBQWVSLEVBQW9CLEtBQU0sZUFBZ0IsQ0FDN0QsYUFDRixDQUFDLEVBRUtTLEVBQWlCQyxFQUFhaEIsRUFBY2EsQ0FBc0IsRUFDbEVJLEVBQWFDLEVBQVVILEVBQWlCRCxFQUFjLENBQUMsV0FBVyxDQUFDLEVBRXpFSyxFQUFpQixpQkFBa0JKLENBQWMsRUFDakRJLEVBQWlCLHVCQUF3Qm5CLENBQVksRUFDckRtQixFQUFpQixTQUFVRixDQUFVLEVBQ3JDRSxFQUFpQixXQUFZSixDQUFjLENBQzdDLENBRUFqQixHQUFtQkQsRUFBTyxDQUd4QixNQUZJLEdBQUNBLEdBQ0QsTUFBTUEsQ0FBSyxHQUNYQSxFQUFRLEVBR2QsQ0FFQUUsR0FBT3FCLEVBQVUsRUFBRyxDQUNsQixJQUFNQyxFQUFRLEtBQUssY0FBYyw2QkFBNkIsRUFDOURBLEVBQU0sTUFBUUQsRUFDZCxLQUFLbEIsR0FBY2tCLENBQU8sQ0FDNUIsQ0FDRixFQUdLLGVBQWUsSUFBSUUsQ0FBeUIsR0FDL0MsZUFBZSxPQUFPQSxFQUEyQjlCLENBQWlCIiwKICAibmFtZXMiOiBbInNob3dFcnJvciIsICJ0YXJnZXRFbGVtZW50IiwgIm1lc3NhZ2VUeXBlIiwgImludGVybmFsRXJyb3IiLCAiZXJyb3JBcmdzIiwgImVycm9yVGVtcGxhdGVzIiwgImVycm9yVGVtcGxhdGUiLCAiZXJyb3JFbGVtZW50IiwgImNsZWFyRXJyb3JzIiwgIlRSQU5TRk9STUVSUyIsICJ2YWx1ZSIsICJ0cmFuc2Zvcm0iLCAidHJhbnNmb3JtZXJzIiwgImFjYyIsICJ0cmFuc2Zvcm1lciIsICJ1cGRhdGVIdG1sVGFyZ2V0IiwgInRhcmdldCIsICJ2YWx1ZSIsICJlbGVtZW50IiwgImF0dHJpYnV0ZSIsICJnZXRFbGVtZW50QXR0cmlidXRlIiwgIm5hbWUiLCAidHJhbnNmb3JtZXJzIiwgInRyYW5zZm9ybSIsICJnZXRFbGVtZW50VmFsdWUiLCAiYmluZEV2ZW50TGlzdGVuZXJzIiwgImV2ZW50cyIsICJldmVudCIsICJzZXRFbGVtZW50TG9hZGluZyIsICJpc0xvYWRpbmciLCAiYWRkUGVyY2VudGFnZUNlaWxlZCIsICJ2YWx1ZSIsICJwZXJjZW50YWdlIiwgImRpdmlkZUNlaWxlZCIsICJkaXZpc29yIiwgImFkZFRvQ2FydCIsICJ2YXJpYW50SWQiLCAicXVhbnRpdHkiLCAiY2FydERyYXdlclNlbGVjdG9yIiwgIm9wZW5DYXJ0RHJhd2VyIiwgImNhcnREcmF3ZXIiLCAicGFja2FnZUNhbGN1bGF0b3JTZWxlY3RvciIsICJQYWNrYWdlQ2FsY3VsYXRvciIsICIjaGFuZGxlQ2hhbmdlIiwgImJpbmRFdmVudExpc3RlbmVycyIsICIjaGFuZGxlU3VibWl0IiwgImV2ZW50IiwgInZhbHVlIiwgIiNpc1ZhbGlkRXZlbnRWYWx1ZSIsICIjcmVzZXQiLCAic3F1YXJlTWV0ZXJzIiwgIiNjYWxjdWxhdGVTdXJmYWNlV2l0aEN1dG9mZiIsICIjdXBkYXRlVmFsdWVzIiwgImNsZWFyRXJyb3JzIiwgImdldEVsZW1lbnRWYWx1ZSIsICJ2YXJpYW50SWQiLCAiZ2V0RWxlbWVudEF0dHJpYnV0ZSIsICJxdWFudGl0eSIsICJzaG93RXJyb3IiLCAic2V0RWxlbWVudExvYWRpbmciLCAiYWRkVG9DYXJ0IiwgIm9wZW5DYXJ0RHJhd2VyIiwgImFkZFBlcmNlbnRhZ2VDZWlsZWQiLCAic3F1YXJlTWV0ZXJzUGVyUGFja2FnZSIsICJwYWNrYWdlUHJpY2UiLCAicGFja2FnZXNOZWVkZWQiLCAiZGl2aWRlQ2VpbGVkIiwgInRvdGFsUHJpY2UiLCAidHJhbnNmb3JtIiwgInVwZGF0ZUh0bWxUYXJnZXQiLCAidG9WYWx1ZSIsICJpbnB1dCIsICJwYWNrYWdlQ2FsY3VsYXRvclNlbGVjdG9yIl0KfQo=
