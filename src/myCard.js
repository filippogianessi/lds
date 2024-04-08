import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

// Assume `myStyles` is a string containing your CSS rules.
const myStyles = css`
  /* Your Tailwind CSS extracted for this component */
  .card {
    display: flex;
    padding: 1.5rem;
    gap: 0.5rem;
    align-items: flex-start;
    border-radius: 1.5rem;
    background-image: background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
    background-color: #ffffff;

    @media (min-width: 640px) {
      padding: 1.5rem;
    gap: 0.5rem;
     }
    @media (min-width: 768px) {
      padding: 2.5rem;
    gap: 1rem;
     }
   }
`;

export class MyCard extends LitElement {
  static styles = [myStyles];

  render() {
    return html`<div class="card">Hello from my template.</div>`;
  }
}

customElements.define('my-card', MyCard);
