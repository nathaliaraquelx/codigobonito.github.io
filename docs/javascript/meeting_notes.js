class MeetingNotes extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['name', 'date', 'link'];
    }

    get name() {
        if (this.hasAttribute('name')) {
            return this.getAttribute('name');
        }
        return "";
    }

    set name(val) {
        this.setAttribute('name', val);
    }

    get date() {
        if (this.hasAttribute('date')) {
            return this.getAttribute('date');
        }
        return "";
    }

    set date(val) {
        this.setAttribute('date', val);
    }

    get link() {
        if (this.hasAttribute('link')) {
            return this.getAttribute('link');
        }
        return "";
    }

    set link(val) {
        this.setAttribute('link', val);
    }


    attributeChangedCallback(attrName, oldVal, newVal) {
        if (this.date && this.name && this.link) {
            this.shadowRoot.innerHTML = `
                <a href=` + this.link + `>
                <li>` + this.name + ` - ` + this.date + `</li>
                </a>
            `;
        }

    }
};

window.customElements.define('meeting-notes', MeetingNotes);
