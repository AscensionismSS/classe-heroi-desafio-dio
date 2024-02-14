class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque;

        if (this.tipo === "Mago") {
            ataque = "magia";

        } else if (this.tipo === "Guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "Monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "Ninja") {
            ataque = "shuriken";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi1 = new heroi("Geverson", 32, "Mago");
heroi1.atacar();


let heroi2 = new heroi ("Massdaman", 41, "Monge");
heroi2.atacar();
