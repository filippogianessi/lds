

import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { TailwindElement } from "../shared/tailwind.element";

export class myCard extends LitElement { 
  render(){
    return html`<div class="md:p-10 sm:p-6 p-6 flex md:gap-4 sm:gap-2 gap-2 items-start rounded-3xl bg-gradient-to-b from-white to-neutral-100">Hello from my template.</div>`;
  }

}

customElements.define('my-card', myCard);