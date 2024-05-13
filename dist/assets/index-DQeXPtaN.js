import{_ as e}from"./index-1nOO1z0o.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-CE7IP7TT.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-CE7IP7TT.js","assets/index-1nOO1z0o.js","assets/index-CeK9q7kh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
