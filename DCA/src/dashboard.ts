import { Api } from './types/typeApi';
import { getData } from './services/getData';
import { getDataImg } from './services/getDataImg';
import { AttributeCard } from './components/Card/Card';

import './components/export';

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		const data = await getData();
		this.render(data);
	}

	render(data: any) {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';	
	}
}

customElements.define('app-dashboard', Dashboard);

