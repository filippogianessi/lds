import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

const myStyles = css`
  .button--default {
    padding-top: 1rem;
    padding-bottom: 1rem; 
    padding-left: 2rem;
    padding-right: 2rem; 
    border-radius: 1.5rem; 
    font-size: 1.5rem;
    line-height: 2rem; 
  }
  .button--primary {
    color: #ffffff; 
    background-color: #0a0a0a;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms; 
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); 
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); 
  }
  .button--primary:hover {
    background-color: #292400;
  }
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: .5;
      }
    } 
  }
`;

export class ButtonPrimary extends LitElement {
  static get properties() {
    return {
      label: { type: String }
    };
  }

  static styles = [myStyles];

  constructor() {
    super();
    this.label = '';
  }

  render() {
    return html`<button autofocus type="button" class="button--primary button--default animate-pulse">${this.label}</button>`;
  }
}

customElements.define('button-primary', ButtonPrimary);
