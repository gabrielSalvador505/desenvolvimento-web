window.onload = () => {
    const titulo = document.getElementById('titulo-principal');
    const container = document.getElementById('container');

    const button = document.createElement('button');
    button.innerText = 'Adicionar classe';

    const buttonDois = document.createElement('button');
    buttonDois.innerText = 'Adicionar texto';

    container.appendChild(button);
    container.appendChild(buttonDois);

    function mudarCor() {
        titulo.classList.toggle('cor-titulo');
    }

    function adicionarTexto() {
        const p = document.createElement('p');
        p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque.';
        container.appendChild(p);
    }

    button.addEventListener('click', () => {
        container.classList.toggle('dark-mode');
        mudarCor();
    });

    buttonDois.addEventListener('click', adicionarTexto);


}