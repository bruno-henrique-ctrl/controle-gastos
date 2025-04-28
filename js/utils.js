const obterElemento = (id) => document.getElementById(id);

const formataValor = (valor) => {
    return parseFloat(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

export const mostrarMensagem = (mensagem) => {
    obterElemento('mensagem').textContent = mensagem;
}

export const validarNumero = (valor) => {
    if (valor <= 0 || valor === "" || valor === null || valor === undefined) {
        mostrarMensagem("O campo está vazio ou invalido.");
        return 0;
    }
    else {
        mostrarMensagem('');
        return valor
    }
};

export const atualizarInterface = (gastoCategoria) => {
    const categorias = gastoCategoria.getCategorias()

    categorias.forEach((categoria) => {
        const nome = categoria.getNome()
        const valor = categoria.getValor()

        const elemento = obterElemento(nome);
        elemento.innerHTML = `
        <td>${nome}:</td>
        <td>${formataValor(valor)}</td>
        `
    })

    const total = obterElemento('Total');
    total.innerHTML = `
        <td>Total:</td>
        <td>${formataValor(gastoCategoria.getTotal())}</td>
    `
}