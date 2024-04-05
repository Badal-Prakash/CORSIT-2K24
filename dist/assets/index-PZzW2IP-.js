import{_ as r}from"./index-Cm3DI-sc.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-DicsTrJ0.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-DicsTrJ0.js","assets/index-Cm3DI-sc.js","assets/index-CmZ7agl9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
