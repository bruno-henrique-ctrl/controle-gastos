export class Categoria {
    #nome
    #valor

    constructor(nome, valor=0) {
        this.#nome = nome;
        this.#valor = valor;
    }

    getNome() {
        return this.#nome;
    }

    getValor() {
        return this.#valor;
    }

    adicionarValor(valor) {
        this.#valor += parseFloat(valor);
    }
}

export class GastoCategoria {
    #categorias

    constructor(...Categorias) {
        this.#categorias = Categorias;
    }

    getCategorias() {
        return this.#categorias;
    }

    getNomeCategoria(nome) {
        return this.#categorias.find(categoria => categoria.getNome() == nome)
    }

    getTotal() {
        return this.#categorias.reduce((total, categoria) => total + categoria.getValor(), 0)
    }
}