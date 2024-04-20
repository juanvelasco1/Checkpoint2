export enum AttributeCard {
	'cat_img' = 'cat_img',	
	'text' = 'text',
}

export default class Card extends HTMLElement {
	cat_img: string = '';
	text: string = '';

	static get observedAttributes() {
		const attrs: Record<AttributeCard, null> = {
			cat_img: null,
			text: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeCard, _: unknown, newValue: string) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}

		this.render();
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';

		const container = this.ownerDocument.createElement('section');

		const content = this.ownerDocument.createElement('app-content');


		container.appendChild(content);

		this.shadowRoot?.appendChild(container);
	}
}

customElements.define('app-card', Card);
