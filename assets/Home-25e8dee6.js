import{c as w,u as E,r as t,l as S,j as e,C as c,B as u,d as y,T,a as h,b as P}from"./index-44be8fbd.js";import{T as W,C as k,G as x,L as D,a as I}from"./Copyright-7b3128db.js";import{A as q}from"./Avatar-420e7fc1.js";const A=w(),H=()=>{const n=E(),[s,p]=t.useState(""),[r,g]=t.useState(""),[o,j]=t.useState(""),[l,b]=t.useState(""),[i,m]=t.useState(!1),f=t.useCallback(a=>{const d=a&&a.match(/.+@.+\..+/);j(d?"":"Email is required and must be a valid email address"),m(d&&r)},[r]),v=t.useCallback(a=>{b(a?"":"Password is required"),m(a&&s)},[s]),C=t.useCallback(a=>{a.preventDefault(),i&&(n(S({email:s,password:r})),a.currentTarget.reset())},[n,s,r,i]);return e.jsxs(c,{maxWidth:"sx",sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"},children:[e.jsx("h1",{children:"Welcome to Phonebook App"}),e.jsx(W,{theme:A,children:e.jsxs(c,{component:"main",maxWidth:"xs",children:[e.jsx(k,{}),e.jsxs(u,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(q,{sx:{m:1,bgcolor:"primary.main"},children:e.jsx(y,{})}),e.jsx(T,{component:"h3",variant:"h5",children:"Sign In"}),e.jsxs(u,{component:"form",validate:"true",onSubmit:C,sx:{mt:1},children:[e.jsx(h,{margin:"normal",required:!0,fullWidth:!0,error:!!o,helperText:o,id:"email",label:"Email Address",title:"Username must have at least 7 characters",pattern:".+@.+\\\\..+",name:"email",autoComplete:"email",autoFocus:!0,value:s,onChange:a=>{p(a.target.value),f(a.target.value)}}),e.jsx(h,{margin:"normal",required:!0,fullWidth:!0,error:!!l,helperText:l,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:r,onChange:a=>{g(a.target.value),v(a.target.value)}}),e.jsx(P,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:!i,children:"Sign In"}),e.jsx(x,{container:!0,children:e.jsx(x,{item:!0,children:e.jsx(D,{href:"#/register",variant:"body2",children:"Don't have an account? Register"})})})]})]}),e.jsx(I,{sx:{mt:8,mb:4}})]})})]})};export{H as default};
