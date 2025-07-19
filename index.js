import{a as u,S as f,i as l}from"./assets/vendor-Cip_4kvj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function d(o){return u("https://pixabay.com/api/",{params:{key:"51363368-0cc0b280f35048ea67ead6bf3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}}).then(e=>e.data).catch(e=>{throw e})}function p(o){return o.map(t=>`<li class="img-box">
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
        </li>`).join("")}const m=new f(".gallery a");function h(){m.refresh()}function c(){s.loader.classList.add("is-hidden")}function g(){s.loader.classList.remove("is-hidden")}function y(){s.galleryList.innerHTML=""}const s={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),input:document.querySelector("input")};function L(o){o.preventDefault(),y(),g();const t=o.target.elements["search-text"].value.trim();if(!t)return c(),s.form.reset(),l.error({title:"Помилка!",message:"Введіть ключеве слово пошуку!",position:"center"});d(t).then(i=>{if(i.total===0)return s.form.reset(),l.error({message:"На жаль, немає зображень, що відповідають вашому пошуковому запиту. Спробуйте ще раз!",position:"center"});s.galleryList.innerHTML=p(i.hits),h()}).catch(i=>{l.error({title:"Помилка!",message:"Не вдалося завантажити зображення. Не має звязку з ресурсом.",position:"center"})}).finally(()=>{c()})}s.form.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
