import React, { Component } from "react";
import logoBB from "../assets/bb.png";
import logoItau from "../assets/itau.svg";
import "./Logo.css";

interface LogoProps {
  logo: string;
  onClick: any;
}

class Logo extends Component<LogoProps, any> {
  constructor(props: LogoProps) {
    super(props);

    switch (parseInt(this.props.logo)) {
      case 1:
        this.state = {
          icone: logoBB,
          descricao: "Banco do Brasil"
        };

        break;
      case 341:
        this.state = {
          icone: logoItau,
          descricao: "Itaú"
        };

        break;
    }
  }

  render() {
    return (
      <div className="Logo" onClick={this.props.onClick}>
        <img
          className="Logo-icone"
          src={this.state.icone}
          width="50"
          alt="logo do banco"
        />
        <span className="Logo-texto">{this.state.descricao}</span>
      </div>
    );
  }
}

export default Logo;
