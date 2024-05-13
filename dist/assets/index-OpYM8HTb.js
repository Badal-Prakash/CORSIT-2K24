import{_ as o}from"./index-1nOO1z0o.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-VL5pxyyI.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-VL5pxyyI.js","assets/index-1nOO1z0o.js","assets/index-CeK9q7kh.css","assets/ValueWithRandom-BTXICQVZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
