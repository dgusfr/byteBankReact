import React from "react";
import estilos from "./Principal.module.css";
import IlustracaoUrl from "./ilustracao.svg";
import Saldo from "./Saldo";

const data = Date.now();
const hoje = new Date(data);
const diasDaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export default function Principal({ saldo }) {
  return (
    <section className={estilos.container}>
      <div className={estilos.detalhe__superior} />
      <h1 className={estilos.titulo}>Olá, Joana :)!</h1>
      <p data-testid="data-atual" className={estilos.data}>{`${
        diasDaSemana[hoje.getDay()]
      }, ${hoje.toLocaleDateString("pt-BR")}`}</p>
      <img src={IlustracaoUrl} alt="Ilustração" />
      <Saldo saldo={saldo} />
    </section>
  );
}
