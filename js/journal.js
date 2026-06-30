
function renderJournal(){
  const list=MCR.store("journal",[]);
  $("#journalList").innerHTML=list.length?list.map((j,i)=>`<div class="card"><h3>${j.title||'Minde'}</h3><div class="tiny">${j.date}</div><p class="note">${j.text||''}</p>${j.photo?`<img class="journalImg" src="${j.photo}">`:''}<button class="btn bad" data-jdel="${i}">Slet</button></div>`).join(""):'<div class="notice">Ingen minder endnu.</div>';
  $$("[data-jdel]").forEach(b=>b.onclick=()=>{let l=MCR.store("journal",[]);l.splice(Number(b.dataset.jdel),1);MCR.save("journal",l);renderJournal();});
}
async function addJournal(){
  const file=$("#journalPhoto").files[0], item={title:$("#journalTitle").value,text:$("#journalText").value,date:new Date().toLocaleString("da-DK"),photo:"",lat:MCR.userPos?.lat,lng:MCR.userPos?.lng};
  if(file) item.photo=await new Promise(res=>{const r=new FileReader();r.onload=()=>res(r.result);r.readAsDataURL(file);});
  let l=MCR.store("journal",[]); l.unshift(item); MCR.save("journal",l.slice(0,40)); $("#journalTitle").value=""; $("#journalText").value=""; $("#journalPhoto").value=""; renderJournal();
}
function exportMemory(){const data=`<h1>Manchester Memory Book</h1>`+MCR.store("journal",[]).map(j=>`<h2>${j.title||'Minde'}</h2><p>${j.date}</p><p>${j.text||''}</p>${j.photo?`<img style="max-width:100%" src="${j.photo}">`:''}`).join("");const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([`<!doctype html><meta charset=utf-8>${data}`],{type:"text/html"}));a.download="Manchester_Memory_Book.html";a.click();}
