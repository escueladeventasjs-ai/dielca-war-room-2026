const fields=["teamName","teamMembers","clientType","signals","sources","situation","risk","impact","openingQuestion","openingPitch","recognize","deepen","neutralize","resolve","commitment","score1","score2","score3","score4","score5","juryNotes","realClient","realHypothesis","probableObjection","realCommitment"];
function getData(){const d={};fields.forEach(id=>{const el=document.getElementById(id);if(el)d[id]=el.value});return d}
function setData(d){fields.forEach(id=>{const el=document.getElementById(id);if(el&&d[id]!==undefined)el.value=d[id]});calculateScore(false);updateSummary()}
function saveData(){localStorage.setItem("dielca-war-room-2026",JSON.stringify(getData()));updateSummary()}
function loadData(){const raw=localStorage.getItem("dielca-war-room-2026");if(raw){try{setData(JSON.parse(raw))}catch(e){}}}
function calculateScore(save=true){const total=[1,2,3,4,5].map(n=>Number(document.getElementById("score"+n).value||0)).reduce((a,b)=>a+b,0);document.getElementById("totalScore").innerText=`Total: ${total} / 50`;if(save)saveData()}
function updateSummary(){const d=getData();const total=[1,2,3,4,5].map(n=>Number(d["score"+n]||0)).reduce((a,b)=>a+b,0);const s=`DIELCA COMMERCIAL WAR ROOM 2026
Equipo: ${d.teamName||"-"}
Integrantes: ${d.teamMembers||"-"}

DINÁMICA 1 — RADAR DE OPORTUNIDADES
Cliente seleccionado: ${d.clientType||"-"}

Señales:
${d.signals||"-"}

Fuentes:
${d.sources||"-"}

HIPÓTESIS JETSELLING®
Situación observada:
${d.situation||"-"}

Riesgo posible:
${d.risk||"-"}

Impacto probable:
${d.impact||"-"}

Pregunta de apertura:
${d.openingQuestion||"-"}

Apertura 45 segundos:
${d.openingPitch||"-"}

DINÁMICA 2 — TRIBUNAL DEL PRECIO
Reconocer:
${d.recognize||"-"}

Profundizar:
${d.deepen||"-"}

Neutralizar:
${d.neutralize||"-"}

Resolver:
${d.resolve||"-"}

Compromiso:
${d.commitment||"-"}

Puntuación jurado: ${total} / 50
Observaciones:
${d.juryNotes||"-"}

PLAN DE ACCIÓN
Cliente real:
${d.realClient||"-"}

Hipótesis:
${d.realHypothesis||"-"}

Objeción probable:
${d.probableObjection||"-"}

Compromiso:
${d.realCommitment||"-"}`;document.getElementById("summary").innerText=s}
function copySummary(){updateSummary();navigator.clipboard.writeText(document.getElementById("summary").innerText).then(()=>alert("Resumen copiado."))}
function downloadJSON(){const d=getData();const blob=new Blob([JSON.stringify(d,null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=`DIELCA_2026_${(d.teamName||"equipo").replaceAll(" ","_")}.json`;a.click();URL.revokeObjectURL(url)}
function clearData(){if(confirm("¿Seguro que quieres borrar las respuestas?")){localStorage.removeItem("dielca-war-room-2026");fields.forEach(id=>{const el=document.getElementById(id);if(el)el.value=id.startsWith("score")?0:""});calculateScore(false);updateSummary()}}
document.addEventListener("input",e=>{if(fields.includes(e.target.id))saveData()});
loadData();updateSummary();