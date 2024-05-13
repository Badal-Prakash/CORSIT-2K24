import{_ as i}from"./index-1nOO1z0o.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-EBo0RKCn.js"),__vite__mapDeps([0,1,2,3]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-EBo0RKCn.js","assets/index-1nOO1z0o.js","assets/index-CeK9q7kh.css","assets/CanvasUtils-xiRuArrA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
