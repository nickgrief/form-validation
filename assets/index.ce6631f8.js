const u=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=d(e);fetch(e.href,s)}};u();document.querySelector("#app");const m=document.getElementById("email"),y=document.getElementById("zip-code"),n=document.getElementById("password"),a=document.getElementById("confirm"),l=[m,y,n,a];l.forEach(t=>{t.addEventListener("focusout",()=>{c(t)}),t.addEventListener("input",()=>{t.setCustomValidity(" ")})});function c(t){if(t.value==="")t.setCustomValidity(`Please provide your ${t.id}`),t.reportValidity();else if(t.validity.typeMismatch)t.setCustomValidity(`Check if ${t.id} provided correctly`),t.reportValidity();else if(t.validity.patternMismatch)t.setCustomValidity("Password should be at least 8 characters long and contain at least one number and at least one capital letter"),t.reportValidity();else if(t.id==="confirm"&&n.value!==a.value)t.setCustomValidity("Passwords should match"),t.reportValidity();else return t.setCustomValidity(" "),t.classList.contains("valid")||t.classList.add("valid"),t.classList.contains("invalid")&&t.classList.remove("invalid"),!0;return t.classList.contains("invalid")||t.classList.add("invalid"),t.classList.contains("valid")&&t.classList.remove("valid"),!1}const p=document.getElementById("submit");p.addEventListener("click",v);function v(){let t=!0;l.forEach(i=>{c(i)||(t=!1)}),alert(t?"All fields passed! GJ!":"Something is wrong...")}