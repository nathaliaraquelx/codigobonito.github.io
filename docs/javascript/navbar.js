class Navbar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="index">Código Bonito</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">`
                + navItem("index", "Página Inicial").innerHTML
                + navItem("membros", "Membros").innerHTML
                + navItem("materiais", "Materiais").innerHTML
                + navItem("reunioes", "Reuniões Anteriores").innerHTML
                + `</ul>
            </div>
        </nav>
        `;
    }
}

window.customElements.define('default-navbar', Navbar);


function navItem(page, description) {
    let itemActive = isCurrentPage(page) ? " active" : "";
    const item = document.createElement("li");
    item.innerHTML = `
    <li class="nav-item` + itemActive +`">
    <a class="nav-link" href="` + page + `">` + description + `</a>
    </li>`;

    return item;
}

function isCurrentPage(page) {
    let current = window.location.pathname;
    current = current.split('/').pop();
    current = current.replace(".html", "");
    return current === page || (current === "" && page === "index");
}