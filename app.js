
const PLACES = [{"id": "hotel", "cat": "Base", "emoji": "🏨", "name": "The Gardens Hotel", "address": "55 Piccadilly, Manchester M1 2AP, United Kingdom", "walk": "Base", "lat": 53.48095, "lng": -2.23655, "tags": ["hotel", "base", "piccadilly"], "day": ["Alle", "Ankomst", "Hjemrejse"], "note": "Jeres base midt ved Piccadilly Gardens. Super central placering.", "order": "", "official": "https://www.gardenshotelmanchester.com/contactUs.html", "top": true, "persona": ["Begge"], "vibe": ["base"]}, {"id": "greggs", "cat": "Mad", "emoji": "🥐", "name": "Greggs Piccadilly", "address": "93 Piccadilly, Manchester, United Kingdom", "walk": "1 min", "lat": 53.48075, "lng": -2.23475, "tags": ["morgenmad", "snack", "billigt", "sausage roll"], "day": ["Dag 1", "Alle"], "note": "Hurtig snack/billig frokost. Morgenmad er på hotellet, så brug den mest til ekstra snacks.", "order": "Sausage roll, steak bake, kaffe, yum yum.", "official": "https://www.greggs.co.uk/", "top": true, "persona": ["Jonas", "Emily", "Begge"], "vibe": ["sulten", "billigt", "snack"]}, {"id": "fiveguys", "cat": "Mad", "emoji": "🍔", "name": "Five Guys Piccadilly Gardens", "address": "17 Piccadilly, Manchester M1 1LS, United Kingdom", "walk": "2 min", "lat": 53.48105, "lng": -2.23775, "tags": ["burger", "fries", "milkshake"], "day": ["Dag 1", "Alle"], "note": "Burger, fries og milkshake tættere på end man næsten kan nå at blive sulten.", "order": "Cheeseburger, Little Cajun Fries, Oreo/Salted Caramel shake.", "official": "https://restaurants.fiveguys.co.uk/north-west/17-piccadilly", "top": true, "persona": ["Jonas", "Emily", "Begge"], "vibe": ["sulten", "burger", "aften"]}, {"id": "nandos", "cat": "Mad", "emoji": "🍗", "name": "Nando's Manchester Piccadilly", "address": "27 Piccadilly, Manchester M1 1LU, United Kingdom", "walk": "3 min", "lat": 53.4811, "lng": -2.23855, "tags": ["kylling", "peri peri", "aftensmad"], "day": ["Dag 2", "Alle"], "note": "Nem PERi-PERi kylling tæt på hotellet.", "order": "Butterfly chicken, PERi chips, garlic bread, PERinaise.", "official": "https://www.nandos.co.uk/restaurants/manchester-piccadilly", "top": true, "persona": ["Jonas", "Emily", "Begge"], "vibe": ["sulten", "aften", "kylling"]}, {"id": "wingstop", "cat": "Mad", "emoji": "🍗", "name": "Wingstop Manchester", "address": "Wingstop Manchester Piccadilly, United Kingdom", "walk": "3-8 min", "lat": 53.4818, "lng": -2.239, "tags": ["wings", "kylling", "fries"], "day": ["Alle"], "note": "Wings og fries. God backup til nem mad.", "order": "Tenders/wings + seasoned fries.", "official": "https://www.google.com/maps/search/?api=1&query=Wingstop%20Manchester%20Piccadilly", "top": false, "persona": ["Jonas", "Emily", "Begge"], "vibe": ["sulten", "aften", "kylling"]}, {"id": "rudys", "cat": "Mad", "emoji": "🍕", "name": "Rudy's Pizza Portland Street", "address": "9 Portland Street, Manchester M1 3BE, United Kingdom", "walk": "6-8 min", "lat": 53.4802, "lng": -2.2382, "tags": ["pizza", "napoli"], "day": ["Alle"], "note": "Meget populær napolitansk pizza.", "order": "Margherita/pepperoni-style pizza.", "official": "https://www.rudyspizza.co.uk/", "top": false, "persona": ["Emily", "Begge"], "vibe": ["sulten", "aften", "pizza"]}, {"id": "timhortons", "cat": "Mad", "emoji": "🍩", "name": "Tim Hortons Manchester", "address": "Tim Hortons Manchester, United Kingdom", "walk": "Søg", "lat": 53.4831, "lng": -2.2416, "tags": ["kaffe", "donut"], "day": ["Alle"], "note": "Donuts, kaffe og hurtig snack.", "order": "Iced capp + donut.", "official": "https://www.google.com/maps/search/?api=1&query=Tim%20Hortons%20Manchester", "top": false, "persona": ["Emily", "Begge"], "vibe": ["kaffe", "snack"]}, {"id": "starbucks", "cat": "Mad", "emoji": "☕", "name": "Starbucks Piccadilly", "address": "Starbucks Piccadilly Manchester, United Kingdom", "walk": "2-4 min", "lat": 53.4809, "lng": -2.2372, "tags": ["kaffe"], "day": ["Alle"], "note": "Nem kaffe tæt ved hotellet.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=Starbucks%20Piccadilly%20Manchester", "top": false, "persona": ["Emily", "Begge"], "vibe": ["kaffe"]}, {"id": "costa", "cat": "Mad", "emoji": "☕", "name": "Costa Coffee Piccadilly", "address": "Costa Coffee Piccadilly Manchester, United Kingdom", "walk": "2-5 min", "lat": 53.4806, "lng": -2.2352, "tags": ["kaffe"], "day": ["Alle"], "note": "Kaffe/kolde drikke.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=Costa%20Coffee%20Piccadilly%20Manchester", "top": false, "persona": ["Emily", "Begge"], "vibe": ["kaffe"]}, {"id": "ratpigeon", "cat": "Dart", "emoji": "🎯", "name": "The Rat & Pigeon", "address": "33 Back Piccadilly, Manchester M1 1HP, United Kingdom", "walk": "4-5 min", "lat": 53.48225, "lng": -2.2353, "tags": ["stål dart", "pub", "dart"], "day": ["Dag 2", "Alle"], "note": "Bedste bud tæt på hotellet for stål-dart. Tjek/skriv om skiverne er ledige.", "order": "Spørg: “Do you have a free dartboard?”", "official": "https://www.google.com/maps/search/?api=1&query=The%20Rat%20%26%20Pigeon%2033%20Back%20Piccadilly%20Manchester", "top": true, "persona": ["Jonas", "Begge"], "vibe": ["dart", "aften"]}, {"id": "smithfield", "cat": "Dart", "emoji": "🎯", "name": "The Smithfield Market Tavern", "address": "37 Swan Street, Manchester M4 5JZ, United Kingdom", "walk": "10 min", "lat": 53.4844, "lng": -2.2344, "tags": ["stål dart", "pub", "dart"], "day": ["Alle"], "note": "Traditionel pub og god backup til dart/pub-hygge.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=The%20Smithfield%20Market%20Tavern%2037%20Swan%20Street%20Manchester", "top": false, "persona": ["Jonas"], "vibe": ["dart", "aften"]}, {"id": "bayhorse", "cat": "Dart", "emoji": "🎯", "name": "The Bay Horse Tavern", "address": "35-37 Thomas Street, Manchester M4 1NA, United Kingdom", "walk": "10-12 min", "lat": 53.48375, "lng": -2.2383, "tags": ["pub", "dart"], "day": ["Alle"], "note": "Hyggelig Northern Quarter-pub. Tjek om dartskiven er fri.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=The%20Bay%20Horse%20Tavern%2035-37%20Thomas%20Street%20Manchester", "top": false, "persona": ["Jonas", "Begge"], "vibe": ["dart", "aften"]}, {"id": "arndale", "cat": "Shopping", "emoji": "🛍️", "name": "Manchester Arndale", "address": "Manchester Arndale, Manchester M4 3AD, United Kingdom", "walk": "5-7 min", "lat": 53.4831, "lng": -2.242, "tags": ["shopping", "center", "butikker"], "day": ["Dag 1", "Alle"], "note": "Stort shoppingcenter i centrum med masser af butikker.", "order": "Start her, så Afflecks bagefter.", "official": "https://manchesterarndale.com/", "top": true, "persona": ["Emily", "Begge"], "vibe": ["shopping", "regnvejr"]}, {"id": "afflecks", "cat": "Shopping", "emoji": "🖤", "name": "Afflecks", "address": "52 Church Street, Manchester M4 1PW, United Kingdom", "walk": "6-7 min", "lat": 53.48295, "lng": -2.2372, "tags": ["vintage", "anime", "kpop", "alternativ", "nørd"], "day": ["Dag 1", "Alle"], "note": "Vintage, alternativ mode, anime/K-pop og nørdeting. Must-see.", "order": "Giv den tid — det er mere oplevelse end bare butik.", "official": "https://afflecks.com/", "top": true, "persona": ["Emily", "Begge"], "vibe": ["shopping", "nørd", "regnvejr"]}, {"id": "primark", "cat": "Shopping", "emoji": "🛒", "name": "Primark Market Street", "address": "106-122 Market Street, Manchester M1 1WA, United Kingdom", "walk": "5-7 min", "lat": 53.4826, "lng": -2.2394, "tags": ["billigt", "tøj", "primark"], "day": ["Dag 1", "Alle"], "note": "Billig tøjshopping. Meget oplagt til Emily.", "order": "", "official": "https://www.primark.com/", "top": true, "persona": ["Emily"], "vibe": ["shopping", "billigt"]}, {"id": "jdsports", "cat": "Shopping", "emoji": "👟", "name": "JD Sports Arndale", "address": "JD Sports Manchester Arndale, Manchester, United Kingdom", "walk": "5-7 min", "lat": 53.4832, "lng": -2.242, "tags": ["sneakers", "sport"], "day": ["Dag 1", "Alle"], "note": "Sneakers og sportstøj.", "order": "", "official": "https://www.jdsports.co.uk/", "top": false, "persona": ["Emily"], "vibe": ["shopping", "sneakers"]}, {"id": "boots", "cat": "Shopping", "emoji": "💄", "name": "Boots Piccadilly", "address": "Boots Piccadilly Manchester, United Kingdom", "walk": "2-5 min", "lat": 53.4813, "lng": -2.2367, "tags": ["apotek", "makeup", "toiletries"], "day": ["Alle"], "note": "Toiletries, makeup og apoteksting.", "order": "", "official": "https://www.boots.com/", "top": false, "persona": ["Emily", "Begge"], "vibe": ["shopping", "praktisk"]}, {"id": "superdrug", "cat": "Shopping", "emoji": "💊", "name": "Superdrug Arndale", "address": "Superdrug Manchester Arndale, Manchester, United Kingdom", "walk": "5-7 min", "lat": 53.483, "lng": -2.2422, "tags": ["makeup", "hår"], "day": ["Alle"], "note": "Makeup, hår, hygiene og småting.", "order": "", "official": "https://www.superdrug.com/", "top": false, "persona": ["Emily"], "vibe": ["shopping"]}, {"id": "trafford", "cat": "Shopping", "emoji": "🏬", "name": "Trafford Centre", "address": "The Trafford Centre, Trafford Park, Stretford, Manchester M17 8AA, United Kingdom", "walk": "25-35 min transport", "lat": 53.4668, "lng": -2.3499, "tags": ["shopping", "heldag", "center"], "day": ["Dag 3"], "note": "Kæmpe shoppingcenter. Brug en halv/hel dag her.", "order": "Tag afsted efter morgenmad, spis derude.", "official": "https://traffordcentre.co.uk/", "top": true, "persona": ["Emily", "Begge"], "vibe": ["shopping", "regnvejr", "heldag"]}, {"id": "piccadillystation", "cat": "Transport", "emoji": "🚉", "name": "Manchester Piccadilly Station", "address": "Manchester Piccadilly Station, Manchester M1 2BN, United Kingdom", "walk": "7-10 min", "lat": 53.4774, "lng": -2.2309, "tags": ["tog", "station", "airport"], "day": ["Ankomst", "Hjemrejse", "Alle"], "note": "Tog til/fra lufthavn og resten af UK.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=Manchester%20Piccadilly%20Station", "top": true, "persona": ["Begge"], "vibe": ["transport"]}, {"id": "metrolink", "cat": "Transport", "emoji": "🚋", "name": "Piccadilly Gardens Metrolink", "address": "Piccadilly Gardens Tram Stop, Manchester, United Kingdom", "walk": "1-2 min", "lat": 53.4811, "lng": -2.2382, "tags": ["sporvogn", "bus"], "day": ["Alle"], "note": "Sporvogn/bus lige ved hotellet.", "order": "", "official": "https://tfgm.com/", "top": true, "persona": ["Begge"], "vibe": ["transport"]}, {"id": "airport", "cat": "Transport", "emoji": "✈️", "name": "Manchester Airport", "address": "Manchester Airport, Manchester M90 1QX, United Kingdom", "walk": "Tog/taxa", "lat": 53.365, "lng": -2.2727, "tags": ["fly", "airport"], "day": ["Ankomst", "Hjemrejse"], "note": "Tog til Piccadilly Station er typisk nemmest.", "order": "", "official": "https://www.manchesterairport.co.uk/", "top": false, "persona": ["Begge"], "vibe": ["transport"]}, {"id": "footballmuseum", "cat": "Oplevelser", "emoji": "⚽", "name": "National Football Museum", "address": "Urbis Building, Cathedral Gardens, Todd Street, Manchester M4 3BG, United Kingdom", "walk": "12-15 min", "lat": 53.4853, "lng": -2.2425, "tags": ["fodbold", "museum"], "day": ["Dag 2", "Alle"], "note": "Godt fodboldmuseum i centrum.", "order": "", "official": "https://www.nationalfootballmuseum.com/", "top": false, "persona": ["Jonas", "Begge"], "vibe": ["fodbold", "regnvejr"]}, {"id": "oldtrafford", "cat": "Oplevelser", "emoji": "⚽", "name": "Old Trafford", "address": "Old Trafford, Sir Matt Busby Way, Manchester M16 0RA, United Kingdom", "walk": "25-35 min transport", "lat": 53.4631, "lng": -2.2913, "tags": ["fodbold", "stadion", "man utd"], "day": ["Alle"], "note": "Manchester United stadion.", "order": "", "official": "https://www.manutd.com/", "top": false, "persona": ["Jonas", "Begge"], "vibe": ["fodbold"]}, {"id": "etihad", "cat": "Oplevelser", "emoji": "⚽", "name": "Etihad Stadium", "address": "Etihad Stadium, Ashton New Road, Manchester M11 3FF, United Kingdom", "walk": "20-30 min transport", "lat": 53.4831, "lng": -2.2004, "tags": ["fodbold", "stadion", "city"], "day": ["Alle"], "note": "Manchester City stadion.", "order": "", "official": "https://www.mancity.com/", "top": false, "persona": ["Jonas", "Begge"], "vibe": ["fodbold"]}, {"id": "nq64", "cat": "Oplevelser", "emoji": "🎮", "name": "NQ64 Northern Quarter", "address": "9 Short Street, Manchester M4 1AA, United Kingdom", "walk": "5-7 min", "lat": 53.4825, "lng": -2.2359, "tags": ["retro", "arcade", "spil"], "day": ["Alle"], "note": "Arcade-bar/retrospil. Tjek aldersregler og åbningstid.", "order": "", "official": "https://nq64.co.uk/", "top": false, "persona": ["Jonas", "Emily", "Begge"], "vibe": ["nørd", "aften", "regnvejr"]}, {"id": "science", "cat": "Oplevelser", "emoji": "🔬", "name": "Science and Industry Museum", "address": "Liverpool Road, Manchester M3 4FP, United Kingdom", "walk": "20-25 min", "lat": 53.4773, "lng": -2.255, "tags": ["museum", "regnvejr", "teknik"], "day": ["Alle"], "note": "Teknik/industri/historie. God regnvejrsaktivitet.", "order": "", "official": "https://www.scienceandindustrymuseum.org.uk/", "top": false, "persona": ["Jonas", "Begge"], "vibe": ["regnvejr", "museum"]}, {"id": "northernquarter", "cat": "Oplevelser", "emoji": "🎨", "name": "Northern Quarter", "address": "Northern Quarter, Manchester, United Kingdom", "walk": "3-8 min", "lat": 53.4825, "lng": -2.235, "tags": ["street art", "cafe", "shops"], "day": ["Dag 4", "Alle"], "note": "Street art, caféer, små butikker og god gåtur tæt på hotellet.", "order": "God til rolig sidste dag.", "official": "https://www.google.com/maps/search/?api=1&query=Northern%20Quarter%20Manchester", "top": true, "persona": ["Emily", "Begge"], "vibe": ["shopping", "gåtur", "kaffe"]}, {"id": "canalstreet", "cat": "Oplevelser", "emoji": "🌈", "name": "Canal Street", "address": "Canal Street, Manchester, United Kingdom", "walk": "6-8 min", "lat": 53.4779, "lng": -2.2375, "tags": ["canal street", "night", "walk"], "day": ["Alle"], "note": "Kendt område tæt på centrum. Fin lille aftengåtur hvis I er i nærheden.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=Canal%20Street%20Manchester", "top": false, "persona": ["Begge"], "vibe": ["gåtur", "aften"]}, {"id": "aldi", "cat": "Praktisk", "emoji": "🛒", "name": "Aldi Arndale", "address": "Aldi, Manchester Arndale, Manchester, United Kingdom", "walk": "6-8 min", "lat": 53.483, "lng": -2.2416, "tags": ["vand", "snacks", "supermarked"], "day": ["Alle"], "note": "Billigt vand/snacks.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=Aldi%20Manchester%20Arndale", "top": true, "persona": ["Begge"], "vibe": ["praktisk", "billigt"]}, {"id": "tesco", "cat": "Praktisk", "emoji": "🛒", "name": "Tesco Express Piccadilly", "address": "Tesco Express Piccadilly Manchester, United Kingdom", "walk": "2-6 min", "lat": 53.4808, "lng": -2.2388, "tags": ["vand", "snacks", "supermarked"], "day": ["Alle"], "note": "Vand, snacks og småting.", "order": "", "official": "https://www.google.com/maps/search/?api=1&query=Tesco%20Express%20Piccadilly%20Manchester", "top": true, "persona": ["Begge"], "vibe": ["praktisk"]}, {"id": "hospital", "cat": "Praktisk", "emoji": "🏥", "name": "Manchester Royal Infirmary", "address": "Oxford Road, Manchester M13 9WL, United Kingdom", "walk": "Taxi/transport", "lat": 53.4629, "lng": -2.2286, "tags": ["hospital", "nød"], "day": ["Nød"], "note": "Stort hospital. Ring 999 ved akut nødsituation.", "order": "Emergency: 999. Ikke-akut NHS: 111.", "official": "https://mft.nhs.uk/", "top": false, "persona": ["Begge"], "vibe": ["nød"]}];
const ORIGIN = {"name": "The Gardens Hotel", "address": "55 Piccadilly, Manchester M1 2AP, United Kingdom", "lat": 53.48095, "lng": -2.23655};
const DEFAULT_RATE = 8.8;
const DAILY_FOOD_DKK = 600;
const DAILY_FOOD_GBP = 68.18;
const TRIP_DAYS = 4;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const store = (k, fallback) => { try { return JSON.parse(localStorage.getItem(k)) ?? fallback } catch { return fallback } };
const save = (k,v) => localStorage.setItem(k, JSON.stringify(v));
const mapsUrl = a => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(a);
const dirUrl = (a,mode='walking') => 'https://www.google.com/maps/dir/?api=1&origin=' + encodeURIComponent(ORIGIN.address) + '&destination=' + encodeURIComponent(a) + '&travelmode=' + mode;
const hav = (a,b,c,d) => {const R=6371000, p=Math.PI/180; let x=(c-a)*p, y=(d-b)*p; let A=Math.sin(x/2)**2+Math.cos(a*p)*Math.cos(c*p)*Math.sin(y/2)**2; return 2*R*Math.atan2(Math.sqrt(A),Math.sqrt(1-A));};
let currentFilter='Alle', persona='Begge', vibe='Alle', userPos=null, map=null, markers=[], currentLayer='Alle';

function rate(){return Number(store('gbpRate', DEFAULT_RATE)) || DEFAULT_RATE;}
function gbpToDkk(v){return Number(v||0)*rate();}
function fmtGbp(v){return '£'+Number(v||0).toFixed(2).replace('.00','');}
function fmtDkk(v){return Math.round(Number(v||0))+' kr';}
function distanceText(p) {
  const base = userPos ? userPos : ORIGIN;
  const m = hav(base.lat, base.lng, p.lat, p.lng);
  if(m > 1000) return (m/1000).toFixed(1)+' km';
  return Math.round(m)+' m';
}
function passFilter(p){
  if(persona!=='Begge' && !(p.persona.includes(persona)||p.persona.includes('Begge'))) return false;
  if(vibe!=='Alle' && !(p.vibe||[]).includes(vibe)) return false;
  if(currentFilter==='Topvalg') return !!p.top;
  if(currentFilter==='Favoritter') return store('favs',[]).includes(p.id);
  if(currentFilter.startsWith('Dag')) return p.day.includes(currentFilter);
  if(currentFilter!=='Alle') return p.cat===currentFilter;
  return true;
}
function renderCards() {
  const favs=store('favs',[]), visited=store('visited',[]), notes=store('notes',{});
  const grid=$('#cards'); grid.innerHTML='';
  const sorted=[...PLACES].sort((a,b)=>hav((userPos||ORIGIN).lat,(userPos||ORIGIN).lng,a.lat,a.lng)-hav((userPos||ORIGIN).lat,(userPos||ORIGIN).lng,b.lat,b.lng));
  for(const p of sorted) {
    const fav=favs.includes(p.id), vis=visited.includes(p.id);
    const search=[p.name,p.cat,p.address,p.note,p.order,...p.tags,...p.day,...p.persona,...(p.vibe||[])].join(' ').toLowerCase();
    const card=document.createElement('article');
    card.className='card place'; card.dataset.cat=p.cat; card.dataset.top=p.top?'1':'0'; card.dataset.day=p.day.join('|'); card.dataset.persona=p.persona.join('|'); card.dataset.vibe=(p.vibe||[]).join('|'); card.dataset.search=search; card.dataset.id=p.id;
    card.innerHTML = `
      ${p.top?'<div class="topstar">⭐</div>':''}
      <h3>${p.emoji} ${p.name}</h3>
      <div class="meta"><span class="badge">🚶 ${p.walk}</span><span class="badge">📍 ${distanceText(p)}</span><span class="badge">${p.cat}</span>${p.top?'<span class="badge">Topvalg</span>':''}</div>
      <p><b>Adresse:</b><br>${p.address}</p>
      <p class="note">${p.note}</p>
      ${p.order?`<p><b>Tip:</b> ${p.order}</p>`:''}
      <div class="actions">
        <a class="btn" target="_blank" href="${mapsUrl(p.address)}">Maps</a>
        <a class="btn secondary" target="_blank" href="${dirUrl(p.address,'walking')}">Gå</a>
        <a class="btn secondary" target="_blank" href="${dirUrl(p.address,'transit')}">Transport</a>
        <a class="btn warn" target="_blank" href="${p.official}">Info</a>
        <button class="btn fav ${fav?'on':''}" data-fav="${p.id}">❤️</button>
        <button class="btn visited ${vis?'on':''}" data-visited="${p.id}">${vis?'✅':'☐'}</button>
        <button class="btn secondary" data-copy="${p.address}">Kopiér</button>
      </div>
      <details><summary>Noter / minder</summary><textarea data-note="${p.id}" placeholder="Skriv note til ${p.name}...">${notes[p.id]||''}</textarea></details>
      <details class="onlineOnly"><summary>Google Maps preview</summary><iframe loading="lazy" src="https://www.google.com/maps?q=${encodeURIComponent(p.address)}&output=embed"></iframe></details>
    `;
    grid.appendChild(card);
  }
  bindButtons(); applyFilters(); renderStats(); renderAchievements(); renderNearest();
}
function bindButtons(){
  $$('[data-copy]').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy); b.textContent='Kopieret'; setTimeout(()=>b.textContent='Kopiér',900)}catch{alert(b.dataset.copy)}});
  $$('[data-fav]').forEach(b=>b.onclick=()=>{let a=store('favs',[]); a=a.includes(b.dataset.fav)?a.filter(x=>x!==b.dataset.fav):[...a,b.dataset.fav]; save('favs',a); renderCards(); updateMap();});
  $$('[data-visited]').forEach(b=>b.onclick=()=>{let a=store('visited',[]); a=a.includes(b.dataset.visited)?a.filter(x=>x!==b.dataset.visited):[...a,b.dataset.visited]; save('visited',a); renderCards();});
  $$('[data-note]').forEach(t=>t.oninput=()=>{let n=store('notes',{}); n[t.dataset.note]=t.value; save('notes',n); renderStats();});
}
function applyFilters(){
  const q=$('#search').value.trim().toLowerCase();
  $$('.place').forEach(c=>{
    let p=PLACES.find(x=>x.id===c.dataset.id);
    let m=(!q || c.dataset.search.includes(q)) && passFilter(p);
    c.classList.toggle('hide',!m);
  });
}
function setFilter(f){currentFilter=f; $$('.filterBtn').forEach(b=>b.classList.toggle('active',b.dataset.filter===f)); applyFilters(); updateMap();}
function setPersona(p){persona=p; $$('.modeBtn').forEach(b=>b.classList.toggle('active',b.dataset.persona===p)); applyFilters(); updateMap();}
function setVibe(v){vibe=v; $$('.vibeBtn').forEach(b=>b.classList.toggle('active',b.dataset.vibe===v)); applyFilters(); updateMap();}
function renderStats(){$('#statTotal').textContent=PLACES.length; $('#statFav').textContent=store('favs',[]).length; $('#statVisited').textContent=store('visited',[]).length; $('#statNotes').textContent=Object.values(store('notes',{})).filter(Boolean).length; renderBudgetSummary();}
function renderNearest(){
  const pos=userPos||ORIGIN; const list=[...PLACES].filter(p=>p.id!=='hotel').sort((a,b)=>hav(pos.lat,pos.lng,a.lat,a.lng)-hav(pos.lat,pos.lng,b.lat,b.lng)).slice(0,8);
  $('#nearest').innerHTML=list.map(p=>`<div class="checkline"><span>${p.emoji} <b>${p.name}</b><br><span class="tiny">${distanceText(p)} · ${p.cat}</span></span><a class="btn secondary" target="_blank" href="${dirUrl(p.address,'walking')}">Gå</a></div>`).join('');
}
function renderChecklist(){
  const items=['Pas + boarding pass','Rejseforsikring','UK-adapter','Powerbank + kabler','Gem/installer appen på begge telefoner','Importér KML i Google My Maps','Download offline Google Maps område','Tjek kuffert 20 kg','Spørg Rat & Pigeon om dartskiver','Tjek vejret før pakning'];
  const checked=store('checklist',[]); $('#checklist').innerHTML='';
  items.forEach((it,i)=>{const lab=document.createElement('label'); lab.className='checkline'; lab.innerHTML=`<input type="checkbox" ${checked.includes(i)?'checked':''}> <span>${it}</span>`; lab.querySelector('input').onchange=e=>{let c=store('checklist',[]); c=e.target.checked?[...new Set([...c,i])]:c.filter(x=>x!==i); save('checklist',c);}; $('#checklist').appendChild(lab);});
}
function renderBudget(){
 const rows=store('budgetRows',[['Dag 1 mad',35,'Dag 1'],['Dag 2 mad',30,'Dag 2'],['Dag 3 mad',45,'Dag 3'],['Dag 4 mad',25,'Dag 4']]);
 $('#rateInput').value=rate();
 const box=$('#budgetRows'); box.innerHTML='';
 rows.forEach((r,i)=>{const div=document.createElement('div'); div.className='budgetrow'; div.innerHTML=`<input value="${r[0]}" placeholder="Post"><input type="number" step="0.01" value="${r[1]}" placeholder="GBP"><select><option>Dag 1</option><option>Dag 2</option><option>Dag 3</option><option>Dag 4</option><option>Shopping</option><option>Transport</option><option>Andet</option></select><button class="btn bad">×</button>`; div.children[2].value=r[2]||'Andet'; div.children[0].oninput=e=>{rows[i][0]=e.target.value; save('budgetRows',rows); calcBudget();}; div.children[1].oninput=e=>{rows[i][1]=Number(e.target.value||0); save('budgetRows',rows); calcBudget();}; div.children[2].onchange=e=>{rows[i][2]=e.target.value; save('budgetRows',rows); calcBudget();}; div.children[3].onclick=()=>{rows.splice(i,1); save('budgetRows',rows); renderBudget();}; box.appendChild(div);}); calcBudget();
}
function calcBudget(){
 const rows=store('budgetRows',[]);
 const foodRows=rows.filter(r=>String(r[2]||'').startsWith('Dag'));
 const foodGbp=foodRows.reduce((a,r)=>a+Number(r[1]||0),0);
 const totalGbp=rows.reduce((a,r)=>a+Number(r[1]||0),0);
 const foodLimitGbp=DAILY_FOOD_GBP*TRIP_DAYS;
 const pct=Math.min(100, foodGbp/foodLimitGbp*100);
 $('#budgetTotal').textContent=fmtGbp(totalGbp);
 $('#budgetDkk').textContent=fmtDkk(gbpToDkk(totalGbp));
 $('#foodTotal').textContent=fmtGbp(foodGbp)+' / '+fmtGbp(foodLimitGbp);
 $('#foodDkk').textContent=fmtDkk(gbpToDkk(foodGbp))+' / '+fmtDkk(DAILY_FOOD_DKK*TRIP_DAYS);
 $('#foodLeft').textContent=fmtGbp(Math.max(0,foodLimitGbp-foodGbp))+' / '+fmtDkk(Math.max(0,DAILY_FOOD_DKK*TRIP_DAYS-gbpToDkk(foodGbp)));
 $('#foodProgress').style.width=pct+'%';
 $('#foodProgress').classList.toggle('warn', pct>85);
 ['Dag 1','Dag 2','Dag 3','Dag 4'].forEach((d,idx)=>{
   const spent=rows.filter(r=>r[2]===d).reduce((a,r)=>a+Number(r[1]||0),0);
   const el=$('#dayBudget'+(idx+1)); if(el) el.innerHTML=`<b>${d}</b><br>${fmtGbp(spent)} / ${fmtGbp(DAILY_FOOD_GBP)}<br><span class="tiny">${fmtDkk(gbpToDkk(spent))} / ${DAILY_FOOD_DKK} kr</span>`;
 });
 renderStatsOnly(); renderDashboard();
}
function renderStatsOnly(){ if($('#statBudget')) $('#statBudget').textContent=$('#budgetTotal').textContent; }
function renderBudgetSummary(){
 const el=$('#statBudget'); if(el) {
  const rows=store('budgetRows',[]); const totalGbp=rows.reduce((a,r)=>a+Number(r[1]||0),0);
  el.textContent=fmtGbp(totalGbp);
 }
}
function renderAchievements(){
 const ids=new Set(store('visited',[])); const ach=[
  ['greggs','🥐 Greggs unlocked'],['fiveguys','🍔 Five Guys unlocked'],['nandos','🍗 PERi-PERi done'],['ratpigeon','🎯 First dart night'],['afflecks','🖤 Afflecks explored'],['trafford','🏬 Trafford mission'],['primark','🛒 Primark raid'],['footballmuseum','⚽ Football culture'],['northernquarter','🎨 Northern Quarter walk']
 ];
 $('#achievements').innerHTML=ach.map(a=>`<div class="ach ${ids.has(a[0])?'on':''}">${ids.has(a[0])?'🏆':'🔒'} ${a[1]}</div>`).join('');
}
function renderDays(){
 const plan=[
  ['Dag 1','Greggs → Arndale → Afflecks → Five Guys','Shopping og nem mad tæt på hotellet.'],
  ['Dag 2','Football Museum/sightseeing → Nando\'s → Rat & Pigeon','Fodbold, mad og stål-dart.'],
  ['Dag 3','Trafford Centre','Halv/hel dag med shopping. Spis derude.'],
  ['Dag 4','Northern Quarter → Canal Street → sidste shopping','Rolig dag før hjemrejse.']
 ];
 $('#daysGrid').innerHTML=plan.map(d=>`<div class="card daycard"><h3>${d[0]}</h3><p><b>${d[1]}</b></p><p class="note">${d[2]}</p><button class="btn secondary filterBtn" data-filter="${d[0]}">Vis steder</button></div>`).join('');
}
function weather(){
 if(!navigator.onLine) return;
 fetch('https://api.open-meteo.com/v1/forecast?latitude=53.4808&longitude=-2.2426&current=temperature_2m,precipitation,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Europe%2FLondon')
 .then(r=>r.json()).then(d=>{$('#weather').innerHTML=`<b>${Math.round(d.current.temperature_2m)}°C</b> · regn ${d.current.precipitation} mm · vind ${Math.round(d.current.wind_speed_10m)} km/t`;}).catch(()=>{});
}
async function fx(){
 if(!navigator.onLine) return;
 try {
   const r=await fetch('https://open.er-api.com/v6/latest/GBP'); const d=await r.json();
   if(d && d.rates && d.rates.DKK) { save('gbpRate', Number(d.rates.DKK).toFixed(3)); $('#rateInput').value=rate(); calcBudget(); }
 } catch(e) {}
}
function net(){document.body.classList.toggle('online',navigator.onLine); $('#netStatus').textContent=navigator.onLine?'✅ Online: live-kort, vejr, valutakurs og links virker.':'📴 Offline: appen, adresser, noter, budget og favoritter virker stadig.'; weather(); fx(); initMap();}
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
 PLACES.forEach(p=>{
   if(!passFilter(p)) return;
   if(currentLayer!=='Alle' && p.cat!==currentLayer) return;
   const icon=L.divIcon({className:'',html:`<div style="font-size:26px;filter:drop-shadow(0 1px 3px #000)">${p.emoji}</div>`,iconSize:[32,32]});
   const m=L.marker([p.lat,p.lng],{icon}).addTo(map).bindPopup(`<b>${p.emoji} ${p.name}</b><br>${p.walk} · ${p.cat}<br><a target="_blank" href="${mapsUrl(p.address)}">Google Maps</a><br><a target="_blank" href="${dirUrl(p.address,'walking')} ">Gå-rute</a>`);
   markers.push(m);
 });
 if(userPos) markers.push(L.marker([userPos.lat,userPos.lng]).addTo(map).bindPopup('Du er her'));
}
function setLayer(cat){currentLayer=cat; $$('.layerBtn').forEach(b=>b.classList.toggle('active',b.dataset.layer===cat)); updateMap();}
function initInstall(){
 let deferredPrompt=null;
 window.addEventListener('beforeinstallprompt',e=>{e.preventDefault(); deferredPrompt=e; document.body.classList.add('canInstall');});
 $('#installBtn').onclick=async()=>{ if(deferredPrompt){deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null;} else alert('Chrome viser installér når appen ligger online via HTTPS. På iPhone: Safari → Del → Føj til hjemmeskærm.'); };
}
$('#search').addEventListener('input',applyFilters);
document.addEventListener('click',e=>{if(e.target.matches('.filterBtn')) setFilter(e.target.dataset.filter); if(e.target.matches('.modeBtn')) setPersona(e.target.dataset.persona); if(e.target.matches('.layerBtn')) setLayer(e.target.dataset.layer); if(e.target.matches('.vibeBtn')) setVibe(e.target.dataset.vibe);});
$('#gpsBtn').onclick=locateMe;
$('#addBudget').onclick=()=>{let r=store('budgetRows',[]); r.push(['Ny post',0,'Dag 1']); save('budgetRows',r); renderBudget();};
$('#clearData').onclick=()=>{if(confirm('Nulstil favoritter, besøgte steder, noter, budget, journal og checklist?')){localStorage.clear(); start();}};
$('#rateInput').onchange=e=>{save('gbpRate', Number(e.target.value||DEFAULT_RATE)); calcBudget();};
$('#fxBtn').onclick=fx;
window.addEventListener('online',net); window.addEventListener('offline',net);

function renderJournal(){
 const list=store('journal',[]);
 const box=$('#journalList'); if(!box) return;
 box.innerHTML=list.length?list.map((j,i)=>`<article class="card"><h3>${j.title||'Minde'}</h3><div class="journalDate">${j.date}</div><p class="note">${j.text||''}</p>${j.photo?`<img class="journalImg" src="${j.photo}">`:''}<div class="actions"><button class="btn bad" data-del-journal="${i}">Slet</button></div></article>`).join(''):'<div class="notice">Ingen minder endnu.</div>';
 $$('[data-del-journal]').forEach(b=>b.onclick=()=>{let a=store('journal',[]); a.splice(Number(b.dataset.delJournal),1); save('journal',a); renderJournal();});
}
async function addJournal(){
 const title=$('#journalTitle').value.trim();
 const text=$('#journalText').value.trim();
 const file=$('#journalPhoto').files[0];
 const item={title,text,date:new Date().toLocaleString('da-DK'),photo:''};
 if(file){
   item.photo=await new Promise(res=>{const r=new FileReader(); r.onload=()=>res(r.result); r.readAsDataURL(file);});
 }
 const list=store('journal',[]); list.unshift(item); save('journal',list.slice(0,30));
 $('#journalTitle').value=''; $('#journalText').value=''; $('#journalPhoto').value='';
 renderJournal();
}
function spin(cat){
 let pool=PLACES.filter(p=>{
   if(cat==='Top') return p.top;
   return p.cat===cat;
 });
 if(persona!=='Begge') pool=pool.filter(p=>p.persona.includes(persona)||p.persona.includes('Begge'));
 if(!pool.length) pool=PLACES.filter(p=>p.top);
 const p=pool[Math.floor(Math.random()*pool.length)];
 $('#spinResult').innerHTML=`${p.emoji} <b>${p.name}</b><br><span class="tiny">${p.note}</span><div class="actions" style="margin-top:8px"><a class="btn secondary" target="_blank" href="${mapsUrl(p.address)}">Maps</a><a class="btn" target="_blank" href="${dirUrl(p.address,'walking')}">Gå</a></div>`;
}


function renderDashboard(){
 const rows=store('budgetRows',[]);
 const foodRows=rows.filter(r=>String(r[2]||'').startsWith('Dag'));
 const foodGbp=foodRows.reduce((a,r)=>a+Number(r[1]||0),0);
 const left=Math.max(0, DAILY_FOOD_GBP*TRIP_DAYS-foodGbp);
 if($('#dashFoodLeft')) $('#dashFoodLeft').textContent=fmtGbp(left);
 const pos=userPos||ORIGIN;
 const nearest=[...PLACES].filter(p=>p.id!=='hotel').sort((a,b)=>hav(pos.lat,pos.lng,a.lat,a.lng)-hav(pos.lat,pos.lng,b.lat,b.lng))[0];
 if(nearest && $('#dashNearest')) $('#dashNearest').textContent=nearest.emoji+' '+nearest.name.split(' ')[0];
}
function bindTripFields(){
 const trip=store('tripFields',{});
 $$('[data-trip]').forEach(el=>{
   if(trip[el.dataset.trip]!==undefined) el.value=trip[el.dataset.trip];
   el.oninput=()=>{let t=store('tripFields',{}); t[el.dataset.trip]=el.value; save('tripFields',t);};
 });
}
function exportMemory(){
 const journal=store('journal',[]);
 const notes=store('notes',{});
 const visited=store('visited',[]);
 const html=`<!doctype html><html><head><meta charset="utf-8"><title>Manchester Memory Book</title><style>body{font-family:Arial;padding:24px;max-width:900px;margin:auto}img{max-width:100%;border-radius:12px}.card{border:1px solid #ddd;border-radius:14px;padding:14px;margin:12px 0}</style></head><body><h1>Manchester 2026 Memory Book</h1><h2>Besøgte steder</h2><ul>${visited.map(id=>{const p=PLACES.find(x=>x.id===id);return p?`<li>${p.emoji} ${p.name}</li>`:''}).join('')}</ul><h2>Journal</h2>${journal.map(j=>`<div class="card"><h3>${j.title||'Minde'}</h3><p><small>${j.date}</small></p><p>${j.text||''}</p>${j.photo?`<img src="${j.photo}">`:''}</div>`).join('')}<h2>Noter</h2>${Object.entries(notes).filter(x=>x[1]).map(([id,n])=>{const p=PLACES.find(x=>x.id===id);return `<div class="card"><b>${p?p.name:id}</b><p>${n}</p></div>`}).join('')}</body></html>`;
 const blob=new Blob([html],{type:'text/html'});
 const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='Manchester_Memory_Book.html'; a.click();
}

function start(){renderCards(); renderChecklist(); renderBudget(); renderAchievements(); renderDays(); renderJournal(); bindTripFields(); renderDashboard(); initInstall(); net();}
start();

document.addEventListener('click',e=>{
 if(e.target.closest('.bigAction')){ const b=e.target.closest('.bigAction'); setVibe(b.dataset.vibe); location.hash='#places'; }
 if(e.target.matches('.spinBtn')) spin(e.target.dataset.spin);
});
setTimeout(()=>{ if($('#addJournal')) $('#addJournal').onclick=addJournal; },0);

setTimeout(()=>{ if($('#exportMemory')) $('#exportMemory').onclick=exportMemory; },0);
