const navbarHTML =`
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="index">Código Bonito</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item` + navItemActive("index") +`">
            <a class="nav-link" href="index">Página principal</a>
            </li>
            <li class="nav-item` + navItemActive("membros") +`">
            <a class="nav-link" href="membros">Membros</a>
            </li>
            <li class="nav-item` + navItemActive("materiais") +`">
            <a class="nav-link" href="materiais">Materiais</a>
            </li>
            <li class="nav-item` + navItemActive("reunioes") +`">
                <a class="nav-link" href="reunioes">Reuniões anteriores</a>
            </li>
        </ul>
    </div>
</nav>
`;

const navbar = document.getElementById('nav-placeholder');
navbar.innerHTML = navbarHTML;


function navItemActive(page) {
    return isCurrentPage(page) ? " active" : "";
}

function isCurrentPage(page) {
    let current = window.location.pathname;
    current = current.split('/').pop();
    current = current.replace(".html", "");
    return current === page;
}