import styleContainerMain from './containerMain.css?inline';

class containerMain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  static get style() {
    return /*css*/ `

    `;
  }
  connectedCallback() {
    this.render();
  }
  attributeCallback() {}
  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>${styleContainerMain}</style>
      <main class= 'main' >
        <h1 class= 'title' >Spending - Last 7 days</h1>
        <div class='containerDayWeek' >
          <bar-analysis day= "mon" height= "3"   ></bar-analysis>
          <bar-analysis day= "tue" height= "6" ></bar-analysis>
          <bar-analysis day= "wed" height= "9" ></bar-analysis>
          <bar-analysis day= "thu" height= "5" ></bar-analysis>
          <bar-analysis day= "fri" height= "4" ></bar-analysis>
          <bar-analysis day= "sat" height= "7" ></bar-analysis>
          <bar-analysis day= "sun" height= "4.5" ></bar-analysis>
        </div>
        <total-month money= "478.33" percentage= "+2.4" ></total-month>
      </main>
    `;
  }
}
window.customElements.define('container-main', containerMain);
