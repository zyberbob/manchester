
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
function enc(s){ return encodeURIComponent(s); }
function mapsUrl(q){ return "https://www.google.com/maps/search/?api=1&query=" + enc(q); }
function dirUrl(dest, mode="walking"){ return "https://www.google.com/maps/dir/?api=1&origin=" + enc(CONFIG.hotel.mapsQuery) + "&destination=" + enc(dest) + "&travelmode=" + mode; }
function rate(){ return Number(MCR.store("rate", CONFIG.trip.gbpToDkk)) || CONFIG.trip.gbpToDkk; }
function gbp(v){ return "£" + Number(v||0).toFixed(2).replace(".00",""); }
function dkk(v){ return Math.round(Number(v||0)*rate()) + " kr"; }
function hav(a,b,c,d){ const R=6371000,p=Math.PI/180,x=(c-a)*p,y=(d-b)*p,A=Math.sin(x/2)**2+Math.cos(a*p)*Math.cos(c*p)*Math.sin(y/2)**2; return 2*R*Math.atan2(Math.sqrt(A),Math.sqrt(1-A)); }
function distTo(p){ const o=MCR.userPos || CONFIG.hotel; const m=hav(o.lat,o.lng,p.lat,p.lng); return m; }
function distText(m){ return m>1000 ? (m/1000).toFixed(1)+" km" : Math.round(m)+" m"; }
function daysUntil(iso){ const diff=new Date(iso)-new Date(); if(diff<=0) return "Åben"; const h=Math.floor(diff/36e5), d=Math.floor(h/24); return d>0?d+"d "+(h%24)+"t":h+"t"; }
function vibrate(ms=25){ if(navigator.vibrate) navigator.vibrate(ms); }
