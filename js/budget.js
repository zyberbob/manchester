
function renderBudget(){
  const rows=MCR.store("budget",[]); $("#rateInput").value=rate();
  $("#budgetRows").innerHTML=rows.map((r,i)=>`<div class="budgetrow"><input value="${r[0]||''}" placeholder="Post" data-bname="${i}"><input type="number" value="${r[1]||0}" step="0.01" data-bamount="${i}"><select data-bcat="${i}"><option>Dag 1</option><option>Dag 2</option><option>Dag 3</option><option>Dag 4</option><option>Shopping</option><option>Transport</option><option>Andet</option></select><button class="btn bad" data-bdel="${i}">×</button></div>`).join("");
  $$("[data-bcat]").forEach(s=>s.value=rows[Number(s.dataset.bcat)][2]||"Dag 1");
  bindBudget(); calcBudget();
}
function bindBudget(){
  $$("[data-bname]").forEach(el=>el.oninput=()=>{let r=MCR.store("budget",[]);r[el.dataset.bname][0]=el.value;MCR.save("budget",r);calcBudget();});
  $$("[data-bamount]").forEach(el=>el.oninput=()=>{let r=MCR.store("budget",[]);r[el.dataset.bamount][1]=Number(el.value||0);MCR.save("budget",r);calcBudget();});
  $$("[data-bcat]").forEach(el=>el.onchange=()=>{let r=MCR.store("budget",[]);r[el.dataset.bcat][2]=el.value;MCR.save("budget",r);calcBudget();});
  $$("[data-bdel]").forEach(el=>el.onclick=()=>{let r=MCR.store("budget",[]);r.splice(Number(el.dataset.bdel),1);MCR.save("budget",r);renderBudget();});
}
function calcBudget(){
  const rows=MCR.store("budget",[]), food=rows.filter(r=>String(r[2]).startsWith("Dag")).reduce((a,r)=>a+Number(r[1]||0),0), total=rows.reduce((a,r)=>a+Number(r[1]||0),0), limit=(CONFIG.trip.dailyFoodDkk/rate())*4;
  $("#foodTotal").textContent=gbp(food)+" / "+gbp(limit); $("#foodDkk").textContent=dkk(food)+" / 2400 kr"; $("#foodLeft").textContent=gbp(Math.max(0,limit-food)); $("#dashFoodLeft").textContent=gbp(Math.max(0,limit-food)); $("#budgetDkk").textContent=dkk(total); $("#foodProgress").style.width=Math.min(100,food/limit*100)+"%"; $("#foodProgress").classList.toggle("warn", food/limit>.85); drawDonut(food,limit,total);
}
function drawDonut(food,limit,total){
  const c=$("#budgetDonut"), ctx=c.getContext("2d"), w=c.width, h=c.height, r=48; ctx.clearRect(0,0,w,h);
  ctx.lineWidth=14; ctx.strokeStyle="#1f2937"; ctx.beginPath(); ctx.arc(w/2,h/2,r,0,Math.PI*2); ctx.stroke();
  ctx.strokeStyle=food>limit?"#fb7185":"#38bdf8"; ctx.beginPath(); ctx.arc(w/2,h/2,r,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.min(1,food/limit)); ctx.stroke();
  ctx.fillStyle="#f8fafc"; ctx.font="bold 18px system-ui"; ctx.textAlign="center"; ctx.fillText(gbp(total),w/2,h/2+6);
}
