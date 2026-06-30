
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
function enc(s){ return encodeURIComponent(s); }
function mapsUrl(q){ return "https://www.google.com/maps/search/?api=1&query=" + enc(q); }
function dirUrl(dest, mode="walking"){ return "https://www.google.com/maps/dir/?api=1&origin=" + enc(CONFIG.hotel.mapsQuery) + "&destination=" + enc(dest) + "&travelmode=" + mode; }
function rate(){ return Number(MCR.store("rate", CONFIG.trip.gbpToDkk)) || CONFIG.trip.gbpToDkk; }
function gbp(v){ return "£" + Number(v||0).toFixed(2).replace(".00",""); }
function dkk(v){ return Math.round(Number(v||0)*rate()) + " kr"; }
function daysUntil(iso){
  const diff = new Date(iso) - new Date();
  if(diff <= 0) return "Åben";
  const h = Math.floor(diff/36e5), d = Math.floor(h/24);
  return d>0 ? d+"d "+(h%24)+"t" : h+"t";
}
