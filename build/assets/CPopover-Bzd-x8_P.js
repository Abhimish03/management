import{r as i,_,R as n,b as a,c as $,P as e,q as z,f as A}from"./index-C4zX-OMw.js";import{u as G,p as J,q as K,T as Q,r as U}from"./DefaultLayout-CjZTBQb9.js";import{g as W}from"./getRTLPlacement-BQg5-UKO.js";var k=i.forwardRef(function(t,w){var N=t.children,d=t.animation,C=d===void 0?!0:d,x=t.className,O=t.container,q=t.content,v=t.delay,c=v===void 0?0:v,b=t.fallbackPlacements,F=b===void 0?["top","right","bottom","left"]:b,g=t.offset,H=g===void 0?[0,8]:g,M=t.onHide;t.onShow;var y=t.placement,S=y===void 0?"top":y,D=t.title,h=t.trigger,o=h===void 0?"click":h,u=t.visible,L=_(t,["children","animation","className","container","content","delay","fallbackPlacements","offset","onHide","onShow","placement","title","trigger","visible"]),r=i.useRef(null),s=i.useRef(null),V=G(w,r),P=i.useRef("popover".concat(Math.floor(Math.random()*1e6))),E=J(),j=E.initPopper,B=E.destroyPopper,R=i.useState(u),f=R[0],p=R[1],T=typeof c=="number"?{show:c,hide:c}:c,I={modifiers:[{name:"arrow",options:{element:".popover-arrow"}},{name:"flip",options:{fallbackPlacements:F}},{name:"offset",options:{offset:H}}],placement:W(S,s.current)};i.useEffect(function(){p(u)},[u]);var l=function(m){if(m){setTimeout(function(){return p(!0)},T.show);return}setTimeout(function(){return p(!1)},T.hide)};return n.createElement(n.Fragment,null,n.cloneElement(N,a(a(a(a(a({},f&&{"aria-describedby":P.current}),{ref:s}),(o==="click"||o.includes("click"))&&{onClick:function(){return l(!f)}}),(o==="focus"||o.includes("focus"))&&{onFocus:function(){return l(!0)},onBlur:function(){return l(!1)}}),(o==="hover"||o.includes("hover"))&&{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}})),n.createElement(K,{container:O,portal:!0},n.createElement(Q,{in:f,mountOnEnter:!0,nodeRef:r,onEnter:function(){s.current&&r.current&&j(s.current,r.current,I)},onEntering:function(){s.current&&r.current&&(r.current.style.display="initial")},onExit:M,onExited:function(){B()},timeout:{enter:0,exit:r.current?U(r.current)+50:200},unmountOnExit:!0},function(m){return n.createElement("div",a({className:$("popover","bs-popover-auto",{fade:C,show:m==="entered"},x),id:P.current,ref:V,role:"tooltip",style:{display:"none"}},L),n.createElement("div",{className:"popover-arrow"}),n.createElement("div",{className:"popover-header"},D),n.createElement("div",{className:"popover-body"},q))})))});k.propTypes={animation:e.bool,children:e.node,className:e.string,container:e.any,content:e.oneOfType([e.string,e.node]),delay:e.oneOfType([e.number,e.shape({show:e.number.isRequired,hide:e.number.isRequired})]),fallbackPlacements:z,offset:e.any,onHide:e.func,onShow:e.func,placement:e.oneOf(["auto","top","right","bottom","left"]),title:e.oneOfType([e.string,e.node]),trigger:A,visible:e.bool};k.displayName="CPopover";export{k as C};
