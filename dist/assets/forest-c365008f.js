import{H as n,z as s}from"./index-f5966239.js";async function i(t,e){return n({url:`https://recreation.forest.gov.tw/mis/api/news?startDate=${t}&endDate=${e}`,method:"get"})}async function c(t,e,a,o){return n({url:`https://frances.sinami.com/api/insertForestData?Region=${t}&Typ=${o}&Keyword=&Height=${e}&IsOpen=&Traffic=&RT_Length=&RT_Time=&sort=&PageIndex=${a}&PageSize=36&topic=`,method:"get"})}async function u(){return n({url:"https://127.0.0.1:8082/api/getMountainData/"})}async function g(t){return n.post("https://frances.sinami.com/api/formUnitsMainSecondaryRoute/",t)}async function y(){return n({url:"https://127.0.0.1:8082/api/getMountainLocation/"})}async function f(){return n({url:"https://127.0.0.1:8082/api/getMonutainInfo/"})}const h=s("forestData",{state:()=>({forestInfo:[],queryInfo:[],MountainLevel:[],MountainData:[]}),getters:{},actions:{async getForestInfoMethod(t,e){try{const{data:a}=await i(t,e);return console.log(a),this.forestInfo=a,a}catch(a){return Promise.reject(a.message)}},async getQueryForest(t,e,a,o){try{const{data:r}=await c(t,e,a,o);return this.queryInfo=r,r}catch(r){return Promise.reject(r.message)}},async getQueryMountainData(){try{const{data:t}=await u();return this.MountainData=t,t}catch(t){return Promise.reject(t.message)}},async getQueryMountainRouteWeb(t){try{const{data:e}=await g(t);return e}catch(e){return Promise.reject(e.message)}},async getQueryMountainLocation(){try{const{data:t}=await y();return t}catch(t){return Promise.reject(t.message)}},async getMonutainInfoLevel(){try{const{data:t}=await f();return this.MountainLevel=t,t}catch(t){return Promise.reject(t.message)}}}});export{h as u};
