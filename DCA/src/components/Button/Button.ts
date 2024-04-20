export enum AttributeButton {
	'boton_text' = 'boton_text',
}

export default class Button extends HTMLElement {
	boton_text?: string;

	static get observedAttributes() {
		const attrs: Record<AttributeButton, null> = {
			boton_text: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeButton, _: unknown, newValue: string) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
	}

	
}

customElements.define('app-button', Button);
