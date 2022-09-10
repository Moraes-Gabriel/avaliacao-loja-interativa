import { useMemo } from "react";
import { useHttp } from "../_base/use-http.hook";

export function useFabricanteApi() {


  const API_URL = "http://localhost:8080/fabricante"

  const httpInstance = useHttp(API_URL, {});
 
  async function listarFabricantes() {
    const response = await httpInstance.get("/listar",{
    });
    return response;
  }
  async function listarCategoriaDeUmFabricante(fabricanteId) {
    const response = await httpInstance.get(`/listar/categorias/${fabricanteId}`,{
    });
    return response;
  }

  async function incluir(nome, categoria1,categoria2,categoria3,) {

    const object = { nome, categoria1,categoria2,categoria3  }
    const response = await httpInstance.post('', object,);
    return response;
  } 
 
  async function modificar(postId) {
    const response = await httpInstance.put("", 
    {},
    );
    return response;
  }

  return useMemo(
    () => ({
      modificar,
      incluir,
      listarFabricantes,
      listarCategoriaDeUmFabricante
    }),
  );

}
