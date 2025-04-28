import { Categoria, GastoCategoria } from "./classes.js";
import { atualizarInterface, valorNegativo } from "./utils.js";

const categorias = ['Alimentação', 'Transporte', 'Lazer', 'Outros']
    .map(nome => new Categoria(nome))
const gastoCategoria = new GastoCategoria(...categorias)

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault()

    const valorInformado = form.valor.value;
    const categoriaInformada = form.categoria.value;

    if (valorNegativo(valorInformado))
        return alert('Valor invalido.')

    const categoria = gastoCategoria.getNomeCategoria(categoriaInformada);

    if (!categoria)
        return alert('Categoria não encontrada.')
    categoria.adicionarValor(valorInformado);

    form.reset()
    atualizarInterface(gastoCategoria)
})