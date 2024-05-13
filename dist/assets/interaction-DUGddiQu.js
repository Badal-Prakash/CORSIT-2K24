import{_ as i}from"./index-1nOO1z0o.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-CTbOK75f.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-CTbOK75f.js","assets/Ranges-CNtRi5nP.js","assets/index-1nOO1z0o.js","assets/index-CeK9q7kh.css","assets/index-BmK17Zng.js","assets/OptionsColor-DZMdqYHi.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
