import styleTotalMonth from './totalMonth.css?inline'
class totalMonth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.fullMoney;
    this.percentage;
  }
  connectedCallback() {
    this.render();
  }
  static get observedAttributes() {
    return ['money', 'percentage'];
  }
  attributeChangedCallback(nameAtr, oldValue, newValue) {
    if (nameAtr === 'money') {
      this.fullMoney = newValue;
    }
    if (nameAtr === 'percentage') {
      this.percentage = newValue;
    }
  }
  render() {
    this.shadowRoot.innerHTML = /*html*/ `
     <style>${styleTotalMonth}</style>
     <div class="containerMonth">
        <p class='title' >Total this month</p>
        <span class='totalMonth'  >$${this.fullMoney}</span>
        <span class='percentage' >${this.percentage}%</span>
        <p class='subtitle' >from last month</p>
      </div>
   `;
  }
}

customElements.define('total-month', totalMonth);


