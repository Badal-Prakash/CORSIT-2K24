import{_ as i}from"./index-Cm3DI-sc.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-C1cx1oGg.js"),__vite__mapDeps([0,1,2]));return new e(r)},a)}export{p as loadOpacityUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OpacityUpdater-C1cx1oGg.js","assets/index-Cm3DI-sc.js","assets/index-CmZ7agl9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
