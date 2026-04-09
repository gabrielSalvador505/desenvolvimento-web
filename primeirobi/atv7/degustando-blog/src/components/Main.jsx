export default function Main() {
    const imgPudim = "/pudim-da-bibi.jpeg"
    const imgEstrela = "/iridium-star.png"
    return (
        <main>
            <article>
                <section>
                    <div>
                        <h2>Pudim da bibi</h2>
                        <time datetime="2026-01-17">17 de janeiro de 2026</time>
                        <p>5/5 ⭐⭐⭐⭐⭐</p>

                        <h3>Apresentação</h3>
                        <p>Esta é uma pequena obra-prima da doçaria afetiva, executada com um rigor técnico que muitos chefs de renome invejariam. À primeira vista, o que hipnotiza é a geometria impecável e a cor da calda: um âmbar profundo, translúcido, que banha o pudim sem sufocá-lo.</p>

                        <h3>O Visual e a Calda</h3>
                        <p>A calda não é apenas um acompanhamento, é uma moldura. Nota-se o ponto exato da caramelização — aquele limiar perigoso entre o doce e o levemente tostado — que confere profundidade ao sabor. O brilho espelhado reflete a luz da cozinha, indicando uma viscosidade perfeita que promete abraçar a colher.</p>

                        <h3>A Textura do Corpo</h3>
                        <p>Ao observarmos a lateral, percebemos a ausência quase total de "furinhos". Para o crítico exigente, isso é sinal de uma cocção lenta em banho-maria, feita com paciência monástica. Essa textura sedosa e densa sugere uma cremosidade que derrete no palato, sem resistência, revelando o equilíbrio exato entre o leite condensado e os ovos.</p>
                    </div>
                    <figure>
                        <img className="img-pudim" src={imgPudim} />

                        <figcaption> <img src={imgEstrela}/> O melhor pudim do mundo</figcaption>
                    </figure>
                </section>
            </article>
        </main>
    )
}