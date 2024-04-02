import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("custom-logo")
export class CustomLogo extends LitElement {


    static styles = css`
        h1{
            padding:0px;
            margin:0px;
        }
    `
    @property()
    name?: string = "Lit.dev";

    render() {
        return html`
            <div>
                <h1>${this.name}</h1>
            </div>
        `
    }
}