import { useState } from "react";
import { useProdutoApi } from "../../../hooks/api/post/use-produto-api.hook";
import { ModalEdicaoProduto } from "../modalEdicaoProduto/ModalEdicaoProduto";
import "./produtoComponente.css"

export function ProdutoComponente({id, nome, fabricante,categoria, preco}) {

    const [modal, setModal] = useState(false);
    

    const ProdutoApi = useProdutoApi();

    async function deletarProduto() {
        await ProdutoApi.deletar(id);
    }
    function onClickAbrirModal(){
        setModal(true)
    }
  
    function onClickFecharModal(){
        setModal(false)
    }
  
    function onClickAbrirModal(){
        setModal(true)
    }
  
    return (
        <div>
            <div className="div_produto-main">
            <div className="div_produto">
                <div className="div_produto-first_div">
                    <p>{id}</p>
                </div>
                <div>
                    <p>{nome}</p>
                </div>
                <div>
                    <p>{fabricante}</p>
                </div>
                <div>
                    <p>{categoria}</p>
                </div>
                <div>
                    <p>{preco}</p>
                </div>
            </div>
        
            <div className="div_botaoProduto">
                <button className="produto_button" onClick={()=> onClickAbrirModal()}>Editar Produto</button>
                <button className="produto_button" onClick={()=> deletarProduto()}>Deletar</button>
            </div>
        </div>

        {!!modal ? <ModalEdicaoProduto id={id} nome={nome} preco={preco} onClickFecharModal={onClickFecharModal}/> : null}
        </div>
    )
}