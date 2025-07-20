import{a as u,S as f,i as l}from"./assets/vendor-Cip_4kvj.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(s){return u("https://pixabay.com/api/",{params:{key:"51363368-0cc0b280f35048ea67ead6bf3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}}).then(e=>e.data).catch(e=>{throw e})}function p(s){const o=s.map(t=>`<li class="img-box">
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
        </li>`).join("");i.galleryList.innerHTML=o,m.refresh()}const m=new f(".gallery a");function c(){i.loader.classList.add("is-hidden")}function h(){i.loader.classList.remove("is-hidden")}function g(){i.galleryList.innerHTML=""}const i={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),input:document.querySelector("input")};function y(s){s.preventDefault(),g(),h();const o=s.target.elements["search-text"].value.trim();if(!o)return c(),i.form.reset(),l.error({title:"Помилка!",message:"Введіть ключеве слово пошуку!",position:"center"});d(o).then(t=>{if(t.total===0)return i.form.reset(),l.error({message:"На жаль, немає зображень, що відповідають вашому пошуковому запиту. Спробуйте ще раз!",position:"center"});p(t.hits)}).catch(t=>{l.error({title:"Помилка!",message:"Не вдалося завантажити зображення. Не має звязку з ресурсом.",position:"center"})}).finally(()=>{c()})}i.form.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
