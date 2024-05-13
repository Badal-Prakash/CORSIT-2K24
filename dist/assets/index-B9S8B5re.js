import{_ as r}from"./index-8VejpqsO.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-CR5yq1wa.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-CR5yq1wa.js","assets/index-8VejpqsO.js","assets/index-CeK9q7kh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
