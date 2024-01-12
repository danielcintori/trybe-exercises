import React from 'react';

class PersonagemDND extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nivel: 1,
      pontosDeVida: 20,
      pontosDeVidaMaximos: 20,
      experiencia: 0,
      experienciaParaProximoNivel: 100,
      forca: 10,
      destreza: 10,
      constituicao: 10,
      inteligencia: 10,
      sabedoria: 10,
      carisma: 10
    };
  }

  atacar = () => {
    const { nivel, experiencia, experienciaParaProximoNivel } = this.state;
    const dano = Math.floor(Math.random() * 6) + 1; // Dano entre 1 e 6
    let pontosDeVida = this.state.pontosDeVida - dano;

    if (pontosDeVida <= 0) {
      pontosDeVida = 0;
      const novaExperiencia = experiencia + 20; // Ganha 20 de experiência ao derrotar um inimigo
      let novoNivel = nivel;

      if (novaExperiencia >= experienciaParaProximoNivel) {
        novaExperiencia -= experienciaParaProximoNivel;
        novoNivel++;
      }

      const novosPontosDeVidaMaximos = this.state.pontosDeVidaMaximos + 5; // Aumenta os pontos de vida máximos ao subir de nível

      this.setState({
        nivel: novoNivel,
        experiencia: novaExperiencia,
        experienciaParaProximoNivel: Math.floor(experienciaParaProximoNivel * 1.5),
        pontosDeVida: novosPontosDeVidaMaximos,
        pontosDeVidaMaximos: novosPontosDeVidaMaximos
      });

      return `Inimigo derrotado! Ganhou 20 de experiência e nível ${novoNivel}!`;
    }

    this.setState({ pontosDeVida });
    return `Ataque realizado! Dano causado: ${dano}`;
  }

  render() {
    const { nivel, pontosDeVida, pontosDeVidaMaximos, experiencia, experienciaParaProximoNivel, forca, destreza, constituicao, inteligencia, sabedoria, carisma } = this.state;

    return (
      <div>
        <h1>Atributos do Personagem D&D</h1>
        <p>Nível: {nivel}</p>
        <p>Pontos de Vida: {pontosDeVida} / {pontosDeVidaMaximos}</p>
        <p>Experiência: {experiencia} / {experienciaParaProximoNivel} para o próximo nível</p>
        <p>Força: {forca}</p>
        <p>Destreza: {destreza}</p>
        <p>Constituição: {constituicao}</p>
        <p>Inteligência: {inteligencia}</p>
        <p>Sabedoria: {sabedoria}</p>
        <p>Carisma: {carisma}</p>

        <button onClick={this.atacar}>Atacar</button>
      </div>
    );
  }
}

export default PersonagemDND;
