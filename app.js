let state={team:"",score:0,answers:{}};

function openScreen(id){
 document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 updateScore();
 window.scrollTo({top:0,behavior:"smooth"});
}
function setTeam(team){
 state.team=team;
 document.querySelectorAll(".team-grid button").forEach(b=>b.classList.toggle("active",b.textContent.includes(team)));
 document.getElementById("teamStatus").textContent="Equipo seleccionado: "+team;
 save();
}
function startGame(){
 if(!state.team){alert("Selecciona un equipo primero.");return;}
 openScreen("mission1");
}
document.addEventListener("click",e=>{
 if(e.target.closest(".chips button")){
   const btn=e.target;
   const group=btn.closest(".chips");
   const target=group.dataset.target;
   if(group.classList.contains("single")){
     group.querySelectorAll("button").forEach(b=>b.classList.remove("active","good","bad"));
     btn.classList.add("active");
     state.answers[target]=btn.textContent;
   }else{
     btn.classList.toggle("active");
     state.answers[target]=[...group.querySelectorAll("button.active")].map(b=>b.textContent);
   }
   updateProgress();
   save();
 }
});
function updateProgress(){
 const signals=(state.answers.senales||[]).length;
 const sources=(state.answers.fuentes||[]).length;
 let pct=Math.min(100,(signals*12)+(sources*12)+(state.answers.cliente?20:0));
 const bar=document.getElementById("bar1");
 if(bar)bar.style.width=pct+"%";
}
function addScore(n,msg){
 state.score+=n;
 save();
 if(msg) alert("+"+n+" puntos · "+msg);
}
function scoreMission1(){
 const signals=(state.answers.senales||[]).length;
 const sources=(state.answers.fuentes||[]).length;
 let pts=0;
 if(state.answers.cliente)pts+=10;
 if(signals>=3)pts+=15;
 if(sources>=2)pts+=15;
 addScore(pts,"Radar validado");
 openScreen("mission2");
}
function buildHypothesis(){
 const req=["situacion","riesgo","impacto","pregunta"];
 const ok=req.every(k=>state.answers[k]);
 const result=document.getElementById("hypothesisResult");
 result.classList.add("active");
 if(!ok){result.innerHTML="⚠️ Falta completar la hipótesis.";return;}
 const text=`<strong>Apertura creada:</strong><br><br>
Estamos viendo en proyectos similares situaciones de <strong>${state.answers.situacion}</strong>. 
Esto puede generar <strong>${state.answers.riesgo}</strong> y afectar a <strong>${state.answers.impacto}</strong>. 
Por eso queríamos preguntarte: <strong>${state.answers.pregunta}</strong>`;
 result.innerHTML=text;
 addScore(30,"Hipótesis creada");
}
function scoreTribunal(){
 let pts=0;
 document.querySelectorAll(".quiz").forEach(group=>{
   const good=group.dataset.good;
   const selected=state.answers[group.dataset.target];
   group.querySelectorAll("button").forEach(b=>{
     b.classList.remove("good","bad");
     if(b.textContent===selected){
       if(selected===good){b.classList.add("good");pts+=10}
       else b.classList.add("bad");
     }
   });
 });
 const result=document.getElementById("tribunalResult");
 result.classList.add("active");
 result.innerHTML=`Veredicto: <strong>${pts}/40</strong><br>${pts>=30?"Excelente gestión de la objeción.":"Revisad el marco: reconocer, profundizar, neutralizar y resolver."}`;
 state.score+=pts;
 save();
 openScreen("mission4");
}
function finishGame(){
 let pts=0;
 if(state.answers.compromiso)pts+=15;
 if(state.answers.fraseFinal==="¿Cuál sería el siguiente paso lógico?")pts+=15;
 state.score+=pts;
 const result=document.getElementById("finalResult");
 result.classList.add("active");
 result.innerHTML=`Partida completada. Puntuación final: <strong>${state.score}</strong>`;
 save();
 setTimeout(()=>openScreen("score"),900);
}
function updateScore(){
 document.getElementById("scoreBig").textContent=state.score;
 document.getElementById("rankLabel").textContent=state.team?state.team:"Selecciona equipo y juega.";
 document.getElementById("summaryBox").textContent=summary();
}
function summary(){
 return `DIELCA WAR ROOM GAME
Equipo: ${state.team||"-"}
Puntos: ${state.score}

RADAR
Cliente: ${state.answers.cliente||"-"}
Señales: ${(state.answers.senales||[]).join(", ")||"-"}
Fuentes: ${(state.answers.fuentes||[]).join(", ")||"-"}

HIPÓTESIS
Situación: ${state.answers.situacion||"-"}
Riesgo: ${state.answers.riesgo||"-"}
Impacto: ${state.answers.impacto||"-"}
Pregunta: ${state.answers.pregunta||"-"}

TRIBUNAL
Reconocer: ${state.answers.reconocer||"-"}
Profundizar: ${state.answers.profundizar||"-"}
Neutralizar: ${state.answers.neutralizar||"-"}
Resolver: ${state.answers.resolver||"-"}

CIERRE
Compromiso: ${state.answers.compromiso||"-"}
Frase final: ${state.answers.fraseFinal||"-"}`;
}
function copySummary(){navigator.clipboard.writeText(summary()).then(()=>alert("Resumen copiado."))}
function save(){localStorage.setItem("dielca-war-room-game",JSON.stringify(state));updateScore();}
function load(){const raw=localStorage.getItem("dielca-war-room-game");if(raw){try{state=JSON.parse(raw)}catch(e){}}}
function resetGame(){if(confirm("¿Reiniciar partida?")){state={team:"",score:0,answers:{}};localStorage.removeItem("dielca-war-room-game");location.reload();}}
load();updateScore();