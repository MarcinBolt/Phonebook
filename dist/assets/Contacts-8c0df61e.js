import{g as pa,c as ua,j as n,a as va,b as ba,s as K,d as l,_ as m,e as g,r as f,u as fa,f as Ca,h as ga,B as M,i as h,k as ma,l as q,m as B,n as I,o as k,p as H,T as A,q as ya,t as xa,v as $a,A as ha,w as ka,x as _a,y as Ia,z as w,C as ja,D as Ra,E as Ta,L as Na,F as Pa}from"./index-ea642340.js";var Y={exports:{}},Oa="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Fa=Oa,La=Fa;function G(){}function J(){}J.resetWarningCache=G;var za=function(){function a(r,i,u,v,s,t){if(t!==La){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}a.isRequired=a;function e(){return a}var c={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:e,element:a,elementType:a,instanceOf:e,node:a,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:J,resetWarningCache:G};return c.PropTypes=c,c};Y.exports=za();var Da=Y.exports;const p=pa(Da),Ea=ua(n.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function Sa(a){return ba("MuiChip",a)}const Va=va("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),o=Va,Ma=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],Aa=a=>{const{classes:e,disabled:c,size:r,color:i,iconColor:u,onDelete:v,clickable:s,variant:t}=a,d={root:["root",t,c&&"disabled",`size${l(r)}`,`color${l(i)}`,s&&"clickable",s&&`clickableColor${l(i)}`,v&&"deletable",v&&`deletableColor${l(i)}`,`${t}${l(i)}`],label:["label",`label${l(r)}`],avatar:["avatar",`avatar${l(r)}`,`avatarColor${l(i)}`],icon:["icon",`icon${l(r)}`,`iconColor${l(u)}`],deleteIcon:["deleteIcon",`deleteIcon${l(r)}`,`deleteIconColor${l(i)}`,`deleteIcon${l(t)}Color${l(i)}`]};return ma(d,Sa,e)},Wa=K("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:c}=a,{color:r,iconColor:i,clickable:u,onDelete:v,size:s,variant:t}=c;return[{[`& .${o.avatar}`]:e.avatar},{[`& .${o.avatar}`]:e[`avatar${l(s)}`]},{[`& .${o.avatar}`]:e[`avatarColor${l(r)}`]},{[`& .${o.icon}`]:e.icon},{[`& .${o.icon}`]:e[`icon${l(s)}`]},{[`& .${o.icon}`]:e[`iconColor${l(i)}`]},{[`& .${o.deleteIcon}`]:e.deleteIcon},{[`& .${o.deleteIcon}`]:e[`deleteIcon${l(s)}`]},{[`& .${o.deleteIcon}`]:e[`deleteIconColor${l(r)}`]},{[`& .${o.deleteIcon}`]:e[`deleteIcon${l(t)}Color${l(r)}`]},e.root,e[`size${l(s)}`],e[`color${l(r)}`],u&&e.clickable,u&&r!=="default"&&e[`clickableColor${l(r)})`],v&&e.deletable,v&&r!=="default"&&e[`deletableColor${l(r)}`],e[t],e[`${t}${l(r)}`]]}})(({theme:a,ownerState:e})=>{const c=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return m({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${o.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${o.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:c,fontSize:a.typography.pxToRem(12)},[`& .${o.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${o.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${o.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${o.icon}`]:m({marginLeft:5,marginRight:-6},e.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},e.iconColor===e.color&&m({color:a.vars?a.vars.palette.Chip.defaultIconColor:c},e.color!=="default"&&{color:"inherit"})),[`& .${o.deleteIcon}`]:m({WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:g(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:g(a.palette.text.primary,.4)}},e.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},e.color!=="default"&&{color:a.vars?`rgba(${a.vars.palette[e.color].contrastTextChannel} / 0.7)`:g(a.palette[e.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[e.color].contrastText}})},e.size==="small"&&{height:24},e.color!=="default"&&{backgroundColor:(a.vars||a).palette[e.color].main,color:(a.vars||a).palette[e.color].contrastText},e.onDelete&&{[`&.${o.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:g(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},e.onDelete&&e.color!=="default"&&{[`&.${o.focusVisible}`]:{backgroundColor:(a.vars||a).palette[e.color].dark}})},({theme:a,ownerState:e})=>m({},e.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:g(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${o.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:g(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},e.clickable&&e.color!=="default"&&{[`&:hover, &.${o.focusVisible}`]:{backgroundColor:(a.vars||a).palette[e.color].dark}}),({theme:a,ownerState:e})=>m({},e.variant==="outlined"&&{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${o.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${o.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${o.avatar}`]:{marginLeft:4},[`& .${o.avatarSmall}`]:{marginLeft:2},[`& .${o.icon}`]:{marginLeft:4},[`& .${o.iconSmall}`]:{marginLeft:2},[`& .${o.deleteIcon}`]:{marginRight:5},[`& .${o.deleteIconSmall}`]:{marginRight:3}},e.variant==="outlined"&&e.color!=="default"&&{color:(a.vars||a).palette[e.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / 0.7)`:g(a.palette[e.color].main,.7)}`,[`&.${o.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:g(a.palette[e.color].main,a.palette.action.hoverOpacity)},[`&.${o.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / ${a.vars.palette.action.focusOpacity})`:g(a.palette[e.color].main,a.palette.action.focusOpacity)},[`& .${o.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / 0.7)`:g(a.palette[e.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[e.color].main}}})),Ua=K("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,e)=>{const{ownerState:c}=a,{size:r}=c;return[e.label,e[`label${l(r)}`]]}})(({ownerState:a})=>m({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},a.size==="small"&&{paddingLeft:8,paddingRight:8}));function W(a){return a.key==="Backspace"||a.key==="Delete"}const Ka=f.forwardRef(function(e,c){const r=fa({props:e,name:"MuiChip"}),{avatar:i,className:u,clickable:v,color:s="default",component:t,deleteIcon:d,disabled:x=!1,icon:C,label:ea,onClick:F,onDelete:y,onKeyDown:L,onKeyUp:z,size:oa="medium",variant:ta="filled",tabIndex:ra,skipFocusWhenDisabled:la=!1}=r,na=Ca(r,Ma),j=f.useRef(null),ca=ga(j,c),D=b=>{b.stopPropagation(),y&&y(b)},sa=b=>{b.currentTarget===b.target&&W(b)&&b.preventDefault(),L&&L(b)},ia=b=>{b.currentTarget===b.target&&(y&&W(b)?y(b):b.key==="Escape"&&j.current&&j.current.blur()),z&&z(b)},R=v!==!1&&F?!0:v,T=R||y?M:t||"div",N=m({},r,{component:T,disabled:x,size:oa,color:s,iconColor:f.isValidElement(C)&&C.props.color||s,onDelete:!!y,clickable:R,variant:ta}),$=Aa(N),da=T===M?m({component:t||"div",focusVisibleClassName:$.focusVisible},y&&{disableRipple:!0}):{};let E=null;y&&(E=d&&f.isValidElement(d)?f.cloneElement(d,{className:h(d.props.className,$.deleteIcon),onClick:D}):n.jsx(Ea,{className:h($.deleteIcon),onClick:D}));let S=null;i&&f.isValidElement(i)&&(S=f.cloneElement(i,{className:h($.avatar,i.props.className)}));let V=null;return C&&f.isValidElement(C)&&(V=f.cloneElement(C,{className:h($.icon,C.props.className)})),n.jsxs(Wa,m({as:T,className:h($.root,u),disabled:R&&x?!0:void 0,onClick:F,onKeyDown:sa,onKeyUp:ia,ref:ca,tabIndex:la&&x?-1:ra,ownerState:N},da,na,{children:[S||V,n.jsx(Ua,{className:h($.label),ownerState:N,children:ea}),E]}))}),qa=Ka;var P={},Ba=B;Object.defineProperty(P,"__esModule",{value:!0});var Q=P.default=void 0,Ha=Ba(q()),wa=n,Ya=(0,Ha.default)((0,wa.jsx)("path",{d:"M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4zm2 2v2h3v3h2v-3h3v-2h-3V7h-2v3h-3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z"}),"PersonAddAlt1");Q=P.default=Ya;const Ga=a=>a.toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1)).join(" "),Ja="_contactForm_xj5m1_1",Qa="_title_xj5m1_19",Xa="_button_xj5m1_35",Za="_textFieldName_xj5m1_49",ae="_textFieldNumber_xj5m1_61",_={contactForm:Ja,title:Qa,button:Xa,textFieldName:Za,textFieldNumber:ae},ee=()=>{const a=I(),e=k(H),[c,r]=f.useState(""),[i,u]=f.useState(""),v=s=>{s.preventDefault();const t=s.currentTarget,d=Ga(t.elements.name.value),x=t.elements.number.value;e.find(C=>C.name.toLowerCase()===d.toLowerCase())?xa.notifyContactExist(d):a($a({name:d,number:x})),r(""),u("")};return n.jsx(n.Fragment,{children:n.jsxs("form",{onSubmit:v,className:_.contactForm,children:[n.jsx("label",{className:_.title,children:"Add New Contact:"}),n.jsx(A,{className:_.textFieldName,id:"outlined-basic",size:"small",onChange:s=>r(s.target.value),autoComplete:"off",type:"text",name:"name",value:c,label:"Enter Name",variant:"outlined",pattern:"^[а-źА-Ź]+(([' -][а-źА-Ź ])?[а-źА-Ź]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),n.jsx(A,{className:_.textFieldNumber,size:"small",id:"outlined-basic",onChange:s=>u(s.target.value),autoComplete:"off",type:"tel",name:"number",value:i,label:"Enter Number",variant:"outlined",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),n.jsx(ya,{className:_.button,sx:{textTransform:"none"},variant:"contained",type:"submit",startIcon:n.jsx(Q,{}),children:"Add Contact"})]})})},oe="_contactsList_1npcc_1",te="_empty_1npcc_21",re="_rainbow_1npcc_1",U={contactsList:oe,empty:te,rainbow:re};var O={},le=B;Object.defineProperty(O,"__esModule",{value:!0});var X=O.default=void 0,ne=le(q()),ce=n,se=(0,ne.default)((0,ce.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");X=O.default=se;const ie="_item_188jk_1",de={item:ie},Z=({contact:a,id:e,name:c,number:r,onContactRemove:i})=>{const u=I(),v=t=>{const x=t.split(" ").slice(0,2).map(C=>C[0]);return{sx:{bgcolor:"#51abff"},children:x.join("")}},s=t=>{u(ka()),u(_a(t))};return n.jsx(qa,{avatar:n.jsx(ha,{...v(`${c}`)}),className:de.item,label:`${c}: ${r}`,variant:"outlined",onClick:()=>s(a),onDelete:()=>i(e),deleteIcon:n.jsx(X,{})},e)};Z.propTypes={contact:p.shape({id:p.string,name:p.string,number:p.string}),id:p.oneOfType([p.string,p.number]),name:p.string,number:p.string,onContactRemove:p.func};const aa=()=>{const a=I(),e=k(H),c=k(Ia),r=k(w),u=(()=>e.filter(t=>t.name.toLowerCase().includes(c.toLowerCase())))().sort((t,d)=>t.name.localeCompare(d.name)),v=t=>{a(ja(t))},s=u.map(t=>n.jsx(Z,{contact:t,id:t.id,name:t.name,number:t.number,onContactRemove:v,filter:c},t.id));return n.jsxs(n.Fragment,{children:[e.length>0&&n.jsx("ul",{className:U.contactsList,children:s}),r||e.length===0&&n.jsx("h4",{className:U.empty,children:"You did not add any Contact yet..."})]})};aa.propTypes={filter:p.string,contacts:p.arrayOf(p.shape({id:p.string,name:p.string,number:p.string}))};const ue=()=>{const a=I(),e=k(w),c=k(Ra);return f.useEffect(()=>{a(Ta())},[a]),n.jsxs(n.Fragment,{children:[e&&!c&&n.jsx(Na,{}),n.jsxs(Pa,{sx:{display:{xs:"grid",sm:"flex"},justifyContent:"center",alignItems:"flex-start",margin:"30px auto",padding:"0 auto",minHeight:"50vh",gridGap:"25px"},children:[n.jsx(ee,{}),n.jsx(aa,{})]})]})};export{ue as default};
