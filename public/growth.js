// Twenty-five care stages; growth continues beyond the last stage.
export const stages=[{at:0,name:'Seeds'},{at:8,name:'Germinating'},{at:20,name:'Cotyledons'},{at:40,name:'Upright shoots'},{at:70,name:'Filling in'},{at:100,name:'Full coat'},{at:180,name:'Tall growth'},{at:300,name:'Wide canopy'},{at:500,name:'Bending outward'},{at:750,name:'Overgrown canopy'},...['New branches','Larger leaves','Leafy crown','Arching stems','Trailing edges','Thick canopy','Long tendrils','Cascading sides','Untamed growth','Broad crown','Dense foliage','Wild canopy','Trailing branches','Overgrown garden','Still growing'].map((name,i)=>({at:1000+i*150,name}))];
export function stageFor(growth){const g=Math.max(0,Number.isFinite(growth)?growth:0);let index=0;for(let i=0;i<stages.length;i++)if(g>=stages[i].at)index=i;const start=stages[index].at;const next=stages[index+1]?.at??start+(Math.floor((g-start)/150)+1)*150;const cycleStart=stages[index+1]?start:next-150;return {...stages[index],number:index+1,progress:Math.min(100,Math.max(0,(g-cycleStart)/(next-cycleStart)*100)),next};}

// Every phase uses one complete portrait; adjacent-stage pixels cannot enter the frame.
export const seedlingPhotos={"courtney": {"width": 1145, "height": 1374, "split": 275}, "justin": {"width": 1024, "height": 1536, "split": 307}, "sunglasses": {"width": 1142, "height": 1377, "split": 275}, "hockey": {"width": 1280, "height": 1229, "split": 246}};
export const youngPhotos={"courtney": {"width": 1190, "height": 1322, "split": 264}, "justin": {"width": 1024, "height": 1536, "split": 307}, "sunglasses": {"width": 1145, "height": 1374, "split": 275}, "hockey": {"width": 1299, "height": 1211, "split": 242}};
export const overgrownPhotos={sunglasses:{width:1199,height:1312,split:435},hockey:{width:1240,height:1269,split:370},courtney:{width:1186,height:1326,split:430},justin:{width:1156,height:1361,split:480}};
export const maturePhotos={courtney:{width:1024,height:1536,split:530},justin:{width:1145,height:1374,split:450},sunglasses:{width:1302,height:1208,split:365},hockey:{width:1372,height:1146,split:315}};
export function photoFrame(growth,id){if(growth<20)return null;
 const phase=growth<100?0:growth<500?1:growth<1600?2:3;
 const sources=[seedlingPhotos,youngPhotos,maturePhotos,overgrownPhotos],names=['seedling','young','mature','overgrown'];const photo=sources[phase][id];if(!photo)return null;
 const start=[20,100,500,1600][phase],span=[80,400,1100,1500][phase];const plantScale=phase===3?1+Math.log1p((growth-start)/span)*.42:1+(growth-start)/span*.28;
 return {x:0,width:photo.width,height:photo.height,atlasWidth:photo.width,phase,split:photo.split,asset:names[phase]+'-'+id,plantScale};}
