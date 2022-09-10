import { useEffect, useState } from "react";
import { useFabricanteApi } from "../../../hooks/api/post/use-fabricante-api.hook";
import { useProdutoApi } from "../../../hooks/api/post/use-produto-api.hook";
import "./ModalEdicaoProduto.css"
import "../components.css"


export function ModalEdicaoProduto({ id, nome, preco, onClickFecharModal }) {

  const [inputValues, setInputValues] = useState({ "id": id, "nome": nome, "preco": preco });
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

  async function editarProduto(event) {
    event.preventDefault();
    await ProdutoApi.editar(id, inputValues?.nome, selectedFabricante?.value, inputValues?.categoria,
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

  console.log(inputValues);
  return (
    <div className="div_main-modalProduto">

      <div className="div_topo_modal">
        <h1>Produtos</h1>
        <button onClick={()=> onClickFecharModal()}> X</button>
      </div>

      <form className="login-form" onSubmit={editarProduto}>
        <label className="modal__label">Nome do produto</label>
        <input
          value={inputValues?.nome}
          onChange={handleChange}
          autoComplete="off"
          className="modal__input"
          placeholder="Digite o nome do fabricante"
          name="nome"
        />

        <label className="modal__label">FABRICANTE</label>
        <select
          name="fabricante"
          id="fabricante"
          form="fabricante"
          className="modal__input"
          onChange={handleSelectChange}
        >

          {fabricantes?.map(f => {
            return <option value={f?.id}>{f?.nome}</option>
          })}
        </select>
        <label className="modal__label">CATEGORIA</label>

        <select
          name="categoria"
          form="categoria"
          className="modal__input"
          onChange={handleChange}
        >
          {!!categorias ? categorias?.map(c => {
            return <option value={c?.id}>{c?.nome}</option>
          }) : (<option value="">Selecione uma fabricante</option>)}
        </select>
        <label className="modal__label">PREÇO</label>
        <input
          value={inputValues?.preco}
          onChange={handleChange}
          autoComplete="off"
          className="modal__input"
          placeholder="Digite o preço"
          name="preco"
        />

        <button type="submit">Salvar</button>
      </form>

    </div>
  );
}
