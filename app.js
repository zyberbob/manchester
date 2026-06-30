
const PLACES = [{"id": "hotel", "cat": "Base", "emoji": "🏨", "name": "The Gardens Hotel", "address": "55 Piccadilly, Manchester M1 2AP, United Kingdom", "walk": "Base", "lat": 53.48095, "lng": -2.23655, "tags": ["hotel", "base", "piccadilly"], "day": ["Alle", "Ankomst", "Hjemrejse"], "note": "Jeres base midt ved Piccadilly Gardens. Super central placering.", "order": "", "official": "https://www.gardenshotelmanchester.com/contactUs.html", "top": true, "persona": ["Begge"]}, {"id": "greggs", "cat": "Mad", "emoji": "🥐", "name": "Greggs Piccadilly", "address": "93 Piccadilly, Manchester, United Kingdom", "walk": "1 min", "lat": 53.48075, "lng": -2.23475, "tags": ["morgenmad", "snack", "billigt", "sausage roll"], "day": ["Dag 1", "Alle"], "note": "Hurtig morgenmad/snack. Billigt, nemt og lige ved hotellet.", "order": "Sausage roll, steak bake, kaffe, yum yum.", "official": "https://www.greggs.co.uk/", "top": true, "persona": ["Jonas", "Datter", "Begge"]}, {"id": "fiveguys", "cat": "Mad", "emoji": "🍔", "name": "Five Guys Piccadilly Gardens", "address": "17 Piccadilly, Manchester M1 1LS, United Kingdom", "walk": "2 min", "lat": 53.48105, "lng": -2.23775, "tags": ["burger", "fries", "milkshake"], "day": ["Dag 1", "Alle"], "note": "Burger, fries og milkshake tættere på end man næsten kan nå at blive sulten.", "order": "Cheeseburger, Little Cajun Fries, Oreo/Salted Caramel shake.", "official": "https://restaurants.fiveguys.co.uk/north-west/17-piccadilly", "top": true, "persona": ["Jonas", "Datter", "Begge"]}, {"id": "nandos", "cat": "Mad", "emoji": "🍗", "name": "Nando's Manchester Piccadilly", "address": "27 Piccadilly, Manchester M1 1LU, United Kingdom", "walk": "3 min", "lat": 53.4811, "lng": -2.23855, "tags": ["kylling", "peri peri", "aftensmad"], "day": ["Dag 2", "Alle"], "note": "Nem PERi-PERi kylling tæt på hotellet.", "order": "Butterfly chicken, PERi chips, garlic bread, PERinaise.", "official": "https://www.nandos.co.uk/restaurants/manchester-piccadilly", "top": true, "persona": ["Jonas", "Datter", "Begge"]}, {"id": "wingstop", "cat": "Mad", "emoji": "🍗", "name": "Wingstop Manchester", "address": "Wingstop Manchester Piccadilly, United Kingdom", "walk": "3-8 min", "lat": 53.4818, "lng": -2.239, "tags": ["wings", "kylling", "fries"], "day": ["Alle"], "note": "Wings og fries. God backup til nem mad.", "order": "Tenders/wings + seasoned fries.", "official": "https://www.google.com/maps/search/?api=1&query=Wingstop%20Manchester%20Piccadilly", "top": false, "persona": ["Jonas", "Datter", "Begge"]}, {"id": "rudys", "cat": "Mad", "emoji": "🍕", "name": "Rudy's Pizza Portland Street", "address": "9 Portland Street, Manchester M1 3BE, United Kingdom", "walk": "6-8 min", "lat": 53.4802, "lng": -2.2382, "tags": ["pizza", "napoli"], "day": ["Alle"], "note": "Meget populær napolitansk pizza.", "order": "Margherita/pepperoni-style pizza.", "official": "https://www.rudyspizza.co.uk/", "top": false, "persona": ["Datter", "Begge"]}, {"id": "timhortons", "cat": "Mad", "emoji": "🍩", "name": "Tim Hortons Manchester", "address": "Tim Hortons Manchester, United Kingdom", "walk": "Søg", "lat": 53.4831, "lng": -2.2416, "tags": ["kaffe", "donut"], "day": ["Alle"], "note": "Donuts, kaffe og hurtig snack.", "order": "Iced capp + donut.", "official": "https://www.google.com/maps/search/?api=1&query=Tim%20Hortons%20Manchester", "top": false, "persona": ["Datter", "Begge"]}, {"id": "starbucks", "cat": "Mad", "emoji": "☕", "name": "Starbucks Piccadilly", "address": "Starbucks Piccadilly Manchester, United Kingdom", "walk": "2-4 min", "lat": 53.4809, "lng": -2.2372, "tags": ["kaffe"], "day": ["Alle"], "note": "Nem kaffe tæt ved hotellet.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=Starbucks%20Piccadilly%20Manchester", "top": false, "persona": ["Datter", "Begge"]}, {"id": "costa", "cat": "Mad", "emoji": "☕", "name": "Costa Coffee Piccadilly", "address": "Costa Coffee Piccadilly Manchester, United Kingdom", "walk": "2-5 min", "lat": 53.4806, "lng": -2.2352, "tags": ["kaffe"], "day": ["Alle"], "note": "Kaffe/kolde drikke.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=Costa%20Coffee%20Piccadilly%20Manchester", "top": false, "persona": ["Datter", "Begge"]}, {"id": "ratpigeon", "cat": "Dart", "emoji": "🎯", "name": "The Rat & Pigeon", "address": "33 Back Piccadilly, Manchester M1 1HP, United Kingdom", "walk": "4-5 min", "lat": 53.48225, "lng": -2.2353, "tags": ["stål dart", "pub", "dart"], "day": ["Dag 2", "Alle"], "note": "Bedste bud tæt på hotellet for stål-dart. Tjek/skriv om skiverne er ledige.", "order": "Spørg: “Do you have a free dartboard?”", "official": "https://www.google.com/maps/search/?api=1&query=The%20Rat%20%26%20Pigeon%2033%20Back%20Piccadilly%20Manchester", "top": true, "persona": ["Jonas", "Begge"]}, {"id": "smithfield", "cat": "Dart", "emoji": "🎯", "name": "The Smithfield Market Tavern", "address": "37 Swan Street, Manchester M4 5JZ, United Kingdom", "walk": "10 min", "lat": 53.4844, "lng": -2.2344, "tags": ["stål dart", "pub", "dart"], "day": ["Alle"], "note": "Traditionel pub og god backup til dart/pub-hygge.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=The%20Smithfield%20Market%20Tavern%2037%20Swan%20Street%20Manchester", "top": false, "persona": ["Jonas"]}, {"id": "bayhorse", "cat": "Dart", "emoji": "🎯", "name": "The Bay Horse Tavern", "address": "35-37 Thomas Street, Manchester M4 1NA, United Kingdom", "walk": "10-12 min", "lat": 53.48375, "lng": -2.2383, "tags": ["pub", "dart"], "day": ["Alle"], "note": "Hyggelig Northern Quarter-pub. Tjek om dartskiven er fri.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=The%20Bay%20Horse%20Tavern%2035-37%20Thomas%20Street%20Manchester", "top": false, "persona": ["Jonas", "Begge"]}, {"id": "arndale", "cat": "Shopping", "emoji": "🛍️", "name": "Manchester Arndale", "address": "Manchester Arndale, Manchester M4 3AD, United Kingdom", "walk": "5-7 min", "lat": 53.4831, "lng": -2.242, "tags": ["shopping", "center", "butikker"], "day": ["Dag 1", "Alle"], "note": "Stort shoppingcenter i centrum med masser af butikker.", "order": "Start her, så Afflecks bagefter.", "official": "https://manchesterarndale.com/", "top": true, "persona": ["Datter", "Begge"]}, {"id": "afflecks", "cat": "Shopping", "emoji": "🖤", "name": "Afflecks", "address": "52 Church Street, Manchester M4 1PW, United Kingdom", "walk": "6-7 min", "lat": 53.48295, "lng": -2.2372, "tags": ["vintage", "anime", "kpop", "alternativ", "nørd"], "day": ["Dag 1", "Alle"], "note": "Vintage, alternativ mode, anime/K-pop og nørdeting. Must-see.", "order": "Giv den tid — det er mere oplevelse end bare butik.", "official": "https://afflecks.com/", "top": true, "persona": ["Datter", "Begge"]}, {"id": "primark", "cat": "Shopping", "emoji": "🛒", "name": "Primark Market Street", "address": "106-122 Market Street, Manchester M1 1WA, United Kingdom", "walk": "5-7 min", "lat": 53.4826, "lng": -2.2394, "tags": ["billigt", "tøj", "primark"], "day": ["Dag 1", "Alle"], "note": "Billig tøjshopping. Meget oplagt til din datter.", "order": "", "official": "https://www.primark.com/", "top": true, "persona": ["Datter"]}, {"id": "jdsports", "cat": "Shopping", "emoji": "👟", "name": "JD Sports Arndale", "address": "JD Sports Manchester Arndale, Manchester, United Kingdom", "walk": "5-7 min", "lat": 53.4832, "lng": -2.242, "tags": ["sneakers", "sport"], "day": ["Dag 1", "Alle"], "note": "Sneakers og sportstøj.", "order": "", "official": "https://www.jdsports.co.uk/", "top": false, "persona": ["Datter"]}, {"id": "boots", "cat": "Shopping", "emoji": "💄", "name": "Boots Piccadilly", "address": "Boots Piccadilly Manchester, United Kingdom", "walk": "2-5 min", "lat": 53.4813, "lng": -2.2367, "tags": ["apotek", "makeup", "toiletries"], "day": ["Alle"], "note": "Toiletries, makeup og apoteksting.", "order": "", "official": "https://www.boots.com/", "top": false, "persona": ["Datter", "Begge"]}, {"id": "superdrug", "cat": "Shopping", "emoji": "💊", "name": "Superdrug Arndale", "address": "Superdrug Manchester Arndale, Manchester, United Kingdom", "walk": "5-7 min", "lat": 53.483, "lng": -2.2422, "tags": ["makeup", "hår"], "day": ["Alle"], "note": "Makeup, hår, hygiene og småting.", "order": "", "official": "https://www.superdrug.com/", "top": false, "persona": ["Datter"]}, {"id": "trafford", "cat": "Shopping", "emoji": "🏬", "name": "Trafford Centre", "address": "The Trafford Centre, Trafford Park, Stretford, Manchester M17 8AA, United Kingdom", "walk": "25-35 min transport", "lat": 53.4668, "lng": -2.3499, "tags": ["shopping", "heldag", "center"], "day": ["Dag 3"], "note": "Kæmpe shoppingcenter. Brug en halv/hel dag her.", "order": "Tag afsted efter morgenmad, spis derude.", "official": "https://traffordcentre.co.uk/", "top": true, "persona": ["Datter", "Begge"]}, {"id": "piccadillystation", "cat": "Transport", "emoji": "🚉", "name": "Manchester Piccadilly Station", "address": "Manchester Piccadilly Station, Manchester M1 2BN, United Kingdom", "walk": "7-10 min", "lat": 53.4774, "lng": -2.2309, "tags": ["tog", "station", "airport"], "day": ["Ankomst", "Hjemrejse", "Alle"], "note": "Tog til/fra lufthavn og resten af UK.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=Manchester%20Piccadilly%20Station", "top": true, "persona": ["Begge"]}, {"id": "metrolink", "cat": "Transport", "emoji": "🚋", "name": "Piccadilly Gardens Metrolink", "address": "Piccadilly Gardens Tram Stop, Manchester, United Kingdom", "walk": "1-2 min", "lat": 53.4811, "lng": -2.2382, "tags": ["sporvogn", "bus"], "day": ["Alle"], "note": "Sporvogn/bus lige ved hotellet.", "order": "", "official": "https://tfgm.com/", "top": true, "persona": ["Begge"]}, {"id": "airport", "cat": "Transport", "emoji": "✈️", "name": "Manchester Airport", "address": "Manchester Airport, Manchester M90 1QX, United Kingdom", "walk": "Tog/taxa", "lat": 53.365, "lng": -2.2727, "tags": ["fly", "airport"], "day": ["Ankomst", "Hjemrejse"], "note": "Tog til Piccadilly Station er typisk nemmest.", "order": "", "official": "https://www.manchesterairport.co.uk/", "top": false, "persona": ["Begge"]}, {"id": "footballmuseum", "cat": "Oplevelser", "emoji": "⚽", "name": "National Football Museum", "address": "Urbis Building, Cathedral Gardens, Todd Street, Manchester M4 3BG, United Kingdom", "walk": "12-15 min", "lat": 53.4853, "lng": -2.2425, "tags": ["fodbold", "museum"], "day": ["Dag 2", "Alle"], "note": "Godt fodboldmuseum i centrum.", "order": "", "official": "https://www.nationalfootballmuseum.com/", "top": false, "persona": ["Jonas", "Begge"]}, {"id": "oldtrafford", "cat": "Oplevelser", "emoji": "⚽", "name": "Old Trafford", "address": "Old Trafford, Sir Matt Busby Way, Manchester M16 0RA, United Kingdom", "walk": "25-35 min transport", "lat": 53.4631, "lng": -2.2913, "tags": ["fodbold", "stadion", "man utd"], "day": ["Alle"], "note": "Manchester United stadion.", "order": "", "official": "https://www.manutd.com/", "top": false, "persona": ["Jonas", "Begge"]}, {"id": "etihad", "cat": "Oplevelser", "emoji": "⚽", "name": "Etihad Stadium", "address": "Etihad Stadium, Ashton New Road, Manchester M11 3FF, United Kingdom", "walk": "20-30 min transport", "lat": 53.4831, "lng": -2.2004, "tags": ["fodbold", "stadion", "city"], "day": ["Alle"], "note": "Manchester City stadion.", "order": "", "official": "https://www.mancity.com/", "top": false, "persona": ["Jonas", "Begge"]}, {"id": "nq64", "cat": "Oplevelser", "emoji": "🎮", "name": "NQ64 Northern Quarter", "address": "9 Short Street, Manchester M4 1AA, United Kingdom", "walk": "5-7 min", "lat": 53.4825, "lng": -2.2359, "tags": ["retro", "arcade", "spil"], "day": ["Alle"], "note": "Arcade-bar/retrospil. Tjek aldersregler og åbningstid.", "order": "", "official": "https://nq64.co.uk/", "top": false, "persona": ["Jonas", "Datter", "Begge"]}, {"id": "science", "cat": "Oplevelser", "emoji": "🔬", "name": "Science and Industry Museum", "address": "Liverpool Road, Manchester M3 4FP, United Kingdom", "walk": "20-25 min", "lat": 53.4773, "lng": -2.255, "tags": ["museum", "regnvejr", "teknik"], "day": ["Alle"], "note": "Teknik/industri/historie. God regnvejrsaktivitet.", "order": "", "official": "https://www.scienceandindustrymuseum.org.uk/", "top": false, "persona": ["Jonas", "Begge"]}, {"id": "aldi", "cat": "Praktisk", "emoji": "🛒", "name": "Aldi Arndale", "address": "Aldi, Manchester Arndale, Manchester, United Kingdom", "walk": "6-8 min", "lat": 53.483, "lng": -2.2416, "tags": ["vand", "snacks", "supermarked"], "day": ["Alle"], "note": "Billigt vand/snacks.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=Aldi%20Manchester%20Arndale", "top": true, "persona": ["Begge"]}, {"id": "tesco", "cat": "Praktisk", "emoji": "🛒", "name": "Tesco Express Piccadilly", "address": "Tesco Express Piccadilly Manchester, United Kingdom", "walk": "2-6 min", "lat": 53.4808, "lng": -2.2388, "tags": ["vand", "snacks", "supermarked"], "day": ["Alle"], "note": "Vand, snacks og småting.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=Tesco%20Express%20Piccadilly%20Manchester", "top": true, "persona": ["Begge"]}, {"id": "hospital", "cat": "Praktisk", "emoji": "🏥", "name": "Manchester Royal Infirmary", "address": "Oxford Road, Manchester M13 9WL, United Kingdom", "walk": "Taxi/transport", "lat": 53.4629, "lng": -2.2286, "tags": ["hospital", "nød"], "day": ["Nød"], "note": "Stort hospital. Ring 999 ved akut nødsituation.", "order": "Emergency: 999. Ikke-akut NHS: 111.", "official": "https://mft.nhs.uk/", "top": false, "persona": ["Begge"]}];
const ORIGIN = {"name": "The Gardens Hotel", "address": "55 Piccadilly, Manchester M1 2AP, United Kingdom", "lat": 53.48095, "lng": -2.23655};
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const store = (k, fallback) => { try { return JSON.parse(localStorage.getItem(k)) ?? fallback } catch { return fallback } };
const save = (k,v) => localStorage.setItem(k, JSON.stringify(v));
const mapsUrl = a => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(a);
const dirUrl = (a,mode='walking') => 'https://www.google.com/maps/dir/?api=1&origin=' + encodeURIComponent(ORIGIN.address) + '&destination=' + encodeURIComponent(a) + '&travelmode=' + mode;
const hav = (a,b,c,d) => {const R=6371000, p=Math.PI/180; let x=(c-a)*p, y=(d-b)*p; let A=Math.sin(x/2)**2+Math.cos(a*p)*Math.cos(c*p)*Math.sin(y/2)**2; return 2*R*Math.atan2(Math.sqrt(A),Math.sqrt(1-A));};
let currentFilter='Alle', persona='Begge', userPos=null, map=null, markers=[];

function distanceText(p) {
  const base = userPos ? userPos : ORIGIN;
  const m = hav(base.lat, base.lng, p.lat, p.lng);
  if(m > 1000) return (m/1000).toFixed(1)+' km';
  return Math.round(m)+' m';
}
function renderCards() {
  const favs=store('favs',[]), visited=store('visited',[]), notes=store('notes',{});
  const grid=$('#cards'); grid.innerHTML='';
  const sorted=[...PLACES].sort((a,b)=>hav(ORIGIN.lat,ORIGIN.lng,a.lat,a.lng)-hav(ORIGIN.lat,ORIGIN.lng,b.lat,b.lng));
  for(const p of sorted) {
    const fav=favs.includes(p.id), vis=visited.includes(p.id);
    const search=[p.name,p.cat,p.address,p.note,p.order,...p.tags,...p.day,...p.persona].join(' ').toLowerCase();
    const card=document.createElement('article');
    card.className='card place'; card.dataset.cat=p.cat; card.dataset.top=p.top?'1':'0'; card.dataset.day=p.day.join('|'); card.dataset.persona=p.persona.join('|'); card.dataset.search=search;
    card.innerHTML = `
      ${p.top?'<div class="topstar">⭐</div>':''}
      <h3>${p.emoji} ${p.name}</h3>
      <div class="meta"><span class="badge">🚶 ${p.walk}</span><span class="badge">📍 ${distanceText(p)}</span><span class="badge">${p.cat}</span>${p.top?'<span class="badge">Topvalg</span>':''}</div>
      <p><b>Adresse:</b><br>${p.address}</p>
      <p class="note">${p.note}</p>
      ${p.order?`<p><b>Tip:</b> ${p.order}</p>`:''}
      <div class="actions">
        <a class="btn" target="_blank" href="${mapsUrl(p.address)}">Maps</a>
        <a class="btn secondary" target="_blank" href="${dirUrl(p.address,'walking')} ">Gå</a>
        <a class="btn secondary" target="_blank" href="${dirUrl(p.address,'transit')} ">Transport</a>
        <a class="btn warn" target="_blank" href="${p.official}">Info</a>
        <button class="btn fav ${fav?'on':''}" data-fav="${p.id}">❤️</button>
        <button class="btn visited ${vis?'on':''}" data-visited="${p.id}">${vis?'✅':'☐'}</button>
        <button class="btn secondary" data-copy="${p.address}">Kopiér</button>
      </div>
      <details><summary>Noter / minder</summary><textarea data-note="${p.id}" placeholder="Skriv note til ${p.name}...">${notes[p.id]||''}</textarea></details>
      <details class="onlineOnly"><summary>Online kort her</summary><iframe loading="lazy" src="https://www.google.com/maps?q=${encodeURIComponent(p.address)}&output=embed"></iframe></details>
    `;
    grid.appendChild(card);
  }
  bindButtons(); applyFilters(); renderStats(); renderAchievements(); renderNearest();
}
function bindButtons(){
  $$('[data-copy]').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy); b.textContent='Kopieret'; setTimeout(()=>b.textContent='Kopiér',900)}catch{alert(b.dataset.copy)}});
  $$('[data-fav]').forEach(b=>b.onclick=()=>{let a=store('favs',[]); a=a.includes(b.dataset.fav)?a.filter(x=>x!==b.dataset.fav):[...a,b.dataset.fav]; save('favs',a); renderCards(); updateMap();});
  $$('[data-visited]').forEach(b=>b.onclick=()=>{let a=store('visited',[]); a=a.includes(b.dataset.visited)?a.filter(x=>x!==b.dataset.visited):[...a,b.dataset.visited]; save('visited',a); renderCards();});
  $$('[data-note]').forEach(t=>t.oninput=()=>{let n=store('notes',{}); n[t.dataset.note]=t.value; save('notes',n);});
}
function applyFilters(){
  const q=$('#search').value.trim().toLowerCase();
  $$('.place').forEach(c=>{
    let m=!q || c.dataset.search.includes(q);
    if(persona!=='Begge') m=m && (c.dataset.persona.includes(persona) || c.dataset.persona.includes('Begge'));
    if(currentFilter==='Topvalg') m=m && c.dataset.top==='1';
    else if(currentFilter==='Favoritter') m=m && store('favs',[]).some(id=>c.querySelector(`[data-fav="${id}"]`));
    else if(currentFilter.startsWith('Dag')) m=m && c.dataset.day.includes(currentFilter);
    else if(currentFilter!=='Alle') m=m && c.dataset.cat===currentFilter;
    c.classList.toggle('hide',!m);
  });
}
function setFilter(f){currentFilter=f; $$('.filterBtn').forEach(b=>b.classList.toggle('active',b.dataset.filter===f)); applyFilters(); updateMap();}
function setPersona(p){persona=p; $$('.modeBtn').forEach(b=>b.classList.toggle('active',b.dataset.persona===p)); applyFilters(); updateMap();}
function renderStats(){$('#statTotal').textContent=PLACES.length; $('#statFav').textContent=store('favs',[]).length; $('#statVisited').textContent=store('visited',[]).length; $('#statNotes').textContent=Object.values(store('notes',{})).filter(Boolean).length;}
function renderNearest(){
  const pos=userPos||ORIGIN; const list=[...PLACES].filter(p=>p.id!=='hotel').sort((a,b)=>hav(pos.lat,pos.lng,a.lat,a.lng)-hav(pos.lat,pos.lng,b.lat,b.lng)).slice(0,6);
  $('#nearest').innerHTML=list.map(p=>`<div class="checkline"><span>${p.emoji} <b>${p.name}</b><br><span class="tiny">${distanceText(p)} · ${p.cat}</span></span><a class="btn secondary" target="_blank" href="${dirUrl(p.address,'walking')}">Gå</a></div>`).join('');
}
function renderChecklist(){
  const items=['Pas + boarding pass','Rejseforsikring','UK-adapter','Powerbank + kabler','Gem Standalone HTML på begge telefoner','Importér KML i Google My Maps','Download offline Google Maps område','Tjek kuffert 20 kg','Spørg Rat & Pigeon om dartskiver','Tjek vejret før pakning'];
  const checked=store('checklist',[]); $('#checklist').innerHTML='';
  items.forEach((it,i)=>{const lab=document.createElement('label'); lab.className='checkline'; lab.innerHTML=`<input type="checkbox" ${checked.includes(i)?'checked':''}> <span>${it}</span>`; lab.querySelector('input').onchange=e=>{let c=store('checklist',[]); c=e.target.checked?[...new Set([...c,i])]:c.filter(x=>x!==i); save('checklist',c);}; $('#checklist').appendChild(lab);});
}
function renderBudget(){
 const rows=store('budgetRows',[['Greggs',10],['Five Guys',35],['Nando\'s',30],['Primark/shopping',80],['Transport',20]]);
 const box=$('#budgetRows'); box.innerHTML='';
 rows.forEach((r,i)=>{const div=document.createElement('div'); div.className='budgetrow'; div.innerHTML=`<input value="${r[0]}"><input type="number" value="${r[1]}"><button class="btn bad">×</button>`; div.children[0].oninput=e=>{rows[i][0]=e.target.value; save('budgetRows',rows); calcBudget();}; div.children[1].oninput=e=>{rows[i][1]=Number(e.target.value||0); save('budgetRows',rows); calcBudget();}; div.children[2].onclick=()=>{rows.splice(i,1); save('budgetRows',rows); renderBudget();}; box.appendChild(div);}); calcBudget();
}
function calcBudget(){const s=store('budgetRows',[]).reduce((a,r)=>a+Number(r[1]||0),0); $('#budgetTotal').textContent='£'+s.toFixed(0); $('#budgetDkk').textContent='ca. '+(s*8.8).toFixed(0)+' kr';}
function renderAchievements(){
 const visited=store('visited',[]); const ids=new Set(visited); const ach=[
  ['greggs','🥐 Greggs unlocked'],['fiveguys','🍔 Five Guys unlocked'],['nandos','🍗 PERi-PERi done'],['ratpigeon','🎯 First dart night'],['afflecks','🖤 Afflecks explored'],['trafford','🏬 Trafford mission'],['primark','🛒 Primark raid'],['footballmuseum','⚽ Football culture']
 ];
 $('#achievements').innerHTML=ach.map(a=>`<div class="ach ${ids.has(a[0])?'on':''}">${ids.has(a[0])?'🏆':'🔒'} ${a[1]}</div>`).join('');
}
function renderDays(){
 const plan=[
  ['Dag 1','Greggs → Arndale → Afflecks → Five Guys','Shopping og nem mad tæt på hotellet.'],
  ['Dag 2','Football Museum/sightseeing → Nando\'s → Rat & Pigeon','Fodbold, mad og stål-dart.'],
  ['Dag 3','Trafford Centre','Halv/hel dag med shopping. Spis derude.'],
  ['Dag 4','Northern Quarter → sidste shopping → snacks','Rolig dag før hjemrejse.']
 ];
 $('#days').innerHTML=plan.map(d=>`<div class="card daycard"><h3>${d[0]}</h3><p><b>${d[1]}</b></p><p class="note">${d[2]}</p><button class="btn secondary filterBtn" data-filter="${d[0]}">Vis steder</button></div>`).join('');
}
function weather(){
 if(!navigator.onLine) return;
 fetch('https://api.open-meteo.com/v1/forecast?latitude=53.4808&longitude=-2.2426&current=temperature_2m,precipitation,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Europe%2FLondon')
 .then(r=>r.json()).then(d=>{$('#weather').innerHTML=`<b>${Math.round(d.current.temperature_2m)}°C</b> · regn ${d.current.precipitation} mm · vind ${Math.round(d.current.wind_speed_10m)} km/t`;}).catch(()=>{});
}
function net(){document.body.classList.toggle('online',navigator.onLine); $('#netStatus').textContent=navigator.onLine?'✅ Online: live-kort, vejret og eksterne links virker.':'📴 Offline: appen, adresser, noter, budget og favoritter virker stadig.'; weather(); initMap();}
async function locateMe(){
 if(!navigator.geolocation) return alert('GPS understøttes ikke her.');
 navigator.geolocation.getCurrentPosition(pos=>{userPos={lat:pos.coords.latitude,lng:pos.coords.longitude}; $('#gpsStatus').textContent='GPS aktiv: afstande beregnes fra hvor du står.'; renderCards(); updateMap();}, err=>alert('Kunne ikke få GPS. Tillad lokation i browseren.'), {enableHighAccuracy:true, timeout:10000});
}
function initMap(){
 if(!navigator.onLine || !window.L || map) return;
 map=L.map('leafletMap').setView([ORIGIN.lat,ORIGIN.lng],15);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19, attribution:'© OpenStreetMap'}).addTo(map);
 updateMap();
}
function updateMap(){
 if(!map) return;
 markers.forEach(m=>m.remove()); markers=[];
 const favs=store('favs',[]);
 PLACES.forEach(p=>{
   if(persona!=='Begge' && !(p.persona.includes(persona)||p.persona.includes('Begge'))) return;
   const icon=L.divIcon({className:'',html:`<div style="font-size:25px;filter:drop-shadow(0 1px 3px #000)">${p.emoji}</div>`,iconSize:[30,30]});
   const m=L.marker([p.lat,p.lng],{icon}).addTo(map).bindPopup(`<b>${p.emoji} ${p.name}</b><br>${p.walk} · ${p.cat}<br><a target="_blank" href="${mapsUrl(p.address)}">Google Maps</a>`);
   markers.push(m);
 });
 if(userPos) markers.push(L.marker([userPos.lat,userPos.lng]).addTo(map).bindPopup('Du er her'));
}
function initInstall(){
 let deferredPrompt=null;
 window.addEventListener('beforeinstallprompt',e=>{e.preventDefault(); deferredPrompt=e; document.body.classList.add('canInstall');});
 $('#installBtn').onclick=async()=>{ if(deferredPrompt){deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null;} else alert('Chrome viser kun installér-knappen når appen ligger online via HTTPS, fx GitHub Pages.'); };
}
$('#search').addEventListener('input',applyFilters);
document.addEventListener('click',e=>{if(e.target.matches('.filterBtn')) setFilter(e.target.dataset.filter); if(e.target.matches('.modeBtn')) setPersona(e.target.dataset.persona);});
$('#gpsBtn').onclick=locateMe;
$('#addBudget').onclick=()=>{let r=store('budgetRows',[]); r.push(['Ny post',0]); save('budgetRows',r); renderBudget();};
$('#clearData').onclick=()=>{if(confirm('Nulstil favoritter, besøgte steder, noter, budget og checklist?')){localStorage.clear(); start();}};
window.addEventListener('online',net); window.addEventListener('offline',net);
function start(){renderCards(); renderChecklist(); renderBudget(); renderAchievements(); renderDays(); initInstall(); net();}
start();
