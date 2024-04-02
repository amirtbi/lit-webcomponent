import { LitElement, css, html } from "lit";
import { property, customElement } from "lit/decorators.js";


@customElement("custom-links")
export class CustomLinks extends LitElement {

    static styles = css`
         nav{
      margin:auto;
      margin-left:10px;
    }
    ul{
      display:flex;
      flex-direction:row;
      padding:0px;
      margin:0px
    }

    ul li{
      list-style:none;
      padding-left:10px;
    }
    a{
      text-decoration:none;
      color:white;
    }
    a:hover{
      color:black;
      cursor:pointer;
    }
    `


    constructor() {
        super();
        this.links = []
        if (this.hasAttribute("links")) {
            console.log("has attributes")
            this.links = JSON.parse(this.getAttribute('links') || "{}");
        }
    }
    @property()
    links?: any

    render() {
        return html`<nav>
                <ul>
                    ${this.links?.map((link) => html`<li><a>${link}</a></li>`)}
                </ul>
            </nav>
        `
    }
}