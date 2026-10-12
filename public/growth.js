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
