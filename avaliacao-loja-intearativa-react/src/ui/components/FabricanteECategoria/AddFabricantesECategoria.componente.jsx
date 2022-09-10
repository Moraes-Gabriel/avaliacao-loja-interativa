import { useState } from "react";
import { useFabricanteApi } from "../../../hooks/api/post/use-fabricante-api.hook";
import "./FabricanteECategoria.css"
import "../components.css"

export function AddFabricanteECategoria() {

  const [inputValues, setInputValues] = useState();
  const FabricanteApi = useFabricanteApi();

  const handleChange = (eventoDeChange) => {
    const { name, value } = eventoDeChange.target;
    setInputValues({ ...inputValues, [name]: value });
  };


  async function incluirFabricante(event) {
    event.preventDefault();
    await FabricanteApi.incluir(inputValues?.nome,
      inputValues?.categoria1, inputValues?.categoria2, inputValues?.categoria3);
  }

  return (
    <div className="addfc">

      <h1>Fabricante e categoria</h1>

      <form className="login-form" onSubmit={incluirFabricante}>
        <label>Fabricante</label>
        <input
          value={inputValues?.nome}
          onChange={handleChange}
          autoComplete="off"
          className="login-form__input"
          placeholder="Digite o nome do fabricante"
          name="nome"
        />

        <label>Categoria</label>
        <input
          value={inputValues?.categoria1}
          onChange={handleChange}
          autoComplete="off"
          className="login-form__input"
          placeholder="Digite o nome da categoria 1"
          name="categoria1"
        />
        <input
          value={inputValues?.categoria2}
          onChange={handleChange}
          autoComplete="off"
          className="login-form__input"
          placeholder="Digite o nome da categoria 2"
          name="categoria2"
        />

        <input
          value={inputValues?.categoria3}
          onChange={handleChange}
          autoComplete="off"
          className="login-form__input"
          placeholder="Digite o nome da categoria 4"
          name="categoria3"
        />
        <button type="submit">Adicionar</button>
      </form>

    </div>
  );
}
