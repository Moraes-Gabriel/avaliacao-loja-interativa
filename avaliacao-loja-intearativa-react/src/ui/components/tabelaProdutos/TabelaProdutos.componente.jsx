import { useEffect, useState } from "react";
import { useProdutoApi } from "../../../hooks/api/post/use-produto-api.hook";
import { ProdutoComponente } from "../ProdutoComponente/ProdutoComponente";
import "./tabelaProduto.css"

export function TabelaProduto() {
    const [produtos, setProdutos] = useState();
    const [produtosPorPesquisa, setProdutosPorPesquisa] = useState();
    const [inputValues, setInputValues] = useState({buscaProduto: ''});
    const ProdutoApi = useProdutoApi();

    const handleChange = (eventoDeChange) => {
        const { name, value } = eventoDeChange.target;
        setInputValues({ ...inputValues, [name]: value });
    };


    useEffect(() => {
        
        async function buscarProdutos() {
            const response = await ProdutoApi.listarProdutos();
            setProdutos(response);
        }
        buscarProdutos();
    }, []);

    useEffect(() => {
        async function pesquisarProdutos() {
            const response = await ProdutoApi.pesquisarProdutos(inputValues?.buscaProduto);
            setProdutosPorPesquisa(response);
        }
      
        pesquisarProdutos();
    }, [inputValues]);
    console.log(inputValues?.buscaProduto?.length);
    console.log(inputValues?.buscaProduto?.length > 0);
    console.log(inputValues);
    console.log(inputValues?.buscaProduto?.length === 0);
    return (
        <div>
            <form className="formTabelaProdutos" >
                <input
                    value={inputValues?.buscaProduto}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Sua busca"
                    name="buscaProduto"
                />
            </form>
            <div className="div_tabelaProduto">
                <div className="div_produto-first_div">
                    <p>id</p>
                </div>
                <div>
                    <p>Nome Produto</p>
                </div>
                <div>
                    <p>Fabricante</p>
                </div>
                <div>
                    <p>Categoria</p>
                </div>
                <div>
                    <p>Preço</p>
                </div>
            </div>

            {inputValues?.buscaProduto?.length === 0 && produtos?.map((produto) => {
                return <ProdutoComponente id={produto?.id} nome={produto?.nome}
                    fabricante={produto?.fabricante?.nome} categoria={produto?.categoria?.nome} preco={produto?.price} />;
            })}

            {inputValues?.buscaProduto?.length > 0 && produtosPorPesquisa?.map((produto) => {
                return <ProdutoComponente id={produto?.id} nome={produto?.nome}
                    fabricante={produto?.fabricante?.nome} categoria={produto?.categoria?.nome} preco={produto?.price} />;
            })}
        </div>
    )
}