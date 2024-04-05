import{_ as c}from"./index-Cm3DI-sc.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-geKqkyFL.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-geKqkyFL.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-Cm3DI-sc.js","assets/index-CmZ7agl9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
