
window.MCR = {
  places: [], routes: [], itinerary: [],
  filter: "Alle", persona: "Begge", vibe: "Alle",
  map: null, markers: new Map(), userMarker: null, userPos: null, watchId: null, targetId: null,
  store(k,f){ try{return JSON.parse(localStorage.getItem(k)) ?? f}catch{return f} },
  save(k,v){ localStorage.setItem(k, JSON.stringify(v)); }
};
