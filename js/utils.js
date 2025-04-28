const obterElemento = (id) => document.getElementById(id);

const formataValor = (valor) => {
    return parseFloat(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

export const valorNegativo = (valor) => valor < 0;

export const atualizarInterface = (gastoCategoria) => {
    const categorias = gastoCategoria.getCategorias()

    categorias.forEach((categoria) => {
        const nome = categoria.getNome()
        const valor = categoria.getValor()

        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: ${formataValor(valor)}`;
    })

    const total = obterElemento('Total');
    total.textContent = `Total: ${formataValor(gastoCategoria.getTotal())}`
}