import{r as v,j as t,_ as s,G as g,u as y,b as p,d as E}from"./index-3f4d0633.js";const w=(o,d)=>{const r=o[d];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((l,c)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(c.bind(null,new Error("Unknown variable dynamic import: "+d)))})},m={day:{200:"thunderstorms-day-rain",201:"thunderstorms-day-rain",202:"thunderstorms-day-overcast-rain",210:"thunderstorms-day",211:"thunderstorms",212:"thunderstorms-overcast",221:"thunderstorms-overcast",230:"thunderstorms-day-rain",231:"thunderstorms-day-rain",232:"thunderstorms-day-rain",300:"partly-cloudy-day-drizzle",301:"partly-cloudy-day-drizzle",302:"overcast-day-drizzle",310:"overcast-day-drizzle",311:"drizzle",312:"overcast-drizzle",313:"overcast-drizzle",314:"overcast-rain",321:"overcast-rain",500:"partly-cloudy-day-rain",501:"partly-cloudy-day-rain",502:"overcast-day-rain",503:"overcast-day-rain",504:"overcast-rain",511:"sleet",520:"partly-cloudy-day-rain",521:"partly-cloudy-day-rain",522:"overcast-day-rain",531:"overcast-day-rain",600:"partly-cloudy-day-snow",601:"partly-cloudy-day-snow",602:"overcast-day-snow",611:"partly-cloudy-day-sleet",612:"partly-cloudy-day-sleet",613:"overcast-day-sleet",615:"partly-cloudy-day-sleet",616:"partly-cloudy-day-sleet",620:"partly-cloudy-day-snow",621:"partly-cloudy-day-snow",622:"overcast-snow",701:"mist",711:"partly-cloudy-day-smoke",721:"haze-day",731:"dust-day",741:"fog-day",751:"dust-day",761:"dust-day",762:"overcast-smoke",771:"wind",781:"tornado",800:"clear-day",801:"partly-cloudy-day",802:"partly-cloudy-day",803:"overcast-day",804:"overcast-day"},night:{200:"thunderstorms-night-rain",201:"thunderstorms-night-rain",202:"thunderstorms-night-overcast-rain",210:"thunderstorms-night",211:"thunderstorms",212:"thunderstorms-overcast",221:"thunderstorms-overcast",230:"thunderstorms-night-rain",231:"thunderstorms-night-rain",232:"thunderstorms-night-rain",300:"partly-cloudy-night-drizzle",301:"partly-cloudy-night-drizzle",302:"overcast-night-drizzle",310:"overcast-night-drizzle",311:"drizzle",312:"overcast-drizzle",313:"overcast-drizzle",314:"overcast-rain",321:"overcast-rain",500:"partly-cloudy-night-rain",501:"partly-cloudy-night-rain",502:"overcast-night-rain",503:"overcast-night-rain",504:"overcast-rain",511:"sleet",520:"partly-cloudy-night-rain",521:"partly-cloudy-night-rain",522:"overcast-night-rain",531:"overcast-night-rain",600:"partly-cloudy-night-snow",601:"partly-cloudy-night-snow",602:"overcast-night-snow",611:"partly-cloudy-night-sleet",612:"partly-cloudy-night-sleet",613:"overcast-night-sleet",615:"partly-cloudy-night-sleet",616:"partly-cloudy-night-sleet",620:"partly-cloudy-night-snow",621:"partly-cloudy-night-snow",622:"overcast-snow",701:"mist",711:"partly-cloudy-night-smoke",721:"haze-night",731:"dust-night",741:"fog-night",751:"dust-night",761:"dust-night",762:"overcast-smoke",771:"wind",781:"tornado",800:"clear-night",801:"partly-cloudy-night",802:"partly-cloudy-night",803:"overcast-night",804:"overcast-night"}},h=({iconType:o,id:d,size:r})=>{const[l,c]=v.useState(!1),[i,e]=v.useState("");function _(a,u){let n;switch(!0){case a.includes("d"):n=m.day[u];break;case a.includes("n"):n=m.night[u];break;default:console.log("Invalid icon type"),icon="default-icon";break}return n}return v.useEffect(()=>{const a=_(o,d);e(a),(async()=>{try{const{default:n}=await w(Object.assign({"../../assets/icons/wi_clear-day.svg":()=>s(()=>import("./wi_clear-day-868d5335.js"),[]),"../../assets/icons/wi_clear-night.svg":()=>s(()=>import("./wi_clear-night-8c3a8270.js"),[]),"../../assets/icons/wi_cloudy.svg":()=>s(()=>import("./wi_cloudy-873a4c27.js"),[]),"../../assets/icons/wi_drizzle.svg":()=>s(()=>import("./wi_drizzle-b081bc1c.js"),[]),"../../assets/icons/wi_dust-day.svg":()=>s(()=>import("./wi_dust-day-3e402909.js"),[]),"../../assets/icons/wi_dust-night.svg":()=>s(()=>import("./wi_dust-night-4524d0f1.js"),[]),"../../assets/icons/wi_dust-wind.svg":()=>s(()=>import("./wi_dust-wind-d8844618.js"),[]),"../../assets/icons/wi_dust.svg":()=>s(()=>import("./wi_dust-7e1409ce.js"),[]),"../../assets/icons/wi_fahrenheit.svg":()=>s(()=>import("./wi_fahrenheit-153d6899.js"),[]),"../../assets/icons/wi_falling-stars.svg":()=>s(()=>import("./wi_falling-stars-827b350b.js"),[]),"../../assets/icons/wi_fog-day.svg":()=>s(()=>import("./wi_fog-day-775938d5.js"),[]),"../../assets/icons/wi_fog-night.svg":()=>s(()=>import("./wi_fog-night-755fd116.js"),[]),"../../assets/icons/wi_fog.svg":()=>s(()=>import("./wi_fog-f35b8be7.js"),[]),"../../assets/icons/wi_hail.svg":()=>s(()=>import("./wi_hail-ff07b4fa.js"),[]),"../../assets/icons/wi_haze-day.svg":()=>s(()=>import("./wi_haze-day-fc7c4f02.js"),[]),"../../assets/icons/wi_haze-night.svg":()=>s(()=>import("./wi_haze-night-5b28b405.js"),[]),"../../assets/icons/wi_haze.svg":()=>s(()=>import("./wi_haze-807c9114.js"),[]),"../../assets/icons/wi_horizon.svg":()=>s(()=>import("./wi_horizon-b9e05c80.js"),[]),"../../assets/icons/wi_humidity.svg":()=>s(()=>import("./wi_humidity-bbd53b16.js"),[]),"../../assets/icons/wi_hurricane.svg":()=>s(()=>import("./wi_hurricane-55990a32.js"),[]),"../../assets/icons/wi_lightning-bolt.svg":()=>s(()=>import("./wi_lightning-bolt-de8f9469.js"),[]),"../../assets/icons/wi_mist.svg":()=>s(()=>import("./wi_mist-11da9554.js"),[]),"../../assets/icons/wi_moon-first-quarter.svg":()=>s(()=>import("./wi_moon-first-quarter-05544bd5.js"),[]),"../../assets/icons/wi_moon-full.svg":()=>s(()=>import("./wi_moon-full-2bade01d.js"),[]),"../../assets/icons/wi_moon-last-quarter.svg":()=>s(()=>import("./wi_moon-last-quarter-86e36bad.js"),[]),"../../assets/icons/wi_moon-new.svg":()=>s(()=>import("./wi_moon-new-ce00f12a.js"),[]),"../../assets/icons/wi_moon-waning-crescent.svg":()=>s(()=>import("./wi_moon-waning-crescent-b992bd2e.js"),[]),"../../assets/icons/wi_moon-waning-gibbous.svg":()=>s(()=>import("./wi_moon-waning-gibbous-f1287731.js"),[]),"../../assets/icons/wi_moon-waxing-crescent.svg":()=>s(()=>import("./wi_moon-waxing-crescent-00729515.js"),[]),"../../assets/icons/wi_moon-waxing-gibbous.svg":()=>s(()=>import("./wi_moon-waxing-gibbous-404c0161.js"),[]),"../../assets/icons/wi_moonrise.svg":()=>s(()=>import("./wi_moonrise-6c4fd3b8.js"),[]),"../../assets/icons/wi_moonset.svg":()=>s(()=>import("./wi_moonset-d6e5c9dc.js"),[]),"../../assets/icons/wi_not-available.svg":()=>s(()=>import("./wi_not-available-4ecb7897.js"),[]),"../../assets/icons/wi_overcast-day-rain.svg":()=>s(()=>import("./wi_overcast-day-rain-79a61934.js"),[]),"../../assets/icons/wi_overcast-day.svg":()=>s(()=>import("./wi_overcast-day-1826669d.js"),[]),"../../assets/icons/wi_overcast-night-rain.svg":()=>s(()=>import("./wi_overcast-night-rain-24ed754d.js"),[]),"../../assets/icons/wi_overcast-night.svg":()=>s(()=>import("./wi_overcast-night-fe5024a2.js"),[]),"../../assets/icons/wi_overcast.svg":()=>s(()=>import("./wi_overcast-c43aad50.js"),[]),"../../assets/icons/wi_partly-cloudy-day-drizzle.svg":()=>s(()=>import("./wi_partly-cloudy-day-drizzle-f5504962.js"),[]),"../../assets/icons/wi_partly-cloudy-day-fog.svg":()=>s(()=>import("./wi_partly-cloudy-day-fog-2e308158.js"),[]),"../../assets/icons/wi_partly-cloudy-day-hail.svg":()=>s(()=>import("./wi_partly-cloudy-day-hail-58e6ff9b.js"),[]),"../../assets/icons/wi_partly-cloudy-day-haze.svg":()=>s(()=>import("./wi_partly-cloudy-day-haze-c9b110d6.js"),[]),"../../assets/icons/wi_partly-cloudy-day-rain.svg":()=>s(()=>import("./wi_partly-cloudy-day-rain-79a61934.js"),[]),"../../assets/icons/wi_partly-cloudy-day-sleet.svg":()=>s(()=>import("./wi_partly-cloudy-day-sleet-365ddc2a.js"),[]),"../../assets/icons/wi_partly-cloudy-day-smoke.svg":()=>s(()=>import("./wi_partly-cloudy-day-smoke-70b9838d.js"),[]),"../../assets/icons/wi_partly-cloudy-day-snow.svg":()=>s(()=>import("./wi_partly-cloudy-day-snow-b2de5360.js"),[]),"../../assets/icons/wi_partly-cloudy-day.svg":()=>s(()=>import("./wi_partly-cloudy-day-549c2330.js"),[]),"../../assets/icons/wi_partly-cloudy-night-drizzle.svg":()=>s(()=>import("./wi_partly-cloudy-night-drizzle-c7265322.js"),[]),"../../assets/icons/wi_partly-cloudy-night-fog.svg":()=>s(()=>import("./wi_partly-cloudy-night-fog-5ef88f3d.js"),[]),"../../assets/icons/wi_partly-cloudy-night-hail.svg":()=>s(()=>import("./wi_partly-cloudy-night-hail-a296d995.js"),[]),"../../assets/icons/wi_partly-cloudy-night-haze.svg":()=>s(()=>import("./wi_partly-cloudy-night-haze-4f988e3d.js"),[]),"../../assets/icons/wi_partly-cloudy-night-rain.svg":()=>s(()=>import("./wi_partly-cloudy-night-rain-24ed754d.js"),[]),"../../assets/icons/wi_partly-cloudy-night-sleet.svg":()=>s(()=>import("./wi_partly-cloudy-night-sleet-0c6b85d2.js"),[]),"../../assets/icons/wi_partly-cloudy-night-smoke.svg":()=>s(()=>import("./wi_partly-cloudy-night-smoke-b432b25e.js"),[]),"../../assets/icons/wi_partly-cloudy-night-snow.svg":()=>s(()=>import("./wi_partly-cloudy-night-snow-d136db04.js"),[]),"../../assets/icons/wi_partly-cloudy-night.svg":()=>s(()=>import("./wi_partly-cloudy-night-904daef1.js"),[]),"../../assets/icons/wi_rain.svg":()=>s(()=>import("./wi_rain-c3db7443.js"),[]),"../../assets/icons/wi_sleet.svg":()=>s(()=>import("./wi_sleet-6d0ed132.js"),[]),"../../assets/icons/wi_smoke-particles.svg":()=>s(()=>import("./wi_smoke-particles-cf7bc312.js"),[]),"../../assets/icons/wi_smoke.svg":()=>s(()=>import("./wi_smoke-87b93fd3.js"),[]),"../../assets/icons/wi_snow.svg":()=>s(()=>import("./wi_snow-26673634.js"),[]),"../../assets/icons/wi_snowflake.svg":()=>s(()=>import("./wi_snowflake-5f48fae3.js"),[]),"../../assets/icons/wi_solar-eclipse.svg":()=>s(()=>import("./wi_solar-eclipse-64290694.js"),[]),"../../assets/icons/wi_starry-night.svg":()=>s(()=>import("./wi_starry-night-81821362.js"),[]),"../../assets/icons/wi_thunderstorms-day-rain.svg":()=>s(()=>import("./wi_thunderstorms-day-rain-31d7bda6.js"),[]),"../../assets/icons/wi_thunderstorms-day-snow.svg":()=>s(()=>import("./wi_thunderstorms-day-snow-3d371ea1.js"),[]),"../../assets/icons/wi_thunderstorms-day.svg":()=>s(()=>import("./wi_thunderstorms-day-4f755e17.js"),[]),"../../assets/icons/wi_thunderstorms-night-rain.svg":()=>s(()=>import("./wi_thunderstorms-night-rain-dd435a0c.js"),[]),"../../assets/icons/wi_thunderstorms-night-snow.svg":()=>s(()=>import("./wi_thunderstorms-night-snow-a6dd14f6.js"),[]),"../../assets/icons/wi_thunderstorms-night.svg":()=>s(()=>import("./wi_thunderstorms-night-975e1c52.js"),[]),"../../assets/icons/wi_thunderstorms-rain.svg":()=>s(()=>import("./wi_thunderstorms-rain-bf054e52.js"),[]),"../../assets/icons/wi_thunderstorms-snow.svg":()=>s(()=>import("./wi_thunderstorms-snow-afbae2f9.js"),[]),"../../assets/icons/wi_thunderstorms.svg":()=>s(()=>import("./wi_thunderstorms-f3718f18.js"),[]),"../../assets/icons/wi_tornado.svg":()=>s(()=>import("./wi_tornado-d1483831.js"),[]),"../../assets/icons/wi_wind.svg":()=>s(()=>import("./wi_wind-7c0e819e.js"),[])}),`../../assets/icons/wi_${a}.svg`);c(n)}catch(n){console.error(n)}})()},[o]),t.jsx(t.Fragment,{children:l&&t.jsx("img",{src:l,alt:i,className:`w-${r} h-${r} will-change-auto`,loading:"lazy"})})};function x(o){return g({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.368 19.102c.349 1.049 1.011 1.086 1.478.086l5.309-11.375c.467-1.002.034-1.434-.967-.967l-11.376 5.308c-1.001.467-.963 1.129.085 1.479l4.103 1.367 1.368 4.102z"}}]})(o)}function D(){const{lat:o,lng:d}=y(e=>e.geolocation.geolocation),{data:r,isSuccess:l}=p({lat:o,lng:d});function c(e,_){let a=new Date(_*1e3);return new Date(a.getTime()+e*1e3).toLocaleString("en-us",{timeZone:"UTC",weekday:"long"})}function i(e,_){let a=new Date(_*1e3);return new Date(a.getTime()+e*1e3).toLocaleTimeString("en-US",{timeZone:"UTC",hour12:!0,hour:"numeric",minute:"numeric"})}return t.jsx(t.Fragment,{children:l&&[r].map((e,_)=>t.jsxs("div",{className:"mb-4 h-[21rem] overflow-hidden rounded-3xl bg-white p-6 shadow-lg dark:bg-neutral-800",children:[t.jsxs("div",{className:"flex flex-row justify-between",children:[t.jsx("div",{className:"text-xl font-semibold",children:c(e.timezone,e.dt)}),t.jsx("div",{className:"font-KardustBold text-xl",children:i(e.timezone,e.dt)})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"flex flex-row",children:[t.jsx("div",{className:"font-semibold",children:e.name}),t.jsx(x,{})]}),t.jsxs("div",{className:"font-KardustBold text-8xl",children:[Math.round(e.main.temp),"°"]})]}),t.jsx("div",{className:"h-36 w-36 pt-5",children:t.jsx(h,{iconType:e.weather[0].icon,id:e.weather[0].id,size:36})})]}),t.jsxs("div",{className:"mt-8 flex flex-row justify-between",children:[t.jsxs("div",{className:"flex flex-col gap-1",children:[t.jsxs("div",{className:"flex flex-row gap-1",children:[t.jsx("div",{children:"Real Feel"}),t.jsxs("div",{className:"font-KardustBold",children:[Math.round(e.main.feels_like),"°"]})]}),t.jsxs("div",{className:"flex flex-row gap-1",children:[t.jsx("div",{children:"Wind"}),t.jsxs("div",{className:"font-KardustBold",children:[Math.round(e.wind.speed)," m/s"]})]}),t.jsxs("div",{className:"flex flex-row gap-1",children:[t.jsx("div",{children:"Humidity"}),t.jsxs("div",{className:"font-KardustBold",children:[e.main.humidity,"%"]})]})]}),t.jsx("div",{className:"ml-1 self-end",children:t.jsxs("div",{className:"flex flex-col gap-1",children:[t.jsxs("div",{className:"flex flex-row gap-1",children:[t.jsx("div",{children:"Sunrise"}),t.jsx("div",{className:"font-KardustBold",children:i(e.timezone,e.sys.sunrise)})]}),t.jsxs("div",{className:"flex flex-row gap-1",children:[t.jsx("div",{children:"Sunset"}),t.jsx("div",{className:"font-KardustBold",children:i(e.timezone,e.sys.sunset)})]})]})})]})]},_))})}function f(o){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"}},{tag:"path",attr:{d:"M13 7h-2v6h6v-2h-4z"}}]})(o)}function I(){const{lat:o,lng:d}=y(i=>i.geolocation.geolocation),{data:r,isSuccess:l}=E({lat:o,lng:d});function c(i,e){let _=new Date(i*1e3);return new Date(_.getTime()+e*1e3).toLocaleTimeString("en-US",{timeZone:"UTC",hour12:!1,hour:"numeric"}).replace("AM","").replace("PM","")}return t.jsx(t.Fragment,{children:l&&t.jsxs("div",{className:"flex w-full flex-col overflow-hidden rounded-3xl bg-white p-4 shadow-lg hover:overflow-x-auto dark:bg-neutral-800 md:h-40",children:[t.jsxs("div",{className:"flex flex-row gap-1",children:[t.jsx(f,{className:"h-4 w-4"}),t.jsx("div",{className:"text-xs font-semibold",children:"HOURLY FORECAST"})]}),t.jsx("div",{className:"mt-2 flex h-full flex-row justify-items-center gap-4 ",children:r.list.slice(0,12).map((i,e)=>t.jsxs("div",{className:"flex flex-col justify-center text-center",children:[t.jsx("div",{className:"text-md p-1 font-semibold text-neutral-400 md:text-sm",children:c(i.dt,r.city.timezone)}),t.jsx("div",{className:"h-14 w-14",children:t.jsx(h,{iconType:i.weather[0].icon,id:i.weather[0].id})}),t.jsxs("div",{className:"text-md p-1 font-semibold md:text-sm",children:[Math.round(i.main.temp),"°"]})]},e))})]})})}export{I as H,D as W,h as a};
