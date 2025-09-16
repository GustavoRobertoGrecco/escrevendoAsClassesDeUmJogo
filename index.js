// Classe genérica para representar um herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  // Tabela de ataques por tipo
  atacar() {
    const ataques = {
      mago: "usou magia",
      guerreiro: "usou espada",
      monge: "usou artes marciais",
      ninja: "usou shuriken",
    };

    if (ataques[this.tipo]) {
      console.log(`O ${this.tipo} atacou usando ${ataques[this.tipo]}`);
    } else {
      console.log(`O ${this.tipo} tentou atacar, mas não possui ataque definido.`);
    }
  }
}

// Exemplos
const heroi1 = new Heroi("Mufasa", 30, "guerreiro");
const heroi2 = new Heroi("Zimbabue", 150, "mago");
const heroi3 = new Heroi("Shaolin", 70, "monge");
const heroi4 = new Heroi("Fujiro Nakombi", 25, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();