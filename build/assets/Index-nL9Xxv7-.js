import{r as d,j as e}from"./index-C4zX-OMw.js";import"./DefaultLayout-CjZTBQb9.js";import{a as F}from"./index.es-CxnQu4pT.js";import{s as x}from"./supabase-6zNMmLOt.js";import{a as p,C as N}from"./CRow-DVsZMDyd.js";import{C as h,a as C}from"./CCardBody-e8QAKKuW.js";import{C as j}from"./CCardHeader-BqJpCRHb.js";import{C as v}from"./CForm-D8hbd90D.js";import{C as o}from"./CFormLabel-ljva4w1G.js";import{C as a}from"./CFormInput-IgWIfd5d.js";import{C as I,a as g,b as u,c as r,d as _,e as l}from"./CTable-CIXgVVK4.js";import"./cil-user-Ddrdy7PS.js";import"./cil-lock-locked-DmxpJbVL.js";import"./CFormControlWrapper-k_x2MsBh.js";import"./CFormControlValidation-DYXFQrLl.js";const G=()=>{const[m,b]=d.useState([]);d.useEffect(()=>{f()},[]);async function f(){let{data:s,error:t}=await x.from("cust_details").select("*");b(s)}async function y(s){s.preventDefault();const t=s.target.email.value,i=s.target.customer_name.value,c=s.target.mobile.value,n=s.target.city.value;console.log({customer_name:i,email:t,mobile:c,city:n}),await x.from("cust_details").insert([{customer_name:i,email:t,mobile:c,city:n}]).select(),window.location.reload()}return console.log(m),e.jsxs(p,{xs:12,children:[e.jsx(N,{children:e.jsx(p,{xs:12,children:e.jsxs(h,{className:"mb-4",children:[e.jsx(j,{children:e.jsx("strong",{children:"Add Customer"})}),e.jsx(C,{children:e.jsxs(v,{onSubmit:y,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"exampleFormControlInput1",children:"Customer Name"}),e.jsx(a,{type:"text",name:"customer_name",id:"exampleFormControlInput1",placeholder:"Your name"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"exampleFormControlInput1",children:"Email address"}),e.jsx(a,{type:"email",name:"email",id:"exampleFormControlInput1",placeholder:"name@example.com"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"exampleFormControlInput1",children:"Mobile Number"}),e.jsx(a,{type:"text",name:"mobile",id:"exampleFormControlInput1",placeholder:"Your Mobile Number"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"exampleFormControlInput1",children:"City"}),e.jsx(a,{type:"text",name:"city",id:"exampleFormControlInput1",placeholder:"Your City"})]}),e.jsx("div",{className:"mb-3",children:e.jsx(F,{color:"success",className:"px-4",type:"submit",children:"Add"})})]})})]})})}),e.jsxs(h,{className:"mb-4",children:[e.jsxs(j,{children:[e.jsx("strong",{children:"All"})," ",e.jsx("small",{children:"Customers"})]}),e.jsx(C,{children:e.jsxs(I,{striped:!0,children:[e.jsx(g,{children:e.jsxs(u,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Name"}),e.jsx(r,{scope:"col",children:"Email"}),e.jsx(r,{scope:"col",children:"Mobile"}),e.jsx(r,{scope:"col",children:"City"})]})}),e.jsx(_,{children:m.map(s=>e.jsxs(u,{children:[e.jsx(l,{children:s.id}),e.jsx(l,{children:s.customer_name}),e.jsx(l,{children:s.email}),e.jsx(l,{children:s.mobile}),e.jsx(l,{children:s.city})]},s.id))})]})})]})]})};export{G as default};