import{S as u,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(o){const t="https://pixabay.com/api/",s="51363368-0cc0b280f35048ea67ead6bf3",n=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${t}?${n}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>{throw e})}function d(o){return o.map(t=>`<li class="img-box">
          <a href="${t.largeImageURL}">
            <img 
              src="${t.webformatURL}" 
              alt="${t.tags}" 
              width="360" 
              height="200"
            >
            <ul class="subscriptions">
                <li class="sub-title">
                  <h6>Likes</h6>
                  <p>${t.likes}</p>
                </li>
                <li class="sub-title">
                  <h6>Views</h6>
                  <p>${t.views}</p>
                </li>
                <li class="sub-title">
                  <h6>Comments</h6>
                  <p>${t.comments}</p>
                </li>
                <li class="sub-title">
                  <h6>Downloads</h6>
                  <p>${t.downloads}</p>
                </li>
            </ul>
          </a>
        </li>`).join("")}const p=new u(".gallery a");function h(){p.refresh()}function c(){i.loader.classList.add("is-hidden")}function m(){i.loader.classList.remove("is-hidden")}function g(){i.galleryList.innerHTML=""}const i={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),input:document.querySelector("input")};function y(o){o.preventDefault(),g(),m();const t=o.target.elements["search-text"].value.trim();if(!t)return c(),i.form.reset(),a.error({title:"Помилка!",message:"Введіть ключеве слово пошуку!",position:"center"});f(t).then(s=>{if(s.total===0)return i.form.reset(),a.error({message:"На жаль, немає зображень, що відповідають вашому пошуковому запиту. Спробуйте ще раз!",position:"center"});i.galleryList.innerHTML=d(s.hits),h()}).catch(s=>{a.error({title:"Помилка!",message:"Не вдалося завантажити зображення. Не має звязку з ресурсом.",position:"center"})}).finally(()=>{c()})}i.form.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
