import { AddProduto } from "./ui/components/AddProduto/AddProduto.componente";
import { AddFabricanteECategoria } from "./ui/components/FabricanteECategoria/AddFabricantesECategoria.componente";
import "./App.css"
import { TabelaProduto } from "./ui/components/tabelaProdutos/TabelaProdutos.componente";
function App() {
  return (
    <div className="App">
      <div className="div_main">
      <AddFabricanteECategoria/>
      <AddProduto/>
      </div>

      <TabelaProduto/>
    </div>
  );
}

export default App;
