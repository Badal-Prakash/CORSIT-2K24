import{_ as o}from"./index-8VejpqsO.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-DbaGVCU1.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-DbaGVCU1.js","assets/index-8VejpqsO.js","assets/index-CeK9q7kh.css","assets/ValueWithRandom-Cb5fUkCq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
