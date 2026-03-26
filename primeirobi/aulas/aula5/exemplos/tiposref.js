const aluno = {
    nome: "João",
    idade: 20,
    curso: "Engenharia",
    endereco: {
        rua: "Rua A",
        numero: 123,
        cidade: "São Paulo"
    }
}

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

// const pessoais = new Pessoa("Maria", 30)
// pessoais.apresentar()

// console.log(aluno)

const listaFrutas = ["🍎", "🍌", "🍇"]
console.log(listaFrutas)

function printarNome() {
    console.log("Gambitt505")
}

printarNome();