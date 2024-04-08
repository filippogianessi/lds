import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

// Assume `myStyles` is a string containing your CSS rules.
const myStyles = css`
  /* Your Tailwind CSS extracted for this component */
  .card { @apply md:p-10 sm:p-6 p-6 flex md:gap-4 sm:gap-2 gap-2 items-start rounded-3xl bg-gradient-to-b from-white to-neutral-100; }
`;

export class MyCard extends LitElement {
  static styles = [myStyles];

  render() {
    return html`<div class="card">Hello from my template.</div>`;
  }
}

customElements.define('my-card', MyCard);
