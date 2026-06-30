
async function loadWeather(){
  const status=$("#status"), now=$("#weatherNow"), detail=$("#weatherDetail");
  if(!navigator.onLine){ status.textContent="Offline: app, budget, journal og steder virker. Kort/vejr kræver internet."; now.textContent="Offline"; detail.textContent=""; return; }
  status.textContent="Online: kort, vejr og GPS klar.";
  try{
    const url=`https://api.open-meteo.com/v1/forecast?latitude=${CONFIG.hotel.lat}&longitude=${CONFIG.hotel.lng}&current=temperature_2m,precipitation,wind_speed_10m&hourly=precipitation_probability&timezone=Europe%2FLondon`;
    const r=await fetch(url), d=await r.json();
    const rain = d.hourly?.precipitation_probability?.[0] ?? 0;
    now.textContent=Math.round(d.current.temperature_2m)+"°C";
    detail.textContent="Regn "+d.current.precipitation+" mm · risiko "+rain+"% · vind "+Math.round(d.current.wind_speed_10m)+" km/t";
  }catch(e){ now.textContent="Fejl"; detail.textContent="kunne ikke hente"; }
}
