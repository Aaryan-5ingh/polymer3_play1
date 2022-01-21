import {PolymerElement,html} from "@polymer/polymer/polymer-element.js";
/*
const common={k:"bonsoir",b:"merci"};

class elementA extends PolymerElement{static get template(){return(html`<div><h4>Set sub-properties in the js file of a</h4><p>p.a is [[p.a]] and p.b is [[p.b]]</p><h4>The common sub-properties that are prototyped</h4><p> [[common.k]] and [[common.b]]</p></div>`);}constructor(){super(); this.p={a:"hello",b:-20}; this.common={__proto__:common,n:"common"};}};

class elementB extends PolymerElement{static get template(){return(html`<h4>This is element b presenting the common</h4><p>common.k is [[common.k]] and common.b is [[common.b]]</p>`);}constructor(){super();this.common={__proto__:common,n:"common"};}}
customElements.define('element-b',elementB);
customElements.define('element-a',elementA);
class demoElement extends PolymerElement{static get template(){return(html`<div><h3>This is default element a</h3><element-a></element-a><hr /><element-b></element-b></div>`);} static get properties(){return({});}}
*/


import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';

let aw=" rrrrrrrrR "; 

class elementA extends PolymerElement{static get template(){return(html`<h3> this is aw : [[awProp]]</h3><h3>Hello, this is element a</h3><p>[[prop1]] comes to me,a</p>`);} static get properties(){return({prop1:{type:String,value:"default prop1 in element a value"},awProp:{type:String,value:aw,notify:true,reflectToAttribute:true}});} constructor(){super();} ready(){super.ready(); afterNextRender(this,()=>{alert(aw);console.log('t',elementA.properties.awProp.value);setTimeout(function(){aw="danke";this.name='rt';console.log(aw,elementA.properties.awProp.value);},2000); });}}

class elementB extends PolymerElement{static get template(){return(html`<div><element-a></element-a> <hr/><element-a prop1="prop1 element a value from element b"></element-a><h4>this is eleent-b</h4><p>[[this.foo[1].toString(2)]] is the array</p></div>`);} constructor(){super();  this.foo=[1,2,3];}}

customElements.define('element-a',elementA);customElements.define('element-b',elementB);

class demoElement extends PolymerElement{static get template(){return (html`<div><element-b></element-b></div>`);}}

customElements.define('demo-element',demoElement);