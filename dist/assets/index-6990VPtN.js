import{_ as e}from"./index-Cm3DI-sc.js";async function i(r,o=!0){await r.addParticleUpdater("strokeColor",async t=>{const{StrokeColorUpdater:a}=await e(()=>import("./StrokeColorUpdater-Cm6Ac-pe.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadStrokeColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StrokeColorUpdater-Cm6Ac-pe.js","assets/index-Cm3DI-sc.js","assets/index-CmZ7agl9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
