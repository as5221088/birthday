/* ===== NAME ===== */
document.getElementById("name").innerText="नाम यहाँ डालो";

/* MATRIX */
const c=document.getElementById("matrix");
const ctx=c.getContext("2d");
c.width=innerWidth;c.height=innerHeight;
const chars="01HACKER";
const font=16;
const cols=c.width/font;
const drops=Array(Math.floor(cols)).fill(1);

setInterval(()=>{
  ctx.fillStyle="rgba(0,0,0,.1)";
  ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle="#00ff66";
  ctx.font=font+"px monospace";
  for(let i=0;i<drops.length;i++){
    const t=chars[Math.floor(Math.random()*chars.length)];
    ctx.fillText(t,i*font,drops[i]*font);
    if(drops[i]*font>c.height && Math.random()>0.95) drops[i]=0;
    drops[i]++;
  }
},33);

/* TYPING */
const lines=[
  ">> ACCESS GRANTED",
  ">> BIRTHDAY SEQUENCE LOADED",
  ">> CAKE MODULE READY"
];
let i=0,j=0;
const boxText=document.getElementById("typeBox");

function type(){
  if(i<lines.length){
    if(j<lines[i].length){
      boxText.innerHTML+=lines[i][j++];
      setTimeout(type,60);
    }else{
      boxText.innerHTML+="<br>";
      i++;j=0;
      setTimeout(type,600);
    }
  }
}

const box=document.getElementById("box");
const flame=document.getElementById("flame");
const music=document.getElementById("music");

document.body.addEventListener("click",()=>{
  music.play();
  type();
  setTimeout(()=>box.classList.add("flip"),10000);
  setTimeout(()=>flame.style.display="none",20000);

  setInterval(()=>{
    const b=document.createElement("div");
    b.className="balloon";
    b.style.left=Math.random()*100+"vw";
    b.style.background=`hsl(${Math.random()*360},80%,60%)`;
    document.body.appendChild(b);
    setTimeout(()=>b.remove(),6000);
  },500);

  setInterval(()=>{
    const r=document.createElement("div");
    r.className="rain";
    r.innerText="🎆";
    r.style.left=Math.random()*100+"vw";
    document.body.appendChild(r);
    setTimeout(()=>r.remove(),4000);
  },300);
},{once:true});
