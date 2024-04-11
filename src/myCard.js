import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

const myStyles = css`
  .card {
    display: flex;
    padding: 1.5rem;
    gap: 0.5rem;
    align-items: flex-start;
    border-radius: 1.5rem;
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
  static get properties() {
    return {
      body: { type: String }
    };
  }

  static styles = [myStyles];

  constructor() {
    super();
    this.body = '';
  }

  render() {
    return html`<div class="card">${this.body}</div>`;
  }
}

customElements.define('my-card', MyCard);
