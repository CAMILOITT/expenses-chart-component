import styleMyBalance from './myBalance.css?inline';
class myBalance extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.value;
  }
  connectedCallback() {`-`
    this.render();
  }
  static get observedAttributes() {
    return ['value'];
  }
  attributeChangedCallback(nameAtr, oldValue, newValue) {
    this.value = newValue;
  }
  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${styleMyBalance}</style>
      <div class='header' >
        <p class='title' >My balance</p>
        <img src="../images/logo.svg" alt="logo" class='logo' />
        <span class='money' >$${this.value}</span>
      </div>
   `;
  }
}

window.customElements.define('my-balance', myBalance);
