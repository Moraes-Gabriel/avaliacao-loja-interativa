import { useEffect, useState } from "react";
import { useFabricanteApi } from "../../../hooks/api/post/use-fabricante-api.hook";
import { useProdutoApi } from "../../../hooks/api/post/use-produto-api.hook";
import "./AddProduto.css"
import "../components.css"


export function AddProduto() {

  const [inputValues, setInputValues] = useState([]);
  const [fabricantes, setFabricantes] = useState([]);
  const [categorias, setCategoria] = useState([]);
  const [selectedFabricante, setSelectedFabricante] = useState([]);
  const FabricanteApi = useFabricanteApi();
  const ProdutoApi = useProdutoApi();

  const handleChange = (eventoDeChange) => {
    const { name, value } = eventoDeChange.target;
    setInputValues({ ...inputValues, [name]: value });

  };

  const handleSelectChange = (event) => {
    setSelectedFabricante({ value: event.target.value });
  };

  async function incluirProduto(event) {
    event.preventDefault();
    await ProdutoApi.incluir(inputValues?.nome, selectedFabricante?.value, inputValues?.categoria,
      inputValues?.preco);
  }

  useEffect(() => {
    async function buscarFabricantes() {
      const response = await FabricanteApi.listarFabricantes();
      setFabricantes(response);
    }

    async function buscarCaterogrias() {
      const response = await FabricanteApi.listarCategoriaDeUmFabricante(selectedFabricante?.value);
      setCategoria(response);
    }
    buscarFabricantes();
    buscarCaterogrias();
  }, [selectedFabricante]);

  return (
    <div className="addp">

      <h1>Produtos</h1>

      <form className="login-form" onSubmit={incluirProduto}>
        <label>Nome do produto</label>
        <input
          value={inputValues?.nome}
          onChange={handleChange}
          autoComplete="off"
          className="login-form__input"
          placeholder="Digite o nome do fabricante"
          name="nome"
        />

        <label>FABRICANTE</label>
        <select
          name="fabricante"
          id="fabricante"
          form="fabricante"
          onChange={handleSelectChange}
        >

          <option value="none">none</option>
          {fabricantes?.map(f => {
            return <option value={f?.id}>{f?.nome}</option>
          })}
        </select>
        <label>CATEGORIA</label>

        <select
          name="categoria"
          form="categoria"
          onChange={handleChange}
        >
          <option value="none">none</option>

          {!!categorias ? categorias?.map(c => {
            return <option value={c?.id}>{c?.nome}</option>
          }) : (<option value="">Selecione uma fabricante</option>)}
        </select>
        <label>PREÇO</label>
        <input
          value={inputValues?.preco}
          onChange={handleChange}
          autoComplete="off"
          className="login-form__input"
          placeholder="Digite o preço"
          name="preco"
        />

        <button type="submit">Adicionar produto</button>
      </form>

    </div>
  );
}
