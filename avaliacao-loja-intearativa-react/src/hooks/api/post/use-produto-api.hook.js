import { useMemo } from "react";
import { useHttp } from "../_base/use-http.hook";

export function useProdutoApi() {


  const API_URL = "http://localhost:8080/produto"

  const httpInstance = useHttp(API_URL, {});
 
  async function listarProdutos() {
    const response = await httpInstance.get("/listar",{
    });
    return response;
  }
  async function pesquisarProdutos(nome) {
    const response = await httpInstance.get(`/listar/pesquisar/${nome}`,{
    });
    return response;
  }

  async function incluir(nome, fabricanteId, categoriaId, price) {
    const object = { nome, fabricanteId, categoriaId, price  }
    const response = await httpInstance.post('', 
     object)
    return response;
  } 
  async function editar(id, nome, fabricanteId, categoriaId, price) {
    const object = { id,nome, fabricanteId, categoriaId, price  }
    const response = await httpInstance.put('', 
     object)
    return response;
  } 
  async function deletar(id) {
    const response = await httpInstance.deletar(`${id}`,);
    return response;
  }
  

  return useMemo(
    () => ({
      incluir,
      listarProdutos,
      deletar,
      editar,
      pesquisarProdutos,
    }),
  );

  }