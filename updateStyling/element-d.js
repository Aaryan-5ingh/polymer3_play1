import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';

class ElementD extends PolymerElement{static get template(){return(html`<style>p{cursor:pointer;color:var(--mu,red);}p#customStyled{color:var(--mu,green);}</style><p on-click="gg">paragraph1</p><p id="customStyled">I am custom tyled in the main html document</p><hr />`);}  constructor(){super();}gg(){alert("this.updateStyles({'--mu':'pink'}); is not working");}}

customElements.define('element-d',ElementD);