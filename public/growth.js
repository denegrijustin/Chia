// First coat at 100; ten stages continue to 1000. Normalized stages: rooted seedlings, elongating stems, and an outward-bending canopy.
const clamp=n=>Math.max(0,Math.min(1,n));
const smooth=n=>{const t=clamp(n);return t*t*(3-2*t);};
export function foliage(growth,scalp){
 const g=clamp(growth/100),extra=clamp((growth-100)/900),young=smooth((g-.27)/.23),mature=smooth((g-.58)/.3);
 const rootY=scalp.y+5;
 return [
  {stage:'seedling',opacity:smooth((g-.08)/.12)*(1-young),width:scalp.rx*(1.9+g*.2),height:22+g*45,rootY},
  {stage:'young',opacity:young*(1-mature),width:scalp.rx*(2.05+g*.55),height:55+g*70,rootY:rootY+10},
  {stage:'mature',opacity:mature,width:scalp.rx*(2.45+g*.55+extra*1.4),height:105+g*85+extra*150,rootY:rootY+12}
 ];
}

export const stages=[{at:0,name:'Seeds'},{at:8,name:'Germinating'},{at:20,name:'Cotyledons'},{at:40,name:'Upright shoots'},{at:70,name:'Filling in'},{at:100,name:'Full coat'},{at:180,name:'Tall growth'},{at:300,name:'Wide canopy'},{at:500,name:'Bending outward'},{at:750,name:'Overgrown afro'}];
export function stageFor(growth){const g=Math.max(0,Math.min(1000,growth));let index=0;for(let i=0;i<stages.length;i++)if(g>=stages[i].at)index=i;const next=stages[index+1]?.at??1000;return {...stages[index],number:index+1,progress:Math.min(100,Math.max(0,(g-stages[index].at)/(next-stages[index].at)*100)),next};}

// Individual rooted stems: height leads growth; gravity bends older tips sideways.
export function shoots(growth,scalp){
 const age=clamp(growth/1000),early=clamp(growth/100),bend=smooth((age-.28)/.65);
 const count=Math.round(60+early*220+age*100),out=[];
 const rand=i=>{const n=Math.sin(i*127.1+37.7)*43758.5453;return n-Math.floor(n);};
 for(let i=0;i<count;i++){
  const a=i*2.399963,r=Math.sqrt((i+.5)/count),dx=Math.cos(a)*scalp.rx*.88*r;
  const y=scalp.y+Math.sin(a)*scalp.ry*.5*r-10+Math.pow(dx/scalp.rx,2)*22;
  const variation=.35+rand(i)*.85,height=(4+early*45+age*145)*variation;
  const side=dx/scalp.rx,lean=side*(8+age*30)+ (rand(i+400)-.5)*12;
  const droop=bend*(35+Math.abs(side)*65)*variation;
  const x=scalp.x+dx,tipX=x+lean+side*bend*65,tipY=Math.min(scalp.y+8,y-height+droop);
  out.push({x,y,height,tipX,tipY,bend,side,shade:rand(i+800),size:Math.min(6.5,1.2+early*2.6+age*2),d:`M${x} ${y} C${x+lean*.15} ${y-height*.65} ${x+lean*.65} ${y-height-18*bend} ${tipX} ${tipY}`});
 }
 return out.sort((a,b)=>a.y-b.y);
}
