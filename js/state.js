
window.MCR = {
  places: [],
  routes: [],
  itinerary: [],
  filter: "Alle",
  persona: "Begge",
  vibe: "Alle",
  store(k, fallback){ try{return JSON.parse(localStorage.getItem(k)) ?? fallback}catch{return fallback} },
  save(k,v){ localStorage.setItem(k, JSON.stringify(v)); }
};
