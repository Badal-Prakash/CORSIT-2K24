import{_ as n}from"./index-Cm3DI-sc.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-CaaBFq9g.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-DkYT-Chs.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-CaaBFq9g.js","assets/PolygonDrawerBase-DTzr5Vcf.js","assets/index-Cm3DI-sc.js","assets/index-CmZ7agl9.css","assets/TriangleDrawer-DkYT-Chs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
