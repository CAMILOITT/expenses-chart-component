import dataMoney from '../../data.json';
import styleBar from './bar.css?inline'

class barAnalysis extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.day;
    this.height;
    this.amount;
  }
  connectedCallback() {
    this.render();
    this.getDay();
    setTimeout(() => {
      this.calculateHeight();
    }, 10);
  }
  static get observedAttributes() {
    return ['day', 'height'];
  }
  attributeChangedCallback(value, oldValue, newValue) {
    if (value === 'day') {
      this.day = newValue;
      this.setValue(this.day);
    }
    if (value === 'height') {
      this.height = newValue;
    }
  }
  getDay() {
    const dayWeak = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    let dayNow = new Date().getDay();
    if (dayWeak[dayNow] === this.day) {
      setTimeout(() => {
        this.changeColor();
      }, 50);
    }
  }
  changeColor() {
    const bar = this.shadowRoot.lastElementChild.querySelector('.barAnalysis');
    bar.style.background = 'var(--Cyan)';
  }
  calculateHeight() {
    const percentage = (100 * this.amount) / amountMax;
    const result = (130 / 100) * percentage;
    const bar = this.shadowRoot.lastElementChild.querySelector('.barAnalysis');
    bar.style.height = `${result}px`;
  }
  setValue(day) {
    let value = 0;
    dataMoney.forEach((data) => {
      if (data.day === day) {
        value = data.amount;
      }
    });
    this.amount = value;
  }
  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${styleBar}</style>
    <div class= 'container' >
      <div class= 'barAnalysis'>
        <span class= 'valueAmount' >$${this.amount}</span>
      </div>
      <p class= 'dayWeek' >${this.day}</p>
    </div>
    `;
  }
}

window.customElements.define('bar-analysis', barAnalysis);

let valueAmount = [];
dataMoney.forEach((data) => valueAmount.push(data.amount));

let amountMax = Math.max(...valueAmount);
