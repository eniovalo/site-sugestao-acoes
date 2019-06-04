import React, { useState } from "react";
import Logo from "./logo/Logo";
import SugestaoAcao from "./sugestao-acao/Sugestao-acao";
import "./App.css";

const App: React.FC = () => {
  const [valorAplicacao, setValorAplicacao] = useState(0);
  const [codigoBanco, setCodigoBanco] = useState(1);

  return (
    <div className="App">
      <header className="App-header">Sugestão de aplicação em ações</header>
      <article className="App-conteudo">
        <Logo logo="1" onClick={() => setCodigoBanco(1)} />
        <Logo logo="341" onClick={() => setCodigoBanco(341)} />
        <div className="App-div-aplicacao">
          <label className="App-label-aplicacao" htmlFor="inputValorAplicacao">
            Valor para aplicação:
          </label>
          <input
            id="inputValorAplicacao"
            type="number"
            min="1000"
            step="50"
            value={valorAplicacao}
            onChange={event => setValorAplicacao(parseInt(event.target.value))}
          />
        </div>
        <SugestaoAcao
          valorAplicacao={valorAplicacao}
          codigoBanco={codigoBanco}
        />
      </article>
    </div>
  );
};

export default App;
