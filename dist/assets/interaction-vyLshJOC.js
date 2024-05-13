import{_ as i}from"./index-8VejpqsO.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-3F-losDr.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-3F-losDr.js","assets/Ranges-BJiF55Na.js","assets/index-8VejpqsO.js","assets/index-CeK9q7kh.css","assets/index-ozciGYTQ.js","assets/OptionsColor-CVR58e6p.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
