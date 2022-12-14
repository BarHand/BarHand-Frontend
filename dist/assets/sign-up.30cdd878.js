import{g as Ve,r as V,o as Ne,w as I,i as W,a as Y,b as Ee,c as g,d as Ce,e as Se,f as ee,p as te,u as f,n as se,_ as xe,h as O,j as N,k as E,l as R,m as L,q as u,s as je,t as w,v as C,x as z,F as Oe,y as Pe,z as ne,A as T,B as Ae,C as ke}from"./index.eefdc7f8.js";import{h as ae}from"./http-common.12b2197e.js";function re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((a,n)=>(t.includes(n)||(a[n]=f(e[n])),a),{})}function M(e){return typeof e=="function"}function Ue(e){return Ce(e)||Se(e)}function ce(e,t,a){let n=e;const s=t.split(".");for(let i=0;i<s.length;i++){if(!n[s[i]])return a;n=n[s[i]]}return n}function H(e,t,a){return g(()=>e.some(n=>ce(t,n,{[a]:!1})[a]))}function le(e,t,a){return g(()=>e.reduce((n,s)=>{const i=ce(t,s,{[a]:!1})[a]||[];return n.concat(i)},[]))}function de(e,t,a,n){return e.call(n,f(t),f(a),n)}function me(e){return e.$valid!==void 0?!e.$valid:!e}function ze(e,t,a,n,s,i,h){let{$lazy:o,$rewardEarly:v}=s,d=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],m=arguments.length>8?arguments[8]:void 0,p=arguments.length>9?arguments[9]:void 0,b=arguments.length>10?arguments[10]:void 0;const l=V(!!n.value),r=V(0);a.value=!1;const $=I([t,n].concat(d,b),()=>{if(o&&!n.value||v&&!p.value&&!a.value)return;let c;try{c=de(e,t,m,h)}catch(_){c=Promise.reject(_)}r.value++,a.value=!!r.value,l.value=!1,Promise.resolve(c).then(_=>{r.value--,a.value=!!r.value,i.value=_,l.value=me(_)}).catch(_=>{r.value--,a.value=!!r.value,i.value=_,l.value=!0})},{immediate:!0,deep:typeof t=="object"});return{$invalid:l,$unwatch:$}}function Ie(e,t,a,n,s,i,h,o){let{$lazy:v,$rewardEarly:d}=n;const m=()=>({}),p=g(()=>{if(v&&!a.value||d&&!o.value)return!1;let b=!0;try{const l=de(e,t,h,i);s.value=l,b=me(l)}catch(l){s.value=l}return b});return{$unwatch:m,$invalid:p}}function Le(e,t,a,n,s,i,h,o,v,d,m){const p=V(!1),b=e.$params||{},l=V(null);let r,$;e.$async?{$invalid:r,$unwatch:$}=ze(e.$validator,t,p,a,n,l,s,e.$watchTargets,v,d,m):{$invalid:r,$unwatch:$}=Ie(e.$validator,t,a,n,l,s,v,d);const c=e.$message;return{$message:M(c)?g(()=>c(re({$pending:p,$invalid:r,$params:re(b),$model:t,$response:l,$validator:i,$propertyPath:o,$property:h}))):c||"",$params:b,$pending:p,$invalid:r,$response:l,$unwatch:$}}function Te(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=f(e),a=Object.keys(t),n={},s={},i={};let h=null;return a.forEach(o=>{const v=t[o];switch(!0){case M(v.$validator):n[o]=v;break;case M(v):n[o]={$validator:v};break;case o==="$validationGroups":h=v;break;case o.startsWith("$"):i[o]=v;break;default:s[o]=v}}),{rules:n,nestedValidators:s,config:i,validationGroups:h}}function Fe(){}const Me="__root";function ve(e,t,a){if(a)return t?t(e()):e();try{var n=Promise.resolve(e());return t?n.then(t):n}catch(s){return Promise.reject(s)}}function qe(e,t){return ve(e,Fe,t)}function De(e,t){var a=e();return a&&a.then?a.then(t):t(a)}function Be(e){return function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];try{return Promise.resolve(e.apply(this,t))}catch(n){return Promise.reject(n)}}}function Ge(e,t,a,n,s,i,h,o,v){const d=Object.keys(e),m=n.get(s,e),p=V(!1),b=V(!1),l=V(0);if(m){if(!m.$partial)return m;m.$unwatch(),p.value=m.$dirty.value}const r={$dirty:p,$path:s,$touch:()=>{p.value||(p.value=!0)},$reset:()=>{p.value&&(p.value=!1)},$commit:()=>{}};return d.length?(d.forEach($=>{r[$]=Le(e[$],t,r.$dirty,i,h,$,a,s,v,b,l)}),r.$externalResults=g(()=>o.value?[].concat(o.value).map(($,c)=>({$propertyPath:s,$property:a,$validator:"$externalResults",$uid:`${s}-externalResult-${c}`,$message:$,$params:{},$response:null,$pending:!1})):[]),r.$invalid=g(()=>{const $=d.some(c=>f(r[c].$invalid));return b.value=$,!!r.$externalResults.value.length||$}),r.$pending=g(()=>d.some($=>f(r[$].$pending))),r.$error=g(()=>r.$dirty.value?r.$pending.value||r.$invalid.value:!1),r.$silentErrors=g(()=>d.filter($=>f(r[$].$invalid)).map($=>{const c=r[$];return Y({$propertyPath:s,$property:a,$validator:$,$uid:`${s}-${$}`,$message:c.$message,$params:c.$params,$response:c.$response,$pending:c.$pending})}).concat(r.$externalResults.value)),r.$errors=g(()=>r.$dirty.value?r.$silentErrors.value:[]),r.$unwatch=()=>d.forEach($=>{r[$].$unwatch()}),r.$commit=()=>{b.value=!0,l.value=Date.now()},n.set(s,e,r),r):(m&&n.set(s,e,r),r)}function He(e,t,a,n,s,i,h){const o=Object.keys(e);return o.length?o.reduce((v,d)=>(v[d]=Z({validations:e[d],state:t,key:d,parentKey:a,resultsCache:n,globalConfig:s,instance:i,externalResults:h}),v),{}):{}}function We(e,t,a){const n=g(()=>[t,a].filter(r=>r).reduce((r,$)=>r.concat(Object.values(f($))),[])),s=g({get(){return e.$dirty.value||(n.value.length?n.value.every(r=>r.$dirty):!1)},set(r){e.$dirty.value=r}}),i=g(()=>{const r=f(e.$silentErrors)||[],$=n.value.filter(c=>(f(c).$silentErrors||[]).length).reduce((c,_)=>c.concat(..._.$silentErrors),[]);return r.concat($)}),h=g(()=>{const r=f(e.$errors)||[],$=n.value.filter(c=>(f(c).$errors||[]).length).reduce((c,_)=>c.concat(..._.$errors),[]);return r.concat($)}),o=g(()=>n.value.some(r=>r.$invalid)||f(e.$invalid)||!1),v=g(()=>n.value.some(r=>f(r.$pending))||f(e.$pending)||!1),d=g(()=>n.value.some(r=>r.$dirty)||n.value.some(r=>r.$anyDirty)||s.value),m=g(()=>s.value?v.value||o.value:!1),p=()=>{e.$touch(),n.value.forEach(r=>{r.$touch()})},b=()=>{e.$commit(),n.value.forEach(r=>{r.$commit()})},l=()=>{e.$reset(),n.value.forEach(r=>{r.$reset()})};return n.value.length&&n.value.every(r=>r.$dirty)&&p(),{$dirty:s,$errors:h,$invalid:o,$anyDirty:d,$error:m,$pending:v,$touch:p,$reset:l,$silentErrors:i,$commit:b}}function Z(e){const t=Be(function(){return G(),De(function(){if(c.$rewardEarly)return X(),qe(se)},function(){return ve(se,function(){return new Promise(y=>{if(!B.value)return y(!D.value);const j=I(B,()=>{y(!D.value),j()})})})})});let{validations:a,state:n,key:s,parentKey:i,childResults:h,resultsCache:o,globalConfig:v={},instance:d,externalResults:m}=e;const p=i?`${i}.${s}`:s,{rules:b,nestedValidators:l,config:r,validationGroups:$}=Te(a),c=Object.assign({},v,r),_=s?g(()=>{const y=f(n);return y?f(y[s]):void 0}):n,U=Object.assign({},f(m)||{}),J=g(()=>{const y=f(m);return s?y?f(y[s]):void 0:y}),K=Ge(b,_,s,o,p,c,d,J,n),x=He(l,_,p,o,c,d,J),Q={};$&&Object.entries($).forEach(y=>{let[j,S]=y;Q[j]={$invalid:H(S,x,"$invalid"),$error:H(S,x,"$error"),$pending:H(S,x,"$pending"),$errors:le(S,x,"$errors"),$silentErrors:le(S,x,"$silentErrors")}});const{$dirty:q,$errors:fe,$invalid:D,$anyDirty:he,$error:ge,$pending:B,$touch:G,$reset:be,$silentErrors:ye,$commit:X}=We(K,x,h),_e=s?g({get:()=>f(_),set:y=>{q.value=!0;const j=f(n),S=f(m);S&&(S[s]=U[s]),W(j[s])?j[s].value=y:j[s]=y}}):null;s&&c.$autoDirty&&I(_,()=>{q.value||G();const y=f(m);y&&(y[s]=U[s])},{flush:"sync"});function we(y){return(h.value||{})[y]}function Re(){W(m)?m.value=U:Object.keys(U).length===0?Object.keys(m).forEach(y=>{delete m[y]}):Object.assign(m,U)}return Y(Object.assign({},K,{$model:_e,$dirty:q,$error:ge,$errors:fe,$invalid:D,$anyDirty:he,$pending:B,$touch:G,$reset:be,$path:p||Me,$silentErrors:ye,$validate:t,$commit:X},h&&{$getResultsForChild:we,$clearExternalResults:Re,$validationGroups:Q},x))}class Ze{constructor(){this.storage=new Map}set(t,a,n){this.storage.set(t,{rules:a,result:n})}checkRulesValidity(t,a,n){const s=Object.keys(n),i=Object.keys(a);return i.length!==s.length||!i.every(o=>s.includes(o))?!1:i.every(o=>a[o].$params?Object.keys(a[o].$params).every(v=>f(n[o].$params[v])===f(a[o].$params[v])):!0)}get(t,a){const n=this.storage.get(t);if(!n)return;const{rules:s,result:i}=n,h=this.checkRulesValidity(t,a,s),o=i.$unwatch?i.$unwatch:()=>({});return h?i:{$dirty:i.$dirty,$partial:!0,$unwatch:o}}}const F={COLLECT_ALL:!0,COLLECT_NONE:!1},ie=Symbol("vuelidate#injectChildResults"),oe=Symbol("vuelidate#removeChildResults");function Ye(e){let{$scope:t,instance:a}=e;const n={},s=V([]),i=g(()=>s.value.reduce((m,p)=>(m[p]=f(n[p]),m),{}));function h(m,p){let{$registerAs:b,$scope:l,$stopPropagation:r}=p;r||t===F.COLLECT_NONE||l===F.COLLECT_NONE||t!==F.COLLECT_ALL&&t!==l||(n[b]=m,s.value.push(b))}a.__vuelidateInjectInstances=[].concat(a.__vuelidateInjectInstances||[],h);function o(m){s.value=s.value.filter(p=>p!==m),delete n[m]}a.__vuelidateRemoveInstances=[].concat(a.__vuelidateRemoveInstances||[],o);const v=ee(ie,[]);te(ie,a.__vuelidateInjectInstances);const d=ee(oe,[]);return te(oe,a.__vuelidateRemoveInstances),{childResults:i,sendValidationResultsToParent:v,removeValidationResultsFromParent:d}}function pe(e){return new Proxy(e,{get(t,a){return typeof t[a]=="object"?pe(t[a]):g(()=>t[a])}})}let ue=0;function Je(e,t){var a;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(n=e,e=void 0,t=void 0);let{$registerAs:s,$scope:i=F.COLLECT_ALL,$stopPropagation:h,$externalResults:o,currentVueInstance:v}=n;const d=v||((a=Ve())===null||a===void 0?void 0:a.proxy),m=d?d.$options:{};s||(ue+=1,s=`_vuelidate_${ue}`);const p=V({}),b=new Ze,{childResults:l,sendValidationResultsToParent:r,removeValidationResultsFromParent:$}=d?Ye({$scope:i,instance:d}):{childResults:V({})};if(!e&&m.validations){const c=m.validations;t=V({}),Ne(()=>{t.value=d,I(()=>M(c)?c.call(t.value,new pe(t.value)):c,_=>{p.value=Z({validations:_,state:t,childResults:l,resultsCache:b,globalConfig:n,instance:d,externalResults:o||d.vuelidateExternalResults})},{immediate:!0})}),n=m.validationsConfig||n}else{const c=W(e)||Ue(e)?e:Y(e||{});I(c,_=>{p.value=Z({validations:_,state:t,childResults:l,resultsCache:b,globalConfig:n,instance:d!=null?d:{},externalResults:o})},{immediate:!0})}return d&&(r.forEach(c=>c(p,{$registerAs:s,$scope:i,$stopPropagation:h})),Ee(()=>$.forEach(c=>c(s)))),g(()=>Object.assign({},f(p.value),l.value))}class Ke{signUpSupplier(t){return ae.post("/suppliers",t)}signUpStore(t){return ae.post("/stores",t)}}const $e=e=>{if(e=f(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let t in e)return!0;return!1}return!!String(e).length};function P(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return n=>(n=f(n),!$e(n)||t.every(s=>s.test(n)))}P(/^[a-zA-Z]*$/);P(/^[a-zA-Z0-9]*$/);P(/^\d*(\.\d+)?$/);const Qe=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var Xe=P(Qe),et={$validator:Xe,$message:"Value is not a valid email address",$params:{type:"email"}};function tt(e){return typeof e=="string"&&(e=e.trim()),$e(e)}var k={$validator:tt,$message:"Value is required",$params:{type:"required"}};const st=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;P(st);P(/(^[0-9]*$)|(^-[0-9]+$)/);P(/^[-]?\d*(\.\d+)?$/);const nt={name:"sign-up.component",setup:()=>({v$:Je()}),data(){return{typeUser:"Supplier",optionsUser:["Store","Supplier"],name:"",lastName:"",email:"",password:"",businessName:"",date:null,user:null,accept:null,submitted:!1,countries:null,showMessage:!1,supplier:{},store:{},authenticationApiService:null}},validations(){return{name:{required:k},lastName:{required:k},businessName:{required:k},email:{required:k,email:et},password:{required:k},accept:{required:k}}},created(){this.authenticationApiService=new Ke},methods:{handleSubmit(e){this.submitted=!0,e&&this.toggleDialog()},toggleDialog(){this.showMessage=!this.showMessage,this.showMessage||this.resetForm()},resetForm(){this.name="",this.lastName="",this.businessName="",this.email="",this.password="",this.date=null,this.user=null,this.accept=null,this.submitted=!1},addNewUser(){this.typeUser==="Supplier"?(this.supplier={name:this.name,lastName:this.lastName,supplierName:this.businessName,email:this.email,password:this.password},this.authenticationApiService.signUpSupplier(this.supplier)):this.typeUser==="Store"&&(this.store={name:this.name,lastName:this.lastName,storeName:this.businessName,email:this.email,password:this.password},this.authenticationApiService.signUpStore(this.store))}}},A=e=>(Ae("data-v-4f66dd56"),e=e(),ke(),e),at={class:"form-demo"},rt={class:"flex align-items-center flex-column pt-6 px-3"},lt=A(()=>u("h5",null,"Registration Successful!",-1)),it={href:"/sign-in"},ot={class:"flex justify-content-center"},ut={class:"flex justify-content-center"},ct={class:"card"},dt=A(()=>u("h5",{class:"text-center"},"Register",-1)),mt={class:"field"},vt={class:"p-float-label"},pt={key:0,class:"p-error"},$t={class:"field"},ft={class:"p-float-label"},ht={key:0,class:"p-error"},gt={class:"field"},bt={class:"p-float-label"},yt={key:0,class:"p-error"},_t={class:"field"},wt={class:"p-float-label p-input-icon-right"},Rt=A(()=>u("i",{class:"pi pi-envelope"},null,-1)),Vt={key:0},Nt={class:"p-error"},Et={key:1,class:"p-error"},Ct={class:"field"},St={class:"p-float-label"},xt=A(()=>u("h6",null,"Pick a password",-1)),jt=A(()=>u("p",{class:"mt-2"},"Suggestions",-1)),Ot=A(()=>u("ul",{class:"pl-2 ml-2 mt-0",style:{"line-height":"1.5"}},[u("li",null,"At least one lowercase"),u("li",null,"At least one uppercase"),u("li",null,"At least one numeric"),u("li",null,"Minimum 8 characters")],-1)),Pt={key:0,class:"p-error"},At={class:"field"},kt={class:"p-float-label"},Ut=A(()=>u("label",{for:"typeUser"},"User",-1)),zt={class:"field-checkbox"};function It(e,t,a,n,s,i){const h=O("pv-button"),o=O("pv-dialog"),v=O("pv-input-text"),d=O("pv-divider"),m=O("pv-password"),p=O("pv-drop-down"),b=O("pv-checkbox");return N(),E("div",at,[R(o,{visible:s.showMessage,"onUpdate:visible":t[0]||(t[0]=l=>s.showMessage=l),breakpoints:{"960px":"80vw"},style:{width:"30vw"},position:"top"},{footer:L(()=>[u("a",it,[u("div",ot,[R(h,{label:"OK",onClick:i.toggleDialog,class:"p-button-text"},null,8,["onClick"])])])]),default:L(()=>[u("div",rt,[u("i",{class:"pi pi-check-circle",style:ne({fontSize:"5rem",color:"var(--green-500)"})},null,4),lt,u("p",{style:ne({lineHeight:1.5,textIndent:"1rem"})},[T(" Your account is registered under name "),u("b",null,C(s.name),1),T(" ; it'll be valid next 30 days without activation. Please check "),u("b",null,C(s.email),1),T(" for activation instructions. ")],4)])]),_:1},8,["visible"]),u("div",ut,[u("div",ct,[dt,u("form",{onSubmit:t[9]||(t[9]=je(l=>i.handleSubmit(!e.v$.$invalid),["prevent"])),class:"p-fluid"},[u("div",mt,[u("div",vt,[R(v,{id:"name",modelValue:e.v$.name.$model,"onUpdate:modelValue":t[1]||(t[1]=l=>e.v$.name.$model=l),class:w({"p-invalid":e.v$.name.$invalid&&s.submitted})},null,8,["modelValue","class"]),u("label",{for:"name",class:w({"p-error":e.v$.name.$invalid&&s.submitted})},"Name*",2)]),e.v$.name.$invalid&&s.submitted||e.v$.name.$pending.$response?(N(),E("small",pt,C(e.v$.name.required.$message.replace("Value","Name")),1)):z("",!0)]),u("div",$t,[u("div",ft,[R(v,{id:"lastName",modelValue:e.v$.lastName.$model,"onUpdate:modelValue":t[2]||(t[2]=l=>e.v$.lastName.$model=l),class:w({"p-invalid":e.v$.lastName.$invalid&&s.submitted})},null,8,["modelValue","class"]),u("label",{for:"lastName",class:w({"p-error":e.v$.lastName.$invalid&&s.submitted})},"Last Name*",2)]),e.v$.lastName.$invalid&&s.submitted||e.v$.lastName.$pending.$response?(N(),E("small",ht,C(e.v$.lastName.required.$message.replace("Value","LastName")),1)):z("",!0)]),u("div",gt,[u("div",bt,[R(v,{id:"businessName",modelValue:e.v$.businessName.$model,"onUpdate:modelValue":t[3]||(t[3]=l=>e.v$.businessName.$model=l),class:w({"p-invalid":e.v$.businessName.$invalid&&s.submitted})},null,8,["modelValue","class"]),u("label",{for:"businessName",class:w({"p-error":e.v$.businessName.$invalid&&s.submitted})},"Business Name*",2)]),e.v$.businessName.$invalid&&s.submitted||e.v$.businessName.$pending.$response?(N(),E("small",yt,C(e.v$.businessName.required.$message.replace("Value","BusinessName")),1)):z("",!0)]),u("div",_t,[u("div",wt,[Rt,R(v,{id:"email",modelValue:e.v$.email.$model,"onUpdate:modelValue":t[4]||(t[4]=l=>e.v$.email.$model=l),class:w({"p-invalid":e.v$.email.$invalid&&s.submitted}),"aria-describedby":"email-error"},null,8,["modelValue","class"]),u("label",{for:"email",class:w({"p-error":e.v$.email.$invalid&&s.submitted})},"Email*",2)]),e.v$.email.$error&&s.submitted?(N(),E("span",Vt,[(N(!0),E(Oe,null,Pe(e.v$.email.$errors,(l,r)=>(N(),E("span",{id:"email-error",key:r},[u("small",Nt,C(l.$message),1)]))),128))])):e.v$.email.$invalid&&s.submitted||e.v$.email.$pending.$response?(N(),E("small",Et,C(e.v$.email.required.$message.replace("Value","Email")),1)):z("",!0)]),u("div",Ct,[u("div",St,[R(m,{id:"password",modelValue:e.v$.password.$model,"onUpdate:modelValue":t[5]||(t[5]=l=>e.v$.password.$model=l),class:w({"p-invalid":e.v$.password.$invalid&&s.submitted}),toggleMask:""},{header:L(()=>[xt]),footer:L(l=>[T(C(l.level)+" ",1),R(d),jt,Ot]),_:1},8,["modelValue","class"]),u("label",{for:"password",class:w({"p-error":e.v$.password.$invalid&&s.submitted})},"Password*",2)]),e.v$.password.$invalid&&s.submitted||e.v$.password.$pending.$response?(N(),E("small",Pt,C(e.v$.password.required.$message.replace("Value","Password")),1)):z("",!0)]),u("div",At,[u("div",kt,[R(p,{id:"typeUser",modelValue:s.typeUser,"onUpdate:modelValue":t[6]||(t[6]=l=>s.typeUser=l),options:s.optionsUser},null,8,["modelValue","options"]),Ut])]),u("div",zt,[R(b,{id:"accept",name:"accept",value:"Accept",modelValue:e.v$.accept.$model,"onUpdate:modelValue":t[7]||(t[7]=l=>e.v$.accept.$model=l),class:w({"p-invalid":e.v$.accept.$invalid&&s.submitted})},null,8,["modelValue","class"]),u("label",{for:"accept",class:w({"p-error":e.v$.accept.$invalid&&s.submitted})},"I agree to the terms and conditions*",2)]),R(h,{type:"submit",label:"Submit",class:"mt-2",onClick:t[8]||(t[8]=l=>i.addNewUser())})],32)])])])}const Ft=xe(nt,[["render",It],["__scopeId","data-v-4f66dd56"]]);export{Ft as default};
