import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./custom-logo"
import "./custom-links"
@customElement('custom-header')
export class CustomHeader extends LitElement {


  constructor() {
    super();
    if (this.hasAttribute("links")) {
      console.log("links", this.getAttribute("links"))
      this.links = JSON.stringify(this.getAttribute("links") || "[]")
    }
    console.log("this", this.getAttribute("links"))
  }
  static styles = css`
    :host{
      color:red;
      background-color:purple;
      padding:0.5rem;
      width:100%;
      height:50px;
    }
    header{
      display:flex;
      flex-direction:row;
      align-items:center;
    }
    h1{
      padding:0px
      margin:0px;
    }
   `;

  @property({ type: String })
  name?: string = "Welcome to Vue development";
  @property({ type: String })
  links = ""

  render() {
    return html`
      <header class="wrapper">
        <custom-logo name=${this.name}></custom-logo>
        <div>
          <li>${this.links}</li>
        </div>
      </header>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "custom-header": CustomHeader;
  }
}