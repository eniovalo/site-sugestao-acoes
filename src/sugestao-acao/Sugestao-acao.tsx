import React, { Component } from "react";
import "./Sugestao-acao.css";

interface SugestaoAcaoProps {
  valorAplicacao: number;
  codigoBanco: number;
}

class SugestaoAcao extends Component<SugestaoAcaoProps, any> {
  constructor(props: SugestaoAcaoProps) {
    super(props);

    this.state = {
      acoesSugeridas: this.recuperarSugestaoAcoes()
    };
  }

  recuperarSugestaoAcoes = () => {
    const acoesBB = [
      {
        codigoAcao: "PETR4",
        acao: "Petrobrás",
        percentual: 30
      },
      {
        codigoAcao: "VALE4",
        acao: "Vale",
        percentual: 40
      },
      {
        codigoAcao: "ITUB4",
        acao: "Itaú",
        percentual: 30
      }
    ];

    const acoesItau = [
      {
        codigoAcao: "PETR4",
        acao: "Petrobrás",
        percentual: 70
      },
      {
        codigoAcao: "VALE4",
        acao: "Vale",
        percentual: 10
      },
      {
        codigoAcao: "BBAS4",
        acao: "Banco do Brasil",
        percentual: 20
      }
    ];

    switch (this.props.codigoBanco) {
      case 1:
        return acoesBB;
      case 341:
        return acoesItau;
    }
  };

  gerarJSXListaAcoesSugeridas = () => {
    return this.state.acoesSugeridas.map((acao: any, index: number) => {
      return (
        <div key={index}>
          <span>{acao.percentual}%</span>
          <span>{acao.acao}</span>
          <span>({acao.codigoAcao})</span>
          <span>R$ {this.props.valorAplicacao * (acao.percentual / 100)}</span>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="SugestaoAcao">{this.gerarJSXListaAcoesSugeridas()}</div>
    );
  }
}

export default SugestaoAcao;
