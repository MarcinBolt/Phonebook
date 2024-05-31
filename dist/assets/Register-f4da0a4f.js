import{e as q,i as V,j as e,c as W,u as D,r as a,f as U,C as j,B as b,T as B,a as d,b as F}from"./index-af6433fb.js";import{T as I,C as H,G as i,L,a as Z}from"./Copyright-b0e80edf.js";import{A as z}from"./Avatar-fcf2ab25.js";var h={},G=V;Object.defineProperty(h,"__esModule",{value:!0});var C=h.default=void 0,M=G(q()),O=e,$=(0,M.default)((0,O.jsx)("path",{fillRule:"evenodd",d:"m9 17 3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"}),"HowToReg");C=h.default=$;const J=W(),X=()=>{const x=D(),[n,w]=a.useState(""),[u,S]=a.useState(""),[l,E]=a.useState(""),[o,y]=a.useState(""),[m,p]=a.useState(""),[c,T]=a.useState(!1),f=a.useCallback(t=>{const s=t.trim(),_=s&&/^[A-Z0-9._%+-]+@[A-Z0-9]{1,}\.[A-Z]{2,8}$/i.test(s);y(_?"":"Email must be at least one letters between @ sign and dot, and at least two letters after dot")},[]),r=a.useCallback(()=>{const t=n!==""&&!o&&!m&&l.length>=7;T(t)},[n,o,m,l]),g=a.useCallback(t=>{const s=t.trim();w(s),r()},[r]),v=a.useCallback(t=>{const s=t.trim();E(s),s.length<7?p("Password must be at least 7 characters"):p(""),r()},[r]),k=a.useCallback(t=>{const s=t.target.value.trim();S(s),f(s),r()},[f,r]),P=a.useCallback(t=>{const s=t.target.value.trim();g(s)},[g]),R=a.useCallback(t=>{const s=t.target.value.trim();v(s)},[v]),A=a.useCallback(t=>{t.preventDefault(),c&&(x(U({name:n,email:u,password:l})),t.currentTarget.reset())},[x,n,u,l,c]);return a.useEffect(()=>{r()},[r]),e.jsx(e.Fragment,{children:e.jsxs(j,{maxWidth:"sx",sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"},children:[e.jsx("h1",{children:"Welcome to Phonebook App"}),e.jsx(I,{theme:J,children:e.jsxs(j,{component:"main",maxWidth:"xs",children:[e.jsx(H,{}),e.jsxs(b,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(z,{sx:{m:1,bgcolor:"primary.main"},children:e.jsx(C,{})}),e.jsx(B,{component:"h3",variant:"h5",children:"Register"}),e.jsxs(b,{component:"form",validate:"true",onSubmit:A,sx:{mt:3},children:[e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:12,children:e.jsx(d,{sx:{color:"primary.main"},autoComplete:"given-name",name:"username",required:!0,fullWidth:!0,id:"username",label:"Username",autoFocus:!0,value:n,onChange:P,error:!n,helperText:n?"":"Username is required"})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(d,{required:!0,fullWidth:!0,id:"email",label:"E-mail Address",name:"email",autoComplete:"email",value:u,onChange:k,error:!!o,helperText:o})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(d,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"off",value:l,onChange:R,error:!!m,helperText:m})})]}),e.jsx(F,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:!c,children:"Register"}),e.jsx(i,{container:!0,children:e.jsx(i,{item:!0,children:e.jsx(L,{href:"#/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),e.jsx(Z,{sx:{mt:5}})]})})]})})};export{X as default};