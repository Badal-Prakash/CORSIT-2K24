import{_ as o}from"./index-1nOO1z0o.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-CDWKmIWy.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-CDWKmIWy.js","assets/index-1nOO1z0o.js","assets/index-CeK9q7kh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
