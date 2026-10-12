export const freshPet = (now=Date.now()) => ({version:1,name:'Moss',planted:false,growth:0,moisture:0,sunny:true,leaves:10,created:now,updated:now,lastWater:0,cycles:0,sound:false});
export function restorePet(value,now=Date.now()){
 if(!value||value.version!==1)return freshPet(now);
 const fresh=freshPet(now), bounded=(n,lo,hi,fallback)=>Number.isFinite(n)?Math.max(lo,Math.min(hi,n)):fallback;
 return {...fresh,name:typeof value.name==='string'&&value.name.trim()?value.name.trim().slice(0,24):fresh.name,planted:value.planted===true,sunny:value.sunny!==false,growth:bounded(value.growth,0,100,0),moisture:bounded(value.moisture,0,100,0),leaves:Math.floor(bounded(value.leaves,0,100000,10)),cycles:Math.floor(bounded(value.cycles,0,100000,0)),created:bounded(value.created,0,now,now),updated:bounded(value.updated,0,now,now),lastWater:bounded(value.lastWater,0,now,0),sound:value.sound===true};
}
export function advance(pet,now=Date.now()){
 const elapsed=Math.max(0,Math.min(now-pet.updated,8*3600000))/60000;
 const wetMinutes=pet.planted?Math.min(elapsed,Math.max(0,(pet.moisture-15)/.4)):0;
 return {...pet,updated:now,moisture:pet.planted?Math.max(0,pet.moisture-elapsed*.4):pet.moisture,growth:Math.min(100,pet.growth+(pet.sunny?wetMinutes*.7:wetMinutes*.12))};
}
export function care(pet,action,now=Date.now()){
 let next=advance(pet,now),message='';
 if(action==='plant'&&!next.planted){next={...next,planted:true,growth:8,moisture:35};message='Seeds planted. A little water will wake them up.';}
 else if(action==='water'&&next.planted){if(now-next.lastWater<15000)return {pet:next,message:'Give that drink a moment to soak in.'};if(next.moisture>=92)return {pet:next,message:'Plenty of water already. Let the roots breathe.'};next={...next,moisture:Math.min(100,next.moisture+28),growth:Math.min(100,next.growth+6),lastWater:now};message='A lovely drink. Watch those little sprouts grow.';}
 else if(action==='feed'&&next.planted){if(next.leaves<5)return {pet:next,message:'Plant food needs 5 leaves. Trim a grown pet to earn more.'};next={...next,leaves:next.leaves-5,growth:Math.min(100,next.growth+14)};message='A little boost of goodness. −5 leaves.';}
 else if(action==='sunlight'){next={...next,sunny:!next.sunny};message=next.sunny?'Back in the sunshine. Happy growing.':'A little shade. Growth slows down here.';}
 else if(action==='harvest'&&next.growth>=100){next={...next,planted:false,growth:0,moisture:0,leaves:next.leaves+15,cycles:next.cycles+1};message='A fresh start, and 15 leaves for your care.';}
 return {pet:next,message};
}
